import NewsBanner from "~/components/home-page/NewsBanner";
import NotificationCard from "~/components/home-page/NotificationCard";
import { NotifyData } from "~/fakedata";
import NewsModel from "~/models/news-model";
import NotificationPage from "./notification-page";
import { useState } from "react";
import { Button, Collapse, Steps, message } from "antd";
import PageLayout from "~/components/common/PageLayout";

const { Panel } = Collapse;

const steps = [
  {
    title: "Thông báo đăng ký",
    content: "First-content",
  },
  {
    title: "Tiến hành xét duyệt",
    content: (
      <>
        <Collapse accordion>
          <Panel header="Thông báo chỉnh sửa luận văn lần 1" key="1">
            <NotificationPage />
          </Panel>
          <Panel header="Điều chỉnh thời gian deadline nộp đề cương" key="2">
            <NotificationPage />
          </Panel>
          <Panel header="Các điểm cần lưu ý khi nộp đề cương" key="3">
            <NotificationPage />
          </Panel>
        </Collapse>
      </>
    ),
  },
  {
    title: "Tổng kết xét duyệt",
    content: "First-content",
  },
  {
    title: "Tiến hành luận văn",
    content: "First-content",
  },
  {
    title: "Phản biện luận văn",
    content: "First-content",
  },
  {
    title: "Bảo vệ luận văn",
    content: <NotificationPage></NotificationPage>,
  },
  //   {
  //     title: "Second",
  //     content: <NotificationPage></NotificationPage>,
  //   },
  //   {
  //     title: "Last",
  //     content: "Last-content",
  //   },
];

const HomePage = (): JSX.Element => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  return (
    <>
      <PageLayout pageTitle="Home" showTitle>
        <NewsBanner slides={[] as NewsModel[]} />
        <Steps
          className="mt-8"
          type="default"
          labelPlacement="vertical"
          current={current}
          items={items}
          responsive
        />
        <PageLayout
          pageTitle="Thông báo trong giai đoạn"
          showTitle
          isOnHomepage
        >
          {steps[current].content}
        </PageLayout>
        <div className="mt-6 mb-6">
          {current < steps.length - 1 && (
            <Button
              className="text-slate-950 border-slate-600"
              type="primary"
              onClick={() => next()}
            >
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
        <NotificationCard notifications={NotifyData} />
      </PageLayout>
    </>
  );
};

export default HomePage;
