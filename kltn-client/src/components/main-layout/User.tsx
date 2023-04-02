import { UserOutlined } from "@ant-design/icons";
import { Row, Col, Avatar } from "antd";

const User = (): JSX.Element => {
  return (
    <Row
      className="p-1 cursor-pointer select-none shadow rounded-xl hover:bg-slate-100 duration-300"
      justify={"center"}
      align={"middle"}
    >
      <Col className="mr-2">
        <Avatar
          className="bg-green-700"
          size={"large"}
          icon={<UserOutlined />}
        />
      </Col>
      <Col className="font-bold">
        <Row className="text-base">19130022</Row>
        <Row className="text-lg">Nguyễn Minh Châu</Row>
      </Col>
    </Row>
  );
};

export default User;
