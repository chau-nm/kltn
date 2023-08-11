import { Button, DatePicker, Form, Input, Row } from "antd";
import { useContext } from "react";
import { UserConsoleContext } from "~/contexts/UserConsoleContext";

const UserSearchForm = (): JSX.Element => {
  const { search, setSearchCondition } = useContext(UserConsoleContext);

  const handleSearch = () => {
    search();
  };

  const handleValueChange = (value: any, allValues: any) => {
    setSearchCondition({
      username: allValues.username && allValues.username,
      name: allValues.name && allValues.name,
      role: allValues.role && allValues.role,
      id: allValues.id && allValues.id,
      studentClass: allValues.studentClass && allValues.studentClass,
    });
  };

  const formItemLayout = {
    labelCol: { span: 3 },
    wrapperCol: { offset: 1 },
  };

  return (
    <Form
      layout="inline"
      className="bg-white p-7 shadow flex flex-col justify-between h-72"
      onFinish={handleSearch}
      onValuesChange={handleValueChange}
    >
      <Form.Item
        label="Tên tài khoản"
        name="username"
        {...formItemLayout}
        labelAlign="left"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Họ và tên"
        name="name"
        {...formItemLayout}
        labelAlign="left"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Chức vụ"
        name="role"
        {...formItemLayout}
        labelAlign="left"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Lớp"
        name="studentClass"
        {...formItemLayout}
        labelAlign="left"
      >
        <Input />
      </Form.Item>

      {/* <Form.Item label="mã số công tác" name="id">
                <Input className="w-[300px]" />
            </Form.Item> */}
      <Form.Item>
        <Row justify={"end"}>
          <Button htmlType="submit">Tìm kiếm</Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default UserSearchForm;
