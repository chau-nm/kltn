import { Menu, Space } from "antd";
import UserDropDown from "./UserDropDown";
import { Link } from "react-router-dom";
import ConsoleLayoutConstants from "~/constants/console-layout-constants";

const ConsoleVerticalNavigation = (): JSX.Element => {
  return (
    <Space direction="vertical">
      <UserDropDown />
      {ConsoleLayoutConstants.MENU_LIST.map((menu) => {
        return (
          <Link 
            className="block w-full px-2 py-3 text-white rounded font-bold text-xl duration-700 hover:bg-blue-900"
            key={menu.id} 
            to={menu.to}>
            {menu.title}
          </Link>
        );
      })}
    </Space>
  );
};

export default ConsoleVerticalNavigation;
