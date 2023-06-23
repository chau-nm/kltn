import { Col, Row } from "antd";
import ButtonCommon from "~/components/common/ButtonCommon";

const ButtonsComponent = (): JSX.Element => {
  return (
    <Row justify={"end"} gutter={20} className="py-10">
      <Col>
        <ButtonCommon color="green" value="Mở đăng ký khóa luận" />
      </Col>
      <Col>
        <ButtonCommon color="red" value="Đóng đăng ký khóa luận" />
      </Col>
      <Col>
        <ButtonCommon color="blue" value="Đặt lịch phản biện" />
      </Col>
      <Col>
        <ButtonCommon color="blue" value="Đặt lịch bảo vệ" />
      </Col>
      <Col>
        <ButtonCommon color="blue" value="Thêm đề tài" />
      </Col>
    </Row>
  );
};

export default ButtonsComponent;
