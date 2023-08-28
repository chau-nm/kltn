import { Col, Row, message } from "antd";
import { useContext } from "react";
import { useMutation } from "react-query";
import ButtonCommon from "~/components/common/ButtonCommon";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import * as ThesisRegisterCalendarService from "~/services/thesisRegisterCalendarService";

const ButtonsComponent = (): JSX.Element => {
  const {
    setIsOpenRegisterThesisModal,
    thesisRegisterCalendar,
    loadThesisRegisterCalendar,
    setIsEditModal,
    setIsOpenAddEditThesisModal,
    setIsOpenRegisterThesisPreviewCalendarModal,
    setIsOpenRegisterThesisDefenseCalendarModal,
  } = useContext(ThesisConsoleContext);

  const disableThesisRegisterCalendar = useMutation(
    ThesisRegisterCalendarService.disable,
    {
      onSuccess: (data: boolean) => {
        if (data) {
          void message.success("Đã đóng đăng ký khóa luận");
          loadThesisRegisterCalendar();
        }
      },
    }
  );

  const handleCloseThesisRegister = (): void => {
    if (confirm("Bạn chắc chắn muốn đóng đăng ký khóa luận?")) {
      disableThesisRegisterCalendar.mutate();
    }
  };

  return (
    <Row justify={"end"} gutter={20} className="py-10">
      {thesisRegisterCalendar == null ? (
        <Col>
          <ButtonCommon
            color="green"
            value="Mở đăng ký khóa luận"
            onClick={() => {
              setIsOpenRegisterThesisModal(true);
            }}
          />
        </Col>
      ) : (
        <Col>
          <ButtonCommon
            color="red"
            value="Đóng đăng ký khóa luận"
            disabled={disableThesisRegisterCalendar.isLoading}
            onClick={handleCloseThesisRegister}
          />
        </Col>
      )}

      <Col>
        <ButtonCommon
          color="blue"
          value="Đặt lịch phản biện"
          onClick={() => {
            setIsOpenRegisterThesisPreviewCalendarModal(true);
          }}
        />
      </Col>
      <Col>
        <ButtonCommon
          color="blue"
          value="Đặt lịch bảo vệ"
          onClick={() => {
            setIsOpenRegisterThesisDefenseCalendarModal(true);
          }}
        />
      </Col>
      <Col>
        <ButtonCommon
          color="blue"
          value="Thêm đề tài"
          onClick={() => {
            setIsEditModal(() => false);
            setIsOpenAddEditThesisModal(true);
          }}
        />
      </Col>
    </Row>
  );
};

export default ButtonsComponent;
