import { DatePicker, Form, Row, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { type ColumnType } from "antd/es/table";
import { useContext, useState } from "react";
import { useMutation } from "react-query";
import { dateDisplay, getColorStatus } from "~/common/util";
import ThesisTargetModal from "~/components/ThesisTargetModal";
import ButtonCommon from "~/components/common/ButtonCommon";
import ModalCommon from "~/components/common/ModalCommon";
import TableCommon from "~/components/common/TableCommon";
import CommonConstants from "~/constants/commonConstants";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import * as ThesisReviewCalendarService from "~/services/thesisReviewCalendarService";

const RegisterThesisPreviewCalendarModal = (): JSX.Element => {
  const {
    isOpenRegisterThesisPreviewCalendarModal,
    setIsOpenRegisterThesisPreviewCalendarModal,
  } = useContext(ThesisConsoleContext);

  const [form] = useForm();

  const [isOpenThesisTargetModal, setIsOpenThesisTargetModal] = useState(false);
  const [thesisList, setThesisList] = useState<ThesisModel[]>([]);

  const columns: Array<ColumnType<ThesisModel>> = [
    {
      title: "Tên đề tài",
      dataIndex: "topic",
      width: 10,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (row, record) => {
        return (
          <Row className={getColorStatus(record.status ?? 0)}>
            {
              CommonConstants.THESIS_STATUS.filter(
                (ts) => ts.value === record.status
              )[0].text
            }
          </Row>
        );
      },
      width: 5,
    },
    {
      title: "Số sinh viên",
      dataIndex: "students",
      width: 5,
      render: (row, record) => {
        return row?.length;
      },
    },
    {
      title: "Năm",
      dataIndex: "year",
      width: 5,
    },
    {
      title: "Học kỳ",
      dataIndex: "semester",
      width: 5,
    },
    {
      title: "Cập nhật gần nhất",
      dataIndex: "updatedAt",
      width: 5,
      render: (row) => {
        return <Row>{dateDisplay(new Date(row as number))}</Row>;
      },
    },
  ];

  const handleFinish = (): void => {
    void form.validateFields().then(() => {
      const rangPickerValue = form.getFieldValue("rangePicker");
      const thesisReviewCalendar: ThesisReviewerCalendar[] = thesisList.map(
        (thesis) => {
          return {
            thesisId: thesis.id,
            startAt: rangPickerValue[0].toDate().getTime(),
            endAt: rangPickerValue[1].toDate().getTime(),
            createdAt: new Date().getTime(),
            isDeleted: false,
            updatedAt: new Date().getTime(),
          };
        }
      );

      insertListThesisReviewCalendar.mutate(thesisReviewCalendar);
    });
  };

  const insertListThesisReviewCalendar = useMutation(
    ThesisReviewCalendarService.insertList,
    {
      onSuccess: (data: ThesisReviewerCalendar[]) => {
        if (data) {
          void message.success("Thêm lịch phản biện thành công");
          handleClose();
        }
      },
    }
  );

  const handleClose = (): void => {
    setThesisList([]);
    setIsOpenRegisterThesisPreviewCalendarModal(false);
  };

  return (
    <ModalCommon
      title="Thêm lịch phản biện"
      open={isOpenRegisterThesisPreviewCalendarModal}
      onCancel={handleClose}
      footer={[
        <ButtonCommon key={1} value="Đóng" onClick={handleClose} />,
        <ButtonCommon key={2} value="Lưu" onClick={handleFinish} />,
      ]}
    >
      <Form form={form}>
        <Form.Item label="Khóa luận">
          <ButtonCommon
            value="Chọn khóa luận"
            onClick={() => {
              setIsOpenThesisTargetModal(true);
            }}
          />
        </Form.Item>
        <TableCommon
          columns={columns}
          dataSource={thesisList}
          rowKey={(record) => record.id!}
        />
        <Form.Item
          label="Lịch phản biện"
          name="rangePicker"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker.RangePicker />
        </Form.Item>
      </Form>
      <ThesisTargetModal
        isOpen={isOpenThesisTargetModal}
        setIsOpen={setIsOpenThesisTargetModal}
        handleFinish={setThesisList}
        isDefense={false}
        isReview={true}
      />
    </ModalCommon>
  );
};

export default RegisterThesisPreviewCalendarModal;
