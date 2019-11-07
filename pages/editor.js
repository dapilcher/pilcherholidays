// import EditorWrapper from "../components/Editor";
import dynamic from "next/dynamic";
const DynamicEditorWrapper = dynamic(import("../components/Editor"), {
  loading: () => <p>loading...</p>,
  ssr: false
});

const EditorPage = () => <DynamicEditorWrapper />;

export default EditorPage;
