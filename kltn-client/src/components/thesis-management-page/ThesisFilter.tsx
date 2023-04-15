import { Col, Row, Select, Form, Button } from "antd";
import { OptionProps, SelectProps } from "antd/es/select";

const statusOptions: SelectProps['options'] = [
    {
        label: "Đang đợi xét duyệt"
    }
]

const semesterOptions: SelectProps['options'] = [
    {
        label: "Học kì 1 Năm học 2022-2023"
    }
]

const ThesisFilter = (): JSX.Element => {
  return (
    <Form>
      <Row justify={"space-between"}>
        <Col className="flex">
          <Form.Item className="mr-3" label="Trạng thái">
            <Select style={{ width: 200 }} 
                options={statusOptions}/>
          </Form.Item>
          <Form.Item className="ml-3" label="Học kì">
            <Select style={{ width: 300 }} 
                options={semesterOptions}/>
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
