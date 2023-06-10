import PageLayout from "~/components/common/PageLayout";
import React, { useState } from "react";
import { Button, message, Steps } from "antd";
import NotificationPage from "./notification-page";

const steps = [
  {
    title: "Thông báo đăng ký",
    content: "First-content",
  },
  {
    title: "Tiến hành xét duyệt",
    content: "First-content",
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
const ProgressPage = (props: any): JSX.Element => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  //   const contentStyle: React.CSSProperties = {
  //     lineHeight: "260px",
  //     textAlign: "center",
  //     color: token.colorTextTertiary,
  //     backgroundColor: token.colorFillAlter,
  //     borderRadius: token.borderRadiusLG,
  //     border: `1px dashed ${token.colorBorder}`,
  //     marginTop: 16,
  //   };
  return (
    <PageLayout pageTitle="Quản lý tiến trình luận văn khóa 2019" showTitle>
      <Steps
        className="mt-8"
        type="default"
        labelPlacement="vertical"
        current={current}
        items={items}
        responsive
      />
      <div
        //   style={contentStyle}
        className="mt-8"
      >
        {steps[current].content}
      </div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
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
    </PageLayout>
  );
};

export default ProgressPage;
