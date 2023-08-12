import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Spin,
  Typography,
  message,
} from "antd";
import { useContext, useState } from "react";
import { UserConsoleContext } from "~/contexts/UserConsoleContext";
import ButtonCommon from "../../../components/common/ButtonCommon";
import ModalCommon from "../../../components/common/ModalCommon";
import { useForm } from "antd/es/form/Form";
import * as UserService from "~/services/userServices";
import { v4 } from "uuid";

const AddNewUserModal = (): JSX.Element => {
  const {
    openAddNewUserModal,
    setOpenAddNewUserModal,
    setSearchCondition,
    search,
  } = useContext(UserConsoleContext);

  const [form] = useForm();

  const clearData = () => {
    form.resetFields();
  };

  const handleSave = async () => {
    form.validateFields().then(async () => {
      const user: UserModel = {
        userId: v4(),
        username: form.getFieldValue("username"),
        password: form.getFieldValue("password"),
        email: form.getFieldValue("email"),
        fname: form.getFieldValue("fname"),
        gender: form.getFieldValue("gender"),
        birthday: form.getFieldValue("birthday"),
        roles: [],
        faculty: form.getFieldValue("faculty"),
        studentClass: form.getFieldValue("studentClass"),
      };
      console.log(user);
      const UserResponse: UserModel | null = await UserService.insert(user);
      if (UserResponse) {
        message.success("Lưu thành công");
        setOpenAddNewUserModal(false);
        clearData();
        setSearchCondition(() => {
          return {};
        });
        search();
      } else {
        message.error("Lưu thất bại");
      }
    });
  };

  const handleClose = () => {
    // clearData();
    setOpenAddNewUserModal(false);
  };

  const ButtonFooter = (): JSX.Element => {
    return (
      <Row justify={"end"}>
        <ButtonCommon value="Đóng" onClick={handleClose} />
        <ButtonCommon color="blue" value={"Lưu"} onClick={handleSave} />
      </Row>
    );
  };

  return (
    <ModalCommon
      title="Thêm người dùng"
      open={openAddNewUserModal}
      footer={[<ButtonFooter key={"1"} />]}
      onCancel={handleClose}
      maskCloseable={false}
    >
      <Spin spinning={false}>
        <Form layout="horizontal" className="w-[600px]" form={form}>
          <Row className="min-w-[400px]">
            <Col span={5} className="border py-3 px-4">
              <Typography.Text strong>Tên tài khoản</Typography.Text>
            </Col>
            <Col flex={1} className="border py-3 px-4">
              <Form.Item name="username" required>
                <Input type="text" />
              </Form.Item>
            </Col>
          </Row>
          <Row className="min-w-[400px]">
            <Col span={5} className="border py-3 px-4">
              <Typography.Text strong>Mật khẩu</Typography.Text>
            </Col>
            <Col flex={1} className="border py-3 px-4">
              <Form.Item name="password" required>
                <Input type="password" />
              </Form.Item>
            </Col>
          </Row>

          <Row className="min-w-[400px]">
            <Col span={5} className="border py-3 px-4">
              <Typography.Text strong>Email</Typography.Text>
            </Col>
            <Col flex={1} className="border py-3 px-4">
              <Form.Item name="email" required>
                <Input type="email" />
              </Form.Item>
            </Col>
          </Row>

          <Row className="min-w-[400px]">
            <Col span={5} className="border py-3 px-4">
              <Typography.Text strong>Họ và tên:</Typography.Text>
            </Col>
            <Col flex={1} className="border py-3 px-4">
              <Form.Item name="fname" required>
                <Input type="text" />
              </Form.Item>
            </Col>
          </Row>
          <Row className="min-w-[400px]">
            <Col span={5} className="border py-3 px-4">
              <Typography.Text strong>Giới tính:</Typography.Text>
            </Col>
            <Col flex={1} className="border py-3 px-4">
              <Form.Item name="gender" required>
                <Radio.Group>
                  <Radio value="male">Nam</Radio>
                  <Radio value="female">Nữ</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row className="min-w-[400px]">
            <Col span={5} className="border py-3 px-4">
              <Typography.Text strong>Ngày sinh:</Typography.Text>
            </Col>
            <Col flex={1} className="border py-3 px-4">
              <Form.Item name="birthday" required>
                <DatePicker />
              </Form.Item>
            </Col>
          </Row>
          <Row className="min-w-[400px]">
            <Col span={5} className="border py-2 px-4">
              <Typography.Text strong>Khoa:</Typography.Text>
            </Col>
            <Col flex={1} className="border py-2 px-4">
              <Form.Item name="faculty">
                <Input type="text" />
              </Form.Item>
            </Col>
          </Row>
          <Row className="min-w-[400px]">
            <Col span={5} className="border py-2 px-4">
              <Typography.Text strong>Lớp:</Typography.Text>
            </Col>
            <Col flex={1} className="border py-2 px-4">
              <Form.Item name="studentClass">
                <Input type="text" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Spin>
    </ModalCommon>
  );
};

export default AddNewUserModal;
