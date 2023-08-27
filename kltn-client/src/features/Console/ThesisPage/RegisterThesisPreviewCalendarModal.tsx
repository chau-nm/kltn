import { DatePicker, Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext, useState } from "react";
import ThesisTargetModal from "~/components/ThesisTargetModal";
import ButtonCommon from "~/components/common/ButtonCommon";
import ModalCommon from "~/components/common/ModalCommon";
import TableCommon from "~/components/common/TableCommon";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";

const RegisterThesisPreviewCalendarModal = (): JSX.Element => {
  const {
    isOpenRegisterThesisPreviewCalendarModal,
    setIsOpenRegisterThesisPreviewCalendarModal,
  } = useContext(ThesisConsoleContext);

  const [form] = useForm();

  const [isOpenThesisTargetModal, setIsOpenThesisTargetModal] = useState(false);

  return (
    <ModalCommon
      title="Thêm lịch phản biện"
      open={isOpenRegisterThesisPreviewCalendarModal}
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
        <TableCommon />
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
