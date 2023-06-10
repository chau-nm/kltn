import { Layout } from "antd";
import PageHeader from "./PageHeader";

type PageLayoutProps = {
  pageTitle?: string;
  showTitle?: boolean;
  isOnHomepage?: boolean;
  children: React.ReactNode;
};

const PageLayout = ({
  pageTitle,
  children,
  showTitle,
  isOnHomepage,
}: PageLayoutProps) => {
  return (
    <Layout className="bg-white mt-2 p-3 shadow rounded">
      {showTitle && (
        <PageHeader title={pageTitle} isOnHomepage={isOnHomepage} />
      )}
      {children}
    </Layout>
  );
};

export default PageLayout;
