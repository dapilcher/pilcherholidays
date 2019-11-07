import styled from "styled-components";
import { useUserContext } from "./UserContext";

const StyledLoginPage = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    &:hover {
      background-color: #ddd;
    }
    &:hover,
    &:active,
    &:focus {
      outline: none;
    }
  }
`;

const LoginPage = () => {
  const [auth] = useUserContext();
  return (
    <StyledLoginPage>
      <p>You must log in</p>
      <button onClick={() => auth.authenticate()}>Log in</button>
    </StyledLoginPage>
  );
};

export default LoginPage;
