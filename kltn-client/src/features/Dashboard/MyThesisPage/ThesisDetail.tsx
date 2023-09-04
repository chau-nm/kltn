import { SendOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import ReactQuillPreviewCommon from "~/components/common/ReactQuillPreviewCommon";
import CommonConstants from "~/constants/commonConstants";

type ThesisDetailProps = {
  thesis: ThesisModel;
};

const ThesisDetail = ({ thesis }: ThesisDetailProps): JSX.Element => {
  // const colLayout = {
  //   span: 3,
  //   offset: 1,
  // };
  return (
    <>
      <div className="my-2">
        <div className="flex items-center mb-2">
          <SendOutlined />
          <span className="ml-2 text-lg font-bold">Thông tin đề tài</span>
        </div>
        <Row gutter={30} className="px-4">
          <Col span={8} className="border p-3">
            {"-"} Tên đề tài
          </Col>
          <Col span={16} className="border p-3">
            {thesis.topic}
          </Col>
        </Row>
        <Row gutter={30} className="px-4">
          <Col span={8} className="border p-3">
            {"-"} Thực hiện vào
          </Col>
          <Col span={16} className="border p-3">
            Học kì {thesis.semester} năm học {thesis.schoolYear}
          </Col>
        </Row>
        <Row gutter={30} className="px-4">
          <Col span={8} className="border p-3">
            {"-"} Trạng thái
          </Col>
          <Col span={16} className="border p-3">
            <Typography.Text type="secondary" italic>
              {CommonConstants.THESIS_STATUS[thesis.status ?? 0].text}
            </Typography.Text>
          </Col>
        </Row>
        <Row gutter={30} className="px-4">
          <Col span={8} className="border p-3">
            {"-"} Mô tả
          </Col>
          <Col span={16} className="border p-3 max-h-[200px] overflow-y-scroll">
            <ReactQuillPreviewCommon content={thesis.description ?? ""} />
          </Col>
        </Row>
      </div>

      <div className="my-2">
        <div className="flex items-center mb-2">
          <SendOutlined />
          <span className="ml-2 text-lg font-bold">Sinh viên tham gia</span>
        </div>
        {thesis.students?.map((std, index) => {
          return (
            <div key={index} className="my-4 border">
              <Row gutter={30} className="px-4">
                <Col span={12} className=" p-3">
                  - Họ và tên: {std.fname}
                </Col>
                <Col span={12} className=" p-3">
                  - Mã số sinh viên: {std.username}
                </Col>
              </Row>
              <Row gutter={30} className="px-4">
                <Col span={12} className=" p-3">
                  - Lớp: {std.studentClass}
                </Col>
                <Col span={12} className=" p-3">
                  - Khoa: {std.faculty}
                </Col>
              </Row>
            </div>
          );
        })}
      </div>

      <div className="my-2">
        <div className="flex items-center mb-2">
          <SendOutlined />
          <span className="ml-2 text-lg font-bold">Giảng viên hướng dẫn</span>
        </div>
        {thesis.teachers?.map((teacher, index) => {
          return (
            <div key={index} className="my-4 border">
              <Row gutter={30} className="px-4">
                <Col span={12} className=" p-3">
                  - Họ và tên: {teacher.fname}
                </Col>
                <Col span={12} className=" p-3">
                  - Mã số giảng viên: {teacher.username}
                </Col>
              </Row>
              <Row gutter={30} className="px-4">
                <Col span={12} className=" p-3">
                  - Khoa: {teacher.faculty}
                </Col>
                <Col span={12} className=" p-3">
                  - Ngạnh bậc: {teacher.degree}
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ThesisDetail;
