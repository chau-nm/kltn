import { Space } from "antd";
import UserSubMenuItem from "./UserSubMenuItem";
import {
  LogoutOutlined,
  ProjectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useContext } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import path from "~/constants/path";
import { UserModalContext } from "~/contexts/UserModalContext";

type UserSubMenuProps = {
  handleClosePopover?: () => void;
};

const UserSubMenu = ({ handleClosePopover }: UserSubMenuProps): JSX.Element => {
  const { signOut } = useContext(AuthContext);
  const { setOpen: setUserModalOpen } = useContext(UserModalContext);

  const navigate = useNavigate();

  const handleNavigateConsole = (): void => {
    handleClosePopover?.();
    navigate(path.CONSOLE);
  };

  const handleNavigateProfile = (): void => {
    handleClosePopover?.();
    setUserModalOpen(true);
  };

  const handleLogout = (): void => {
    handleClosePopover?.();
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
        title="Thông tin người dùng"
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
