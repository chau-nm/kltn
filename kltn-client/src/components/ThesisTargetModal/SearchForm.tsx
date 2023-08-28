import { Button, Form, Input } from "antd";
import React, { type SetStateAction } from "react";

type SearchFormProps = {
  searchCondition: ThesisSearchConditionModel;
  setSearchCondition: React.Dispatch<
    SetStateAction<ThesisSearchConditionModel>
  >;
  search: () => void;
};

const SearchForm = ({
  search,
  searchCondition,
  setSearchCondition,
}: SearchFormProps): JSX.Element => {
  const handleChangeValues = (value: any, allValues: any): void => {
    setSearchCondition({
      topic: allValues.topic,
    });
  };

  const handleFinish = (): void => {
    search();
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

      <Form.Item>
        <Button className="float-right" htmlType="submit">
          Tìm kiếm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
