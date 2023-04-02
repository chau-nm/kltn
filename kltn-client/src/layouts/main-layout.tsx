import Header from "~/components/main-layout/Header";
import { MenuContextProvider } from "~/contexts/menu.context";
import { Row, Col } from "antd";
import VerticalNavigation from "~/components/main-layout/VerticalNavigation";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <MenuContextProvider>
      <Header />
      <Row className="2xl:w-[1380px] xl:w-full lg:w-full md:w-full sm:w-full m-auto">
        <Col>
          <VerticalNavigation />
        </Col>
        <Col>{children}</Col>
      </Row>
    </MenuContextProvider>
  );
};

export default MainLayout;
