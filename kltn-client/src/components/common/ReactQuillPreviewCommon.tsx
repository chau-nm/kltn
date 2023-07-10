import ReactQuill from "react-quill";
import HtmlParser from "react-html-parser";

type ReactQuillPreviewCommonProps = {
  content: string;
};

const ReactQuillPreviewCommon = ({
  content,
}: ReactQuillPreviewCommonProps): JSX.Element => {
  return <div className="py-3">{HtmlParser(content)}</div>;
};

export default ReactQuillPreviewCommon;
