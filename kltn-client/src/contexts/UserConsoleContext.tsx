import { PaginationProps, TablePaginationConfig } from "antd";
import { PaginationType } from "antd/es/transfer/interface";
import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { useMutation } from "react-query";
import usePagination from "~/hook/usePagination";
import * as UserService from "~/services/userServices";

interface UserConsoleContextInterface {
  isLoadingList: boolean;
  isLoadingDetail: boolean;

  users: UserModel[];
  setUsers: React.Dispatch<SetStateAction<UserModel[]>>;
  UserDetail: UserModel | null;
  setUserDetail: React.Dispatch<SetStateAction<UserModel | null>>;

  openAddNewUserModal: boolean;
  setOpenAddNewUserModal: React.Dispatch<SetStateAction<boolean>>;
  openEditUserModal: boolean;
  setOpenEditUserModal: React.Dispatch<SetStateAction<boolean>>;

  search: (searchCondition?: UserSearchConditionModel) => void;
  searchDetail: (id: string) => void;

  searchCondition: UserSearchConditionModel;
  setSearchCondition: React.Dispatch<SetStateAction<UserSearchConditionModel>>;
  pagination: TablePaginationConfig;
  setPagination: React.Dispatch<SetStateAction<TablePaginationConfig>>;
  handleChange: (pagination: TablePaginationConfig) => void;
}

const initUserConsoleContext: UserConsoleContextInterface = {
  isLoadingList: false,
  isLoadingDetail: false,

  users: [],
  setUsers: () => null,
  UserDetail: null,
  setUserDetail: () => null,

  openAddNewUserModal: false,
  setOpenAddNewUserModal: () => null,
  openEditUserModal: false,
  setOpenEditUserModal: () => null,

  search: () => {},
  searchDetail: () => {},
  searchCondition: {},
  setSearchCondition: () => null,
  pagination: {},
  setPagination: () => null,
  handleChange: () => {},
};

export const UserConsoleContext = createContext(initUserConsoleContext);

export const UserConsoleProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [UserDetail, setUserDetail] = useState<UserModel | null>(null);
  const [openAddNewUserModal, setOpenAddNewUserModal] =
    useState<boolean>(false);
  const [openEditUserModal, setOpenEditUserModal] = useState<boolean>(false);

  /**
   * search list User mutation
   */
  const searchMutaion = useMutation(UserService.search, {
    onSuccess: (data: SearchResponseModel<UserModel[]>) => {
      if (data) {
        setUsers(data.data as UserModel[]);
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
   * search User detail mutation
   */
  const searchDetailMutation = useMutation(UserService.getUSerById, {
    onSuccess: (data: UserModel | null) => {
      if (data) {
        setUserDetail(data);
      }
    },
  });

  const [searchCondition, setSearchCondition] =
    useState<UserSearchConditionModel>({});
  const [pagination, setPagination, handleChange] =
    usePagination<UserSearchConditionModel>(
      searchMutaion.mutate,
      searchCondition as UserSearchConditionModel
    );

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
    <UserConsoleContext.Provider
      value={{
        isLoadingList: searchMutaion.isLoading,
        isLoadingDetail: searchDetailMutation.isLoading,

        users,
        UserDetail,
        setUserDetail,

        setUsers,
        openAddNewUserModal,
        setOpenAddNewUserModal,
        openEditUserModal,
        setOpenEditUserModal,

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
    </UserConsoleContext.Provider>
  );
};
