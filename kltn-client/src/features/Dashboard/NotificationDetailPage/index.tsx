import { PaperClipOutlined } from "@ant-design/icons";
import { Row, Space, Typography } from "antd";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { dateTimeDisplay, getFileNameFromUrl } from "~/common/util";
import CardCommon from "~/components/common/CardCommon";
import ReactQuillPreviewCommon from "~/components/common/ReactQuillPreviewCommon";
import LoadingPage from "~/features/LoadingPage";
import PageNotFounded from "~/features/PageNotFounded";
import * as NotificationService from "~/services/notificationServices";

const NotificationDetailPage = (): JSX.Element => {
  const { id } = useParams();

  const { data, isLoading } = useQuery(["notification-detail"], async () => {
    const notificationDetail = await NotificationService.searchDetail(
      id as string
    );
    return notificationDetail;
  });

  if (data === null) {
    return <PageNotFounded />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }
  console.log(data);

  return (
    <CardCommon title={data?.title as string}>
      <ReactQuillPreviewCommon content={data?.content as string} />
      {data?.attachmentUrls != null && data?.attachmentUrls.length > 0 && (
        <div className="border-t py-3">
          <Typography.Text className="font-bold">
            Danh sách file đính kèm
          </Typography.Text>
          {data?.attachmentUrls?.map((url, index) => {
            return (
              <Space key={index} className="block">
                <a href={url}>
                  <PaperClipOutlined /> {getFileNameFromUrl(url)}
                </a>
              </Space>
            );
          })}
        </div>
      )}
      <Row justify={"end"}>
        <Typography.Text type="secondary" italic>
          Cập nhật: {dateTimeDisplay(new Date(data?.updatedAt as number))}
        </Typography.Text>
      </Row>
    </CardCommon>
  );
};

export default NotificationDetailPage;
