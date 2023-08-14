import {
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Spin,
  Typography,
  UploadFile,
  message,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext, useEffect, useState } from "react";
import { v4 } from "uuid";
import { UserConsoleContext } from "~/contexts/UserConsoleContext";
import * as UserService from "~/services/userServices";
import ButtonCommon from "../../../components/common/ButtonCommon";
import DraggerCommon from "../../../components/common/DraggerCommon";
import ModalCommon from "../../../components/common/ModalCommon";
import RichTextEditorCommon from "../../../components/common/RichTextEditorCommon";
import { dateDisplay } from "~/common/util";
import dayjs from "dayjs";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import AuthConstants from "~/constants/authConstants";

const { Option } = Select;
const EditUserModal = (): JSX.Element => {
  const {
    openEditUserModal,
    setOpenEditUserModal,
    isLoadingDetail,
    UserDetail,
  } = useContext(UserConsoleContext);

  const [user, setUser] = useState<UserModel>({} as UserModel);
  const [editMode, setEditMode] = useState<boolean>(false);
  const getUserByIdMutation = useMutation(UserService.getUSerById, {
    onSuccess: (data) => {
      const userRes: UserModel | null = data as UserModel;
      if (userRes) {
        setUser(userRes);
      } else {
        toast("Không thể lấy thông tin người dùng");
      }
    },
  });

  const updateUserMuitation = useMutation(UserService.updateUser, {
    onSuccess: () => {
      message.success("Cập nhật thành công");
    },
  });
  const resetPasswordMuitation = useMutation(UserService.resetPasswordUser, {
    onSuccess: () => {
      message.success(
        "Đặt lại thành công, mật khẩu mới đã được gửi qua email người dùng"
      );
    },
  });

  const resetPasswordUserHandle = (user: UserModel) => {
    if (confirm("Bạn chắc chắn muốn đặt lại mật khẩu cho tài khoản này?")) {
      resetPasswordMuitation.mutate(user);
    }
  };

  useEffect(() => {
    if (UserDetail) {
      getUserByIdMutation.mutate(UserDetail!?.userId);
    }
  }, [openEditUserModal, UserDetail]);

  useEffect(() => {
    if (UserDetail) {
      getUserByIdMutation.mutate(UserDetail!?.userId);
    }
  }, []);

  const ModalFooter = (): JSX.Element => {
    return (
      <Row justify={"end"}>
        <ButtonCommon value="Đóng" onClick={handleCancel} />
        <ButtonCommon
          value="reset password"
          onClick={() => {
            resetPasswordUserHandle(user);
            setEditMode(false);
          }}
        />
        {editMode ? (
          <ButtonCommon
            value="Lưu"
            onClick={() => {
              updateUserMuitation.mutate(user);
              setEditMode(false);
            }}
          />
        ) : (
          <ButtonCommon value="Chỉnh sửa" onClick={() => setEditMode(true)} />
        )}
      </Row>
    );
  };

  const handleCancel = () => {
    setOpenEditUserModal(false);
    setEditMode(false);
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
            {editMode ? (
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
            ) : (
              <Typography.Text>{user!?.fname}</Typography.Text>
            )}
          </Col>
        </Row>

        <Row className="min-w-[800px]">
          <Col span={5} className="border py-3 px-4">
            <Typography.Text strong>Email:</Typography.Text>
          </Col>
          <Col flex={1} className="border py-3 px-4">
            {editMode ? (
              <Input
                type="email"
                value={user!?.email}
                onChange={(event) => {
                  setUser({
                    ...user!,
                    email: event.target.value,
                  } as UserModel);
                }}
              />
            ) : (
              <Typography.Text>{user!?.email}</Typography.Text>
            )}
          </Col>
        </Row>

        <Row className="min-w-[800px]">
          <Col span={5} className="border py-3 px-4">
            <Typography.Text strong>Ngày sinh:</Typography.Text>
          </Col>
          <Col flex={1} className="border py-3 px-4">
            {editMode ? (
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
            ) : (
              <Typography.Text>{dateDisplay(user!?.birthday)}</Typography.Text>
            )}
          </Col>
        </Row>
        {user!?.studentClass && (
          <Row className="min-w-[800px]">
            <Col span={5} className="border py-2 px-4">
              <Typography.Text strong>Lớp:</Typography.Text>
            </Col>
            <Col flex={1} className="border py-2 px-4">
              {editMode ? (
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
              ) : (
                <Typography.Text>{user!?.studentClass}</Typography.Text>
              )}
            </Col>
          </Row>
        )}
        <Row className="min-w-[800px]">
          <Col span={5} className="border py-2 px-4">
            <Typography.Text strong>Khoa:</Typography.Text>
          </Col>
          <Col flex={1} className="border py-2 px-4">
            {editMode ? (
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
            ) : (
              <Typography.Text>{user!?.faculty}</Typography.Text>
            )}
          </Col>
        </Row>
        <Row className="min-w-[800px]">
          <Col span={5} className="border py-2 px-4">
            <Typography.Text strong>Chức vụ:</Typography.Text>
          </Col>
          <Col flex={1} className="border py-2 px-4">
            {editMode ? (
              <Select
                mode="multiple"
                style={{ width: "100%" }}
                value={user!.roles}
                onChange={(selectedRoles) => {
                  setUser({
                    ...user!,
                    roles: selectedRoles,
                  } as UserModel);
                }}
              >
                {AuthConstants.AUTH_ROLES_NAME.map((role) => {
                  if (
                    !user!?.roles.includes(role) &&
                    role !== AuthConstants.AUTH_ROLES.ADMIN
                  )
                    return (
                      <Option value={role} key={role}>
                        {role}
                      </Option>
                    );
                })}
              </Select>
            ) : (
              user!?.roles && (
                <Typography.Text>{user!?.roles.join(", ")}</Typography.Text>
              )
            )}
          </Col>
        </Row>
      </Spin>
    </ModalCommon>
  );
};

export default EditUserModal;
