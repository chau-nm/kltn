import {
  Input,
  Button,
  Select,
  Col,
  Row,
  Divider,
  DatePicker,
  TimePicker,
} from "antd";

import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { Form, Radio } from "antd";
import PageLayout from "~/components/common/PageLayout";

const { TextArea } = Input;

const AddReportPage = (): JSX.Element => {
  const dateFormat = "YYYY/MM/DD";
  return (
    <PageLayout pageTitle="Thêm buổi báo cáo">
      <Row>
        <Form.Item
          label="Chọn đề tài"
          className="w-full"
          labelCol={{ span: 4 }}
        >
          <Select
            style={{ width: "100%" }}
            options={[
              {
                value: 0,
                label: "Xây dựng website",
              },
              {
                value: 1,
                label: "Xây dựng Mạng xã hội",
              },
              {
                value: 2,
                label: "Xây dựng App du lịch",
              },
            ]}
          />
        </Form.Item>
      </Row>
      <Row className="w-full">
        <Col span={14}>
          <Form.Item label="Thời gian" labelCol={{ span: 7 }}>
            <DatePicker placeholder={"Ngày"} format={dateFormat} />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item>
            <TimePicker.RangePicker
              placeholder={["Từ", "Đến"]}
              format="hh:mm"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item label="Phòng báo cáo" labelCol={{ span: 4 }}>
            <Input></Input>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item label="Trạng thái" labelCol={{ span: 4 }}>
            <Select
              style={{ width: "40%" }}
              options={[
                {
                  value: 0,
                  label: "Đang chờ bảo vệ",
                },
                {
                  value: 1,
                  label: "Đang bảo vệ",
                },
                {
                  value: 2,
                  label: "Hoàn tất bảo vệ",
                },
              ]}
            ></Select>
          </Form.Item>
        </Col>
      </Row>
      <div className="w-full flex justify-end">
        <Button>Xác nhận tạo lịch</Button>
      </div>
    </PageLayout>
  );
};
export default AddReportPage;
