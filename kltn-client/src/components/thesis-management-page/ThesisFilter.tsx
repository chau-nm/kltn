import { Button, Col, Form, Row, Select } from "antd";
import { SelectProps } from "antd/es/select";

const statusOptions: SelectProps["options"] = [
  {
    label: "Đang đợi xét duyệt",
  },
  {
    label: "Đã xét duyệt",
  },
  {
    label: "Đang tiến hành",
  },
  {
    label: "Đang đợi phản biện",
  },
  {
    label: "Đang phản biện",
  },
  {
    label: "Hoàn tất phản biện",
  },
  {
    label: "Đang Bảo vệ",
  },
  {
    label: "Hoàn thành",
  },
];

const semesterOptions: SelectProps["options"] = [
  {
    label: "Học kì 1 Năm học 2022-2023",
  },
];

const ThesisFilter = (): JSX.Element => {
  return (
    <Form>
      <Row justify={"space-between"}>
        <Col className="flex">
          <Form.Item className="mr-3" label="Trạng thái">
            <Select style={{ width: 200 }} options={statusOptions} />
          </Form.Item>
          <Form.Item className="ml-3" label="Học kì">
            <Select style={{ width: 300 }} options={semesterOptions} />
          </Form.Item>
        </Col>
        <Col>
          <Button>Lọc</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ThesisFilter;
