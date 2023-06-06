import { Layout } from "antd";
import PageHeader from "./PageHeader";

type PageLayoutProps = {
  pageTitle?: string;
  showTitle?: boolean;
  children: React.ReactNode;
};

const PageLayout = ({ pageTitle, children, showTitle }: PageLayoutProps) => {
  return (
    <Layout className="bg-white mt-2 p-3 shadow rounded">
      {showTitle && <PageHeader title={pageTitle} />}
      {children}
    </Layout>
  );
};

export default PageLayout;
