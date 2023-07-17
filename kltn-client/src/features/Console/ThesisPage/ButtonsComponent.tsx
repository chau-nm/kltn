import { Col, Modal, Popover, Row, message } from "antd";
import { useContext, useState } from "react";
import { useMutation } from "react-query";
import { v4 } from "uuid";
import ButtonCommon from "~/components/common/ButtonCommon";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import * as ThesisRegisterCalendarService from "~/services/thesisRegisterCalendarService";

const ButtonsComponent = (): JSX.Element => {
  const { setIsOpenRegisterThesisModal, thesisRegisterCalendar, loadThesisRegisterCalendar } =
    useContext(ThesisConsoleContext);

  const disableThesisRegisterCalendar = useMutation(ThesisRegisterCalendarService.disable, {
    onSuccess: (data : Boolean) => {
      if (data) {
        message.success("Đã đóng đăng ký khóa luận");
        loadThesisRegisterCalendar();
      }
    }
  });

  const handleCloseThesisRegister = () => {
    if (confirm("Bạn chắc chắn muốn đóng đăng ký khóa luận?")) {
      disableThesisRegisterCalendar.mutate();
    }
  };

  return (
    <Row justify={"end"} gutter={20} className="py-10">
      {!thesisRegisterCalendar ? (
        <Col>
          <ButtonCommon
            color="green"
            value="Mở đăng ký khóa luận"
            onClick={() => setIsOpenRegisterThesisModal(true)}
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
        <ButtonCommon color="blue" value="Đặt lịch phản biện" />
      </Col>
      <Col>
        <ButtonCommon color="blue" value="Đặt lịch bảo vệ" />
      </Col>
      <Col>
        <ButtonCommon color="blue" value="Thêm đề tài" />
      </Col>
    </Row>
  );
};

export default ButtonsComponent;
