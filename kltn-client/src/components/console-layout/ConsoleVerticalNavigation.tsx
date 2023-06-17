import { Menu, Space } from "antd";
import UserDropDown from "./UserDropDown";

const ConsoleVerticalNavigation = () : JSX.Element => {
    return (
        <Space direction="vertical" >
            <UserDropDown />
            <Menu>
                
            </Menu>
        </Space>
    )
}

export default ConsoleVerticalNavigation;