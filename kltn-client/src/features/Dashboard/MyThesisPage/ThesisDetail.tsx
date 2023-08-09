import { PaperClipOutlined } from "@ant-design/icons";
import { Col, Row, Space, Typography } from "antd";
import { getFileNameFromUrl } from "~/common/util";
import ButtonCommon from "~/components/common/ButtonCommon";
import ReactQuillPreviewCommon from "~/components/common/ReactQuillPreviewCommon";

type ThesisDetailProps = {
  thesis: ThesisModel;
};

const ThesisDetail = ({ thesis }: ThesisDetailProps): JSX.Element => {
  const colLayout = {
    span: 3,
    offset: 1,
  };

  const thesisStudents = thesis.students;
  const thesisTeacher = thesis.teacher;

  return (
    <div>
      {thesisStudents?.map((tu, index) => {
        const student = tu.user;
        return (
          <div>
            <Typography.Text className="block font-bold">
              Thông tin sinh viên {index + 1}
            </Typography.Text>
            <Row>
              <Col {...colLayout}>Họ và tên:</Col>
              <Col>{student?.fname}</Col>
            </Row>
            <Row>
              <Col {...colLayout}>Mã số sinh viên:</Col>
              <Col>{student?.username}</Col>
            </Row>
            <Row>
              <Col {...colLayout}>Lớp:</Col>
              <Col>{student?.studentClass}</Col>
            </Row>
          </div>
        );
      })}
      <div>
        <Typography.Text className="block font-bold">
          Thông tin giảng viên hướng dẫn
        </Typography.Text>
        <Row>
          <Col {...colLayout}>Họ và tên:</Col>
          <Col>{thesisTeacher?.user?.fname}</Col>
        </Row>
        <Row>
          <Col {...colLayout}>Mã số giảng viên:</Col>
          <Col>{thesisTeacher?.user?.username}</Col>
        </Row>
      </div>
      <div>
        <Typography.Text className="block font-bold">
          Thông tin đề tài:
        </Typography.Text>
        <Row>
          <Col {...colLayout}>Tên đề tài:</Col>
          <Col>{thesis.topic}</Col>
        </Row>
        <div className="ml-[41.125px]">
          <Typography.Text>Mô tả:</Typography.Text>
          <ReactQuillPreviewCommon content={thesis.description} />
        </div>
      </div>
      <div>
        <Typography.Text className="font-bold">Đề cương:</Typography.Text>
        {thesis.outlineUrls?.map((url) => {
          return (
            <Space className="block">
              <a href={url}>
                <PaperClipOutlined /> {getFileNameFromUrl(url)}
              </a>
            </Space>
          );
        })}
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
        <Typography.Text className="font-bold">
          Tài liệu bảo vệ:
        </Typography.Text>
        {/**Têm preview tại đây*/}
      </div>
      <div>
        <Typography.Text className="font-bold">
          Đánh giá bảo vệ bảo vệ:
        </Typography.Text>
      </div>
      <div className="flex justify-end">
        <ButtonCommon value="Hủy luận văn" />
      </div>
    </div>
  );
};

export default ThesisDetail;
