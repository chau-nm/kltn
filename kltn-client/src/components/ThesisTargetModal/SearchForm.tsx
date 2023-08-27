import { Button, Form, Input } from "antd";

const SearchForm = (): JSX.Element => {
  return (
    <Form
      className="bg-white p-7 shadow"
      // onFinish={handleFinish}
      // onValuesChange={handleChangeValues}
    >
      <Form.Item
        label="Chủ đề"
        name="topic"
        labelCol={{ span: 2 }}
        labelAlign="left"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Mô tả"
        name="description"
        labelCol={{ span: 2 }}
        labelAlign="left"
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button className="float-right" htmlType="submit">
          Tìm kiếm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
