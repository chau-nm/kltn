import { Alert, Col, Row, Space, message } from "antd";
import { useContext } from "react";
import { useMutation } from "react-query";
import ButtonCommon from "~/components/common/ButtonCommon";
import { AuthContext } from "~/contexts/AuthContext";
import * as ThesisService from "~/services/thesisService";

type NotificationConfirmProps = {
  thesis: ThesisModel;
};

const NotificationConfirm = ({
  thesis,
}: NotificationConfirmProps): JSX.Element => {
  const { user } = useContext(AuthContext);

  const updateThesisMutation = useMutation(ThesisService.update, {
    onSuccess: (data: boolean) => {
      if (data) {
        message.success("Thay đổi dữ liệu thành công");
      } else {
        message.error("Đã có lỗi xảy ra");
      }
    }
  });

  const userInvite = thesis.students?.filter(
    (std) => std.userId != user?.userId
  )[0];

  const handleAccept = () => {
    const newThesis: ThesisModel = {
      ...thesis,
      status: 2
    }

    updateThesisMutation.mutate(newThesis);
  }

  const handleDecline = () => {
    const newThesis: ThesisModel = {
      ...thesis,
      status: 0
    }
  }

  if (!userInvite) return <></>;

  return (
    <Alert
      className="my-2"
      message={
        <span>
          <strong>{userInvite.user?.fname}</strong> mời bạn tham gia luận văn! <br />{" "}
          Bạn có đồng ý tham gia không?
        </span>
      }
      type="info"
      showIcon
      action={
        <Row>
          <Col className="ml-5">
            <ButtonCommon color="green" value="Chấp nhận" onClick={handleAccept} />
          </Col>
          <Col className="ml-5">
            <ButtonCommon color="red" value="Từ chối" onClick={handleDecline}/>
          </Col>
        </Row>
      }
    />
  );
};

export default NotificationConfirm;
