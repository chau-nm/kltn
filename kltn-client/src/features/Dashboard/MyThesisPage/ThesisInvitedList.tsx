import { useContext, useState } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import NotificationConfirm from "./NotificationConfirm";
import { Typography } from "antd";

type ThesisInvitedListProps = {
  data: ThesisModel[] | undefined;
};

const ThesisInvitedList = ({ data }: ThesisInvitedListProps): JSX.Element => {
  const { user } = useContext(AuthContext);

  const thesisInvitedList = data?.filter(
    (thesis) => thesis.createdBy !== user?.userId
  );

  let acceptedOtherThesis = false;

  return (
    <>
      {thesisInvitedList?.map((thesis) => {
        let students: ThesisUserModel[] = thesis.students ?? [];
        let thesisUsers: ThesisUserModel[] = [
          ...students,
          thesis.teacher as ThesisUserModel,
        ];
        let thesisUsersDecline = thesisUsers.filter((tu) => tu.status === 2);
        let thesisAcceptedByMe = thesisUsers.filter(
          (tu) => tu.status === 1 && tu.userId === user?.userId
        );
        let thesisUserWaiting = thesisUsers.filter((tu) => tu.status === 0);
        let thesisAccepted = thesisUsers.filter((tu) => tu.status === 1);
        if (thesisAcceptedByMe.length > 0) {
          acceptedOtherThesis = true;
          if (thesisAccepted.length === thesisUsers.length) {
            return;
          }
          return (
            <Typography.Text key={thesis.id}>
              Bạn đã đồng ý tham gia luận văn {thesis.topic} <br />
              Hãy đợi những người khác:
              <strong>
                {thesisUserWaiting.map((tu) => `${tu.user?.fname} `)}
              </strong>
            </Typography.Text>
          );
        }

        if (thesisUsersDecline.length === 0 && !acceptedOtherThesis) {
          return <NotificationConfirm key={thesis.id} thesis={thesis} />;
        }
      })}
    </>
  );
};

export default ThesisInvitedList;
