import { Space } from "antd";

type PageHeaderProps = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderProps): JSX.Element => {
  return (
    <Space className="py-3 mb-3 font-bold text-xl border-b">
      <h1>{title}</h1>
    </Space>
  );
};

export default PageHeader;
