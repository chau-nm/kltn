import { Col, DatePicker, Input, Row, Spin, Typography } from "antd";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { AuthContext } from "~/contexts/AuthContext";
import { UserModalContext } from "~/contexts/UserModalContext";
import { getUSerById, updateUser } from "~/services/userServices";
import { dateDisplay } from "~/common/util";
import ButtonCommon from "./common/ButtonCommon";
import ModalCommon from "./common/ModalCommon";

const UserModal = (): JSX.Element => {
  const { open, setOpen, setIsOpenChangePasswordModal } =
    useContext(UserModalContext);

  const { user: userAuth } = useContext(AuthContext);
  const [user, setUser] = useState<UserModel>({});
  const [editMode, setEditMode] = useState<boolean>(false);

  const getUserByIdMutation = useMutation(getUSerById, {
    onSuccess: (data) => {
      const userRes: UserModel | null = data as UserModel;
      if (userRes) {
        setUser(userRes);
      } else {
        toast("Không thể lấy thông tin người dùng");
      }
    },
  });

  const updateUserMuitation = useMutation(updateUser, {
    onSuccess: () => {
      toast("Cập nhật thành công");
    },
  });

  useEffect(() => {
    if (userAuth != null) {
      userAuth.userId && getUserByIdMutation.mutate(userAuth.userId);
    }
  }, [open]);

  // useEffect(() => {
  //   if (userAuth != null) {
  //     getUserByIdMutation.mutate(userAuth.userId);
  //   }
  // }, [getUserByIdMutation, userAuth]);

  const ModalFooter = (): JSX.Element => {
    return (
      <Row justify={"end"}>
        <ButtonCommon value="Đóng" onClick={handleCancel} />
        <ButtonCommon
          value="Thay đổi mật khẩu"
          onClick={() => {
            setIsOpenChangePasswordModal(true);
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
          <ButtonCommon
            value="Chỉnh sửa"
            onClick={() => {
              setEditMode(true);
            }}
          />
        )}
      </Row>
    );
  };

  const handleCancel = (): void => {
    setOpen(false);
    setEditMode(false);
  };

  return (
    <ModalCommon
      title="Thông tin người dùng"
      open={open}
      footer={[<ModalFooter key={"1"} />]}
      onCancel={handleCancel}
      maskCloseable={false}
    >
      <Spin spinning={updateUserMuitation.isLoading}>
        <Row className="min-w-[800px]">
          <Col span={5} className="border py-3 px-4 flex">
            <Typography.Text strong>ID:</Typography.Text>
          </Col>
          <Col flex={1} className="border py-3 px-4">
            <Typography.Text>{user.userId}</Typography.Text>
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
                value={user.fname}
                onChange={(event) => {
                  setUser({
                    ...user,
                    fname: event.target.value,
                  } satisfies UserModel);
                }}
              />
            ) : (
              <Typography.Text>{user.fname}</Typography.Text>
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
                value={dayjs(user.birthday)}
                onChange={(date) => {
                  if (date != null) {
                    setUser({
                      ...user,
                      birthday: date.toDate(),
                    } satisfies UserModel);
                  }
                }}
              />
            ) : (
              <Typography.Text>{dateDisplay(user?.birthday)}</Typography.Text>
            )}
          </Col>
        </Row>
        {user.studentClass && (
          <Row className="min-w-[800px]">
            <Col span={5} className="border py-2 px-4">
              <Typography.Text strong>Lớp:</Typography.Text>
            </Col>
            <Col flex={1} className="border py-2 px-4">
              {editMode ? (
                <Input
                  type="text"
                  value={user.studentClass}
                  onChange={(event) => {
                    setUser({
                      ...user,
                      studentClass: event.target.value,
                    } satisfies UserModel);
                  }}
                />
              ) : (
                <Typography.Text>{user.studentClass}</Typography.Text>
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
                value={user.faculty}
                onChange={(event) => {
                  setUser({
                    ...user,
                    faculty: event.target.value,
                  } satisfies UserModel);
                }}
              />
            ) : (
              <Typography.Text>{user.faculty}</Typography.Text>
            )}
          </Col>
        </Row>
      </Spin>
    </ModalCommon>
  );
};

export default UserModal;
