import { Space } from "antd";
import {
  ThesisConsoleProvider
} from "~/contexts/ThesisConsoleContext";
import AddCouncilModal from "./AddCouncilModal";
import ButtonsComponent from "./ButtonsComponent";
import HeaderMessage from "./HeaderMessage";
import OpenThesisRegisterModal from "./OpenThesisRegisterModal";
import ThesisSearchForm from "./ThesisSearchForm";
import ThesisTableResult from "./ThesisTableResult";

const ThesisPage = () => {
  return (
    <Space direction="vertical" className="p-10 w-full">
      <ThesisConsoleProvider>
        <HeaderMessage />
        <ThesisSearchForm />
        <ButtonsComponent />
        <ThesisTableResult />
        <AddCouncilModal />
        <OpenThesisRegisterModal />
      </ThesisConsoleProvider>
    </Space>
  );
};

export default ThesisPage;
