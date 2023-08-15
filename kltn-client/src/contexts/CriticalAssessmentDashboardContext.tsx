import { SetStateAction, createContext, useState } from "react";

interface CriticalAssessmentDashboardContextInterface {
  isOpenCriticalAssessmentFormModal: boolean;
  setIsOpenCriticalAssessmentFormModal: React.Dispatch<SetStateAction<boolean>>;

  thesis: ThesisModel | undefined;
  setThesis: React.Dispatch<SetStateAction<ThesisModel | undefined>>;

  isOpenThesisDetail: boolean;
  setIsOpenThesisDetail: React.Dispatch<SetStateAction<boolean>>;
}

const initCriticalAssessmentDashboardContext: CriticalAssessmentDashboardContextInterface =
  {
    isOpenCriticalAssessmentFormModal: false,
    setIsOpenCriticalAssessmentFormModal: () => null,

    thesis: undefined,
    setThesis: () => null,

    isOpenThesisDetail: false,
    setIsOpenThesisDetail: () => null,
  };

export const CriticalAssessmentDashboardContext = createContext(
  initCriticalAssessmentDashboardContext
);

export const CriticalAssessmentDashboardProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [
    isOpenCriticalAssessmentFormModal,
    setIsOpenCriticalAssessmentFormModal,
  ] = useState(false);

  const [thesis, setThesis] = useState<ThesisModel>();

  const [isOpenThesisDetail, setIsOpenThesisDetail] = useState(false);

  return (
    <CriticalAssessmentDashboardContext.Provider
      value={{
        isOpenCriticalAssessmentFormModal,
        setIsOpenCriticalAssessmentFormModal,
        thesis,
        setThesis,
        isOpenThesisDetail,
        setIsOpenThesisDetail,
      }}
    >
      {children}
    </CriticalAssessmentDashboardContext.Provider>
  );
};
