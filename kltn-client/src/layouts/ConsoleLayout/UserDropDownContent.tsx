import { Space } from "antd";
import {
  LogoutOutlined,
  ProjectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useContext } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import path from "~/constants/path";
import UserDropDownItem from "./UserDropDownItem";
import { UserModalContext } from "~/contexts/UserModalContext";

type UserDropDownContentProps = {
  closePopover?: () => void;
};

const UserDropDownContent = ({
  closePopover,
}: UserDropDownContentProps): JSX.Element => {
  const { signOut } = useContext(AuthContext);
  const { setOpen: setOpenUserModal } = useContext(UserModalContext);

  const navigate = useNavigate();

  const handleNavigateConsole = (): void => {
    closePopover?.();
    navigate(path.DASHBOARD);
  };

  const handleNavigateProfile = (): void => {
    closePopover?.();
    setOpenUserModal(true);
  };

  const handleLogout = (): void => {
    closePopover?.();
    signOut();
  };

  return (
    <Space direction="vertical">
      <UserDropDownItem
        icon={<ProjectOutlined />}
        title="Trang người dùng"
        handleOnClick={handleNavigateConsole}
      />
      <UserDropDownItem
        icon={<UserOutlined />}
        title="Thông tin người dùng"
        handleOnClick={handleNavigateProfile}
      />
      <UserDropDownItem
        icon={<LogoutOutlined />}
        title="Đăng xuất"
        handleOnClick={handleLogout}
      />
    </Space>
  );
};

export default UserDropDownContent;
