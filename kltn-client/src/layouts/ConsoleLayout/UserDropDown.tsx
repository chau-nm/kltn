import {
  CaretDownOutlined,
  CaretUpOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Popover, Row } from "antd";
import { useContext, useState } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import UserDropDownContent from "./UserDropDownContent";

const UserDropDown = (): JSX.Element => {
  const { user } = useContext(AuthContext);

  const [openedPopover, setOpenedPopover] = useState(false);

  return (
    <Popover
      className="mt-7 mb-10"
      placement="bottomLeft"
      trigger="click"
      content={UserDropDownContent}
      open={openedPopover}
      onOpenChange={setOpenedPopover}
    >
      <Row
        className="w-[250px] py-1 px-2 duration-300 cursor-pointer select-none rounded-xl hover:bg-blue-800"
        justify={"start"}
        align={"middle"}
      >
        <Col className="mr-2" flex={1}>
          <Avatar
            className="bg-green-700"
            size={"large"}
            icon={<UserOutlined />}
          />
        </Col>
        <Col flex={4} className="text-lg text-white mr-2">{user?.fname}</Col>
        <Col flex={1} className="text-white">
          {openedPopover ? <CaretUpOutlined /> : <CaretDownOutlined />}
        </Col>
      </Row>
    </Popover>
  );
};

export default UserDropDown;
