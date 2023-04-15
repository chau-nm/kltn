import { Input, Button, Select, Col, Row, Divider } from "antd";

import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { Form, Radio } from "antd";
import PageLayout from "~/components/common/PageLayout";

const { TextArea } = Input;

const CounterArgumentFrom = (): JSX.Element => {
  return (
    <PageLayout pageTitle="Form đánh giá">
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
          <Divider>Hình thức luận văn</Divider>
          <Form.Item>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="Số trang"
                  className="font-bold"
                  labelCol={{ span: 15 }}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Số chương"
                  className="font-bold"
                  labelCol={{ span: 15 }}
                  labelAlign="right"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Số bảng"
                  className="font-bold"
                  labelCol={{ span: 15 }}
                  labelAlign="right"
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="Số biểu đồ"
                  className="font-bold"
                  labelCol={{ span: 15 }}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Số bảng vẻ"
                  className="font-bold"
                  labelCol={{ span: 15 }}
                  labelAlign="right"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Số hình ảnh"
                  className="font-bold"
                  labelCol={{ span: 15 }}
                  labelAlign="right"
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="Số tài liệu tham khảo"
                  className="font-bold"
                  labelCol={{ span: 15 }}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Số phần mềm tính toán"
                  className="font-bold"
                  labelCol={{ span: 15 }}
                  labelAlign="right"
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="Bố cục" className="font-bold">
            <Input />
          </Form.Item>
          <Form.Item label="Hành văn" className="font-bold">
            <Input />
          </Form.Item>
          <Form.Item label="Thuật ngữ chuyên môn" className="font-bold">
            <Input />
          </Form.Item>
          <Divider>Nội dung</Divider>
          <Form.Item
            label="Những ưu điểm chính của luận văn"
            className="font-bold"
          >
            <TextArea rows={8} />
          </Form.Item>
          <Form.Item
            label="Kết quả, kết luận về đề tài và triển vọng của đề tài"
            className="font-bold"
          >
            <TextArea rows={8} />
          </Form.Item>
          <Form.Item
            label="Những phần thiếu sót chính của luận văn"
            className="font-bold"
          >
            <TextArea rows={8} />
          </Form.Item>
          <Form.Item name="radio-group" label="Đề nghị" className="font-bold">
            <Radio.Group>
              <Radio value="Được bảo vệ">Được bảo vệ</Radio>
              <Radio value="Bổ sung thêm để bảo vệ">
                Bổ sung thêm để bảo vệ
              </Radio>
              <Radio value="Không được bảo vệ">Không được bảo vệ</Radio>
              <Radio value=" Bảo vệ đợt khác"> Bảo vệ đợt khác</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Câu hỏi sinh viên phải trả lời trước hội đồng (Cán bộ phản biện ra ít nhất 02 câu)"
            className="font-bold"
          >
            <TextArea rows={1} placeholder="Câu 1" />
            <TextArea rows={1} placeholder="Câu 2" />
            <Button className="mt-1">Thêm câu hỏi</Button>
          </Form.Item>
          <div className="table-mark h-40 flex  flex-col justify-around">
            <Row>
              <Col span={4}>
                <div className="font-bold">STT</div>
              </Col>
              <Col span={6}>
                <div className="font-bold">MSSV</div>
              </Col>
              <Col span={10}>
                <div className="font-bold">Họ và tên SV</div>
              </Col>
              <Col span={4}>
                <div className="font-bold">Điểm</div>
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                <div className="STT">1</div>
              </Col>
              <Col span={6}>
                <div className="MSSV">19130012</div>
              </Col>
              <Col span={10}>
                <div className="name">Nguyễn Trần Anh</div>
              </Col>
              <Col span={4}>
                <Input />
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                <div className="STT">2</div>
              </Col>
              <Col span={6}>
                <div className="MSSV">19130012</div>
              </Col>
              <Col span={10}>
                <div className="name">Nguyễn Minh Châu</div>
              </Col>
              <Col span={4}>
                <Input />
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
export default CounterArgumentFrom;
