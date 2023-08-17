import { Form, Input, Row, Spin, message, type UploadFile } from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext, useState } from "react";
import { useMutation } from "react-query";
import { v4 } from "uuid";
import { NotificationConsoleContext } from "~/contexts/NotificationConsoleContext";
import * as NotificationService from "~/services/notificationServices";
import ButtonCommon from "../../../components/common/ButtonCommon";
import DraggerCommon from "../../../components/common/DraggerCommon";
import ModalCommon from "../../../components/common/ModalCommon";
import RichTextEditorCommon from "../../../components/common/RichTextEditorCommon";

const AddNewNotificationModal = (): JSX.Element => {
  const {
    openAddNewNotificationModal,
    setOpenAddNewNotificationModal,
    search,
    setSearchCondition,
  } = useContext(NotificationConsoleContext);

  const [editorHtml, setEditorHtml] = useState<string | undefined>("");
  const [attachments, setAttachments] = useState<string[]>([]);

  const [form] = useForm();

  const insertNotificationMutation = useMutation(NotificationService.insert, {
    onSuccess: (data: NotificationModel | null) => {
      if (data != null) {
        void message.success("Thêm thành công");
        setOpenAddNewNotificationModal(false);
        clearData();
        setSearchCondition(() => {
          return {};
        });
        search();
      } else {
        void message.error("Thêm thất bại");
      }
    },
  });

  const handleUploadSuccess = (response: string): void => {
    const updateAttachment = attachments.concat(response);
    setAttachments(updateAttachment);
  };

  const handleUploadFailure = (): void => {};

  const handleRemove = (file: UploadFile): void => {
    const updateAttachment = attachments.filter(
      (attachment) => attachment !== file.response
    );
    setAttachments(updateAttachment);
  };

  const clearData = (): void => {
    setEditorHtml("");
    setAttachments([]);
    form.resetFields();
  };

  const handleSave = (): void => {
    form.setFieldValue("content", editorHtml);
    void form.validateFields().then(() => {
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

  const handleClose = (): void => {
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
      onCancel={handleClose}
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
            <div style={{ height: "300px", marginBottom: "20px" }}>
              <RichTextEditorCommon
                editorHtml={editorHtml}
                setEditorHtml={setEditorHtml}
                style={{ height: 270 }}
              />
            </div>
          </Form.Item>
        </Spin>
      </Form>
    </ModalCommon>
  );
};

export default AddNewNotificationModal;
