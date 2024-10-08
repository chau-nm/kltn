import { Button, Form, Input, Row, Select } from "antd";
import { useContext } from "react";
import AuthConstants from "~/constants/authConstants";
import { UserConsoleContext } from "~/contexts/UserConsoleContext";

const UserSearchForm = (): JSX.Element => {
  const { search, setSearchCondition } = useContext(UserConsoleContext);

  const handleSearch = (): void => {
    search();
  };

  const handleValueChange = (value: any, allValues: any): void => {
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
        <Input placeholder="Nhập tên tài khoản" />
      </Form.Item>
      <Form.Item
        label="Họ và tên"
        name="name"
        {...formItemLayout}
        labelAlign="left"
      >
        <Input placeholder="Nhập họ và tên" />
      </Form.Item>
      <Form.Item
        label="Chức vụ"
        name="role"
        {...formItemLayout}
        labelAlign="left"
      >
        <Select
          placeholder="Chọn quyền truy cập"
          options={Object.values(AuthConstants.AUTH_ROLES).map((role) => ({
            value: role,
            label: role,
          }))}
        />
      </Form.Item>
      <Form.Item
        label="Lớp"
        name="studentClass"
        {...formItemLayout}
        labelAlign="left"
      >
        <Input placeholder="Nhập lớp" />
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
