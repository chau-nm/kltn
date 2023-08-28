import { Col, Row, Select, Table, Typography, message } from "antd";
import { useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { dateTimeDisplay } from "~/common/util";
import ButtonCommon from "~/components/common/ButtonCommon";
import ModalCommon from "~/components/common/ModalCommon";
import AuthConstants from "~/constants/authConstants";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import * as UserService from "~/services/userServices";
import * as ReviewerService from "~/services/thesisReviewerService";
import CommonConstants from "~/constants/commonConstants";
import { type ColumnType } from "antd/es/table";

const CriticalAssessmentModal = (): JSX.Element => {
  const [isEditCAPersonMode, setIsEditCAPersonMode] = useState(false);
  const [caPerson, setCaPerson] = useState<string>();

  const {
    isOpenCriticalAssessmentModal,
    setIsOpenCriticalAssessmentModal,
    thesis,
    setIsOpenThesisDetailModal,
  } = useContext(ThesisConsoleContext);

  const handleClose = (): void => {
    setIsOpenCriticalAssessmentModal(false);
  };

  const { data: teachers } = useQuery(
    ["load-teacher-select"],
    async () =>
      await UserService.getUserByRole(AuthConstants.AUTH_ROLES.TEACHER)
  );

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

  useEffect(() => {
    setCaPerson(thesis?.reviewers![0].marker ?? "");
  }, []);

  const handleSaveCriticalAssessmentPerson = (): void => {
    if (!thesis?.id || !caPerson) {
      console.log(thesis?.id);
      return;
    }
    insertUserReviewerMutation.mutate({
      thesisId: thesis?.id,
      userId: caPerson,
    });
    setIsEditCAPersonMode(false);
  };

  const insertUserReviewerMutation = useMutation(
    ReviewerService.insertUserReviewer,
    {
      onSuccess: (data: ReviewerModel) => {
        if (data) {
          void message.success("Thêm người phản biện thành công");
        }
      },
    }
  );

  const filterOptions = (input: string, option: any): boolean => {
    return (option?.label?.toString().toLowerCase() ?? "").includes(
      input.toLowerCase()
    );
  };

  const reviewerCalendarStartTime = thesis?.reviewCalendar?.startAt;
  const reviewerCalendarEndTime = thesis?.reviewCalendar?.endAt;

  const reviewers =
    teachers?.filter((teacher) => teacher.userId === caPerson) ?? [];

  return (
    <ModalCommon
      title={"Nội dung phản biện"}
      open={isOpenCriticalAssessmentModal}
      onCancel={handleClose}
      footer={[
        <ButtonCommon key={1} value="Đóng" />,
        <ButtonCommon key={2} value="Thêm phản biện" />,
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
            {isEditCAPersonMode ? (
              <Select
                style={{ width: 300 }}
                showSearch
                onChange={(value) => {
                  setCaPerson(value);
                }}
                placeholder="Nhập mã số giảng viên"
                filterOption={filterOptions}
                options={[
                  ...(teachers?.map((teacher) => {
                    return {
                      value: teacher.userId,
                      label: `${teacher.fname ?? ""} - ${
                        teacher.username ?? ""
                      }`,
                    };
                  }) ?? []),
                ]}
              />
            ) : reviewers?.length > 0 ? (
              reviewers[0].fname
            ) : (
              "Chưa thêm phản biện"
            )}
          </Col>
          <Col>
            {isEditCAPersonMode ? (
              <>
                <span
                  className="text-red-400 select-none cursor-pointer hover:text-red-500 duration-300 mx-3"
                  onClick={() => {
                    setIsEditCAPersonMode(false);
                  }}
                >
                  Hủy
                </span>
                <span
                  className="text-green-700 select-none cursor-pointer hover:text-green-500 duration-300 mx-3"
                  onClick={handleSaveCriticalAssessmentPerson}
                >
                  Lưu
                </span>
              </>
            ) : (
              <span
                className="text-blue-400 select-none cursor-pointer hover:text-blue-500 duration-300"
                onClick={() => {
                  setIsEditCAPersonMode(true);
                }}
              >
                Chỉnh sửa
              </span>
            )}
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
    </ModalCommon>
  );
};

export default CriticalAssessmentModal;
