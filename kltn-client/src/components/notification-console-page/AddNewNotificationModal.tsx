import { useContext, useEffect, useState } from "react";
import ModalCustom from "../common/ModalCustom";
import { NotificationConsoleContext } from "~/contexts/notification-console-context";
import { Button, Form, Input, Row, Upload } from "antd";
import RichTextEditorCustom from "../common/RichTextEditorCustom";
import Dragger from "antd/es/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";
import ButtonCustom from "../common/ButtonCustom";

const AddNewNotificationModal = (): JSX.Element => {
  const { openAddNewNotificationModal, setOpenAddNewNotificationModal } =
    useContext(NotificationConsoleContext);

  const [editorHtml, setEditorHtml] = useState("");

  const ButtonFooter = (): JSX.Element => {
    return (
        <Row justify={"end"}>
            <ButtonCustom value="Đóng" onClick={() => setOpenAddNewNotificationModal(false)}/>
            <ButtonCustom color="blue" value="Lưu" />
        </Row>
    )
  };

  return (
    <ModalCustom
      title="Thêm thông báo"
      open={openAddNewNotificationModal}
      onCanel={() => setOpenAddNewNotificationModal(false)}
      maskCloseable={false}
      footer={[<ButtonFooter />]}
    >
      <Form layout="horizontal" className="w-[1000px]">
        <Form.Item label="Tiêu đề" labelCol={{ span: 3 }} required>
          <Input />
        </Form.Item>
        <Form.Item label="File đính kèm" labelCol={{ span: 3 }}>
          <Dragger>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </Form.Item>
        <Form.Item label="Nội dung" labelCol={{ span: 3 }} required>
          <RichTextEditorCustom
            editorHtml={editorHtml}
            setEditorHtml={setEditorHtml}
          />
        </Form.Item>
      </Form>
    </ModalCustom>
  );
};

export default AddNewNotificationModal;
