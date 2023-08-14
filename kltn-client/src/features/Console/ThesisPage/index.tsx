import { Space } from "antd";
import {
  ThesisConsoleContext,
  ThesisConsoleProvider,
} from "~/contexts/ThesisConsoleContext";
import AddCouncilModal from "./AddCouncilModal";
import ButtonsComponent from "./ButtonsComponent";
import HeaderMessage from "./HeaderMessage";
import OpenThesisRegisterModal from "./OpenThesisRegisterModal";
import ThesisSearchForm from "./ThesisSearchForm";
import ThesisTableResult from "./ThesisTableResult";
import AddEditThesisModal from "./AddEditThesisModal";
import ThesisDetailView from "~/components/ThesisDetailView";
import { useContext } from "react";
import CriticalAssessmentModal from "./CriticalAssessmentModal";

const ThesisPage = () => {
  const { thesis, isOpenThesisDetailModal, setIsOpenThesisDetailModal } =
    useContext(ThesisConsoleContext);

  return (
    <Space direction="vertical" className="p-10 w-full">
      <HeaderMessage />
      <ThesisSearchForm />
      <ButtonsComponent />
      <ThesisTableResult />
      <AddCouncilModal />
      <OpenThesisRegisterModal />
      <AddEditThesisModal />
      <CriticalAssessmentModal />
      {thesis && (
        <ThesisDetailView
          thesis={thesis}
          isOpen={isOpenThesisDetailModal}
          setIsOpen={setIsOpenThesisDetailModal}
        />
      )}
    </Space>
  );
};

export default ThesisPage;
