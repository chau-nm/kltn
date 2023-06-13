import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Input, message } from "antd";

import AcountManagerHead from "~/components/accounts-manager-page/AccountManagerHead";
import PageLayout from "~/components/common/PageLayout";
import CouncilList from "~/components/council-manager-page/councilList";

const { Search } = Input;

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];

const AccountsCouncilManagerPage = (): JSX.Element => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <PageLayout pageTitle="Danh sách Hội đồng" showTitle>
      <AcountManagerHead
        placeHolderSearch="Tìm kiếm hội đồng"
        titleButton="Thêm hội đồng"
      />
      <CouncilList />
    </PageLayout>
  );
};

export default AccountsCouncilManagerPage;
