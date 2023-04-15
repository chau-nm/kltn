import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import dayjs from "dayjs";

const ScheduleFilter = (): JSX.Element => {
  const dateFormat = "YYYY/MM/DD";
  <Select options={[]} />;
  return (
    <Form layout="inline" className="mb-4 p-2">
      <Row>
        <Form.Item className="my-2" label="Thời gian">
          <DatePicker.RangePicker
            placeholder={["Từ ngày", "Đến ngày"]}
            format={dateFormat}
          />
        </Form.Item>
      </Row>
      <Row>
        <Form.Item className="my-2" label="Trạng thái">
          <Select
            placeholder="Trạng thái"
            style={{ width: 160 }}
            options={[
              {
                value: 0,
                label: "Đang báo cáo",
              },
            ]}
          />
        </Form.Item>
        <Form.Item className="my-2" label="Tìm kiếm">
          <Input placeholder="Tìm kiếm" suffix={<SearchOutlined />} />
        </Form.Item>
        <Form.Item className="my-2">
          <Button htmlType="submit">Tìm kiếm</Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default ScheduleFilter;
