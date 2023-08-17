import { Space } from "antd";
import { NotificationConsoleProvider } from "~/contexts/NotificationConsoleContext";
import AddNewNotificationModal from "./AddNewNotificationModal";
import NotificationSearchForm from "./NotificationSearchForm";
import NotificationTableResult from "./NotificationTableResult";
import EditNotificationModal from "./EditNotificationModal";

const NotificationConsolePage = (): JSX.Element => {
  return (
    <Space direction="vertical" className="w-full p-10">
      <NotificationConsoleProvider>
        <NotificationSearchForm />
        <NotificationTableResult />
        <AddNewNotificationModal />
        <EditNotificationModal />
      </NotificationConsoleProvider>
    </Space>
  );
};

export default NotificationConsolePage;
