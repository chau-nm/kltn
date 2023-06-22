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
import * as NotificationService from "~/services/notification-service";

interface NotificationConsoleContextInterface {
  notifications: NotificationModel[];
  setNotifications: React.Dispatch<SetStateAction<NotificationModel[]>>;
  openAddNewNotificationModal: boolean;
  setOpenAddNewNotificationModal: React.Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
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
  notifications: [],
  setNotifications: () => null,
  openAddNewNotificationModal: false,
  setOpenAddNewNotificationModal: () => null,
  isLoading: false,
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
        notifications,
        setNotifications,
        openAddNewNotificationModal,
        setOpenAddNewNotificationModal,
        isLoading: searchMutaion.isLoading,
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
