import { Layout, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import styles from "~/assets/styles/ConsoleLayout.module.scss";
import Logo from "./Logo";
import ConsoleVerticalNavigation from "~/layouts/ConsoleLayout/ConsoleVerticalNavigation";
import { Suspense } from "react";
import LoadingPage from "~/features/LoadingPage";
import { useLocation } from "react-router-dom";
import ConsoleLayoutConstants from "~/constants/consoleLayoutConstants";

const ConsoleLayout = ({ children }: React.PropsWithChildren): JSX.Element => {

  const location = useLocation();

  const title = ConsoleLayoutConstants.MENU_LIST.filter(menu => menu.to === location.pathname);

  return (
    <Layout>
      <Sider className={styles.sider}>
        <ConsoleVerticalNavigation />
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <Typography.Text className={styles.title}>{title[0].title}</Typography.Text>
          <Logo />
        </Header>
        <Content>
          <Suspense fallback={<LoadingPage />}>{children}</Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ConsoleLayout;
