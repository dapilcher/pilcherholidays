import styled from "styled-components";

const StyledEditorButton = styled.button.attrs(p => ({
  title: p.title,
  onMouseDown: p.onMouseDown
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border: 1px solid #555;
  border-width: ${p => p.isActive && "2px"};
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${p => (p.isActive ? "#000" : "#777")};
  background: none;
  font-size: 1rem;
  outline: none;
  &:hover {
    background-color: #aaa;
  }
  &:active,
  &:hover,
  &:focus {
    outline: none;
  }
`;

const EditorButton = ({ isActive = false, title, onClick, children }) => (
  <StyledEditorButton isActive={isActive} title={title} onMouseDown={onClick}>
    {children}
  </StyledEditorButton>
);

export default EditorButton;
