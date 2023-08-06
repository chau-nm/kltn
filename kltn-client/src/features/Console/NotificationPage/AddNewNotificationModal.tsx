import { Form, Input, Row, Spin, UploadFile, message } from "antd";
import { useContext, useEffect, useState } from "react";
import { NotificationConsoleContext } from "~/contexts/NotificationConsoleContext";
import ButtonCommon from "../../../components/common/ButtonCommon";
import DraggerCommon from "../../../components/common/DraggerCommon";
import ModalCommon from "../../../components/common/ModalCommon";
import RichTextEditorCommon from "../../../components/common/RichTextEditorCommon";
import { v4 } from "uuid";
import { useForm } from "antd/es/form/Form";
import * as NotificationService from "~/services/notificationServices";
import { useMutation } from "react-query";

const AddNewNotificationModal = (): JSX.Element => {
  const {
    openAddNewNotificationModal,
    setOpenAddNewNotificationModal,
    search,
    setSearchCondition,
  } = useContext(NotificationConsoleContext);

  const [editorHtml, setEditorHtml] = useState<string>("");
  const [attachments, setAttachments] = useState<string[]>([]);

  const [form] = useForm();

  const insertNotificationMutation = useMutation(NotificationService.insert, {
    onSuccess: (data: NotificationModel | null) => {
      if (data) {
        message.success("Thêm thành công");
        setOpenAddNewNotificationModal(false);
        clearData();
        setSearchCondition(() => {
          return {};
        });
        search();
      } else {
        message.error("Thêm thất bại");
      }
    },
  });

  const handleUploadSuccess = (response: string) => {
    const updateAttachment = attachments.concat(response);
    setAttachments(updateAttachment);
  };

  const handleUploadFailure = () => {};

  const handleRemove = (file: UploadFile) => {
    const updateAttachment = attachments.filter(
      (attachment) => attachment !== file.response
    );
    setAttachments(updateAttachment);
  };

  const clearData = () => {
    setEditorHtml("");
    setAttachments([]);
    form.resetFields();
  };

  const handleSave = async () => {
    form.setFieldValue("content", editorHtml);
    form.validateFields().then(() => {
      const notification: NotificationModel = {
        id: v4(),
        title: form.getFieldValue("title"),
        content: editorHtml,
        attachmentUrls: attachments,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      insertNotificationMutation.mutate(notification);
    });
  };

  const handleClose = () => {
    clearData();
    setOpenAddNewNotificationModal(false);
  };

  const ButtonFooter = (): JSX.Element => {
    return (
      <Row justify={"end"}>
        <ButtonCommon value="Đóng" onClick={handleClose} />
        <ButtonCommon color="blue" value="Lưu" onClick={handleSave} />
      </Row>
    );
  };

  return (
    <ModalCommon
      title="Thêm thông báo"
      open={openAddNewNotificationModal}
      onCanel={handleClose}
      maskCloseable={false}
      footer={[<ButtonFooter key={v4()} />]}
    >
      <Form layout="horizontal" className="w-[1000px]" form={form}>
        <Spin spinning={insertNotificationMutation.isLoading}>
          <Form.Item
            label="Tiêu đề"
            labelCol={{ span: 3 }}
            name="title"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="File đính kèm"
            name="attachments"
            labelCol={{ span: 3 }}
          >
            <DraggerCommon
              handleUploadSuccess={handleUploadSuccess}
              handleUploadFailure={handleUploadFailure}
              handleRemove={handleRemove}
            />
          </Form.Item>
          <Form.Item
            label="Nội dung"
            name="content"
            labelCol={{ span: 3 }}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <RichTextEditorCommon
              editorHtml={editorHtml}
              setEditorHtml={setEditorHtml}
              style={{ height: 270 }}
            />
          </Form.Item>
        </Spin>
      </Form>
    </ModalCommon>
  );
};

export default AddNewNotificationModal;
