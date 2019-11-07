import { useState, useRef } from "react";
import styled from "styled-components";

import { Editor } from "slate-react";
import { Value } from "slate";

import useCustomKeyGen from "../util/useCustomKeyGen";

import initialValue from "../util/value.js";

const editorStyles = {
  padding: "1.2rem"
};

const EditorStylesWrapper = styled.section`
  h1,
  h2 {
    font-family: Merriweather;
    padding: 0.5rem 0;
  }
  h1 {
    font-size: 1.4rem;
  }
  h2 {
    font-size: 1.1rem;
  }
  p {
    margin: 1rem 0;
    line-height: 1.5;
  }
  strong {
    font-weight: 700;
  }
  em {
    font-style: italic;
  }
  code {
    font-family: "Roboto Mono";
    background-color: #bbb;
    color: #222;
    border-radius: 3px;
    padding: 0 3px;
  }
  blockquote {
    position: relative;
    padding: 1rem;
    margin: 1rem;
    background-color: #ddd;
    color: #222;
    border-radius: 0.5rem;
    &:before {
      content: "“"; // ”
      position: absolute;
      top: -0.5rem;
      left: 0;
      font-size: 3rem;
      font-family: "Montserrat";
      color: #222;
      z-index: 5;
    }
  }
  ul {
    list-style: circle inside;
    padding: 0.5rem;
  }
  ol {
    list-style: decimal inside;
    padding: 0.5rem;
  }
`;

const EditorReadOnly = () => {
  useCustomKeyGen("aweotiahitw4;efsml");

  const [state, setState] = useState(Value.fromJSON(initialValue));

  const editor = useRef(null);

  const renderBlock = (props, editor, next) => {
    const { attributes, children, node } = props;

    switch (node.type) {
      case "paragraph":
        return <p {...attributes}>{children}</p>;
      case "block-quote":
        return <blockquote {...attributes}>{children}</blockquote>;
      case "bulleted-list":
        return <ul {...attributes}>{children}</ul>;
      case "heading-one":
        return <h1 {...attributes}>{children}</h1>;
      case "heading-two":
        return <h2 {...attributes}>{children}</h2>;
      case "list-item":
        return <li {...attributes}>{children}</li>;
      case "numbered-list":
        return <ol {...attributes}>{children}</ol>;
      default:
        return next();
    }
  };

  const renderMark = (props, editor, next) => {
    const { children, mark, attributes } = props;

    switch (mark.type) {
      case "bold":
        return <strong {...attributes}>{children}</strong>;
      case "code":
        return <code {...attributes}>{children}</code>;
      case "italic":
        return <em {...attributes}>{children}</em>;
      case "underlined":
        return <u {...attributes}>{children}</u>;
      default:
        return next();
    }
  };

  // RENDER
  return (
    <EditorStylesWrapper>
      <Editor
        autoFocus
        style={editorStyles}
        ref={editor}
        value={state}
        renderBlock={renderBlock}
        renderMark={renderMark}
        readOnly={true}
      />
    </EditorStylesWrapper>
  );
};

export default EditorReadOnly;
