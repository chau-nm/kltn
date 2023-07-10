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
import * as NotificationService from "~/services/notificationServices";

interface NotificationConsoleContextInterface {
  isLoadingList: boolean;
  isLoadingDetail: boolean;

  notifications: NotificationModel[];
  setNotifications: React.Dispatch<SetStateAction<NotificationModel[]>>;
  notificationDetail: NotificationModel | null;
  setNotificationDetail: React.Dispatch<SetStateAction<NotificationModel | null>>;
  
  openAddNewNotificationModal: boolean;
  setOpenAddNewNotificationModal: React.Dispatch<SetStateAction<boolean>>;
  openEditNotificationModal: boolean;
  setOpenEditNotificationModal: React.Dispatch<SetStateAction<boolean>>;

  search: (searchCondition?: NotificationSearchConditionModel) => void;
  searchDetail: (id : string) => void;

  searchCondition: NotificationSearchConditionModel;
  setSearchCondition: React.Dispatch<
    SetStateAction<NotificationSearchConditionModel>
  >;
  pagination: TablePaginationConfig;
  setPagination: React.Dispatch<SetStateAction<TablePaginationConfig>>;
  handleChange: (pagination: TablePaginationConfig) => void;

}

const initNotificationConsoleContext: NotificationConsoleContextInterface = {
  isLoadingList: false,
  isLoadingDetail: false,

  notifications: [],
  setNotifications: () => null,
  notificationDetail: null,
  setNotificationDetail: () => null,
  
  openAddNewNotificationModal: false,
  setOpenAddNewNotificationModal: () => null,
  openEditNotificationModal: false,
  setOpenEditNotificationModal: () => null,

  search: () => {},
  searchDetail: () => {},
  searchCondition: {},
  setSearchCondition: () => null,
  pagination: {},
  setPagination: () => null,
  handleChange: () => {},
};

export const NotificationConsoleContext = createContext(
  initNotificationConsoleContext
);

export const NotificationConsoleProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [notifications, setNotifications] = useState<NotificationModel[]>([]);
  const [notificationDetail, setNotificationDetail] = useState<NotificationModel | null>(null);
  const [openAddNewNotificationModal, setOpenAddNewNotificationModal] =
    useState<boolean>(false);
  const [openEditNotificationModal, setOpenEditNotificationModal] =
    useState<boolean>(false);

  /**
   * search list notification mutation
   */
  const searchMutaion = useMutation(NotificationService.search, {
    onSuccess: (data: SearchResponseModel<NotificationModel[]>) => {
      if (data) {
        setNotifications(data.data as NotificationModel[]);
        setPagination((pagination) => {
          return {
              ...pagination,
              total: data.total
          };
        });
      }
    },
  });

  /**
   * search notification detail mutation
   */
  const searchDetailMutation = useMutation(NotificationService.searchDetail, {
    onSuccess: (data : NotificationModel) => {
      if  (data) {
        setNotificationDetail(data);
      }
    }
  });

  const [searchCondition, setSearchCondition] =
    useState<NotificationSearchConditionModel>({});
  const [pagination, setPagination, handleChange] =
    usePagination<NotificationSearchConditionModel>(
      searchMutaion.mutate,
      searchCondition as NotificationSearchConditionModel
    );

  const search = () => {
    searchMutaion.mutate({
      page: 1,
      pageSize: pagination.pageSize,
      searchCondition,
    });
  };

  const searchDetail = (id : string) => {
    searchDetailMutation.mutate(id);
  }

  return (
    <NotificationConsoleContext.Provider
      value={{
        isLoadingList: searchMutaion.isLoading,
        isLoadingDetail: searchDetailMutation.isLoading,
        
        notifications,
        notificationDetail,
        setNotificationDetail,
        
        setNotifications,
        openAddNewNotificationModal,
        setOpenAddNewNotificationModal,
        openEditNotificationModal,
        setOpenEditNotificationModal,
        
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
    </NotificationConsoleContext.Provider>
  );
};
