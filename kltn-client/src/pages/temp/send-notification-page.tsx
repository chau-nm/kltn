import { Input } from "antd";
import { EditorState } from "draft-js";
import { useState } from "react";
import PageLayout from "~/components/common/PageLayout";
import RichTextEditorCommon from "~/components/common/RichTextEditorCommon";

const { TextArea } = Input;

const NotificationPage = (): JSX.Element => {
  const [content, setContent] = useState('');

  return (
    <PageLayout pageTitle="Gửi thông báo">
        <RichTextEditorCommon
          editorHtml={content}
          setEditorHtml={setContent}/>
    </PageLayout>
  );
};

export default NotificationPage;
