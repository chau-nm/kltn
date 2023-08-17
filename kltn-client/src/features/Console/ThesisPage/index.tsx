import { Space } from "antd";
import { useContext } from "react";
import ThesisDetailView from "~/components/ThesisDetailView";
import ProtectionDetailView from "~/components/protectionDetailView";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import AddCommentMinistryModal from "./AddCommentMinistryModal";
import AddCouncilModal from "./AddCouncilModal";
import AddEditThesisModal from "./AddEditThesisModal";
import ButtonsComponent from "./ButtonsComponent";
import CriticalAssessmentModal from "./CriticalAssessmentModal";
import HeaderMessage from "./HeaderMessage";
import OpenThesisRegisterModal from "./OpenThesisRegisterModal";
import ProtectionModal from "./ProtectionModal";
import ThesisSearchForm from "./ThesisSearchForm";
import ThesisTableResult from "./ThesisTableResult";

const ThesisPage = (): JSX.Element => {
  const {
    thesis,
    isOpenThesisDetailModal,
    setIsOpenThesisDetailModal,
    isOpenProtectionDetailModal,
    setIsOpenProtectionDetailModal,
  } = useContext(ThesisConsoleContext);

  return (
    <Space direction="vertical" className="p-10 w-full">
      <HeaderMessage />
      <ThesisSearchForm />
      <ButtonsComponent />
      <ThesisTableResult />
      <AddCouncilModal />
      <AddCommentMinistryModal />
      <OpenThesisRegisterModal />
      <AddEditThesisModal />
      <CriticalAssessmentModal />
      <ProtectionModal />
      {thesis != null && (
        <ThesisDetailView
          thesis={thesis}
          isOpen={isOpenThesisDetailModal}
          setIsOpen={setIsOpenThesisDetailModal}
        />
      )}

      <ProtectionDetailView
        isOpen={isOpenProtectionDetailModal}
        setIsOpen={setIsOpenProtectionDetailModal}
      />
    </Space>
  );
};

export default ThesisPage;
