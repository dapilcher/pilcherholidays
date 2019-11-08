import styled from "styled-components";
import { useIdentityContext } from "react-netlify-identity-widget";

import LoginPage from "./LoginPage";
import Navbar from "./Navbar";

const StyledPage = styled.section`
  width: 100%;
  font-size: 1rem;
`;

const StyledPageInner = styled.section`
  padding: 1rem;
  max-width: 900px;
`;

const Page = ({ children }) => {
  const identity = useIdentityContext();
  return (
    <>
      {!identity.isLoggedIn ? (
        <LoginPage />
      ) : (
        <StyledPage>
          <Navbar />
          <StyledPageInner>{children}</StyledPageInner>
        </StyledPage>
      )}
    </>
  );
};

export default Page;
