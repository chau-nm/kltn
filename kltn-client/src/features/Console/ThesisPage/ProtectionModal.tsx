import {
  Avatar,
  Col,
  DatePicker,
  Input,
  Row,
  Select,
  Table,
  Typography,
} from "antd";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { dateTimeDisplay } from "~/common/util";
import ButtonCommon from "~/components/common/ButtonCommon";
import ModalCommon from "~/components/common/ModalCommon";
import AuthConstants from "~/constants/authConstants";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import * as UserService from "~/services/userServices";
// import * as CriticalAssessmentService from "~/services/criticalAssessmentService";
import { UserOutlined } from "@ant-design/icons";

interface protectionDisplayModal {
  id?: string;
  fname?: string;
  username?: string;
}

const ProtectionModal = (): JSX.Element => {
  const [isEditCAPersonMode, setIsEditCAPersonMode] = useState(false);
  const [isEditCACalendarMode, setIsEditCACalendarMode] = useState(false);
  const [caPerson, setCaPerson] = useState<protectionDisplayModal[]>([]);
  const [caCalendar, setCACalendar] = useState<number>();

  const {
    isOpenProtectionModal,
    setIsOpenProtectionModal,
    thesis,
    setIsOpenThesisDetailModal,
    setIsOpenProtectionDetailModal,
  } = useContext(ThesisConsoleContext);

  const defenseCalendar = thesis?.defenseCalendar?.timestamp;
  const defenseRoom = thesis?.defenseCalendar?.room;

  const handleClose = (): void => {
    setIsOpenProtectionModal(false);
  };

  const { data: teachers } = useQuery<UserModel[]>(
    ["load-teacher-select"],
    async () =>
      await UserService.getUserByRole(AuthConstants.AUTH_ROLES.TEACHER)
  );

  // const insertUserCriticalAssessment = useMutation(
  //   CriticalAssessmentService.insertUser,
  //   {
  //     onSuccess: (data: ThesisReportCalendarModel) => {
  //       if (data) {
  //         message.success("Cập nhật người phản biện thành công");
  //       } else {
  //         message.error("Cập nhật người phản biện thất bại");
  //       }
  //     },
  //   }
  // );

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

  const handleOnChangeCalendar = (value: any): void => {
    setCACalendar(value.toDate().getTime());
  };

  const handleSaveCriticalAssessmentPerson = (): void => {
    if (!thesis?.id || !caPerson) {
      return;
    }
    //   insertUserCriticalAssessment.mutate({
    //     thesisId: thesis?.id,
    //     userId: caPerson,
    //   });
    setIsEditCAPersonMode(false);
  };

  const filterOptions = (input: string, option: any): boolean => {
    return (option?.label?.toString().toLowerCase() ?? "").includes(
      input.toLowerCase()
    );
  };

  return (
    <ModalCommon
      title={"Nội dung bảo vệ"}
      open={isOpenProtectionModal}
      onCancel={handleClose}
      footer={[
        <ButtonCommon key={1} value="Đóng" />,
        <ButtonCommon key={2} value="Thêm bảo vệ" />,
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
            {isEditCACalendarMode ? (
              <>
                <DatePicker
                  showTime
                  style={{ width: 300 }}
                  onChange={handleOnChangeCalendar}
                />
                <Input
                  className="ml-2"
                  placeholder="Nhập phòng"
                  style={{ width: 300 }}
                ></Input>
              </>
            ) : defenseCalendar && defenseRoom ? (
              <Row gutter={30}>
                <Col> {dateTimeDisplay(new Date(defenseCalendar))}</Col>
                <Col>{defenseRoom}</Col>
              </Row>
            ) : (
              "Chưa có lịch bảo vệ "
            )}
          </Col>
        </Row>
        <Row gutter={30} className="mt-4 mb-4" justify={"space-between"}>
          <Col className="text-base">
            <strong> Hội đồng bảo vệ: </strong>
            {isEditCAPersonMode ? (
              <Select
                mode="multiple"
                style={{ width: 300 }}
                showSearch
                value={caPerson.map((person) => person.id ?? "")}
                onChange={(value: string[]) => {
                  const caPerson: protectionDisplayModal[] = teachers!
                    .filter(
                      (teacher: UserModel) =>
                        teacher?.userId && value.includes(teacher?.userId)
                    )
                    .map((teacher) => ({
                      id: teacher.userId,
                      fname: teacher.fname,
                      username: teacher.username,
                    }));
                  setCaPerson(caPerson);
                }}
                placeholder="Nhập mã số giảng viên"
                filterOption={filterOptions}
                options={[
                  ...teachers!.map((teacher) => {
                    return {
                      value: teacher.userId,
                      label: `${teacher.fname ?? ""} - ${
                        teacher.username ?? ""
                      }`,
                    };
                  }),
                ]}
              />
            ) : caPerson ? (
              caPerson.map((person) => person.fname).join(", ")
            ) : (
              "Chưa thêm bảo vệ"
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
        {caPerson.map((person, index) => {
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
                  <strong>{person.fname}</strong>
                  <Row>
                    <p>{`Trạng thái: Đang đánh giá`}</p>
                  </Row>
                </Typography.Text>
              </Col>
              <Col className="flex items-center">
                <span
                  className="text-blue-400 select-none cursor-pointer hover:text-blue-500 duration-300"
                  onClick={() => {
                    setIsOpenProtectionDetailModal(true);
                  }}
                >
                  Xem chi tiết
                </span>
              </Col>
            </Row>
          );
        })}
        <div className="mt-5">
          <Table columns={columns} />
        </div>
      </div>
    </ModalCommon>
  );
};

export default ProtectionModal;
