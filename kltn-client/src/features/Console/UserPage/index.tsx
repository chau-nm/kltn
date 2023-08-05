import { Space } from "antd";
import { UserConsoleProvider } from "~/contexts/UserConsoleContext";
import UserSearchForm from "./UserSearchForm";
import UserTableResult from "./UserTableResult";
import EditUserModal from "./EditUserModal";
import AddNewUserModal from "./AddNewUserModal";

const UserPage = (): JSX.Element => {
  return (
    <Space direction="vertical" className="w-full p-10">
      <UserConsoleProvider>
        <UserSearchForm />
        <UserTableResult />
        <AddNewUserModal />
        <EditUserModal />
      </UserConsoleProvider>
    </Space>
  );
};

export default UserPage;