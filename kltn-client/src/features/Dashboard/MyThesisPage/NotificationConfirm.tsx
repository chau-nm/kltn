import { Alert, Col, Row, Typography } from "antd";
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
  const userInvite = thesis.userCreated;

  const acceptInviteMutation = useMutation(ThesisService.acceptInvite);

  const declineInviteMutation = useMutation(ThesisService.declineInvite);

  const handleAccept = (): void => {
    acceptInviteMutation.mutate({
      thesisId: thesis.id ?? "",
      userId: user?.userId ?? "",
    });
  };

  const handleDecline = (): void => {
    declineInviteMutation.mutate({
      thesisId: thesis.id ?? "",
      userId: user?.userId ?? "",
    });
  };

  if (userInvite == null) return <></>;

  return (
    <Alert
      className="my-2"
      message={
        <span>
          <strong>{userInvite.fname}</strong> mời bạn tham gia luận văn! <br />{" "}
          Bạn có đồng ý tham gia không?
        </span>
      }
      type="info"
      showIcon
      action={
        <Row align={"middle"}>
          <Col>
            <Typography.Link>Xem chi tiết luận văn</Typography.Link>
          </Col>
          <Col className="ml-5">
            <ButtonCommon
              color="green"
              value="Chấp nhận"
              onClick={handleAccept}
            />
          </Col>
          <Col className="ml-5">
            <ButtonCommon color="red" value="Từ chối" onClick={handleDecline} />
          </Col>
        </Row>
      }
    />
  );
};

export default NotificationConfirm;
