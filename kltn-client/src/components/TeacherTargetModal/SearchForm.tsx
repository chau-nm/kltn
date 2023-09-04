import { Button, Form, Input, Row } from "antd";
import { type SetStateAction } from "react";

type SearchFormProps = {
  searchCondition: UserSearchConditionModel;
  setSearchCondition: React.Dispatch<SetStateAction<UserSearchConditionModel>>;
  search: () => void;
};

const SearchForm = ({
  search,
  searchCondition,
  setSearchCondition,
}: SearchFormProps): JSX.Element => {
  const handleChangeValues = (value: any, allValues: any): void => {
    setSearchCondition({});
  };

  const handleFinish = (): void => {
    search();
  };

  const formItemLayout = {
    labelCol: { span: 3 },
    wrapperCol: { offset: 1 },
  };

  return (
    <Form
      layout="horizontal"
      onFinish={handleFinish}
      onValuesChange={handleChangeValues}
    >
      <Form.Item
        {...formItemLayout}
        label="Tên tài khoản"
        name="username"
        labelAlign="left"
      >
        <Input placeholder="Nhập tên tài khoản" />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        label="Họ và tên"
        name="name"
        labelAlign="left"
      >
        <Input placeholder="Nhập họ và tên" />
      </Form.Item>
      <Form.Item>
        <Row justify={"end"}>
          <Button htmlType="submit">Tìm kiếm</Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
