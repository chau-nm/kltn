import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { useContext } from "react";
import CommonConstants from "~/constants/commonConstants";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";

const ThesisSearchForm = (): JSX.Element => {
  const { search, setSearchCondition } = useContext(ThesisConsoleContext);

  const handleFinish = (): void => {
    search();
  };

  const handleChangeValues = (value: any, allValues: any): void => {
    setSearchCondition({
      topic: allValues.topic,
      status: allValues.status,
      year: allValues.year?.year(),
      semester: allValues.semester,
    });
  };

  return (
    <Form
      className="bg-white p-7 shadow"
      onFinish={handleFinish}
      onValuesChange={handleChangeValues}
    >
      <Form.Item
        label="Chủ đề"
        name="topic"
        labelCol={{ span: 2 }}
        labelAlign="left"
      >
        <Input />
      </Form.Item>
      <Row>
        <Col span={12}>
          <Form.Item
            label="Năm"
            name="year"
            labelCol={{ span: 4 }}
            labelAlign="left"
            wrapperCol={{ span: 10 }}
          >
            <DatePicker picker="year" className="w-full" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="Học kì"
            name="semester"
            labelCol={{ span: 5 }}
            labelAlign="left"
            wrapperCol={{ span: 24 }}
          >
            <Select>
              <Select.Option key={undefined}> </Select.Option>
              <Select.Option key={1}>Học kì 1</Select.Option>
              <Select.Option key={2}>Học kì 2</Select.Option>
              <Select.Option key={3}>Học kì 3</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button className="float-right" htmlType="submit">
          Tìm kiếm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ThesisSearchForm;
