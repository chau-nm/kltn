import { Row } from "antd";
import ConsoleLayoutConstants from "~/constants/consoleLayoutConstants";
import NavLink from "./NavLink";

const ConsolePage = (): JSX.Element => {
  return (
    <Row className="h-full py-10 px-32" justify={"start"} align={"middle"}>
      {ConsoleLayoutConstants.MENU_LIST.map((menu) => {
        return (
          <NavLink
            key={menu.id}
            icon={<menu.icon />}
            title={menu.title}
            path={menu.to}
          />
        );
      })}
    </Row>
  );
};

export default ConsolePage;
