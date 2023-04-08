import { Space } from "antd";
import NavItem from "./NavItem";
import CardCustom from "../common/CardCustom";
import MainLayouConstants from "~/constants/main-layout-constants";
import { useContext } from "react";
import { MenuContext } from "~/contexts/menu.context";

const VerticalNavigation = (): JSX.Element => {
  const { menuActive } = useContext(MenuContext);

  return (
    <CardCustom cardProps={{ title: "Menu" }}>
      <Space className="w-full" direction="vertical">
        {MainLayouConstants.MENU_LIST.map((menu, index) => {
          return (
            <NavItem
              key={index}
              icon={<menu.icon />}
              path={menu.menuPath}
              title={menu.menuName}
              active={menuActive === menu.menuId}
            />
          );
        })}
      </Space>
    </CardCustom>
  );
};

export default VerticalNavigation;
