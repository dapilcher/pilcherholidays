import { useState } from "react";
import styled from "styled-components";
import { useIdentityContext } from "react-netlify-identity";
import "react-netlify-identity-widget/styles.css";

import { IdentityModal } from "react-netlify-identity-widget";

const StyledLoginPage = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-size: 1rem;
  button {
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    background: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid #777;
    font-family: Montserrat;
    color: #333;
    user-select: none;
    &:hover,
    &:active,
    &:focus {
      background: none;
      outline: none;
    }
    &:hover {
      background-color: #ddd;
    }
  }
`;

const LoginPage = () => {
  const identity = useIdentityContext();
  const [dialog, setDialog] = useState(false);
  const isLoggedIn = identity && identity.isLoggedIn;
  return (
    <StyledLoginPage>
      <p>You must log in</p>
      <button onClick={() => setDialog(true)}>Log in</button>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
    </StyledLoginPage>
  );
};

export default LoginPage;
