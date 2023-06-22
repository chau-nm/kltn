import { Button, Row, Space } from "antd";
import { useContext, useEffect } from "react";
import ButtonCommon from "~/components/common/ButtonCommon";
import AddNewNotificationModal from "~/components/notification-console-page/AddNewNotificationModal";
import NotificationSearchForm from "~/components/notification-console-page/NotificationSearchForm";
import NotificationTableResult from "~/components/notification-console-page/NotificationTableResult";
import {
  NotificationConsoleContext,
  NotificationConsoleProvider,
} from "~/contexts/notification-console-context";
import * as NotificationService from "~/services/notification-service";

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
