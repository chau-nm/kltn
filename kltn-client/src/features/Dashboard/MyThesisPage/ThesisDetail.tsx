import { Col, Row, Space, Typography } from "antd";
import ButtonCommon from "~/components/common/ButtonCommon";
import ReactQuillPreviewCommon from "~/components/common/ReactQuillPreviewCommon";

type ThesisDetailProps = {
  thesis: ThesisModel;
}

const ThesisDetail = ({
  thesis
}: ThesisDetailProps): JSX.Element => {
  const colLayout = {
    span: 3,
    offset: 1,
  };

  return (
    <div>
      <div>
        <Typography.Text className="block font-bold">
          Thông tin sinh viên 1
        </Typography.Text>
        <Row>
          <Col {...colLayout}>Họ và tên:</Col>
          <Col>Nguyễn Minh Châu</Col>
        </Row>
        <Row>
          <Col {...colLayout}>Mã số sinh viên:</Col>
          <Col>19130022</Col>
        </Row>
        <Row>
          <Col {...colLayout}>Lớp:</Col>
          <Col>DH19DTA</Col>
        </Row>
      </div>
      <div>
        <Typography.Text className="block font-bold">
          Thông tin giảng viên hướng dẫn
        </Typography.Text>
        <Row>
          <Col {...colLayout}>Họ và tên:</Col>
          <Col>Dũ</Col>
        </Row>
        <Row>
          <Col {...colLayout}>Mã số giảng viên:</Col>
          <Col>123</Col>
        </Row>
      </div>
      <div>
        <Typography.Text className="block font-bold">
          Thông tin đề tài:
        </Typography.Text>
        <Row>
          <Col {...colLayout}>Tên đề tài:</Col>
          <Col> Website bán hàng</Col>
        </Row>
        <div className="ml-[41.125px]">
          <Typography.Text>Mô tả:</Typography.Text>
          <ReactQuillPreviewCommon content="asdsad" />
        </div>
      </div>
      <div>
        <Typography.Text className="font-bold">Đề cương:</Typography.Text>
        File wold
        {/**Thêm preview tại đây*/}
      </div>
      <div>
        <Typography.Text className="font-bold">
          Đánh giá đề cương
        </Typography.Text>
        <div>
          <div className="ml-[41.125px]">
            <Typography.Text className="font-bold">Dũ</Typography.Text>
          </div>
          <div className="ml-[41.125px]">
            <Typography.Text>Tốt</Typography.Text>
          </div>
        </div>
      </div>
      <div>
        <Typography.Text className="font-bold">Tài liệu bảo vệ:</Typography.Text>
        {/**Têm preview tại đây*/}
      </div>
      <div>
        <Typography.Text className="font-bold">Đánh giá bảo vệ bảo vệ:</Typography.Text>
      </div>
      <div className="flex justify-end">
        <ButtonCommon value="Hủy luận văn"/>
      </div>
    </div>
  );
};

export default ThesisDetail;
