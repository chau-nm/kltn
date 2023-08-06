import { Alert, Col, Row, Space } from "antd";
import ButtonCommon from "~/components/common/ButtonCommon";

const NotificationConfirm = (): JSX.Element => {
  return (
    <Alert
      message={
        <span>
          <strong>Nguyễn Minh Châu</strong> mời bạn tham gia luận văn! <br />{" "}
          Bạn có đồng ý tham gia không?
        </span>
      }
      type="info"
      showIcon
      action={
        <Row>
          <Col className="ml-5">
            <ButtonCommon color="green" value="Chấp nhận" />
          </Col>
          <Col className="ml-5">
            <ButtonCommon color="red" value="Từ chối" />
          </Col>
        </Row>
      }
    />
  );
};

export default NotificationConfirm;
