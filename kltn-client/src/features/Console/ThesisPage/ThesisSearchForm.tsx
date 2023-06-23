import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";

const ThesisSearchForm = (): JSX.Element => {
  return (
    <Form className="bg-white p-7 shadow">
      <Form.Item label="Chủ đề" name="topic" labelCol={{span: 2}} labelAlign="left">
        <Input/>
      </Form.Item>
      <Row gutter={30}>
        <Col span={12}>
          <Form.Item label="Trạng thái" name="topic"  labelCol={{ span: 4 }} labelAlign="left"
            wrapperCol={{ span: 24 }}>
            <Select></Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Thời gian" name="dateRange" labelCol={{span: 4}} labelAlign="left" wrapperCol={{span: 24}}>
            <DatePicker.RangePicker className="w-full"/>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item >
        <Button className="float-right" htmlType="submit">Tìm kiếm</Button>
      </Form.Item>
    </Form>
  );
};

export default ThesisSearchForm;
