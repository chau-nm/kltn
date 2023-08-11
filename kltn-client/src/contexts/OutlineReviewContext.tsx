import { PaginationProps, TablePaginationConfig } from "antd";
import { PaginationType } from "antd/es/transfer/interface";
import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useMutation } from "react-query";
import usePagination from "~/hook/usePagination";
import * as ThesisService from "~/services/thesisService";
import * as OutlineReviewService from "~/services/OutlineReviewServices";
import { AuthContext } from "./AuthContext";

interface OutlineReviewContextInterface {
  isLoadingList: boolean;
  isLoadingDetail: boolean;

  OutlineReviews: ThesisModel[];
  setOutlineReviews: React.Dispatch<SetStateAction<ThesisModel[]>>;
  OutlineReviewDetail: ThesisModel | null;
  setOutlineReviewDetail: React.Dispatch<SetStateAction<ThesisModel | null>>;

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

  OutlineReviews: [],
  setOutlineReviews: () => null,
  OutlineReviewDetail: null,
  setOutlineReviewDetail: () => null,

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
  const [OutlineReviews, setOutlineReviews] = useState<ThesisModel[]>([]);
  const [OutlineReviewDetail, setOutlineReviewDetail] =
    useState<ThesisModel | null>(null);
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
        setOutlineReviews(data.data as ThesisModel[]);
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
      if (data) {
        setOutlineReviewDetail(data);
      }
    },
  });

  const [searchCondition, setSearchCondition] =
    useState<OutlineReviewSearchConditionModel>({});
  const [pagination, setPagination, handleChange] =
    usePagination<OutlineReviewSearchConditionModel>(
      searchMutaion.mutate,
      searchCondition as OutlineReviewSearchConditionModel
    );

  const search = () => {
    searchMutaion.mutate({
      page: 1,
      pageSize: pagination.pageSize,
      searchCondition: { ...searchCondition, councilId: user?.userId },
    });
  };

  const searchDetail = (id: string) => {
    searchDetailMutation.mutate(id);
  };

  return (
    <OutlineReviewContext.Provider
      value={{
        isLoadingList: searchMutaion.isLoading,
        isLoadingDetail: searchDetailMutation.isLoading,

        OutlineReviews,
        OutlineReviewDetail,
        setOutlineReviewDetail,

        setOutlineReviews,
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
