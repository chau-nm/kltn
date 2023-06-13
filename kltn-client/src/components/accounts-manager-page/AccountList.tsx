import { Table } from "antd";
import { ColumnType } from "antd/es/table";
import AccountCard from "./AccountCard";
import { DeleteIconCustom, EditIconCustom } from "../common/IconCustom";
import { useNavigate } from "react-router-dom";
import path from "~/constants/path";

const columns: ColumnType<UserModel>[] = [
  {
    title: "Thông tin người dùng",
    render: (text, record, index) => {
      return (
        <AccountCard
          fname={record.fname}
          username={record.username}
          avatarUrl={record.avatarUrl}
        />
      );
    },
  },
  {
    title: "Role",
    dataIndex: "role",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "",
    render: (text, record, index) => {
      return (
        <>
          <EditIconCustom />
          <DeleteIconCustom />
        </>
      );
    },
  },
];

const data: UserModel[] = [
  {
    avatarUrl: "",
    username: "light1234",
    email: "light@gamil.com",
    fname: "Nguyễn Minh Châu",
    password: "abc12345",
    role: 0,
  },
  {
    avatarUrl: "",
    username: "light1234",
    email: "light@gamil.com",
    fname: "Nguyễn Minh Châu",
    password: "abc12345",
    role: 1,
  },
];

const AccountList = (): JSX.Element => {
  return <Table columns={columns} dataSource={data} />;
};

export default AccountList;
