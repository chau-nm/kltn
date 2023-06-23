import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Popover, Row } from "antd";
import { useContext, useRef } from "react";
import UserSubMenu from "./UserSubMenu";
import { AuthContext } from "~/contexts/AuthContext";

const UserMenu = (): JSX.Element => {
  const {user} = useContext(AuthContext);

  return (
    <>
      <Popover
        placement="bottomRight"
        content={UserSubMenu}
        trigger="click"
      >
        <Row
          className="p-1 cursor-pointer select-none shadow rounded-xl hover:bg-slate-100 duration-300"
          justify={"center"}
          align={"middle"}
        >
          <Col className="mr-2">
            <Avatar
              className="bg-green-700"
              size={"large"}
              icon={<UserOutlined />}
            />
          </Col>
          <Col className="font-bold">
            <Row className="text-base">{user?.userId}</Row>
            <Row className="text-lg">{user?.fname}</Row>
          </Col>
        </Row>
      </Popover>
    </>
  );
};

export default UserMenu;
