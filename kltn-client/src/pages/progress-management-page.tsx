import { Button, Row } from "antd";
import PageLayout from "~/components/common/PageLayout";
import ThesisProgressFilter from "~/components/progress-management/ThesisFilter";
import ThesisProgressTable from "~/components/progress-management/ThesisTable";

const ThesisProgreessManagementPage = () => {
  return (
    <PageLayout pageTitle="Quản lý tiến trình luận văn học kỳ" showTitle>
      <ThesisProgressFilter />
      <ThesisProgressTable />
      <Row>
        <Button disabled>Thêm Tiến trình</Button>
      </Row>
    </PageLayout>
  );
};

export default ThesisProgreessManagementPage;
