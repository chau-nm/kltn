import { type } from "os";
import CardCustom from "../common/CardCustom";
import NotifyModel from "~/models/notify-model";
import Notification from "./Notification";

type NotificationCardProps = {
  notifications: NotifyModel[];
};

const NotificationCard = ({
  notifications,
}: NotificationCardProps): JSX.Element => {
  return (
    <CardCustom
      cardProps={{
        title: "Thông báo chung",
      }}
    >
      {notifications.map((notify, index) => {
        return <Notification key={index} notify={notify} />;
      })}
    </CardCustom>
  );
};

export default NotificationCard;
