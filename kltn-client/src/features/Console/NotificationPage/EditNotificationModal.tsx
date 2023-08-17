import { Form, Input, Row, Spin, type UploadFile, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext, useEffect, useState } from "react";
import { v4 } from "uuid";
import { NotificationConsoleContext } from "~/contexts/NotificationConsoleContext";
import * as NotificationService from "~/services/notificationServices";
import ButtonCommon from "../../../components/common/ButtonCommon";
import DraggerCommon from "../../../components/common/DraggerCommon";
import ModalCommon from "../../../components/common/ModalCommon";
import RichTextEditorCommon from "../../../components/common/RichTextEditorCommon";

const EditNotificationModal = (): JSX.Element => {
  const {
    openEditNotificationModal,
    setOpenEditNotificationModal,
    isLoadingDetail,
    notificationDetail,
  } = useContext(NotificationConsoleContext);

  const [editorHtml, setEditorHtml] = useState<string | undefined>("");
  const [attachments, setAttachments] = useState<string[]>([]);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const [form] = useForm<NotificationModel>();

  useEffect(() => {
    if (notificationDetail != null) {
      form.setFieldsValue({
        title: notificationDetail?.title,
      });
      setEditorHtml(
        notificationDetail.content ? notificationDetail.content : ""
      );
      setAttachments(
        notificationDetail.attachmentUrls != null
          ? notificationDetail.attachmentUrls
          : []
      );
      handleSetFileList(
        notificationDetail.attachmentUrls != null
          ? notificationDetail.attachmentUrls
          : []
      );
    }
  }, [form, notificationDetail]);

  const handleSetFileList = (attachments: string[]): void => {
    const files: UploadFile[] = attachments.map((url, index) => ({
      uid: `${index}`,
      name: url
        .substring(url.lastIndexOf("/") + 1, url.indexOf("?"))
        .split("-")[1],
      status: "done",
      url,
      response: url,
    }));
    setFileList(files);
  };

  const handleUploadSuccess = (response: string): void => {
    const updateAttachments = attachments.concat(response);
    setAttachments(updateAttachments);
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

  const handleClose = (): void => {
    clearData();
    setOpenEditNotificationModal(false);
  };

  const ButtonFooter = (): JSX.Element => {
    return (
      <Row justify={"end"}>
        <ButtonCommon value="Đóng" onClick={handleClose} />
        <ButtonCommon color="blue" value="Lưu" onClick={handleUpdate} />
      </Row>
    );
  };

  const handleUpdate = async (): Promise<void> => {
    const fieldValues = form.getFieldsValue();
    const notification: NotificationModel = {
      id: notificationDetail?.id ?? v4().toString(),
      title: fieldValues.title,
      content: editorHtml,
      attachmentUrls: attachments,
      isDeleted: notificationDetail?.isDeleted ?? false,
      createdAt: notificationDetail?.createdAt ?? Date.now(),
      updatedAt: Date.now(),
    };
    const updateResult = await NotificationService.update(notification);
    if (updateResult) {
      void message.success("Updated");
      setOpenEditNotificationModal(false);
    } else {
      void message.error("Update failed");
    }
  };

  return (
    <ModalCommon
      title="Thêm thông báo"
      open={openEditNotificationModal}
      onCancel={handleClose}
      maskCloseable={false}
      footer={[<ButtonFooter key={v4()} />]}
    >
      <Spin spinning={isLoadingDetail}>
        <Form
          layout="horizontal"
          className="w-[1000px]"
          form={form}
          onFinish={handleUpdate}
        >
          <Form.Item
            label="Tiêu đề"
            labelCol={{ span: 3 }}
            name="title"
            required
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
              fileList={fileList}
              setFileList={setFileList}
            />
          </Form.Item>
          <Form.Item
            label="Nội dung"
            name="content"
            labelCol={{ span: 3 }}
            required
          >
            <RichTextEditorCommon
              editorHtml={editorHtml}
              setEditorHtml={setEditorHtml}
            />
          </Form.Item>
        </Form>
      </Spin>
    </ModalCommon>
  );
};

export default EditNotificationModal;
