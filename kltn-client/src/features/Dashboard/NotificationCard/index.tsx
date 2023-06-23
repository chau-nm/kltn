import NotifyModel from "~/models/notify-model";
import CardCommon from "~/components/common/CardCommon";
import Notification from "./Notification";

type NotificationCardProps = {
    notifications : NotifyModel[]
}

const NotificationCard = ({notifications} : NotificationCardProps) : JSX.Element => {
    return (
        <CardCommon
            cardProps={{
                title : "Thông báo",
            }}>
                {
                    notifications.map((notify, index) => {
                        return (
                            <Notification 
                                key={index}
                                notify={notify}/>
                        )
                    })
                }
        </CardCommon>
    )
}

export default NotificationCard;