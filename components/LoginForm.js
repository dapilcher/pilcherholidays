import styled from "styled-components";
import { setCookie } from "nookies";

import { FaUserLock, FaLockOpen } from "react-icons/fa";

const StyledLogin = styled.section`
  width: 70%;
  max-width: 450px;
  form {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    border: 1px solid #999;
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: #eee;
    justify-content: center;
    align-items: center;
    .icon {
      &.user {
        font-size: 3rem;
        color: #333;
      }
      &.lock {
        padding-left: 0.5rem;
      }
    }
    input {
      box-sizing: border-box;
      border: 1px solid #999;
      border-radius: 0.5rem;
      margin: 0.5rem 0;
      font-size: 1rem;
      padding: 0.5rem;
      font-family: Montserrat;
      outline: none;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
    button {
      margin: 0.5rem 0;
      padding: 0.7rem;
      background: none;
      border-radius: 0.5rem;
      font-size: 1.3rem;
      cursor: pointer;
      border: none;
      font-family: Montserrat;
      color: white;
      background-color: green;
      user-select: none;
      width: 100%;
      &:hover,
      &:active,
      &:focus {
        background: none;
        background-color: green;
        outline: none;
      }
      &:hover {
        background-color: darkgreen;
      }
    }
  }
`;

const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    setCookie({}, `testCookie`, Date.now(), {
      path: "/",
      maxAge: 30 * 24 * 60 * 60
    });
  };
  return (
    <StyledLogin>
      <form>
        <span className="icon user">
          <FaUserLock />
        </span>
        <input type="email" name="email" placeholder="Enter email..." />
        <input
          type="password"
          name="password"
          placeholder="Enter password..."
        />
        <button onClick={handleSubmit}>
          Log in
          <span className="icon lock">
            <FaLockOpen />
          </span>
        </button>
      </form>
    </StyledLogin>
  );
};

export default LoginForm;
