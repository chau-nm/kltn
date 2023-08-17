import { type TablePaginationConfig } from "antd";
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
  type SetStateAction,
} from "react";
import { useMutation } from "react-query";
import usePagination from "~/hook/usePagination";
import * as ThesisService from "~/services/thesisService";
import { AuthContext } from "./AuthContext";

interface OutlineReviewContextInterface {
  isLoadingList: boolean;
  isLoadingDetail: boolean;

  listThesis: ThesisModel[];
  setListThesis: React.Dispatch<SetStateAction<ThesisModel[]>>;
  thesisDetail: ThesisModel | null;
  setThesisDetail: React.Dispatch<SetStateAction<ThesisModel | null>>;

  openAddNewOutlineReviewModal: boolean;
  setOpenAddNewOutlineReviewModal: React.Dispatch<SetStateAction<boolean>>;
  openEditOutlineReviewModal: boolean;
  setOpenEditOutlineReviewModal: React.Dispatch<SetStateAction<boolean>>;

  search: (searchCondition?: OutlineReviewSearchConditionModel) => void;
  searchDetail: (id: string) => void;

  searchCondition: OutlineReviewSearchConditionModel;
  setSearchCondition: React.Dispatch<
    SetStateAction<OutlineReviewSearchConditionModel>
  >;
  pagination: TablePaginationConfig;
  setPagination: React.Dispatch<SetStateAction<TablePaginationConfig>>;
  handleChange: (pagination: TablePaginationConfig) => void;
}

const initOutlineReviewContext: OutlineReviewContextInterface = {
  isLoadingList: false,
  isLoadingDetail: false,

  listThesis: [],
  setListThesis: () => null,

  thesisDetail: null,
  setThesisDetail: () => null,

  openAddNewOutlineReviewModal: false,
  setOpenAddNewOutlineReviewModal: () => null,
  openEditOutlineReviewModal: false,
  setOpenEditOutlineReviewModal: () => null,

  search: () => {},
  searchDetail: () => {},
  searchCondition: {},
  setSearchCondition: () => null,
  pagination: {},
  setPagination: () => null,
  handleChange: () => {},
};

export const OutlineReviewContext = createContext(initOutlineReviewContext);

export const OutlineReviewProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const { user } = useContext(AuthContext);
  const [listThesis, setListThesis] = useState<ThesisModel[]>([]);
  const [thesisDetail, setThesisDetail] = useState<ThesisModel | null>(null);
  const [openAddNewOutlineReviewModal, setOpenAddNewOutlineReviewModal] =
    useState<boolean>(false);
  const [openEditOutlineReviewModal, setOpenEditOutlineReviewModal] =
    useState<boolean>(false);

  /**
   * search list OutlineReview mutation
   */
  const searchMutaion = useMutation(ThesisService.searchByCouncilId, {
    onSuccess: (data: SearchResponseModel<ThesisModel[]>) => {
      if (data) {
        setListThesis(data.data as ThesisModel[]);
        setPagination((pagination) => {
          return {
            ...pagination,
            total: data.total,
          };
        });
      }
    },
  });

  /**
   * search OutlineReview detail mutation
   */
  const searchDetailMutation = useMutation(ThesisService.getThesisById, {
    onSuccess: (data: ThesisModel | null) => {
      if (data != null) {
        setThesisDetail(data);
      }
    },
  });

  const [searchCondition, setSearchCondition] =
    useState<OutlineReviewSearchConditionModel>({});
  const [pagination, setPagination, handleChange] =
    usePagination<OutlineReviewSearchConditionModel>(
      searchMutaion.mutate,
      searchCondition
    );

  const search = (): void => {
    searchMutaion.mutate({
      page: 1,
      pageSize: pagination.pageSize,
      searchCondition: { ...searchCondition, councilId: user?.userId },
    });
  };

  const searchDetail = (id: string): void => {
    searchDetailMutation.mutate(id);
  };

  return (
    <OutlineReviewContext.Provider
      value={{
        isLoadingList: searchMutaion.isLoading,
        isLoadingDetail: searchDetailMutation.isLoading,

        listThesis,
        setListThesis,

        thesisDetail,
        setThesisDetail,

        openAddNewOutlineReviewModal,
        setOpenAddNewOutlineReviewModal,
        openEditOutlineReviewModal,
        setOpenEditOutlineReviewModal,

        search,
        searchDetail,

        searchCondition,
        setSearchCondition,
        pagination,
        setPagination,
        handleChange,
      }}
    >
      {children}
    </OutlineReviewContext.Provider>
  );
};
