import styled from "styled-components";

const StyledToolbar = styled.div`
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  max-width: 400px;
`;

const EditorToolbar = ({ children }) => (
  <StyledToolbar>{children}</StyledToolbar>
);

export default EditorToolbar;
