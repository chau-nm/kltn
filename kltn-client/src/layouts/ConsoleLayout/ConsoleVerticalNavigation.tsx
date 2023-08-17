import { Space } from "antd";
import { Link, useLocation } from "react-router-dom";
import ConsoleLayoutConstants from "~/constants/consoleLayoutConstants";
import UserDropDown from "./UserDropDown";
import { useContext } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import { hasCommonValue } from "~/common/util";

const ConsoleVerticalNavigation = (): JSX.Element => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return (
    <Space direction="vertical">
      <UserDropDown />
      {ConsoleLayoutConstants.MENU_LIST.map((menu) => {
        if (hasCommonValue(menu.roles, user?.roles ?? [])) {
          return (
            <Link
              className={`block w-full px-2 py-3 text-white rounded font-bold text-xl duration-700 ${
                location.pathname === menu.to ? "bg-blue-900" : ""
              } hover:bg-blue-900`}
              key={menu.id}
              to={menu.to}
            >
              {menu.title}
            </Link>
          );
        }
        return <></>;
      })}
    </Space>
  );
};

export default ConsoleVerticalNavigation;
