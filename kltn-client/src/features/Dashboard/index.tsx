import { useQuery } from "react-query";
import * as NotificationService from "~/services/notificationServices";
import LoadingPage from "../LoadingPage";
import PageNotFounded from "../PageNotFounded";
import { useEffect } from "react";
import CardCommon from "~/components/common/CardCommon";
import { Col, Row, Space, Typography } from "antd";
import { LineOutlined, SendOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import path from "~/constants/path";
import { dateTimeDisplay } from "~/common/util";

const DashboardPage = (): JSX.Element => {
  const { data, isLoading, isError } = useQuery(["notifications"], async () => {
    const data = await NotificationService.search({ page: 1, pageSize: 10 });
    return data;
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <PageNotFounded />;
  }

  return (
    <CardCommon
        title= "Thông báo"
    >
      {data?.data &&
        data.data.map((notify, index) => {
          return (
            <Link
              to={`${path.NOTIFICATION_DETAIL}/${notify.id}`}
              key={index}
              className="p-2 block cursor-pointer w-full rounded hover:bg-gray-200 duration-300 my-2 "
            >
              <Row justify={"space-between"}>
                <Col className="flex items-center">
                  <SendOutlined className="mr-2" />
                  {notify.title}
                </Col>
                <Col>
                  <Typography.Text>Cập nhật: {dateTimeDisplay(new Date(notify.updatedAt as number))}</Typography.Text>
                </Col>
              </Row>
            </Link>
          );
        })}
    </CardCommon>
  );
};

export default DashboardPage;
