import { Space } from "antd";
import UserSubMenuItem from "./UserSubMenuItem";
import {
  LogoutOutlined,
  ProjectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useContext } from "react";
import { AuthContext } from "~/contexts/auth.context";
import { useNavigate } from "react-router-dom";
import path from "~/constants/path";
import { UserModalContext } from "~/contexts/user-modal.context";

const UserSubMenu = (): JSX.Element => {
  const { signOut } = useContext(AuthContext);
  const { setOpen: setUserModalOpen } = useContext(UserModalContext);

  const navigate = useNavigate();

  const handleNavigateConsole = () => {
    navigate(path.CONSOLE);
  };

  const handleNavigateProfile = () => {
    setUserModalOpen(true);
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <Space direction="vertical">
      <UserSubMenuItem
        icon={<ProjectOutlined />}
        title="Trang quản lý"
        handleOnClick={handleNavigateConsole}
      />
      <UserSubMenuItem
        icon={<UserOutlined />}
        title="Trang cá nhân"
        handleOnClick={handleNavigateProfile}
      />
      <UserSubMenuItem
        icon={<LogoutOutlined />}
        title="Đăng xuất"
        handleOnClick={handleLogout}
      />
    </Space>
  );
};

export default UserSubMenu;
