import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "~/assets/images/logo.png";
import MainLayouConstants from "~/constants/main-layout-constants";
import path from "~/constants/path";

const Logo = (): JSX.Element => {
  const navigate = useNavigate();

  const handleGoToHome = (): void => {
    navigate(path.HOME);
  };

  return (
    <Row
      className="px-2 py-2 cursor-pointer select-none"
      onClick={handleGoToHome}
    >
      <Col>
        <img width={50} height={50} src={logo} />
      </Col>
      <Col className="ml-2">
        <Row className="font-bold text-xl">
          {MainLayouConstants.LAYOUT_TITLE_FACULTY}
        </Row>
        <Row className="font-bold text-base">
          {MainLayouConstants.LAYOUT_TITLE_UNIVERSITY_NAME}
        </Row>
      </Col>
    </Row>
  );
};

export default Logo;
