import { Form, Input, Row, UploadFile } from "antd";
import { useContext, useState } from "react";
import { NotificationConsoleContext } from "~/contexts/notification-console-context";
import ButtonCommon from "../common/ButtonCommon";
import DraggerCommon from "../common/DraggerCommon";
import ModalCommon from "../common/ModalCommon";
import RichTextEditorCommon from "../common/RichTextEditorCommon";
import {v4} from 'uuid';
import { useForm } from "antd/es/form/Form";
import * as NotificationService from '~/services/notification-service';

const EditNotificationModal = (): JSX.Element => {
  const { openAddNewNotificationModal, setOpenAddNewNotificationModal } =
    useContext(NotificationConsoleContext);

  const [editorHtml, setEditorHtml] = useState<string>("");
  const [attachments, setAttachments] = useState<string[]>([]);

  const [form] = useForm();

  const handleUploadSuccess = (response : string) => {
    const updateAttachment = attachments.concat(response);
    setAttachments(updateAttachment);
  }

  const handleUploadFailure = () => {

  }

  const handleRemove = (file: UploadFile) => {
    const updateAttachment = attachments.filter(attachment => attachment !== file.response);
    setAttachments(updateAttachment);
  }

  const handleSave = async () => {
    const notification: NotificationModel = {
      id: v4(),
      title: form.getFieldValue("title"),
      content: editorHtml,
      attachmentUrls: attachments,
      createAt: Date.now(),
      updateAt: Date.now()
    }

    const notificationResponse: NotificationModel | null = await NotificationService.insert(notification);
    if (notificationResponse){
      alert("Thành công");
      setOpenAddNewNotificationModal(false);
    }else{
      alert("Thất bại");
    }
  }

  const ButtonFooter = (): JSX.Element => {
    return (
        <Row justify={"end"}>
            <ButtonCommon value="Đóng" onClick={() => setOpenAddNewNotificationModal(false)}/>
            <ButtonCommon color="blue" value="Lưu" onClick={handleSave}/>
        </Row>
    )
  };

  return (
    <ModalCommon
      title="Thêm thông báo"
      open={openAddNewNotificationModal}
      onCanel={() => setOpenAddNewNotificationModal(false)}
      maskCloseable={false}
      footer={[<ButtonFooter key={v4()}/>]}
    >
      <Form layout="horizontal" className="w-[1000px]" form={form}>
        <Form.Item label="Tiêu đề" labelCol={{ span: 3 }} name="title" required>
          <Input />
        </Form.Item>
        <Form.Item label="File đính kèm" name="attachments" labelCol={{ span: 3 }}>
          <DraggerCommon 
            handleUploadSuccess={handleUploadSuccess} 
            handleUploadFailure={handleUploadFailure}
            handleRemove={handleRemove}/>
        </Form.Item>
        <Form.Item label="Nội dung" name="content" labelCol={{ span: 3 }} required>
          <RichTextEditorCommon
            editorHtml={editorHtml}
            setEditorHtml={setEditorHtml}
          />
        </Form.Item>
      </Form>
    </ModalCommon>
  );
};

export default EditNotificationModal;
