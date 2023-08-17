import { Layout } from "antd";
import PageHeader from "./PageHeader";

type PageLayoutProps = {
  pageTitle: string;
  children: React.ReactNode;
};

const PageLayout = ({ pageTitle, children }: PageLayoutProps): JSX.Element => {
  return (
    <Layout className="bg-white mt-2 p-3 shadow rounded">
      <PageHeader title={pageTitle} />
      {children}
    </Layout>
  );
};

export default PageLayout;
