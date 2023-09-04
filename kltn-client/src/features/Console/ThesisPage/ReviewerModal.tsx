import { Col, Row, Table, Typography, message } from "antd";
import { type ColumnType } from "antd/es/table";
import { useContext, useState } from "react";
import { useMutation } from "react-query";
import { dateTimeDisplay } from "~/common/util";
import TeacherTargetModal from "~/components/TeacherTargetModal";
import ButtonCommon from "~/components/common/ButtonCommon";
import ModalCommon from "~/components/common/ModalCommon";
import CommonConstants from "~/constants/commonConstants";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import * as ReviewerService from "~/services/thesisReviewerService";

const CriticalAssessmentModal = (): JSX.Element => {
  const [openAddCouncilModal, setOpenAddCouncilModal] = useState(false);

  const {
    isOpenCriticalAssessmentModal,
    setIsOpenCriticalAssessmentModal,
    thesis,
    searchDetail,
    setIsOpenThesisDetailModal,
    setOpenPreviewReviewPDF,
  } = useContext(ThesisConsoleContext);

  const handleClose = (): void => {
    setIsOpenCriticalAssessmentModal(false);
  };

  const columns: Array<ColumnType<ReviewerScoreModel>> = [
    {
      title: "STT",
      render: (row, record, index) => {
        return index + 1;
      },
    },
    {
      title: "Mã số sinh viên",
      render: (row, record, index) => {
        return record.student?.username;
      },
    },
    {
      title: "Họ và tên",
      render: (row, record, index) => {
        return record.student?.fname;
      },
    },
    {
      title: "Thang điểm",
      render: (row, record, index) => {
        return record.score;
      },
    },
  ];

  const insertUserReviewerMutation = useMutation(
    ReviewerService.insertUserReviewer,
    {
      onSuccess: (data: ReviewerModel) => {
        if (data) {
          void message.success("Thêm người phản biện thành công");
          searchDetail(data.thesisId ?? "");
        }
      },
    }
  );

  const handleAddCouncil = (lecturers: LecturerModel[]): void => {
    insertUserReviewerMutation.mutate({
      thesisId: thesis?.id ?? "",
      userId: lecturers[0].userId ?? "",
    });
  };

  const reviewerCalendarStartTime = thesis?.reviewCalendar?.startAt;
  const reviewerCalendarEndTime = thesis?.reviewCalendar?.endAt;

  const reviewers = thesis?.reviewers;

  return (
    <ModalCommon
      title={"Nội dung phản biện"}
      open={isOpenCriticalAssessmentModal}
      onCancel={handleClose}
      footer={[
        <ButtonCommon key={1} value="Đóng" onClick={handleClose} />,
        <ButtonCommon
          key={2}
          value="Preview PDF"
          onClick={() => {
            setOpenPreviewReviewPDF(true);
          }}
        />,
        <ButtonCommon
          key={3}
          value="Thêm phản biện"
          onClick={() => {
            setOpenAddCouncilModal(true);
          }}
        />,
      ]}
    >
      <div className="min-w-[1000px]">
        <Row justify={"space-between"}>
          <Col className="text-base">
            <strong> Đề tài:</strong> {thesis?.topic}
          </Col>
          <Col>
            <span
              className="text-blue-400 select-none cursor-pointer hover:text-blue-500 duration-300"
              onClick={() => {
                setIsOpenThesisDetailModal(true);
              }}
            >
              Xem chi tiết
            </span>
          </Col>
        </Row>
        <Row gutter={30} className="mt-4" justify={"space-between"}>
          <Col className="text-base">
            <strong> Lịch phản biện: </strong>
            {reviewerCalendarEndTime && reviewerCalendarStartTime
              ? `Từ ${dateTimeDisplay(
                  new Date(reviewerCalendarStartTime)
                )} đến ${dateTimeDisplay(new Date(reviewerCalendarEndTime))}`
              : "Chưa có lịch phản biện "}
          </Col>
        </Row>
        <Row gutter={30} className="mt-4" justify={"space-between"}>
          <Col className="text-base">
            <strong> Người phản biện: </strong>
            {(reviewers?.length ?? 0) > 0
              ? reviewers![0].lecturerMaker?.fname ?? ""
              : "Chưa thêm phản biện"}
          </Col>
        </Row>
        {thesis?.reviewers![0] ? (
          <>
            <div className="mt-4">
              <Typography.Text className="text-base font-bold">
                Hình thức luận văn:
              </Typography.Text>
              <Row gutter={30} justify={"start"}>
                <Col span={4}>Số trang: {thesis?.reviewers[0].pageNumber}</Col>
                <Col span={4}>
                  Số chương: {thesis?.reviewers[0].chapterNumber}
                </Col>
                <Col span={4}>Số bảng: {thesis?.reviewers[0].tableNumber}</Col>
                <Col span={4}>
                  Số biểu đồ: {thesis?.reviewers[0].chartNumber}
                </Col>
                <Col span={4}>
                  Số bản vẽ: {thesis?.reviewers[0].drawingBoardNumber}
                </Col>
                <Col span={4}>
                  Số hình ảnh: {thesis?.reviewers[0].imageNumber}
                </Col>
                <Col span={4}>
                  Số tài liệu tham khảo: {thesis?.reviewers[0].documentNumber}
                </Col>
                <Col span={4}>
                  Phần mền tính toán:{" "}
                  {thesis?.reviewers[0].calculationSoftwareNumber}
                </Col>
                <Col span={24}>Bố cục: {thesis?.reviewers[0].layout}</Col>
                <Col span={24}>Hành văn: {thesis?.reviewers[0].writing}</Col>
                <Col span={24}>
                  Sử dụng thuật ngữ chuyên môn:{" "}
                  {thesis?.reviewers[0].technicalTerms}
                </Col>
              </Row>
            </div>
            <div className="mt-4">
              <Typography.Text className="text-base font-bold">
                Những ưu điểm của luận văn
              </Typography.Text>
              <Row>
                <Col span={24}>
                  - Nội dung: <br />
                  {thesis?.reviewers[0].advantage}
                </Col>
                <Col span={24}>
                  - Kết quả, kết luận đề tài và triển vọng đề tài:
                  <br />
                  {thesis?.reviewers[0].limitation}
                </Col>
              </Row>
            </div>
            <div className="mt-4">
              <Typography.Text className="text-base font-bold">
                Những phần thiếu sót chính của luận văn:
              </Typography.Text>
              <div>{thesis?.reviewers[0].conclude}</div>
            </div>
            <div className="mt-4">
              <Typography.Text className="text-base font-bold mr-4">
                Đề nghị:
              </Typography.Text>
              <span>
                {
                  CommonConstants.REVIEWER_SUGGESTIONS[
                    thesis?.reviewers[0].suggestion ?? 0
                  ]
                }
              </span>
              <div></div>
            </div>
            <div className="mt-4">
              <Typography.Text className="text-base font-bold">
                Câu hỏi sinh viên phải trả lời trước hội đồng:
              </Typography.Text>
            </div>
            <div className="mt-5">
              <Table
                columns={columns}
                dataSource={thesis?.reviewers[0].reviewerScores}
              />
            </div>
          </>
        ) : (
          "Chưa đánh giá"
        )}
      </div>
      <TeacherTargetModal
        isSingle={true}
        isOpen={openAddCouncilModal}
        setIsOpen={setOpenAddCouncilModal}
        handleFinish={handleAddCouncil}
      />
    </ModalCommon>
  );
};

export default CriticalAssessmentModal;
