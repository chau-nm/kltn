import { Alert, Col, Row, message } from "antd";
import { useContext } from "react";
import { useMutation } from "react-query";
import ButtonCommon from "~/components/common/ButtonCommon";
import AuthConstants from "~/constants/authConstants";
import { AuthContext } from "~/contexts/AuthContext";
import * as ThesisUserService from "~/services/thesisUserService";

type NotificationConfirmProps = {
  thesis: ThesisModel;
};

const NotificationConfirm = ({
  thesis,
}: NotificationConfirmProps): JSX.Element => {
  const { user } = useContext(AuthContext);

  const updateThesisUserService = useMutation(ThesisUserService.update, {
    onSuccess: (data: boolean) => {
      void (data && message.success("Bạn đã đồng ý tham gia luận văn."));
    },
  });

  const userInvite = thesis.students?.filter(
    (std) => std.userId !== user?.userId
  )[0];

  const handleAccept = (): void => {
    let thesisUser;
    if (user?.roles?.includes(AuthConstants.AUTH_ROLES.STUDENT)) {
      thesisUser = thesis.students?.filter(
        (std) => std.userId === user?.userId
      )[0];
    }
    if (user?.roles?.includes(AuthConstants.AUTH_ROLES.TEACHER)) {
      thesisUser =
        thesis.teacher?.userId === user.userId ? thesis.teacher : undefined;
    }
    const newThesisUser = {
      ...thesisUser,
      status: 1,
    };

    updateThesisUserService.mutate(newThesisUser);
  };

  const handleDecline = (): void => {
    // const newThesis: ThesisModel = {
    //   ...thesis,
    //   status: 0,
    // };
  };

  if (userInvite == null) return <></>;

  return (
    <Alert
      className="my-2"
      message={
        <span>
          <strong>{userInvite.user?.fname}</strong> mời bạn tham gia luận văn!{" "}
          <br /> Bạn có đồng ý tham gia không?
        </span>
      }
      type="info"
      showIcon
      action={
        <Row>
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
