import { LineOutlined } from "@ant-design/icons";
import { Space } from "antd";
import NotifyModel from "~/models/notify-model";

type NotificationProps = {
    notify: NotifyModel
}

const Notification = ({notify} : NotificationProps) : JSX.Element => {
    return (
        <Space className="p-2 cursor-pointer w-full rounded hover:bg-gray-200 duration-300 text-lg my-2">
            <LineOutlined />{notify.notifyTitle}
        </Space>
    )
}

export default Notification;