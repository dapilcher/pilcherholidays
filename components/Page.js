import styled from "styled-components";

const StyledPage = styled.section`
  padding: 1rem;
`;

const Page = ({ children }) => <StyledPage>{children}</StyledPage>;

export default Page;
