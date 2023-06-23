import { Space } from "antd";
import { useLocation } from "react-router-dom";
import MainLayouConstants from "~/constants/dashboardLayoutConstants";
import CardCommon from "~/components/common/CardCommon";
import NavItem from "./NavItem";

const VerticalNavigation = (): JSX.Element => {
  const location = useLocation();

  return (
    <CardCommon cardProps={{ title: "Menu" }}>
      <Space className="w-full" direction="vertical">
        {MainLayouConstants.MENU_LIST.map((menu, index) => {
          return (
            <NavItem
              key={index}
              icon={<menu.icon />}
              path={menu.menuPath}
              title={menu.menuName}
              active={location.pathname === menu.menuPath}
            />
          );
        })}
      </Space>
    </CardCommon>
  );
};

export default VerticalNavigation;
