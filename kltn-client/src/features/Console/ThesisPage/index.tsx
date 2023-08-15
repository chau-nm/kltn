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
import AddCommentMinistryModal from "./AddCommentMinistryModal";
import CriticalAssessmentModal from "./CriticalAssessmentModal";
import ProtectionModal from "./ProtectionModal";
import ProtectionDetailView from "~/components/protectionDetailView";

const ThesisPage = () => {
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
      {thesis && (
        <ThesisDetailView
          thesis={thesis}
          isOpen={isOpenThesisDetailModal}
          setIsOpen={setIsOpenThesisDetailModal}
        />
      )}

      <ProtectionDetailView
        protectionRating={{} as ProtectionRatingModel}
        isOpen={isOpenProtectionDetailModal}
        setIsOpen={setIsOpenProtectionDetailModal}
      />
    </Space>
  );
};

export default ThesisPage;
