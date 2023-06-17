import { Input } from "antd";
import { EditorState } from "draft-js";
import { useState } from "react";
import PageLayout from "~/components/common/PageLayout";
import RichTextEditorCustom from "~/components/common/RichTextEditorCustom";

const { TextArea } = Input;

const NotificationPage = (): JSX.Element => {
  const [content, setContent] = useState('');

  return (
    <PageLayout pageTitle="Gửi thông báo">
        <RichTextEditorCustom
          editorHtml={content}
          setEditorHtml={setContent}/>
    </PageLayout>
  );
};

export default NotificationPage;
