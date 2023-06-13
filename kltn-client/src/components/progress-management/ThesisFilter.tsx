import { Button, Col, Form, Row, Select } from "antd";
import { SelectProps } from "antd/es/select";

const statusOptions: SelectProps["options"] = [
  {
    label: "Đang tiến hành",
  },
  {
    label: "Hoàn thành",
  },
];

const semesterOptions: SelectProps["options"] = [
  {
    label: "Năm học 2022-2023",
  },
  {
    label: "Năm học 2021-2022",
  },
  {
    label: "Năm học 2020-2021",
  },
  {
    label: "Năm học 2019-2020",
  },
];

const ThesisProgressFilter = (): JSX.Element => {
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

export default ThesisProgressFilter;
