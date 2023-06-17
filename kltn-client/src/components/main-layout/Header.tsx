import { Row, Col, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "~/contexts/auth.context";
import UserMenu from "./UserMenu";

const Header = (): JSX.Element => {
  const { signOut } = useContext(AuthContext);

  const handleLogout = (): void => {
    signOut();
  };

  const handleOnClickUser = () => {
  }

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
            <UserMenu />
          </Col>
        </Row>
      </Row>
    </Row>
  );
};

export default Header;
