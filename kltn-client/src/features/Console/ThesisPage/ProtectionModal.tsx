import {
  Avatar,
  Col,
  DatePicker,
  Input,
  Row,
  Select,
  Table,
  Typography,
  message,
} from "antd";
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
import * as ProtectionRateService from "~/services/protectionRateService";
import { UserOutlined } from "@ant-design/icons";

interface protectionDisplayModal {
  id: string;
  fname: string;
  username: string;
}

const ProtectionModal = () => {
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

  const handleClose = () => {
    setIsOpenProtectionModal(false);
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

  const insertUserProtectionRate = useMutation(
    ProtectionRateService.insertUser,
    {
      onSuccess: (data: ProtectionRatingModel[]) => {
        if (data) {
          message.success("Cập nhật hội đồng bảo vệ thành công");
        } else {
          message.error("Cập nhật hội đồng bảo vệ thất bại");
        }
      },
    }
  );

  const deleteProtectionRateByThesisId = useMutation(
    ProtectionRateService.deleteByThesisId,
    {
      onSuccess: (data: boolean) => {
        if (data) {
          message.success("Xóa hội đồng cũ bảo vệ thành công");
        } else {
          message.error("Xóa hội đồng bảo vệ thất bại");
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
      type: 2,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
      isDeleted: false,
    };
    insertThesisReportCalendarMutation.mutate(caCalendarRq);
    setIsEditCACalendarMode(false);
  };

  const handleSaveProtectionRatePerson = async () => {
    if (!thesis?.id || !caPerson) {
      return;
    }
    deleteProtectionRateByThesisId.mutate(thesis?.id);
    const element = caPerson.map((item) => item.id);
    insertUserProtectionRate.mutate({
      thesisId: thesis?.id,
      usersId: element,
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
      title={"Nội dung bảo vệ"}
      open={isOpenProtectionModal}
      onCancel={handleClose}
      footer={[
        <ButtonCommon value="Đóng" />,
        <ButtonCommon value="Thêm bảo vệ" />,
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
            ) : caCalendar ? (
              dateTimeDisplay(new Date(caCalendar!))
            ) : (
              "Chưa có lịch bảo vệ "
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
        <Row gutter={30} className="mt-4 mb-4" justify={"space-between"}>
          <Col className="text-base">
            <strong> Hội đồng bảo vệ: </strong>
            {isEditCAPersonMode ? (
              <Select
                mode="multiple"
                style={{ width: 300 }}
                showSearch
                value={caPerson.map((person) => person.id)}
                onChange={(value: Array<string>) => {
                  if (teachers) {
                    setCaPerson(
                      teachers
                        .filter((teacher) => value.includes(teacher.userId))
                        .map((teacher) => ({
                          id: teacher.userId,
                          fname: teacher.fname,
                          username: teacher.username,
                        }))
                    );
                  }
                }}
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
              caPerson.map((person) => person.fname).join(", ")
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
                  onClick={handleSaveProtectionRatePerson}
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
                  onClick={() => setIsOpenProtectionDetailModal(true)}
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
