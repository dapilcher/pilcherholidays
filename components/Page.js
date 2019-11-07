import styled from "styled-components";

import LoginPage from "./LoginPage";

import Navbar from "./Navbar";
import { useUserContext } from "./UserContext";

const StyledPage = styled.section`
  width: 100%;
  font-size: 1rem;
`;

const StyledPageInner = styled.section`
  padding: 1rem;
  max-width: 900px;
`;

const Page = ({ children }) => {
  const [auth] = useUserContext();

  return (
    <>
      {!auth.isAuthenticated ? (
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
