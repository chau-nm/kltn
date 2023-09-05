import { Avatar, Col, Row, Typography, message } from "antd";
import { useContext, useState } from "react";
import { useMutation } from "react-query";
import { dateTimeDisplay } from "~/common/util";
import ButtonCommon from "~/components/common/ButtonCommon";
import ModalCommon from "~/components/common/ModalCommon";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
// import * as CriticalAssessmentService from "~/services/criticalAssessmentService";
import { UserOutlined } from "@ant-design/icons";
import TeacherTargetModal from "~/components/TeacherTargetModal";
import ProtectionDetailView from "~/components/ProtectionDetailView";
import * as ThesisDefenseRatingService from "~/services/thesisDefenseRatingService";

const ProtectionModal = (): JSX.Element => {
  // const [isEditCAPersonMode, setIsEditCAPersonMode] = useState(false);
  // const [caPerson, setCaPerson] = useState<protectionDisplayModal[]>([]);
  const [openTargetTeacher, setOpenTargetTeacher] = useState<boolean>(false);
  const [defenseRatingDetail, setDefenseRatingDetail] =
    useState<DefenseRatingModel>();

  const {
    isOpenProtectionModal,
    setIsOpenProtectionModal,
    thesis,
    setIsOpenThesisDetailModal,
    setIsOpenProtectionDetailModal,
    isOpenProtectionDetailModal,
  } = useContext(ThesisConsoleContext);

  const handleClose = (): void => {
    setIsOpenProtectionModal(false);
  };

  const insertDefenseRatersMutation = useMutation(
    ThesisDefenseRatingService.insertRaters,
    {
      onSuccess: (data) => {
        if (data) {
          void message.success("Thêm thành công");
        }
      },
    }
  );

  const handleAddCouncil = (lecturers: LecturerModel[]): void => {
    insertDefenseRatersMutation.mutate({
      thesisId: thesis?.id ?? "",
      userIds: lecturers.map((l) => l.userId ?? ""),
    });
  };

  return (
    <ModalCommon
      title={"Nội dung bảo vệ"}
      open={isOpenProtectionModal}
      onCancel={handleClose}
      footer={[
        <ButtonCommon key={1} value="Đóng" onClick={handleClose} />,
        <ButtonCommon
          key={2}
          value="Thêm bảo vệ"
          onClick={() => {
            setOpenTargetTeacher(true);
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
            <strong> Lịch bảo vệ: </strong>
            {thesis?.defenseCalendar
              ? `Ngày: ${dateTimeDisplay(
                  new Date(thesis.defenseCalendar.timestamp ?? "")
                )} - Phòng: ${thesis.defenseCalendar.room ?? ""}`
              : "Chưa có lịch bảo vệ "}
          </Col>
        </Row>
        <Row gutter={30} className="mt-4 mb-4" justify={"space-between"}>
          <Col className="text-base">
            <strong> Hội đồng bảo vệ: </strong>
          </Col>
        </Row>
        {thesis?.defenseRatings?.map((dr, index) => {
          return (
            <Row
              className="p-3 border rounded-lg max-w-[1000px] mb-3"
              key={index}
            >
              <Col span={2} className="comment-avatar">
                <Avatar
                  icon={<UserOutlined />}
                  size={50}
                  className="flex items-center justify-center"
                />
              </Col>

              <Col span={18} className="comment-content">
                <Typography.Text>
                  <strong>{dr.userMaker.fname ?? ""}</strong>
                  <Row>
                    <p>{`Trạng thái: ${
                      dr.scores.length > 0 ? "Đã đánh giá" : "Đang đánh giá"
                    }`}</p>
                  </Row>
                </Typography.Text>
              </Col>
              <Col className="flex items-center">
                <span
                  className="text-blue-400 select-none cursor-pointer hover:text-blue-500 duration-300"
                  onClick={() => {
                    setIsOpenProtectionDetailModal(true);
                    setDefenseRatingDetail(dr);
                  }}
                >
                  Xem chi tiết
                </span>
              </Col>
            </Row>
          );
        })}
        {/* <div className="mt-5">
          <Table columns={columns} />
        </div> */}
      </div>
      <TeacherTargetModal
        isOpen={openTargetTeacher}
        setIsOpen={setOpenTargetTeacher}
        handleFinish={handleAddCouncil}
      />
      <ProtectionDetailView
        protectionRating={defenseRatingDetail}
        isOpen={isOpenProtectionDetailModal}
        setIsOpen={setIsOpenProtectionDetailModal}
      />
    </ModalCommon>
  );
};

export default ProtectionModal;
