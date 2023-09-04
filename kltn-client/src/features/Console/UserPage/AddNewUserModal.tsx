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
import { useContext, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { v4 } from "uuid";
import AuthConstants from "~/constants/authConstants";
import { UserConsoleContext } from "~/contexts/UserConsoleContext";
import * as lecturerService from "~/services/lecturerService";
import * as StudentService from "~/services/studentService";
import ButtonCommon from "../../../components/common/ButtonCommon";
import ModalCommon from "../../../components/common/ModalCommon";
import moment from "moment";

const STUDENT_MODE = 1;
const TEACHER_MODE = 2;

const AddNewUserModal = (): JSX.Element => {
  const {
    openAddNewUserModal,
    setOpenAddNewUserModal,
    setSearchCondition,
    search,
    userDetail,
    isEdit,
  } = useContext(UserConsoleContext);

  const [accountMode, setAccountMode] = useState(1);

  const [form] = useForm();

  const insertStudentMutation = useMutation(StudentService.insert, {
    onSuccess: (data: StudentModel) => {
      if (data) {
        void message.success("Thêm tài khoản sinh viên thành công");
        clearData();
        handleClose();
      }
    },
  });

  const editStudentMutation = useMutation(StudentService.update, {
    onSuccess: (data: StudentModel) => {
      if (data) {
        void message.success("Cập nhật thành công");
        clearData();
        handleClose();
      }
    },
  });

  const insertlecturerMutation = useMutation(lecturerService.insert, {
    onSuccess: (data: LecturerModel) => {
      if (data) {
        void message.success("Thêm tài khoản giảng viên thành công");
        clearData();
        handleClose();
      }
    },
  });

  const editlecturerMutation = useMutation(lecturerService.update, {
    onSuccess: (data: LecturerModel) => {
      if (data) {
        void message.success("Cập nhật thành công");
        clearData();
        handleClose();
      }
    },
  });

  useEffect(() => {
    if (isEdit) {
      if (userDetail?.isStudent) {
        setAccountMode(STUDENT_MODE);
      }
      if (userDetail?.isTeacher) {
        setAccountMode(TEACHER_MODE);
      }
      form.setFieldsValue({
        username: userDetail?.username,
        fname: userDetail?.fname,
        email: userDetail?.email,
        gender: userDetail?.gender,
        birthday: moment(userDetail?.birthday),
        faculty: userDetail?.faculty,
        studentClass: (userDetail as StudentModel).studentClass,
        degree: (userDetail as LecturerModel).degree,
        title: (userDetail as LecturerModel).title,
        roles: userDetail?.roles,
      });
    }
  }, [userDetail]);

  const clearData = (): void => {
    form.resetFields();
    setSearchCondition({});
    search();
  };

  const handleSave = (): void => {
    void form.validateFields().then(async () => {
      const user: UserModel = {
        userId: isEdit ? userDetail?.userId : v4(),
        username: form.getFieldValue("username"),
        password: isEdit
          ? userDetail?.password
          : form.getFieldValue("password"),
        email: form.getFieldValue("email"),
        fname: form.getFieldValue("fname"),
        gender: form.getFieldValue("gender"),
        birthday: form.getFieldValue("birthday"),
        roles: form.getFieldValue("roles"),
        faculty: form.getFieldValue("faculty"),
        isStudent: false,
        isTeacher: false,
        isDeleted: isEdit ? userDetail?.isDeleted : false,
        createdAt: isEdit ? userDetail?.createdAt : new Date().getTime(),
        updatedAt: new Date().getTime(),
      };

      if (accountMode === STUDENT_MODE) {
        const student: StudentModel = {
          ...user,
          isStudent: true,
          studentClass: form.getFieldValue("studentClass"),
        };
        if (isEdit) {
          editStudentMutation.mutate(student);
        } else {
          insertStudentMutation.mutate(student);
        }
      }

      if (accountMode === TEACHER_MODE) {
        const lecturer: LecturerModel = {
          ...user,
          isTeacher: true,
          degree: form.getFieldValue("degree"),
          title: form.getFieldValue("title"),
        };
        if (isEdit) {
          editlecturerMutation.mutate(lecturer);
        } else {
          insertlecturerMutation.mutate(lecturer);
        }
      }
    });
  };

  const handleClose = (): void => {
    clearData();
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
          {!isEdit && (
            <>
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
                      return await Promise.reject(
                        new Error("Mật khẩu không khớp")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Nhập lại mật khẩu" />
              </Form.Item>
            </>
          )}
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
            label="Sinh viên/ Giảng viên"
          >
            <Radio.Group
              onChange={(value) => {
                setAccountMode(value.target.value);
              }}
              value={accountMode}
              disabled={isEdit}
            >
              <Radio value={STUDENT_MODE}>Sinh viên</Radio>
              <Radio value={TEACHER_MODE}>Giảng viên</Radio>
            </Radio.Group>
          </Form.Item>

          {accountMode === STUDENT_MODE && (
            <Form.Item
              {...layoutConfig}
              labelAlign="left"
              label="Lớp"
              name="studentClass"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input type="text" placeholder="Lớp" />
            </Form.Item>
          )}

          {accountMode === TEACHER_MODE && (
            <>
              <Form.Item
                {...layoutConfig}
                labelAlign="left"
                label="Ngạnh bậc"
                name="degree"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input type="text" placeholder="Ngạnh bậc" />
              </Form.Item>
              <Form.Item
                {...layoutConfig}
                labelAlign="left"
                label="Tiêu đề"
                name="title"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input type="text" placeholder="Tiêu đề" />
              </Form.Item>
            </>
          )}

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
