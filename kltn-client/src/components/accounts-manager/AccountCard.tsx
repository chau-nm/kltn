import { Avatar } from "antd";
import {
  UserOutlined,
  MessageOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const AccountCard = (): JSX.Element => {
  return (
    <div className="w-full bg bg-neutral-50 h-20 flex items-center justify-between drop-shadow-md">
      <div className="user-infor w-1/4 flex items-center justify-around">
        <Avatar
          className="flex items-center justify-center"
          size={64}
          icon={<UserOutlined />}
        />
        <div className="infor-detail">
          <div className="user-name font-bold">Nguyễn Trần Anh</div>
          <div className="user-role">Developer</div>
        </div>
      </div>
      <div className="tools-container w-1/4  flex justify-around">
        <MessageOutlined style={{ fontSize: "32px", color: "#1B76FF" }} />
        <EditOutlined style={{ fontSize: "32px", color: "green" }} />
        <DeleteOutlined style={{ fontSize: "32px", color: "red" }} />
      </div>
    </div>
  );
};

export default AccountCard;
