import styled from "styled-components";

import Navbar from "./Navbar";

const StyledPage = styled.section`
  width: 100%;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledPageInner = styled.section`
  padding: 1rem;
  max-width: 900px;
  width: 100%;
`;

const Page = ({ children }) => {
  return (
    <StyledPage>
      <Navbar />
      <StyledPageInner>{children}</StyledPageInner>
    </StyledPage>
  );
};

export default Page;
