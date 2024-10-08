import { type TablePaginationConfig } from "antd";
import { createContext, useEffect, useState, type SetStateAction } from "react";
import { useMutation } from "react-query";
import usePagination from "~/hook/usePagination";
// import * as OutlineReviewServices from "~/services/thesisOutlineCommentService";
import * as ThesisRegisterCalendarService from "~/services/thesisRegisterCalendarService";
import * as ThesisService from "~/services/thesisService";

interface ThesisConsoleContextInterface {
  isLoadingTableResults: boolean;

  listThesis: ThesisModel[];
  thesis: ThesisModel | undefined;

  // listCommentOfCouncil: OutlineCommentModel[];
  // setListCommentOfCouncil: React.Dispatch<
  //   SetStateAction<OutlineCommentModel[]>
  // >;

  listThesisSelected: ThesisModel[];
  setlistThesisSelected: React.Dispatch<SetStateAction<ThesisModel[]>>;

  listThesisSelectedForPreview: ThesisModel[];
  setlistThesisSelectedForPreview: React.Dispatch<
    SetStateAction<ThesisModel[]>
  >;

  isOpenRegisterThesisModal: boolean;
  setIsOpenRegisterThesisModal: React.Dispatch<SetStateAction<boolean>>;

  isOpenCriticalAssessmentModal: boolean;
  setIsOpenCriticalAssessmentModal: React.Dispatch<SetStateAction<boolean>>;

  isOpenProtectionModal: boolean;
  setIsOpenProtectionModal: React.Dispatch<SetStateAction<boolean>>;

  isOpenCriticalAssessmentDetailModal: boolean;
  setIsOpenCriticalAssessmentDetailModal: React.Dispatch<
    SetStateAction<boolean>
  >;

  isOpenProtectionDetailModal: boolean;
  setIsOpenProtectionDetailModal: React.Dispatch<SetStateAction<boolean>>;

  isEditModal: boolean;
  setIsEditModal: React.Dispatch<SetStateAction<boolean>>;

  isOpenAddEditThesisModal: boolean;
  setIsOpenAddEditThesisModal: React.Dispatch<SetStateAction<boolean>>;

  isOpenThesisDetailModal: boolean;
  setIsOpenThesisDetailModal: React.Dispatch<SetStateAction<boolean>>;

  isOpenRegisterThesisPreviewCalendarModal: boolean;
  setIsOpenRegisterThesisPreviewCalendarModal: React.Dispatch<
    SetStateAction<boolean>
  >;

  isOpenRegisterThesisDefenseCalendarModal: boolean;
  setIsOpenRegisterThesisDefenseCalendarModal: React.Dispatch<
    SetStateAction<boolean>
  >;

  openAddCouncilModal: boolean;
  setOpenAddCouncilModal: React.Dispatch<SetStateAction<boolean>>;

  openAddCommentMinistryModal: boolean;
  setOpenAddCommentMinistryModal: React.Dispatch<SetStateAction<boolean>>;

  isOpenPreviewReviewPDF: boolean;
  setOpenPreviewReviewPDF: React.Dispatch<SetStateAction<boolean>>;

  isOpenPreviewDefensePDF: boolean;
  setOpenPreviewDefensePDF: React.Dispatch<SetStateAction<boolean>>;

  thesisRegisterCalendar: ThesisRegisterCalendarModel | undefined;
  loadThesisRegisterCalendar: () => void;

  search: (searchCondition?: ThesisSearchConditionModel) => void;
  searchCondition: ThesisSearchConditionModel;
  setSearchCondition: React.Dispatch<
    SetStateAction<ThesisSearchConditionModel>
  >;

  searchDetail: (thesisId: string) => void;
  // searchListComment: (thesisId: string) => void;

  pagination: TablePaginationConfig;
  setPagination: React.Dispatch<SetStateAction<TablePaginationConfig>>;
  handleChange: (pagination: TablePaginationConfig) => void;
}

const initThesisConsoleContextInerface: ThesisConsoleContextInterface = {
  isLoadingTableResults: false,

  listThesis: [],
  thesis: undefined,

  // listCommentOfCouncil: [],
  // setListCommentOfCouncil: () => null,

  listThesisSelected: [],
  setlistThesisSelected: () => null,

  listThesisSelectedForPreview: [],
  setlistThesisSelectedForPreview: () => null,

  isOpenRegisterThesisModal: false,
  setIsOpenRegisterThesisModal: () => null,

  isOpenCriticalAssessmentDetailModal: false,
  setIsOpenCriticalAssessmentDetailModal: () => null,

  isOpenCriticalAssessmentModal: false,
  setIsOpenCriticalAssessmentModal: () => null,

  isOpenProtectionModal: false,
  setIsOpenProtectionModal: () => null,

  isEditModal: false,
  setIsEditModal: () => null,

  isOpenAddEditThesisModal: false,
  setIsOpenAddEditThesisModal: () => null,

  isOpenThesisDetailModal: false,
  setIsOpenThesisDetailModal: () => null,

  isOpenProtectionDetailModal: false,
  setIsOpenProtectionDetailModal: () => null,

  isOpenRegisterThesisPreviewCalendarModal: false,
  setIsOpenRegisterThesisPreviewCalendarModal: () => null,

  isOpenRegisterThesisDefenseCalendarModal: false,
  setIsOpenRegisterThesisDefenseCalendarModal: () => null,

  openAddCouncilModal: false,
  setOpenAddCouncilModal: () => null,

  openAddCommentMinistryModal: false,
  setOpenAddCommentMinistryModal: () => null,

  isOpenPreviewReviewPDF: false,
  setOpenPreviewReviewPDF: () => null,

  isOpenPreviewDefensePDF: false,
  setOpenPreviewDefensePDF: () => null,

  thesisRegisterCalendar: undefined,
  loadThesisRegisterCalendar: () => {},

  search: () => {},
  searchCondition: {},
  setSearchCondition: () => null,

  searchDetail: () => {},
  // searchListComment: () => {},

  pagination: {},
  setPagination: () => null,
  handleChange: () => {},
};

export const ThesisConsoleContext = createContext(
  initThesisConsoleContextInerface
);

export const ThesisConsoleProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [listThesis, setlistThesis] = useState<ThesisModel[]>([]);
  const [thesis, setThesis] = useState<ThesisModel | undefined>();
  // const [listCommentOfCouncil, setListCommentOfCouncil] = useState<
  //   OutlineCommentModel[]
  // >([]);
  const [listThesisSelected, setlistThesisSelected] = useState<ThesisModel[]>(
    []
  );

  const [listThesisSelectedForPreview, setlistThesisSelectedForPreview] =
    useState<ThesisModel[]>([]);
  const [searchCondition, setSearchCondition] =
    useState<ThesisSearchConditionModel>({});

  const [openAddCouncilModal, setOpenAddCouncilModal] =
    useState<boolean>(false);

  const [openAddCommentMinistryModal, setOpenAddCommentMinistryModal] =
    useState<boolean>(false);

  const [isOpenRegisterThesisModal, setIsOpenRegisterThesisModal] =
    useState<boolean>(false);

  const [isOpenAddEditThesisModal, setIsOpenAddEditThesisModal] =
    useState<boolean>(false);

  const [isOpenCriticalAssessmentModal, setIsOpenCriticalAssessmentModal] =
    useState<boolean>(false);

  const [
    isOpenRegisterThesisPreviewCalendarModal,
    setIsOpenRegisterThesisPreviewCalendarModal,
  ] = useState<boolean>(false);

  const [
    isOpenRegisterThesisDefenseCalendarModal,
    setIsOpenRegisterThesisDefenseCalendarModal,
  ] = useState<boolean>(false);

  const [isOpenProtectionModal, setIsOpenProtectionModal] =
    useState<boolean>(false);

  const [
    isOpenCriticalAssessmentDetailModal,
    setIsOpenCriticalAssessmentDetailModal,
  ] = useState<boolean>(false);

  const [isOpenProtectionDetailModal, setIsOpenProtectionDetailModal] =
    useState<boolean>(false);

  const [isOpenThesisDetailModal, setIsOpenThesisDetailModal] =
    useState<boolean>(false);

  const [isEditModal, setIsEditModal] = useState<boolean>(false);

  const [isOpenPreviewReviewPDF, setOpenPreviewReviewPDF] =
    useState<boolean>(false);

  const [isOpenPreviewDefensePDF, setOpenPreviewDefensePDF] =
    useState<boolean>(false);

  const viewThesisRegisterCalendarMutation = useMutation(
    ThesisRegisterCalendarService.view
  );

  const loadThesisRegisterCalendar = (): void => {
    viewThesisRegisterCalendarMutation.mutate();
  };

  const searchMutaion = useMutation(ThesisService.search, {
    onSuccess: (data: SearchResponseModel<ThesisModel[]>) => {
      if (data) {
        setlistThesis(data.data as ThesisModel[]);
        setPagination((pagination) => {
          return {
            ...pagination,
            total: data.total,
          };
        });
      }
    },
  });

  // const searchCommentMutaion = useMutation(
  //   OutlineReviewServices.getCommentByThesisId,
  //   {
  //     onSuccess: (data: OutlineCommentModel[] | []) => {
  //       if (data) {
  //         setListCommentOfCouncil(data as OutlineCommentModel[]);
  //       }
  //     },
  //   }
  // );

  const searchDetailMutation = useMutation(ThesisService.getThesisById, {
    onSuccess: (data: ThesisModel | null) => {
      if (data != null) {
        setThesis(data);
      }
    },
  });

  const [pagination, setPagination, handleChange] =
    usePagination<ThesisSearchConditionModel>(
      searchMutaion.mutate,
      searchCondition
    );

  useEffect(() => {
    viewThesisRegisterCalendarMutation.mutate();
  }, []);

  const search = (): void => {
    searchMutaion.mutate({
      page: 1,
      pageSize: pagination.pageSize,
      searchCondition,
    });
  };

  const searchDetail = (id: string): void => {
    searchDetailMutation.mutate(id);
  };

  // const searchListComment = (idThesis: string): void => {
  //   searchCommentMutaion.mutate(idThesis);
  // };

  return (
    <ThesisConsoleContext.Provider
      value={{
        listThesis,
        thesis,

        // listCommentOfCouncil,
        // setListCommentOfCouncil,

        listThesisSelected,
        setlistThesisSelected,

        listThesisSelectedForPreview,
        setlistThesisSelectedForPreview,

        isLoadingTableResults: searchMutaion.isLoading,

        openAddCouncilModal,
        setOpenAddCouncilModal,

        isOpenRegisterThesisModal,
        setIsOpenRegisterThesisModal,

        isOpenCriticalAssessmentModal,
        setIsOpenCriticalAssessmentModal,

        isOpenProtectionModal,
        setIsOpenProtectionModal,

        isOpenCriticalAssessmentDetailModal,
        setIsOpenCriticalAssessmentDetailModal,

        isOpenProtectionDetailModal,
        setIsOpenProtectionDetailModal,

        isEditModal,
        setIsEditModal,

        isOpenAddEditThesisModal,
        setIsOpenAddEditThesisModal,

        isOpenThesisDetailModal,
        setIsOpenThesisDetailModal,

        isOpenRegisterThesisPreviewCalendarModal,
        setIsOpenRegisterThesisPreviewCalendarModal,

        isOpenRegisterThesisDefenseCalendarModal,
        setIsOpenRegisterThesisDefenseCalendarModal,

        openAddCommentMinistryModal,
        setOpenAddCommentMinistryModal,

        thesisRegisterCalendar: viewThesisRegisterCalendarMutation.data,
        loadThesisRegisterCalendar,

        isOpenPreviewReviewPDF,
        setOpenPreviewReviewPDF,

        isOpenPreviewDefensePDF,
        setOpenPreviewDefensePDF,

        search,
        searchCondition,
        setSearchCondition,
        // searchListComment,
        pagination,
        setPagination,
        handleChange,

        searchDetail,
      }}
    >
      {children}
    </ThesisConsoleContext.Provider>
  );
};

export default ThesisConsoleProvider;
