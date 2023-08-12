import { TablePaginationConfig } from "antd";
import { SetStateAction, createContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import usePagination from "~/hook/usePagination";
import * as ThesisRegisterCalendarService from "~/services/thesisRegisterCalendarService";
import * as ThesisService from "~/services/thesisService";

interface ThesisConsoleContextInterface {
  isLoadingTableResults: boolean;

  listThesis: ThesisModel[];
  thesis: ThesisModel | undefined;

  listThesisSelected: ThesisModel[];
  setlistThesisSelected: React.Dispatch<SetStateAction<ThesisModel[]>>;

  isOpenRegisterThesisModal: boolean;
  setIsOpenRegisterThesisModal: React.Dispatch<SetStateAction<boolean>>;

  isEditModal: boolean;
  setIsEditModal: React.Dispatch<SetStateAction<boolean>>;

  isOpenAddEditThesisModal: boolean;
  setIsOpenAddEditThesisModal: React.Dispatch<SetStateAction<boolean>>;

  isOpenThesisDetailModal: boolean;
  setIsOpenThesisDetailModal: React.Dispatch<SetStateAction<boolean>>;

  openAddCouncilModal: boolean;
  setOpenAddCouncilModal: React.Dispatch<SetStateAction<boolean>>;

  thesisRegisterCalendar: ThesisRegisterCalendarModel | undefined;
  loadThesisRegisterCalendar: () => void;

  search: (searchCondition?: ThesisSearchConditionModel) => void;
  searchCondition: ThesisSearchConditionModel;
  setSearchCondition: React.Dispatch<
    SetStateAction<ThesisSearchConditionModel>
  >;

  searchDetail: (thesisId: string) => void;

  pagination: TablePaginationConfig;
  setPagination: React.Dispatch<SetStateAction<TablePaginationConfig>>;
  handleChange: (pagination: TablePaginationConfig) => void;
}

const initThesisConsoleContextInerface: ThesisConsoleContextInterface = {
  isLoadingTableResults: false,

  listThesis: [],
  thesis: undefined,

  listThesisSelected: [],
  setlistThesisSelected: () => null,

  isOpenRegisterThesisModal: false,
  setIsOpenRegisterThesisModal: () => null,

  isEditModal: false,
  setIsEditModal: () => null,
  isOpenAddEditThesisModal: false,
  setIsOpenAddEditThesisModal: () => null,

  isOpenThesisDetailModal: false,
  setIsOpenThesisDetailModal: () => null,

  openAddCouncilModal: false,
  setOpenAddCouncilModal: () => null,

  thesisRegisterCalendar: undefined,
  loadThesisRegisterCalendar: () => {},

  search: () => {},
  searchCondition: {},
  setSearchCondition: () => null,

  searchDetail: () => {},

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
  const [listThesisSelected, setlistThesisSelected] = useState<ThesisModel[]>(
    []
  );
  const [searchCondition, setSearchCondition] =
    useState<ThesisSearchConditionModel>({});

  const [openAddCouncilModal, setOpenAddCouncilModal] =
    useState<boolean>(false);

  const [isOpenRegisterThesisModal, setIsOpenRegisterThesisModal] =
    useState<boolean>(false);

  const [isOpenAddEditThesisModal, setIsOpenAddEditThesisModal] =
    useState<boolean>(false);

  const [isOpenThesisDetailModal, setIsOpenThesisDetailModal] =
    useState<boolean>(false);

  const [isEditModal, setIsEditModal] = useState<boolean>(false);

  const viewThesisRegisterCalendarMutation = useMutation(
    ThesisRegisterCalendarService.view
  );

  const loadThesisRegisterCalendar = () => {
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

  const searchDetailMutation = useMutation(ThesisService.getThesisById, {
    onSuccess: (data: ThesisModel | null) => {
      if (data) {
        setThesis(data);
      }
    },
  });

  const [pagination, setPagination, handleChange] =
    usePagination<ThesisSearchConditionModel>(
      searchMutaion.mutate,
      searchCondition as ThesisSearchConditionModel
    );

  useEffect(() => {
    viewThesisRegisterCalendarMutation.mutate();
  }, []);

  const search = () => {
    searchMutaion.mutate({
      page: 1,
      pageSize: pagination.pageSize,
      searchCondition,
    });
  };

  const searchDetail = (id: string) => {
    searchDetailMutation.mutate(id);
  };

  return (
    <ThesisConsoleContext.Provider
      value={{
        listThesis,
        thesis,

        listThesisSelected,
        setlistThesisSelected,

        isLoadingTableResults: searchMutaion.isLoading,

        openAddCouncilModal,
        setOpenAddCouncilModal,

        isOpenRegisterThesisModal,
        setIsOpenRegisterThesisModal,

        isEditModal,
        setIsEditModal,
        isOpenAddEditThesisModal,
        setIsOpenAddEditThesisModal,

        isOpenThesisDetailModal,
        setIsOpenThesisDetailModal,

        thesisRegisterCalendar: viewThesisRegisterCalendarMutation.data,
        loadThesisRegisterCalendar,

        search,
        searchCondition,
        setSearchCondition,
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
