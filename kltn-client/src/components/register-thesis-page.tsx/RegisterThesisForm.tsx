import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Row, Upload } from "antd";

const RegisterThesisForm = (): JSX.Element => {
  return (
    <Form>
      <span className="font-bold text-ms">Thông tin sinh viên 1</span>
      <Row>
        <Form.Item label="Mã số sinh viên">
          <Input className="w-44" />
        </Form.Item>
        <Form.Item label="Họ và tên">
          <Input className="w-44" />
        </Form.Item>
        <Form.Item label="Lớp">
          <Input className="w-44" />
        </Form.Item>
      </Row>
      <span className="font-bold text-ms">Thông tin sinh viên 2</span>
      <Row>
        <Form.Item label="Mã số sinh viên">
          <Input className="w-44" />
        </Form.Item>
        <Form.Item label="Họ và tên">
          <Input className="w-44" />
        </Form.Item>
        <Form.Item label="Lớp">
          <Input className="w-44" />
        </Form.Item>
      </Row>
      <span className="font-bold text-ms">Giảng viên hướng dẫn</span>
      <Row>
        <Form.Item label="Mã giảng viên">
          <Input className="w-44" />
        </Form.Item>
        <Form.Item label="Họ và tên">
          <Input className="w-44" />
        </Form.Item>
      </Row>
      <span className="font-bold text-ms">Tên đề tài</span>
      <Form.Item>
        <Input />
      </Form.Item>
      <span className="font-bold text-ms">Mô tả</span>
      <Form.Item>
        <Input.TextArea rows={5} />
      </Form.Item>
      <span className="font-bold text-ms">File đề cương</span>
      <Form.Item>
        <Upload>
          <Button icon={<UploadOutlined />}>Chọn file đề cương</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button>Đăng ký</Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterThesisForm;
