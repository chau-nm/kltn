import { TablePaginationConfig } from "antd";
import { SetStateAction, createContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import usePagination from "~/hook/usePagination";
import * as ThesisRegisterCalendarService from "~/services/thesisRegisterCalendarService";
import * as ThesisService from "~/services/thesisService";

interface ThesisConsoleContextInterface {
  isLoadingTableResults: boolean;

  listThesis: ThesisModel[];

  isOpenRegisterThesisModal: boolean;
  setIsOpenRegisterThesisModal: React.Dispatch<SetStateAction<boolean>>;

  thesisRegisterCalendar: ThesisRegisterCalendarModel | undefined;
  loadThesisRegisterCalendar: () => void;

  search: (searchCondition?: ThesisSearchConditionModel) => void;
  searchCondition: ThesisSearchConditionModel;
  setSearchCondition: React.Dispatch<
    SetStateAction<ThesisSearchConditionModel>
  >;

  pagination: TablePaginationConfig;
  setPagination: React.Dispatch<SetStateAction<TablePaginationConfig>>;
  handleChange: (pagination: TablePaginationConfig) => void;
}

const initThesisConsoleContextInerface: ThesisConsoleContextInterface = {
  isLoadingTableResults: false,

  listThesis: [],

  isOpenRegisterThesisModal: false,
  setIsOpenRegisterThesisModal: () => null,

  thesisRegisterCalendar: undefined,
  loadThesisRegisterCalendar: () => {},

  search: () => {},
  searchCondition: {},
  setSearchCondition: () => null,

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
  const [searchCondition, setSearchCondition] =
    useState<ThesisSearchConditionModel>({});
  const [isOpenRegisterThesisModal, setIsOpenRegisterThesisModal] =
    useState<boolean>(false);

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

  return (
    <ThesisConsoleContext.Provider
      value={{
        listThesis,

        isLoadingTableResults: searchMutaion.isLoading,
        isOpenRegisterThesisModal,
        setIsOpenRegisterThesisModal,
        thesisRegisterCalendar: viewThesisRegisterCalendarMutation.data,
        loadThesisRegisterCalendar,

        search,
        searchCondition,
        setSearchCondition,
        pagination,
        setPagination,
        handleChange,
      }}
    >
      {children}
    </ThesisConsoleContext.Provider>
  );
};

export default ThesisConsoleProvider;
