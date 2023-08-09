import { Alert, Col, Row, Typography } from "antd";
import { useContext } from "react";
import ButtonCommon from "~/components/common/ButtonCommon";
import { AuthContext } from "~/contexts/AuthContext";

type UserCreatedMessageProps = {
  data: ThesisModel[] | undefined;
};

const UserCreatedMessage = ({ data }: UserCreatedMessageProps): JSX.Element => {
  const { user } = useContext(AuthContext);

  const myThesis = data?.filter((thesis) => {
    return thesis.createdBy === user?.userId;
  });

  const handleOk = () => {};

  return (
    <>
      {myThesis?.map((thesis) => {
        let students: ThesisUserModel[] = thesis.students ?? [];
        let thesisUsers: ThesisUserModel[] = [
          ...students,
          thesis.teacher as ThesisUserModel,
        ];
        let thesisUsersAccepted = thesisUsers.filter((tu) => tu.status === 1);
        let thesisUsersDecline = thesisUsers.filter((tu) => tu.status === 2);
        console.log(thesisUsers.length);
        console.log(thesisUsersAccepted.length);
        if (
          thesisUsersDecline.length === 0 &&
          thesisUsersAccepted.length < thesisUsers.length
        ) {
          return (
            <Typography.Text>
              Luận văn của bạn đang đợi người khác đồng ý
            </Typography.Text>
          );
        }

        if (thesisUsersDecline.length > 0) {
          return (
            <Alert
              className="my-2"
              message={
                <span>Luận văn của bạn đã có người từ chối và sẽ bị hủy.</span>
              }
              type="info"
              showIcon
              action={
                <Row>
                  <Col className="ml-5">
                    <ButtonCommon
                      color="green"
                      value="Chấp nhận"
                      onClick={handleOk}
                    />
                  </Col>
                </Row>
              }
            />
          );
        }
      })}
    </>
  );
};

export default UserCreatedMessage;
