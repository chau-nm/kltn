import { HomeOutlined } from "@ant-design/icons";
import { Row, Space } from "antd";
import NavLink from "~/components/console-page/NavLink";

const ConsolePage = (): JSX.Element => {
  return (
    <Row className="h-full py-10 px-32" justify={"start"} align={"middle"}>
      <NavLink icon={<HomeOutlined />} title="Trang chủ" path="/console" />
      <NavLink icon={<HomeOutlined />} title="Trang chủ" path="/console" />
      <NavLink icon={<HomeOutlined />} title="Trang chủ" path="/console" />
      <NavLink icon={<HomeOutlined />} title="Trang chủ" path="/console" />
      <NavLink icon={<HomeOutlined />} title="Trang chủ" path="/console" />
      <NavLink icon={<HomeOutlined />} title="Trang chủ" path="/console" />
      <NavLink icon={<HomeOutlined />} title="Trang chủ" path="/console" />
      <NavLink icon={<HomeOutlined />} title="Trang chủ" path="/console" />
      <NavLink icon={<HomeOutlined />} title="Trang chủ" path="/console" />
      <NavLink icon={<HomeOutlined />} title="Trang chủ" path="/console" />
    </Row>
  );
};

export default ConsolePage;
