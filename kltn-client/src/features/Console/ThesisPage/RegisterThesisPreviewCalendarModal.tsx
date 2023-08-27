import { DatePicker, Form, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { ColumnType } from "antd/es/table";
import { useContext, useState } from "react";
import { dateDisplay, getColorStatus } from "~/common/util";
import ThesisTargetModal from "~/components/ThesisTargetModal";
import ButtonCommon from "~/components/common/ButtonCommon";
import ModalCommon from "~/components/common/ModalCommon";
import TableCommon from "~/components/common/TableCommon";
import CommonConstants from "~/constants/commonConstants";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";

const RegisterThesisPreviewCalendarModal = (): JSX.Element => {
  const {
    isOpenRegisterThesisPreviewCalendarModal,
    setIsOpenRegisterThesisPreviewCalendarModal,
    listThesisSelectedForPreview,
    setlistThesisSelectedForPreview,
  } = useContext(ThesisConsoleContext);

  const [form] = useForm();

  const [isOpenThesisTargetModal, setIsOpenThesisTargetModal] = useState(false);

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

  return (
    <ModalCommon
      title="Thêm lịch phản biện"
      open={isOpenRegisterThesisPreviewCalendarModal}
      onCancel={() => {
        setlistThesisSelectedForPreview([]);
        setIsOpenRegisterThesisPreviewCalendarModal(false);
      }}
      footer={[
        <ButtonCommon
          key={1}
          value="Đóng"
          onClick={() => {
            setIsOpenRegisterThesisPreviewCalendarModal(false);
          }}
        />,
        <ButtonCommon key={2} value="Lưu" />,
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
          dataSource={listThesisSelectedForPreview}
          // handleOnChange={handleChange}
          rowKey={(record) => record.id!}
        />
        <Form.Item label="Lịch phản biện">
          <DatePicker.RangePicker />
        </Form.Item>
      </Form>
      <ThesisTargetModal
        isOpen={isOpenThesisTargetModal}
        setIsOpen={setIsOpenThesisTargetModal}
      />
    </ModalCommon>
  );
};

export default RegisterThesisPreviewCalendarModal;
