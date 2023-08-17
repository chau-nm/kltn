import { Col, Row } from "antd";
import React, { Suspense } from "react";
import Header from "~/layouts/DashboardLayout/Header";
import VerticalNavigation from "./VerticalNavigation";
import LoadingPage from "~/features/LoadingPage";

const DashboardLayout = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  return (
    <>
      <Header />
      <Row className="2xl:w-[1380px] xl:w-full lg:w-full md:w-full sm:w-full m-auto flex-nowrap">
        <Col span={6} className="px-3">
          <VerticalNavigation />
        </Col>
        <Col span={18} className="px-3">
          <Suspense fallback={<LoadingPage />}>{children}</Suspense>
        </Col>
      </Row>
    </>
  );
};

export default DashboardLayout;
