import { createContext, useContext, useReducer, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

const UserContext = createContext();

const auth = {
  isAuthenticated: false,
  user: null
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "setIsAuthenticated":
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      };
    case "setUser":
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => (
  <UserContext.Provider value={useReducer(auth, authReducer)}>
    {children}
  </UserContext.Provider>
);

const useUserContext = () => useContext(UserContext);

export { UserProvider, useUserContext };
