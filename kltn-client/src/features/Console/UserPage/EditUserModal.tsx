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
import dayjs from "dayjs";
import { useContext, useEffect } from "react";
import { useMutation } from "react-query";
import AuthConstants from "~/constants/authConstants";
import { UserConsoleContext } from "~/contexts/UserConsoleContext";
import * as UserService from "~/services/userServices";
import ButtonCommon from "../../../components/common/ButtonCommon";
import ModalCommon from "../../../components/common/ModalCommon";

const EditUserModal = (): JSX.Element => {
  const {
    openEditUserModal,
    setOpenEditUserModal,
    isLoadingDetail,
    userDetail,
  } = useContext(UserConsoleContext);

  const [form] = useForm();

  useEffect(() => {
    if (userDetail) {
      form.setFieldsValue({
        username: userDetail.username,
        fname: userDetail.fname,
        email: userDetail.email,
        gender: userDetail.gender,
        birthday: dayjs(userDetail.birthday),
        faculty: userDetail.faculty,
        studentClass: userDetail.studentClass,
        roles: userDetail.roles,
      });
    }
  }, [userDetail]);

  const updateUserMuitation = useMutation(UserService.updateUser, {
    onSuccess: () => {
      void message.success("Cập nhật thành công");
    },
  });
  const resetPasswordMuitation = useMutation(UserService.resetPasswordUser, {
    onSuccess: () => {
      void message.success(
        "Đặt lại thành công, mật khẩu mới đã được gửi qua email người dùng"
      );
    },
  });

  const resetPasswordUserHandle = (user: UserModel): void => {
    if (confirm("Bạn chắc chắn muốn đặt lại mật khẩu cho tài khoản này?")) {
      resetPasswordMuitation.mutate(user);
    }
  };

  const handleUpdate = (): void => {
    void form.validateFields().then(() => {
      const newUser: UserModel = {
        ...userDetail,
        ...form.getFieldsValue(),
      };
      updateUserMuitation.mutate(newUser);
    });
  };

  const ModalFooter = (): JSX.Element => {
    return (
      <Row justify={"end"}>
        <ButtonCommon value="Đóng" onClick={handleCancel} />
        <ButtonCommon
          value="Đặt lại mật khẩu"
          onClick={() => {
            userDetail && resetPasswordUserHandle(userDetail);
          }}
        />
        <ButtonCommon color="blue" value="Lưu" onClick={handleUpdate} />
      </Row>
    );
  };

  const handleCancel = (): void => {
    setOpenEditUserModal(false);
  };

  const layoutConfig = {
    labelCol: { span: 4 },
    wrapperCol: { offset: 2 },
  };

  return (
    <ModalCommon
      title="Chỉnh sửa thông tin người dùng"
      open={openEditUserModal}
      footer={[<ModalFooter key={"1"} />]}
      onCancel={handleCancel}
      maskCloseable={false}
    >
      <Spin spinning={isLoadingDetail}>
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

export default EditUserModal;
