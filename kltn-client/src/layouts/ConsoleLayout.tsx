import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import styles from '~/assets/styles/ConsoleLayout.module.scss';
import Logo from "~/components/console-layout/Logo";
import ConsoleVerticalNavigation from "~/components/console-layout/ConsoleVerticalNavigation";

const ConsoleLayout = ({ children }: React.PropsWithChildren): JSX.Element => {
  return (
    <Layout className="layout">
      <Sider className={styles.sider}>
        <ConsoleVerticalNavigation />
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <Logo />
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default ConsoleLayout;
