import Header from "~/components/main-layout/Header";
import { Row, Col } from "antd";
import VerticalNavigation from "~/components/main-layout/VerticalNavigation";
import React, { useContext, useEffect } from "react";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <Row className="2xl:w-[1380px] xl:w-full lg:w-full md:w-full sm:w-full m-auto flex-nowrap">
        <Col span={6} className="px-3">
          <VerticalNavigation />
        </Col>
        <Col span={18} className="px-3">
          {children}
        </Col>
      </Row>
    </>
  );
};

export default MainLayout;
