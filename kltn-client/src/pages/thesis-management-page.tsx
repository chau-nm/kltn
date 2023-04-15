import { Button, Layout, Row } from "antd";
import PageHeader from "~/components/common/PageHeader";
import PageLayout from "~/components/common/PageLayout";
import Header from "~/components/main-layout/Header";
import ThesisFilter from "~/components/thesis-management-page/ThesisFilter";
import ThesisTable from "~/components/thesis-management-page/ThesisTable";

const ThesisManagementPage = () => {
  return (
    <PageLayout pageTitle="Quản lý khóa luận">
        <ThesisFilter />
        <ThesisTable />
    </PageLayout>
  );
};

export default ThesisManagementPage;
