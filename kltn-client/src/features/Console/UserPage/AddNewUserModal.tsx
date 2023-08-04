import {
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Spin,
  Typography,
  UploadFile,
} from "antd";
import { useContext, useState } from "react";
import { UserConsoleContext } from "~/contexts/UserConsoleContext";
import ButtonCommon from "../../../components/common/ButtonCommon";
import DraggerCommon from "../../../components/common/DraggerCommon";
import ModalCommon from "../../../components/common/ModalCommon";
import RichTextEditorCommon from "../../../components/common/RichTextEditorCommon";
import { v4 } from "uuid";
import { useForm } from "antd/es/form/Form";
import * as UserService from "~/services/userServices";
import dayjs from "dayjs";

const AddNewUserModal = (): JSX.Element => {
  const { openAddNewUserModal, setOpenAddNewUserModal } =
    useContext(UserConsoleContext);

  const [editorHtml, setEditorHtml] = useState<string>("");
  const [attachments, setAttachments] = useState<string[]>([]);

  const [user, setUser] = useState<UserModel>();
  const [form] = useForm();

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
    // const User: UserModel = {
    //     userId: v4(),
    //   title: form.getFieldValue("title"),
    //   content: editorHtml,
    //   attachmentUrls: attachments,
    //   createdAt: Date.now(),
    //   updatedAt: Date.now(),
    // };
    // const UserResponse: UserModel | null =
    //   await UserService.insert(User);
    // if (UserResponse) {
    //   alert("Thành công");
    //   setOpenAddNewUserModal(false);
    //   clearData();
    // } else {
    //   alert("Thất bại");
    // }
  };

  const handleClose = () => {
    // clearData();
    setOpenAddNewUserModal(false);
  };

  const ButtonFooter = (): JSX.Element => {
    return (
      <Row justify={"end"}>
        <ButtonCommon value="Đóng" onClick={handleClose} />
        {/* <ButtonCommon color="blue" value="Lưu" onClick={handleSave} /> */}
      </Row>
    );
  };

  return (
    <ModalCommon
      title="Thêm người dùng"
      open={openAddNewUserModal}
      // footer={[<ModalFooter key={"1"} />]}
      onCanel={handleClose}
      maskCloseable={false}
    >
      <Spin spinning={false}>
        <Row className="min-w-[800px]">
          <Col span={5} className="border py-3 px-4 flex">
            <Typography.Text strong>ID:</Typography.Text>
          </Col>
          <Col flex={1} className="border py-3 px-4">
            <Typography.Text>{user!?.userId}</Typography.Text>
          </Col>
        </Row>
        <Row className="min-w-[800px]">
          <Col span={5} className="border py-3 px-4">
            <Typography.Text strong>Họ và tên:</Typography.Text>
          </Col>
          <Col flex={1} className="border py-3 px-4">
            <Input
              type="text"
              value={user!?.fname}
              onChange={(event) => {
                setUser({
                  ...user!,
                  fname: event.target.value,
                } as UserModel);
              }}
            />
          </Col>
        </Row>
        <Row className="min-w-[800px]">
          <Col span={5} className="border py-3 px-4">
            <Typography.Text strong>Ngày sinh:</Typography.Text>
          </Col>
          <Col flex={1} className="border py-3 px-4">
            <DatePicker
              value={dayjs(user!?.birthday)}
              onChange={(date) => {
                if (date) {
                  setUser({
                    ...user!,
                    birthday: date.toDate(),
                  } as UserModel);
                }
              }}
            />
          </Col>
        </Row>
        {user!?.studentClass && (
          <Row className="min-w-[800px]">
            <Col span={5} className="border py-2 px-4">
              <Typography.Text strong>Lớp:</Typography.Text>
            </Col>
            <Col flex={1} className="border py-2 px-4">
              <Input
                type="text"
                value={user!?.studentClass}
                onChange={(event) => {
                  setUser({
                    ...user!,
                    studentClass: event.target.value,
                  } as UserModel);
                }}
              />
            </Col>
          </Row>
        )}
        <Row className="min-w-[800px]">
          <Col span={5} className="border py-2 px-4">
            <Typography.Text strong>Khoa:</Typography.Text>
          </Col>
          <Col flex={1} className="border py-2 px-4">
            <Input
              type="text"
              value={user!?.faculty}
              onChange={(event) => {
                setUser({
                  ...user!,
                  faculty: event.target.value,
                } as UserModel);
              }}
            />
          </Col>
        </Row>
      </Spin>
    </ModalCommon>
  );
};

export default AddNewUserModal;
