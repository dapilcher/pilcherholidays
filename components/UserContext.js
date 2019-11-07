import { createContext, useContext, useReducer, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

const UserContext = createContext();

const auth = {
  isAuthenticated: false,
  user: null,
  authenticate(callback) {
    netlifyIdentity.open();
    netlifyIdentity.on("login", user => {
      this.isAuthenticated = true;
      this.user = user;
      callback(user);
    });
  },
  signout(callback) {
    netlifyIdentity.logout();
    netlifyIdentity.on("logout", () => {
      this.isAuthenticated = false;
      this.user = null;
      callback();
    });
  }
};

// const authReducer = (state, action) => {
//   switch (action.type) {
//     case "toggleAuthenticated":
//       return {
//         ...state,
//         isAuthenticated: !state.isAuthenticated
//       }
//     default:
//       return state
//   }
// }

const UserProvider = ({ children }) => (
  <UserContext.Provider value={useState(auth)}>{children}</UserContext.Provider>
);

const useUserContext = () => useContext(UserContext);

export { UserProvider, useUserContext };
