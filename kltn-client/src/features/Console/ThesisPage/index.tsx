import { Col, Layout, Row, Space, Typography } from "antd";
import ThesisSearchForm from "./ThesisSearchForm";
import ButtonCommon from "~/components/common/ButtonCommon";
import ButtonsComponent from "./ButtonsComponent";
import HeaderMessage from "./HeaderMessage";
import ThesisTableResult from "./ThesisTableResult";
import OpenThesisRegisterModal from "./OpenThesisRegisterModal";
import { useContext } from "react";
import {
  ThesisConsoleContext,
  ThesisConsoleProvider,
} from "~/contexts/ThesisConsoleContext";

const ThesisPage = () => {
  const { isOpenRegisterThesisModal } = useContext(ThesisConsoleContext);

  return (
    <Space direction="vertical" className="p-10 w-full">
      <ThesisConsoleProvider>
        <HeaderMessage />
        <ThesisSearchForm />
        <ButtonsComponent />
        <ThesisTableResult />
        <OpenThesisRegisterModal open={isOpenRegisterThesisModal} />
      </ThesisConsoleProvider>
    </Space>
  );
};

export default ThesisPage;
