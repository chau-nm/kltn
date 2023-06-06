import { Input, Button, Select, Col, Row, Divider } from "antd";

import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { Form, Radio } from "antd";
import PageLayout from "~/components/common/PageLayout";

const { TextArea } = Input;

const MarkFrom = (): JSX.Element => {
  return (
    <PageLayout pageTitle="Form chấm điểm" showTitle>
      <div className="w-full p-5">
        <Form
          labelCol={{ span: 5 }}
          layout="horizontal"
          colon={false}
          labelAlign={"left"}
          labelWrap={true}
        >
          <Form.Item label="Tên đề tài" className="font-bold">
            <Input />
          </Form.Item>
          <Form.Item label="Giảng viên hướng dẫn" className="font-bold">
            <Select showSearch>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Divider>Đánh giá và cho điểm</Divider>
          <div className="font-bold mb-3">
            3.1 Nội dung báo cáo (tối đa 40 điểm)
          </div>
          <Form.Item label="Nội dung và phương pháp tiến hành đề tài">
            <Input />
          </Form.Item>
          <Form.Item label="Phân tích kết quả & thảo luận những vấn đề liên quan đề tài">
            <Input />
          </Form.Item>
          <div className="font-bold mb-3">
            3.2 Trả lời các câu hỏi (tối đa 40 điểm)
          </div>
          <Form.Item label="Của giảng viên phản biện (đủ, đúng/thiếu, sai)">
            <Input />
          </Form.Item>
          <Form.Item label="Của thành viên hội đồng (đủ, đúng/thiếu, sai)">
            <Input />
          </Form.Item>
          <div className="font-bold  mb-3">
            3.3 Thái độ, cách ứng xử, bản lĩnh, tính sáng tạo (tối đa 20 điểm)
          </div>
          <Form.Item label="Tự tin trả lời câu hỏi của giảng viên phản biện và thành viên hội đồng">
            <Input />
          </Form.Item>
          <Divider>Tổng kết</Divider>

          <div className="table-mark h-40 flex  flex-col justify-around">
            <Row>
              <Col span={2}>
                <div className="font-bold">STT</div>
              </Col>
              <Col span={4}>
                <div className="font-bold">MSSV</div>
              </Col>
              <Col span={6}>
                <div className="font-bold">Họ và tên SV</div>
              </Col>
              <Col span={3}>
                <div className="font-bold">Điểm phần 3.1</div>
              </Col>
              <Col span={3}>
                <div className="font-bold">Điểm phần 3.2</div>
              </Col>
              <Col span={3}>
                <div className="font-bold">Điểm phần 3.3</div>
              </Col>
              <Col span={3}>
                <div className="font-bold">Điểm</div>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <div className="font-bold">1</div>
              </Col>
              <Col span={4}>
                <div className="font-bold">19130012</div>
              </Col>
              <Col span={6}>
                <div className="font-bold">Nguyễn Trần Anh</div>
              </Col>
              <Col span={3}>
                <Input className="w-2/3"></Input>
              </Col>
              <Col span={3}>
                <Input className="w-2/3"></Input>
              </Col>
              <Col span={3}>
                <Input className="w-2/3"></Input>
              </Col>
              <Col span={3}>
                <Input className="w-2/3"></Input>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <div className="font-bold">1</div>
              </Col>
              <Col span={4}>
                <div className="font-bold">19130012</div>
              </Col>
              <Col span={6}>
                <div className="font-bold">Nguyễn Trần Anh</div>
              </Col>
              <Col span={3}>
                <Input className="w-2/3"></Input>
              </Col>
              <Col span={3}>
                <Input className="w-2/3"></Input>
              </Col>
              <Col span={3}>
                <Input className="w-2/3"></Input>
              </Col>
              <Col span={3}>
                <Input className="w-2/3"></Input>
              </Col>
            </Row>
          </div>
        </Form>
      </div>
      <div className="w-full flex justify-end">
        <Button>Xác nhận đánh giá</Button>
      </div>
    </PageLayout>
  );
};
export default MarkFrom;
