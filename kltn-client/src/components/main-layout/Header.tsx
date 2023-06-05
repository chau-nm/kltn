import { Row, Col, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import Logo from "./Logo";
import User from "./User";
import { useContext } from "react";
import { AuthContext } from "~/contexts/auth.context";

const Header = (): JSX.Element => {
  const { signOut } = useContext(AuthContext);

  const handleLogout = (): void => {
    signOut();
  };

  return (
    <Row className="bg-white shadow" justify={"center"} align={"middle"}>
      <Row
        className="2xl:w-[1380px] xl:w-full lg:w-full md:w-full sm:w-full"
        justify={"space-between"}
        align={"middle"}
      >
        <Col>
          <Logo />
        </Col>
        <Row className="px-2" justify={"space-between"} align={"middle"}>
          <Col className="mr-4">
            <User />
          </Col>
          <Col>
            <Button
              className="h-[50px]"
              icon={<LogoutOutlined />}
              onClick={handleLogout}
            >
              Đăng xuất
            </Button>
          </Col>
        </Row>
      </Row>
    </Row>
  );
};

export default Header;
