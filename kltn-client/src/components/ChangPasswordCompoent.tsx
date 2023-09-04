import { Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext } from "react";
import { useMutation } from "react-query";
import { AuthContext } from "~/contexts/AuthContext";
import { changePassword } from "~/services/userServices";
import ButtonCommon from "./common/ButtonCommon";
import ModalCommon from "./common/ModalCommon";
import { UserModalContext } from "~/contexts/UserModalContext";

const ChangePasswordComponent = (): JSX.Element => {
  const { user } = useContext(AuthContext);
  const { isOpenChangePasswordModal, setIsOpenChangePasswordModal } =
    useContext(UserModalContext);

  const [form] = useForm();

  const changePasswordMutation = useMutation(changePassword, {
    onSuccess: (data: UserModel | null) => {
      if (data) {
        void message.success("Thay đổi mật khẩu thành công");
        handleClose();
      }
    },
  });

  const handleChangePassword = (): void => {
    void form.validateFields().then(() => {
      const changePasswordPayload: ChangePasswordPayload = {
        userId: user?.userId,
        ...form.getFieldsValue(),
      };
      changePasswordMutation.mutate(changePasswordPayload);
    });
  };

  const handleClose = (): void => {
    form.resetFields();
    setIsOpenChangePasswordModal(false);
  };

  const layoutConfig = {
    labelCol: { span: 6 },
    wrapperCol: { offset: 2 },
  };

  return (
    <ModalCommon
      title="Thay đổi mật khẩu"
      open={isOpenChangePasswordModal}
      onCancel={handleClose}
      footer={[
        <ButtonCommon key={1} value="Đóng" onClick={handleClose} />,
        <ButtonCommon key={2} value="Lưu" onClick={handleChangePassword} />,
      ]}
    >
      <Form className="w-[600px]" form={form}>
        <Form.Item
          {...layoutConfig}
          labelAlign="left"
          label="Mật khẩu cũ"
          name="oldPassword"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu cũ",
            },
          ]}
        >
          <Input.Password placeholder="Nhập mật khẩu cũ" />
        </Form.Item>
        <Form.Item
          {...layoutConfig}
          labelAlign="left"
          label="Mật khẩu mới"
          name="newPassword"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu mới",
            },
          ]}
        >
          <Input.Password placeholder="Nhập mật khẩu mới" />
        </Form.Item>
        <Form.Item
          {...layoutConfig}
          labelAlign="left"
          label="Nhập lại mật khẩu"
          name="confirmPassword"
          dependencies={["newPassword"]}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập lại mật khẩu",
            },
            ({ getFieldValue }) => ({
              async validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
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
      </Form>
    </ModalCommon>
  );
};

export default ChangePasswordComponent;
