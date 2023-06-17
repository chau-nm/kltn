import { Button, DatePicker, Form, Input, Spin, Typography } from "antd";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { Toast } from "react-toastify/dist/components";
import PageLayout from "~/components/common/PageLayout";
import { AuthContext } from "~/contexts/auth.context";
import { getUSerById, updateUser } from "~/services/user-service";
import { dateDisplay } from "~/utils/util";

const ProfilePage = (): JSX.Element => {
  const { user: userAuth } = useContext(AuthContext);
  const [user, setUser] = useState<UserCusModel>({} as UserCusModel);
  const [editMode, setEditMode] = useState<boolean>(false);

  const getUserByIdMutation = useMutation(getUSerById, {
    onSuccess: (data) => {
      const userRes: UserCusModel | null = data as UserCusModel;
      if (userRes) {
        setUser(userRes);
      } else {
        toast("Không thể lấy thông tin người dùng");
      }
    },
  });

  const updateUserMuitation = useMutation(updateUser, {
    onSuccess: () => {},
  });

  useEffect(() => {
    if (userAuth) {
      getUserByIdMutation.mutate(userAuth.userId);
    }
  }, []);

  return (
    <PageLayout pageTitle="Thông tin tài khoản">
      <Spin spinning={updateUserMuitation.isLoading}>
        <Form layout="horizontal">
          <Form.Item label="ID" labelCol={{ span: 3 }}>
            <Typography.Text>{user.userId}</Typography.Text>
          </Form.Item>
          <Form.Item label="Họ và tên" labelCol={{ span: 3 }}>
            {editMode ? (
              <Input
                type="text"
                value={user.fname}
                onChange={(event) => {
                  setUser({
                    ...user,
                    fname: event.target.value,
                  } as UserCusModel);
                }}
              />
            ) : (
              <Typography.Text>{user.fname}</Typography.Text>
            )}
          </Form.Item>
          <Form.Item label="Ngày sinh" labelCol={{ span: 3 }}>
            {editMode ? (
              <DatePicker
                value={dayjs(user.birthday)}
                onChange={(date) => {
                  if (date) {
                    setUser({
                      ...user,
                      birthday: date.toDate(),
                    } as UserCusModel);
                  }
                }}
              />
            ) : (
              <Typography.Text>{dateDisplay(user?.birthday)}</Typography.Text>
            )}
          </Form.Item>
          <Form.Item label="Lớp" labelCol={{ span: 3 }}>
            {editMode ? (
              <Input
                type="text"
                value={user.studentClass}
                onChange={(event) => {
                  setUser({
                    ...user,
                    studentClass: event.target.value,
                  } as UserCusModel);
                }}
              />
            ) : (
              <Typography.Text>{user.studentClass}</Typography.Text>
            )}
          </Form.Item>
          <Form.Item label="Khoa" labelCol={{ span: 3 }}>
            {editMode ? (
              <Input
                type="text"
                value={user.faculty}
                onChange={(event) => {
                  setUser({
                    ...user,
                    faculty: event.target.value,
                  } as UserCusModel);
                }}
              />
            ) : (
              <Typography.Text>{user.faculty}</Typography.Text>
            )}
          </Form.Item>
          <Form.Item>
            {!editMode ? (
              <Button onClick={() => setEditMode(true)}>Chỉnh sửa</Button>
            ) : (
              <>
                <Button onClick={() => setEditMode(false)} className="mx-2">
                  Hủy
                </Button>
                <Button onClick={() => {
                    updateUserMuitation.mutate(user);
                    setEditMode(false);
                }}>Lưu</Button>
              </>
            )}
          </Form.Item>
        </Form>
      </Spin>
    </PageLayout>
  );
};

export default ProfilePage;
