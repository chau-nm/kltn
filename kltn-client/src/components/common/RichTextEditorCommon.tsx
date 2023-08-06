import { SetStateAction, useState } from "react";
import ReactQuill, { ReactQuillProps } from "react-quill";
import "react-quill/dist/quill.snow.css";

type RichTextEditorCommonProps = {
  editorHtml?: string;
  setEditorHtml?: React.Dispatch<SetStateAction<string>>;
};

const RichTextEditorCommon = ({
  editorHtml,
  setEditorHtml,
  ...rest
}: RichTextEditorCommonProps & ReactQuillProps): JSX.Element => {
  const toolbarOptions = [
    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
  ];

  const formats = [
    "font",
    "size",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "align",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "clean",
  ];

  return (
    <ReactQuill
      {...rest}
      value={editorHtml}
      onChange={setEditorHtml}
      modules={{
        toolbar: toolbarOptions,
      }}
      formats={formats}
    />
  );
};

export default RichTextEditorCommon;
