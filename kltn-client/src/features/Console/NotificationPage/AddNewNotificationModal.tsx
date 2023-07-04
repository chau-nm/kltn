import { Form, Input, Row, UploadFile } from "antd";
import { useContext, useState } from "react";
import { NotificationConsoleContext } from "~/contexts/NotificationConsoleContext";
import ButtonCommon from "../../../components/common/ButtonCommon";
import DraggerCommon from "../../../components/common/DraggerCommon";
import ModalCommon from "../../../components/common/ModalCommon";
import RichTextEditorCommon from "../../../components/common/RichTextEditorCommon";
import {v4} from 'uuid';
import { useForm } from "antd/es/form/Form";
import * as NotificationService from '~/services/notificationServices';

const AddNewNotificationModal = (): JSX.Element => {
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

  const clearData = () => {
    setEditorHtml('');
    setAttachments([]);
    form.resetFields();
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
      clearData();
    }else{
      alert("Thất bại");
    }
  }

  const handleClose = () => {
    clearData();
    setOpenAddNewNotificationModal(false);
  }

  const ButtonFooter = (): JSX.Element => {
    return (
        <Row justify={"end"}>
            <ButtonCommon value="Đóng" onClick={handleClose}/>
            <ButtonCommon color="blue" value="Lưu" onClick={handleSave}/>
        </Row>
    )
  };

  return (
    <ModalCommon
      title="Thêm thông báo"
      open={openAddNewNotificationModal}
      onCanel={handleClose}
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

export default AddNewNotificationModal;
