import {
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Spin,
  message,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext } from "react";
import { v4 } from "uuid";
import { UserConsoleContext } from "~/contexts/UserConsoleContext";
import * as UserService from "~/services/userServices";
import ButtonCommon from "../../../components/common/ButtonCommon";
import ModalCommon from "../../../components/common/ModalCommon";
import AuthConstants from "~/constants/authConstants";

const AddNewUserModal = (): JSX.Element => {
  const {
    openAddNewUserModal,
    setOpenAddNewUserModal,
    setSearchCondition,
    search,
  } = useContext(UserConsoleContext);

  const [form] = useForm();

  const clearData = (): void => {
    form.resetFields();
  };

  const handleSave = async (): Promise<void> => {
    void form.validateFields().then(async () => {
      const user: UserModel = {
        userId: v4(),
        username: form.getFieldValue("username"),
        password: form.getFieldValue("password"),
        email: form.getFieldValue("email"),
        fname: form.getFieldValue("fname"),
        gender: form.getFieldValue("gender"),
        birthday: form.getFieldValue("birthday"),
        roles: form.getFieldValue("roles"),
        faculty: form.getFieldValue("faculty"),
        studentClass: form.getFieldValue("studentClass"),
      };
      const UserResponse: UserModel | null = await UserService.insert(user);
      if (UserResponse) {
        void message.success("Lưu thành công");
        setOpenAddNewUserModal(false);
        clearData();
        setSearchCondition(() => {
          return {};
        });
        search();
      } else {
        void message.error("Lưu thất bại");
      }
    });
  };

  const handleClose = (): void => {
    // clearData();
    setOpenAddNewUserModal(false);
  };

  const layoutConfig = {
    labelCol: { span: 4 },
    wrapperCol: { offset: 2 },
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
        <Form layout="horizontal" className="w-[1000px] p-4" form={form}>
          <Form.Item
            {...layoutConfig}
            labelAlign="left"
            label="Tên đăng nhập"
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên đăng nhập.",
              },
            ]}
          >
            <Input type="text" placeholder="Tên đăng nhập" />
          </Form.Item>
          <Form.Item
            {...layoutConfig}
            labelAlign="left"
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu",
              },
            ]}
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item
            {...layoutConfig}
            labelAlign="left"
            label="Nhập lại mật khẩu"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập lại mật khẩu",
              },
              ({ getFieldValue }) => ({
                async validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    await Promise.resolve();
                    return;
                  }
                  return await Promise.reject(new Error("Mật khẩu không khớp"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Nhập lại mật khẩu" />
          </Form.Item>
          <Form.Item
            {...layoutConfig}
            labelAlign="left"
            label="Họ và tên"
            name="fname"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ và tên",
              },
            ]}
          >
            <Input type="text" placeholder="Họ và tên" />
          </Form.Item>

          <Form.Item
            {...layoutConfig}
            labelAlign="left"
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập địa chỉ email",
              },
            ]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item
            {...layoutConfig}
            labelAlign="left"
            label="Giới tính"
            name="gender"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn giới tính",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="male">Nam</Radio>
              <Radio value="female">Nữ</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            {...layoutConfig}
            labelAlign="left"
            label="Ngày sinh"
            name="birthday"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập ngày sinh",
              },
            ]}
          >
            <DatePicker style={{ width: 300 }} />
          </Form.Item>
          <Form.Item
            {...layoutConfig}
            labelAlign="left"
            label="Khoa"
            name="faculty"
          >
            <Input type="text" placeholder="Khoa" />
          </Form.Item>
          <Form.Item
            {...layoutConfig}
            labelAlign="left"
            label="Lớp"
            name="studentClass"
          >
            <Input type="text" placeholder="Lớp" />
          </Form.Item>
          <Form.Item
            {...layoutConfig}
            labelAlign="left"
            label="Quyền hạn"
            name="roles"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn quyền cho tài khoản",
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Quyền tài khoản"
              options={Object.values(AuthConstants.AUTH_ROLES).map((role) => ({
                value: role,
                label: role,
              }))}
            />
          </Form.Item>
        </Form>
      </Spin>
    </ModalCommon>
  );
};

export default AddNewUserModal;
