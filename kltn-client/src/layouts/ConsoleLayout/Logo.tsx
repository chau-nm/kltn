import { Col, Row } from "antd";
import logo from "~/assets/images/logo.png";

const Logo = (): JSX.Element => {
  return (
    <Row className="items-center select-none">
      <Col className="mx-4">
        <img src={logo} width={70} height={60} />
      </Col>
      <Col>
        <Row className="font-bold text-xl">Khoa Công Nghệ Thông Tin</Row>
        <Row className="text-lg justify-center">Trường Đại Học Nông Lâm</Row>
      </Col>
    </Row>
  );
};

export default Logo;
