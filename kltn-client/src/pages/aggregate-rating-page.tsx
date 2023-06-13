import { Button, Carousel } from "antd";
import PageLayout from "~/components/common/PageLayout";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Fragment, useEffect, useRef, useState } from "react";
import { CarouselRef } from "antd/lib/carousel";
import NotificationPage from "./notification-page";

const fakeData = [
  {
    author: "Nguyễn Văn Dũ",
    content: [
      "Cần chỉnh sửa tên đề tài cho hợp lý hơn",
      "Cần chỉnh sửa Nội dungg cho hợp lý hơn",
      "Trùng đề tài với khóa luận tốt nghiệp xây dựng hệ thống bán hành khóa 2019",
    ],
  },
  {
    author: "Trần Thị Thanh Nga",
    content: [
      "Cần chỉnh sửa tên đề tài cho hợp lý hơn",
      "Cần chỉnh sửa Nội dungg cho hợp lý hơn",
      "Trùng đề tài với khóa luận tốt nghiệp xây dựng hệ thống bán hành khóa 2020",
      "Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem",
    ],
  },
  {
    author: "Khương Hải Châu",
    content: [
      "Cần chỉnh sửa tên đề tài cho hợp lý hơn",
      "Cần chỉnh sửa Nội dungg cho hợp lý hơn",
      "Trùng đề tài với khóa luận tốt nghiệp xây dựng hệ thống bán hành khóa 2020",
      "Trùng đề tài với khóa luận tốt nghiệp xây dựng hệ thống bán hành khóa 2020",
      "Trùng đề tài với khóa luận tốt nghiệp xây dựng hệ thống bán hành khóa 2020",
      "Trùng đề tài với khóa luận tốt nghiệp xây dựng hệ thống bán hành khóa 2020",
      "Trùng đề tài với khóa luận tốt nghiệp xây dựng hệ thống bán hành khóa 2020",
      "Trùng đề tài với khóa luận tốt nghiệp xây dựng hệ thống bán hành khóa 2020",
      "Trùng đề tài với khóa luận tốt nghiệp xây dựng hệ thống bán hành khóa 2020",
      "Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem",
    ],
  },
];
const AggregateRatingPage = () => {
  const carouselEvaluateRef = useRef<CarouselRef>(null);
  const [numEvaluate, setNumEvaluate] = useState<number>(fakeData.length);
  const [indexEvaluate, setIndexEvaluate] = useState<number>(1);
  useEffect(() => {
    console.log(carouselEvaluateRef.current);
  }, [carouselEvaluateRef]);

  const onNextEvaluate = () => {
    if (carouselEvaluateRef.current) {
      carouselEvaluateRef.current.next();
    }
  };

  const onPrevEvaluate = () => {
    if (carouselEvaluateRef.current) {
      carouselEvaluateRef.current.prev();
    }
  };

  const handleCarouselChange = (next: number) => {
    setIndexEvaluate(next);
  };

  return (
    <PageLayout pageTitle="Đề cương" showTitle>
      <div className="bg-white h-full flex justify-around items-center p-2 mt-2 ml-2 mb-5 ">
        <Button
          type="primary"
          shape="circle"
          className="flex items-center justify-center text-slate-400 border-slate-400"
          onClick={onPrevEvaluate}
        >
          <ArrowLeftOutlined />
        </Button>
        <div className="border-solid rounded-sm border-slate-100 border-2 p-5 w-[90%] shadow-md shadow-slate-400">
          <NotificationPage data="adnakdjakdja"></NotificationPage>
          <div className="w-full mt-4">
            <div className="w-full font-bold font text-lg mb-3">
              Đánh giá từ hội đồng
            </div>
            <div className="w-full font-bold font text-sm mb-3">
              Số lượng đánh giá {indexEvaluate}/{numEvaluate}
            </div>
            <div className="flex items-center justify-around">
              <Button
                type="primary"
                shape="circle"
                className="flex items-center justify-center text-slate-400 border-slate-400"
                onClick={onPrevEvaluate}
              >
                <ArrowLeftOutlined />
              </Button>

              <div className="w-4/5 border-solid rounded-sm border-slate-50 border-2 px-5 shadow-md shadow-slate-400">
                <Carousel
                  dotPosition={"bottom"}
                  ref={carouselEvaluateRef}
                  beforeChange={(prev, next) => handleCarouselChange(next + 1)}
                >
                  {fakeData.map((evaluate, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="font-bold mb-5">{evaluate.author}</div>
                        <ol>
                          {evaluate.content.map((item, indexItem) => {
                            return (
                              <li className="mb-1" key={indexItem}>
                                {item}
                              </li>
                            );
                          })}
                        </ol>
                      </Fragment>
                    );
                  })}
                </Carousel>
              </div>
              <div className="cursor-pointer">
                <Button
                  type="primary"
                  shape="circle"
                  className="flex items-center justify-center text-slate-400 border-slate-400"
                  onClick={onNextEvaluate}
                >
                  <ArrowRightOutlined />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Button
          type="primary"
          shape="circle"
          className="flex items-center justify-center text-slate-400 border-slate-400"
          onClick={onNextEvaluate}
        >
          <ArrowRightOutlined />
        </Button>
      </div>

      <div>
        <div className="w-full font-bold font text-lg mb-3">
          Tổng hợp đánh giá từ hội đồng
        </div>
        <div className="w-full border mb-3">
          <Editor
            wrapperClassName="wrapper-class"
            editorClassName="p-2 h-44"
            toolbarClassName="toolbar-class bg-slate-50"
            placeholder="Nhập nội dung đánh giá"
          />
        </div>
        <div className="w-full flex justify-end">
          <Button>Bước kế</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default AggregateRatingPage;
