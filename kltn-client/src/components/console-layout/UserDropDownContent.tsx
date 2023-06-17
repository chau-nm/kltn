import { Space } from "antd";
import { LogoutOutlined, ProjectOutlined, UserOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { AuthContext } from "~/contexts/auth.context";
import { useNavigate } from "react-router-dom";
import path from "~/constants/path";
import UserDropDownItem from "./UserDropDownItem";

const UserDropDownContent = () : JSX.Element => {

    const { signOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleNavigateConsole = () => {
        navigate(path.CONSOLE);
    };

    const handleNavigateProfile = () => {
        navigate(path.PROFILE);
    }

    const handleLogout = () => {
        signOut();
    }   

    return (
        <Space direction="vertical">
            <UserDropDownItem 
                icon={<ProjectOutlined />}
                title="Trang quản lý"
                handleOnClick={handleNavigateConsole}/>
            <UserDropDownItem 
                icon={<UserOutlined />}
                title="Trang cá nhân"
                handleOnClick={handleNavigateProfile}/>
            <UserDropDownItem 
                icon={<LogoutOutlined />}
                title="Đăng xuất"
                handleOnClick={handleLogout}/>
        </Space>
    )
}

export default UserDropDownContent;