import { Col, Layout, Row, Space, Typography } from "antd";
import ThesisSearchForm from "./ThesisSearchForm";
import ButtonCommon from "~/components/common/ButtonCommon";
import ButtonsComponent from "./ButtonsComponent";
import HeaderMessage from "./HeaderMessage";
import ThesisTableResult from "./ThesisTableResult";

const ThesisPage = () => {
    return (
        <Space direction="vertical" className="p-10 w-full">
            <HeaderMessage />
            <ThesisSearchForm />
            <ButtonsComponent />
            <ThesisTableResult />
        </Space>
    )
}

export default ThesisPage;