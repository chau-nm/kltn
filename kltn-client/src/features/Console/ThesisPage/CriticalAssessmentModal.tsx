import { Col, DatePicker, Row, Select, Table, Typography, message } from "antd";
import { useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { v4 } from "uuid";
import { dateTimeDisplay } from "~/common/util";
import ButtonCommon from "~/components/common/ButtonCommon";
import ModalCommon from "~/components/common/ModalCommon";
import AuthConstants from "~/constants/authConstants";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import * as ThesisReportCalendarService from "~/services/thesisReportCalendarService";
import * as UserService from "~/services/userServices";
import * as CriticalAssessmentService from "~/services/criticalAssessmentService";

const CriticalAssessmentModal = () => {
  const [isEditCAPersonMode, setIsEditCAPersonMode] = useState(false);
  const [isEditCACalendarMode, setIsEditCACalendarMode] = useState(false);
  const [caPerson, setCaPerson] = useState<string>();
  const [caCalendar, setCACalendar] = useState<number>();

  const {
    isOpenCriticalAssessmentModal,
    setIsOpenCriticalAssessmentModal,
    thesis,
    setIsOpenThesisDetailModal,
  } = useContext(ThesisConsoleContext);

  const handleClose = () => {
    setIsOpenCriticalAssessmentModal(false);
  };

  const { data: teachers, isLoading: isLoadingTeachers } = useQuery(
    ["load-teacher-select"],
    () => UserService.getUserByRole(AuthConstants.AUTH_ROLES.TEACHER)
  );

  const insertThesisReportCalendarMutation = useMutation(
    ThesisReportCalendarService.insert,
    {
      onSuccess: (data: ThesisReportCalendarModel) => {
        if (data) {
          message.success("Cập nhật lịch phản biện thành công");
        } else {
          message.error("Cập nhật lịch phản biện thất bại");
        }
      },
    }
  );

  const insertUserCriticalAssessment = useMutation(
    CriticalAssessmentService.insertUser,
    {
      onSuccess: (data: ThesisReportCalendarModel) => {
        if (data) {
          message.success("Cập nhật người phản biện thành công");
        } else {
          message.error("Cập nhật người phản biện thất bại");
        }
      },
    }
  );

  const columns = [
    {
      title: "STT",
    },
    {
      title: "Mã số sinh viên",
    },
    {
      title: "Họ và tên",
    },
    {
      title: "Thang điểm",
    },
  ];

  const handleOnChangeCalendar = (value: any) => {
    setCACalendar(value.toDate().getTime());
  };

  const handleSaveCACalendar = () => {
    if (!caCalendar) {
      return;
    }
    const caCalendarRq: ThesisReportCalendarModel = {
      id: v4(),
      thesisId: thesis?.id,
      timestamp: caCalendar,
      type: 1,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
      isDeleted: false,
    };
    insertThesisReportCalendarMutation.mutate(caCalendarRq);
    setIsEditCACalendarMode(false);
  };

  const handleSaveCriticalAssessmentPerson = () => {
    if (!thesis?.id || !caPerson) {
      return;
    }
    insertUserCriticalAssessment.mutate({
      thesisId: thesis?.id,
      userId: caPerson,
    });
    setIsEditCAPersonMode(false);
  };

  const filterOptions = (input: string, option: any) => {
    return (option?.label?.toString().toLowerCase() ?? "").includes(
      input.toLowerCase()
    );
  };

  return (
    <ModalCommon
      title={"Nội dung phản biện"}
      open={isOpenCriticalAssessmentModal}
      onCancel={handleClose}
      footer={[
        <ButtonCommon value="Đóng" />,
        <ButtonCommon value="Thêm phản biện" />,
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
              onClick={() => setIsOpenThesisDetailModal(true)}
            >
              Xem chi tiết
            </span>
          </Col>
        </Row>
        <Row gutter={30} className="mt-4" justify={"space-between"}>
          <Col className="text-base">
            <strong> Lịch phản biện: </strong>
            {isEditCACalendarMode ? (
              <DatePicker
                showTime
                style={{ width: 300 }}
                onChange={handleOnChangeCalendar}
              />
            ) : caCalendar ? (
              dateTimeDisplay(new Date(caCalendar!))
            ) : (
              "Chưa có lịch phản biện "
            )}
          </Col>
          <Col>
            {isEditCACalendarMode ? (
              <>
                <span
                  className="text-red-400 select-none cursor-pointer hover:text-red-500 duration-300 mx-3"
                  onClick={() => setIsEditCACalendarMode(false)}
                >
                  Hủy
                </span>
                <span
                  className="text-green-700 select-none cursor-pointer hover:text-green-500 duration-300 mx-3"
                  onClick={handleSaveCACalendar}
                >
                  Lưu
                </span>
              </>
            ) : (
              <span
                className="text-blue-400 select-none cursor-pointer hover:text-blue-500 duration-300"
                onClick={() => setIsEditCACalendarMode(true)}
              >
                Chỉnh sửa
              </span>
            )}
          </Col>
        </Row>
        <Row gutter={30} className="mt-4" justify={"space-between"}>
          <Col className="text-base">
            <strong> Người phản biện: </strong>
            {isEditCAPersonMode ? (
              <Select
                style={{ width: 300 }}
                showSearch
                onChange={(value) => setCaPerson(value)}
                placeholder="Nhập mã số giảng viên"
                filterOption={filterOptions}
                options={[
                  ...teachers!.map((teacher) => {
                    return {
                      value: teacher.userId,
                      label: `${teacher.fname} - ${teacher.username}`,
                    };
                  }),
                ]}
              />
            ) : caPerson ? (
              caPerson
            ) : (
              "Chưa thêm phản biện"
            )}
          </Col>
          <Col>
            {isEditCAPersonMode ? (
              <>
                <span
                  className="text-red-400 select-none cursor-pointer hover:text-red-500 duration-300 mx-3"
                  onClick={() => setIsEditCAPersonMode(false)}
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
                onClick={() => setIsEditCAPersonMode(true)}
              >
                Chỉnh sửa
              </span>
            )}
          </Col>
        </Row>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold">
            Hình thức luận văn:
          </Typography.Text>
          <Row gutter={30} justify={"start"}>
            <Col span={4}>Số trang: 1</Col>
            <Col span={4}>Số chương: 1</Col>
            <Col span={4}>Số bảng: 1</Col>
            <Col span={4}>Số biểu đồ: 1</Col>
            <Col span={4}>Số bản vẽ: 1</Col>
            <Col span={4}>Số hình ảnh: 1</Col>
            <Col span={4}>Số tài liệu tham khảo: 1</Col>
            <Col span={4}>Phần mền tính toán: 1</Col>
            <Col span={24}>Bố cục: Hay</Col>
            <Col span={24}>Hành văn: Hay</Col>
            <Col span={24}>Sử dụng thuật ngữ chuyên môn: Hay</Col>
          </Row>
        </div>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold">
            Những ưu điểm của luận văn
          </Typography.Text>
          <Row>
            <Col span={24}>
              - Nội dung: <br />
              ádasd
            </Col>
            <Col span={24}>
              - Kết quả, kết luận đề tài và triển vọng đề tài:
              <br />
              ádasd
            </Col>
          </Row>
        </div>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold">
            Những phần thiếu sót chính của luận văn:
          </Typography.Text>
          <div>Abc</div>
        </div>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold mr-4">
            Đề nghị:
          </Typography.Text>
          <span>Dẹp không báo cáo</span>
          <div></div>
        </div>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold">
            Câu hỏi sinh viên phải trả lời trước hội đồng:
          </Typography.Text>
        </div>
        <div className="mt-5">
          <Table columns={columns} />
        </div>
      </div>
    </ModalCommon>
  );
};

export default CriticalAssessmentModal;
