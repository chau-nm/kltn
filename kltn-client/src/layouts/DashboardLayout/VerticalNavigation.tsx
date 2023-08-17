import { Space } from "antd";
import { useLocation } from "react-router-dom";
import MainLayouConstants from "~/constants/dashboardLayoutConstants";
import CardCommon from "~/components/common/CardCommon";
import NavItem from "./NavItem";
import { useContext } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import { hasCommonValue } from "~/common/util";

const VerticalNavigation = (): JSX.Element => {
  const { user } = useContext(AuthContext);

  const location = useLocation();

  return (
    <CardCommon title="Menu">
      <Space className="w-full" direction="vertical">
        {MainLayouConstants.MENU_LIST.map((menu, index) => {
          if (hasCommonValue(menu.roles, user?.roles ?? [])) {
            return (
              <NavItem
                key={index}
                icon={<menu.icon />}
                path={menu.menuPath}
                title={menu.menuName}
                active={location.pathname === menu.menuPath}
              />
            );
          }
          return <></>;
        })}
      </Space>
    </CardCommon>
  );
};

export default VerticalNavigation;
