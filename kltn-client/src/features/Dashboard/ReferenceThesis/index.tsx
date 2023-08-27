import { Space } from "antd";
import { useContext } from "react";
import ThesisDetailView from "~/components/ThesisDetailView";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import ThesisSearchForm from "./ThesisSearchForm";
import ThesisTableResult from "./ThesisTableResult";
import ThesisConsoleProvider from "~/contexts/ThesisConsoleContext";
const ReferenceThesisPage = (): JSX.Element => {
  const {
    thesis,
    isOpenThesisDetailModal,
    setIsOpenThesisDetailModal,
    isOpenProtectionDetailModal,
    setIsOpenProtectionDetailModal,
  } = useContext(ThesisConsoleContext);

  return (
    <Space direction="vertical" className="p-10 w-full">
      <ThesisConsoleProvider>
        <ThesisSearchForm />
        <ThesisTableResult />
        {thesis != null && (
          <ThesisDetailView
            thesis={thesis}
            isOpen={isOpenThesisDetailModal}
            setIsOpen={setIsOpenThesisDetailModal}
          />
        )}
      </ThesisConsoleProvider>
    </Space>
  );
};

export default ReferenceThesisPage;
