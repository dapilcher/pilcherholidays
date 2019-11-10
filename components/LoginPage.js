import styled from "styled-components";
import "react-netlify-identity-widget/styles.css";

import LoginForm from "./LoginForm";

const StyledLoginPage = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-size: 1rem;
  background-color: #fff;
`;

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <LoginForm />
    </StyledLoginPage>
  );
};

export default LoginPage;
