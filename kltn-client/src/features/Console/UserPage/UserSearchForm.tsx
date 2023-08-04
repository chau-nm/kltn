import { Button, DatePicker, Form, Input } from "antd";
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

  return (
    <Form
      layout="inline"
      className="bg-white p-7 shadow flex flex-col justify-between h-72"
      onFinish={handleSearch}
      onValuesChange={handleValueChange}
    >
      <Form.Item label="tên tài khoản" name="username" labelCol={{ span: 5 }}>
        <Input className="w-[250px]" />
      </Form.Item>
      <Form.Item label="Tên" name="name" labelCol={{ span: 5 }}>
        <Input className="w-[250px]" />
      </Form.Item>
      <Form.Item label="chức vụ" name="role" labelCol={{ span: 5 }}>
        <Input className="w-[250px]" />
      </Form.Item>
      <Form.Item label="lớp" name="studentClass" labelCol={{ span: 5 }}>
        <Input className="w-[250px]" />
      </Form.Item>

      {/* <Form.Item label="mã số công tác" name="id">
                <Input className="w-[300px]" />
            </Form.Item> */}
      <Form.Item>
        <Button htmlType="submit">Tìm kiếm</Button>
      </Form.Item>
    </Form>
  );
};

export default UserSearchForm;
