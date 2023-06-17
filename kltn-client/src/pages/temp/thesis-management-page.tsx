import PageLayout from "~/components/common/PageLayout";
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
