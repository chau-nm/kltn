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
  isLoading: boolean;

  notifications: NotificationModel[];
  setNotifications: React.Dispatch<SetStateAction<NotificationModel[]>>;
  
  openAddNewNotificationModal: boolean;
  setOpenAddNewNotificationModal: React.Dispatch<SetStateAction<boolean>>;
  openEditNotificationModal: boolean;
  setOpenEditNotificationModal: React.Dispatch<SetStateAction<boolean>>;

  search: (searchCondition?: NotificationSearchConditionModel) => void;
  searchCondition: NotificationSearchConditionModel;
  setSearchCondition: React.Dispatch<
    SetStateAction<NotificationSearchConditionModel>
  >;
  pagination: TablePaginationConfig;
  setPagination: React.Dispatch<SetStateAction<TablePaginationConfig>>;
  handleChange: (pagination: TablePaginationConfig) => void;

}

const initNotificationConsoleContext: NotificationConsoleContextInterface = {
  isLoading: false,

  notifications: [],
  setNotifications: () => null,
  
  openAddNewNotificationModal: false,
  setOpenAddNewNotificationModal: () => null,
  openEditNotificationModal: false,
  setOpenEditNotificationModal: () => null,

  search: () => {},
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
  const [openAddNewNotificationModal, setOpenAddNewNotificationModal] =
    useState<boolean>(false);
  const [openEditNotificationModal, setOpenEditNotificationModal] =
    useState<boolean>(false);
  const searchMutaion = useMutation(NotificationService.search, {
    onSuccess: (data: SearchResponseModel<NotificationModel[]>) => {
      setNotifications(data.data as NotificationModel[]);
      setPagination((pagination) => {
        return {
            ...pagination,
            total: data.total
        };
      });
    },
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

  return (
    <NotificationConsoleContext.Provider
      value={{
        isLoading: searchMutaion.isLoading,
        
        notifications,
        
        setNotifications,
        openAddNewNotificationModal,
        setOpenAddNewNotificationModal,
        openEditNotificationModal,
        setOpenEditNotificationModal,
        
        search,
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
