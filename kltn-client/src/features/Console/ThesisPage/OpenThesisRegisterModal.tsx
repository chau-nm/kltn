import { DatePicker, Form, Row, Spin, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { now } from "moment";
import { useContext, useEffect } from "react";
import { useMutation } from "react-query";
import { v4 } from "uuid";
import ButtonCommon from "~/components/common/ButtonCommon";
import ModalCommon from "~/components/common/ModalCommon";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import * as ThesisRegisterCalendarService from "~/services/thesisRegisterCalendarService";

const OpenThesisRegisterModal = ({}): JSX.Element => {
  useEffect(() => {}, [open]);

  const [form] = useForm();
  const { isOpenRegisterThesisModal, setIsOpenRegisterThesisModal } =
    useContext(ThesisConsoleContext);

  const insertThesisRegisterCalendarMutation = useMutation(
    ThesisRegisterCalendarService.insert,
    {
      onSuccess: (data: ThesisRegisterCalendarModel) => {
        if (data == null) {
          message.error("Thêm thất bại");
        } else {
          message.success("Thêm thành công");
          form.resetFields();
          setIsOpenRegisterThesisModal(false);
        }
      },
    }
  );

  const handleSave = () => {
    form.validateFields().then((values) => {
      let timeRange = values["time_range"];
      let startAt = timeRange[0].toDate().getTime();
      let endAt = timeRange[1].toDate().getTime();

      const thesisRegisterCalendarModelRequest: ThesisRegisterCalendarModel = {
        startAt,
        endAt,
        isDeleted: false,
        active: true,
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
      };

      insertThesisRegisterCalendarMutation.mutate(
        thesisRegisterCalendarModelRequest
      );
    });
  };

  const handleClose = () => {
    setIsOpenRegisterThesisModal(false);
  };

  const ButtonFooter = (): JSX.Element => {
    return (
      <Row justify={"end"}>
        <ButtonCommon
          disabled={insertThesisRegisterCalendarMutation.isLoading}
          value="Đóng"
          onClick={handleClose}
        />
        <ButtonCommon
          disabled={insertThesisRegisterCalendarMutation.isLoading}
          color="blue"
          value="Lưu"
          onClick={handleSave}
        />
      </Row>
    );
  };

  return (
    <ModalCommon
      title="Mở đăng ký khóa luận"
      open={isOpenRegisterThesisModal}
      onCancel={() => setIsOpenRegisterThesisModal(false)}
      maskCloseable={false}
      footer={[<ButtonFooter key={v4()} />]}
    >
      <Spin spinning={insertThesisRegisterCalendarMutation.isLoading}>
        <Form form={form}>
          <Form.Item
            label="Thời gian:"
            rules={[
              {
                required: true,
              },
            ]}
            name={"time_range"}
          >
            <DatePicker.RangePicker />
          </Form.Item>
        </Form>
      </Spin>
    </ModalCommon>
  );
};

export default OpenThesisRegisterModal;
