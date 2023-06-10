import { Space } from "antd";

type PageHeaderProps = {
  title?: string;
  isOnHomepage?: boolean;
};

const PageHeader = ({ title, isOnHomepage }: PageHeaderProps): JSX.Element => {
  const className = isOnHomepage
    ? "py-3 mb-3 font-bold text-xl border-b bg-[#518df7] text-gray-50 rounded-md text-center align-middle pl-5"
    : "py-3 mb-3 font-bold text-xl border-b";

  return (
    <Space className={`${className}`}>
      <h1>{title}</h1>
    </Space>
  );
};

export default PageHeader;
