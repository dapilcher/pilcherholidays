import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaCode,
  FaListOl,
  FaListUl,
  FaQuoteRight
} from "react-icons/fa";

const EditorIcon = ({ icon }) => {
  switch (icon) {
    case "format_bold":
      return <FaBold />;
    case "format_italic":
      return <FaItalic />;
    case "format_underlined":
      return <FaUnderline />;
    case "code":
      return <FaCode />;
    case "looks_one":
      return <span style={{ fontFamily: "Merriweather" }}>H1</span>;
    case "looks_two":
      return <span style={{ fontFamily: "Merriweather" }}>H2</span>;
    case "format_list_numbered":
      return <FaListOl />;
    case "format_list_bulleted":
      return <FaListUl />;
    case "format_quote":
      return <FaQuoteRight />;
    default:
      return <span></span>;
  }
};

export default EditorIcon;
