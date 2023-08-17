import parse from "html-react-parser";

type ReactQuillPreviewCommonProps = {
  content: string;
};

const ReactQuillPreviewCommon = ({
  content,
}: ReactQuillPreviewCommonProps): JSX.Element => {
  return <div className="py-3">{parse(content)}</div>;
};

export default ReactQuillPreviewCommon;
