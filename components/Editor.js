import { useState, useRef } from "react";
import styled from "styled-components";

import { Editor } from "slate-react";
import { Value } from "slate";
import { isKeyHotkey } from "is-hotkey";

import EditorToolbar from "./EditorToolbar";
import EditorButton from "./EditorButton";
import EditorIcon from "./EditorIcon";

import useCustomKeyGen from "../util/useCustomKeyGen";

import initialValue from "../util/value.js";

const editorStyles = {
  border: "1px solid #777777",
  borderRadius: ".5rem",
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

const DEFAULT_NODE = "paragraph";

const isBoldHotkey = isKeyHotkey("mod+b");
const isItalicHotkey = isKeyHotkey("mod+i");
const isUnderlinedHotkey = isKeyHotkey("mod+u");
const isCodeHotkey = isKeyHotkey("mod+`");

const EditorWrapper = () => {
  useCustomKeyGen("aweotiahitw4;efsml");

  const [state, setState] = useState(Value.fromJSON(initialValue));

  const editor = useRef(null);

  const onChange = ({ value }) => {
    if (value.document !== state.document) setState(value);
  };

  const hasMark = type => {
    return state.activeMarks.some(mark => mark.type === type);
  };

  const hasBlock = type => {
    return state.blocks.some(node => node.type === type);
  };

  const renderMarkButton = (type, icon) => {
    const isActive = hasMark(type);
    return (
      <EditorButton
        title={`${type.charAt(0).toUpperCase()}${type.slice(1)}`}
        isActive={isActive}
        onClick={event => onClickMark(event, type)}
      >
        <EditorIcon icon={icon} />
      </EditorButton>
    );
  };

  const renderBlockButton = (type, icon) => {
    let isActive = hasBlock(type);

    if (["numbered-list", "bulleted-list"].includes(type)) {
      const { document, blocks } = state;

      if (blocks && blocks.size > 0) {
        const parent = document.getParent(blocks.first().key);
        isActive = hasBlock("list-item") && parent && parent.type === type;
      }
    }

    return (
      <EditorButton
        title={`${type.charAt(0).toUpperCase()}${type.slice(1)}`}
        isActive={isActive}
        onClick={event => onClickBlock(event, type)}
      >
        <EditorIcon icon={icon} />
      </EditorButton>
    );
  };

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

  const onKeyDown = (event, editor, next) => {
    let mark;

    if (isBoldHotkey(event)) {
      mark = "bold";
    } else if (isItalicHotkey(event)) {
      mark = "italic";
    } else if (isUnderlinedHotkey(event)) {
      mark = "underlined";
    } else if (isCodeHotkey(event)) {
      mark = "code";
    } else {
      return next();
    }

    event.preventDefault();
    editor.toggleMark(mark);
  };

  const onClickMark = (event, type) => {
    event.preventDefault();
    editor.current.toggleMark(type);
  };

  const onClickBlock = (event, type) => {
    event.preventDefault();

    const { value } = editor.current;
    const { document } = value;

    // Handle everything but list buttons.
    if (type !== "bulleted-list" && type !== "numbered-list") {
      const isActive = hasBlock(type);
      const isList = hasBlock("list-item");

      if (isList) {
        editor.current
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock("bulleted-list")
          .unwrapBlock("numbered-list");
      } else {
        editor.current.setBlocks(isActive ? DEFAULT_NODE : type);
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = hasBlock("list-item");
      const isType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type === type);
      });

      if (isList && isType) {
        editor.current
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock("bulleted-list")
          .unwrapBlock("numbered-list");
      } else if (isList) {
        editor.current
          .unwrapBlock(
            type === "bulleted-list" ? "numbered-list" : "bulleted-list"
          )
          .wrapBlock(type);
      } else {
        editor.current.setBlocks("list-item").wrapBlock(type);
      }
    }
  };

  // console.log({ editor, state });

  // RENDER
  return (
    <section>
      <EditorToolbar>
        {renderMarkButton("bold", "format_bold")}
        {renderMarkButton("italic", "format_italic")}
        {renderMarkButton("underlined", "format_underlined")}
        {"|"}
        {renderBlockButton("heading-one", "looks_one")}
        {renderBlockButton("heading-two", "looks_two")}
        {renderBlockButton("numbered-list", "format_list_numbered")}
        {renderBlockButton("bulleted-list", "format_list_bulleted")}
        {renderBlockButton("block-quote", "format_quote")}
      </EditorToolbar>
      <EditorStylesWrapper>
        <Editor
          autoFocus
          style={editorStyles}
          ref={editor}
          placeholder="Type away..."
          value={state}
          onChange={onChange}
          renderBlock={renderBlock}
          renderMark={renderMark}
          onKeyDown={onKeyDown}
        />
      </EditorStylesWrapper>
    </section>
  );
};

export default EditorWrapper;
