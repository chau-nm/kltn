import { Space } from "antd";
import { useContext } from "react";
import ThesisDetailView from "~/components/ThesisDetailView";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import AddCommentMinistryModal from "./AddCommentMinistryModal";
import AddEditThesisModal from "./AddEditThesisModal";
import AddCouncilModal from "./AddReviewerForOutline";
import ButtonsComponent from "./ButtonsComponent";
import HeaderMessage from "./HeaderMessage";
import OpenThesisRegisterModal from "./OpenThesisRegisterModal";
import ProtectionModal from "./ProtectionModal";
import RegisterThesisDefenseCalendarModal from "./RegisterThesisDefenseCalendarModal";
import RegisterThesisPreviewCalendarModal from "./RegisterThesisPreviewCalendarModal";
import ReviewerModal from "./ReviewerModal";
import ThesisSearchForm from "./ThesisSearchForm";
import ThesisTableResult from "./ThesisTableResult";
import { PDFReviewPreview } from "~/components/common/ReviewPDF";
import { PDFDefensePreview } from "~/components/common/DefensePDF";

const ThesisPage = (): JSX.Element => {
  const { thesis, isOpenThesisDetailModal, setIsOpenThesisDetailModal } =
    useContext(ThesisConsoleContext);

  return (
    <Space direction="vertical" className="p-10 w-full">
      <HeaderMessage />
      <ThesisSearchForm />
      <ButtonsComponent />
      <ThesisTableResult />
      <AddCommentMinistryModal />
      <OpenThesisRegisterModal />
      <RegisterThesisPreviewCalendarModal />
      <RegisterThesisDefenseCalendarModal />
      <AddEditThesisModal />
      <ReviewerModal />
      <ProtectionModal />
      <AddCouncilModal />
      {thesis != null && (
        <ThesisDetailView
          thesis={thesis}
          isOpen={isOpenThesisDetailModal}
          setIsOpen={setIsOpenThesisDetailModal}
        />
      )}
      <PDFReviewPreview></PDFReviewPreview>
      <PDFDefensePreview></PDFDefensePreview>
    </Space>
  );
};

export default ThesisPage;
