import { Button, Row, Space } from "antd";
import ButtonCustom from "~/components/common/ButtonCustom";
import AddNewNotificationModal from "~/components/notification-console-page/AddNewNotificationModal";
import NotificationSearchForm from "~/components/notification-console-page/NotificationSearchForm";
import NotificationTableResult from "~/components/notification-console-page/NotificationTableResult";
import { NotificationConsoleProvider } from "~/contexts/notification-console-context";

const NotificationConsolePage = (): JSX.Element => {
  return (
    <Space direction="vertical" className="w-full p-10">
      <NotificationConsoleProvider>
        <NotificationSearchForm />
        <NotificationTableResult />
        <AddNewNotificationModal />
      </NotificationConsoleProvider>
    </Space>
  );
};

export default NotificationConsolePage;
