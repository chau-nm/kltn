import { Row, Space } from "antd";
import PageLayout from "~/components/common/PageLayout";
import NotificationConfirm from "./NotificationConfirm";
import ThesisDetail from "./ThesisDetail";

const MyThesisPage = () : JSX.Element => {
    return (
        <PageLayout pageTitle="Luận văn của tôi">
            <NotificationConfirm />
            <ThesisDetail />
        </PageLayout>
    )
}

export default MyThesisPage;