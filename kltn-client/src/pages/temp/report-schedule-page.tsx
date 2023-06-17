import { Button, Layout, Row } from "antd";
import PageHeader from "~/components/common/PageHeader";
import ScheduleFilter from "~/components/report-schedule-page/ScheduleFilter";
import ScheduleList from "~/components/report-schedule-page/ScheduleList";

const ReportSchedulePage = () : JSX.Element=> {
    return (
       <Layout className="bg-white mt-2 p-3 shadow rounded">
            <PageHeader title="Lịch báo cáo"/>
            <ScheduleFilter />
            <ScheduleList />
            <Row>
                <Button>Thêm lịch báo cáo</Button>
            </Row>
       </Layout>
    )
}

export default ReportSchedulePage;