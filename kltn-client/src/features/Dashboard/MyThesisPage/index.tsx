import { Typography } from "antd";
import { useContext } from "react";
import { useQuery } from "react-query";
import PageLayout from "~/components/common/PageLayout";
import { AuthContext } from "~/contexts/AuthContext";
import LoadingPage from "~/features/LoadingPage";
import * as ThesisService from "~/services/thesisService";
import ThesisDetail from "./ThesisDetail";
import ThesisInvitedList from "./ThesisInvitedList";

const MyThesisPage = (): JSX.Element => {
  const { user } = useContext(AuthContext);
  const { data: thesisInvited, isLoading: invitedLoading } = useQuery<
    ThesisModel[]
  >(
    ["find-thesis-invited"],
    async () => await ThesisService.findThesisInvited(user?.userId ?? ""),
    {
      onSuccess: () => {},
    }
  );

  const { data: myThesis, isLoading: myThesisLoading } = useQuery<
    ThesisModel[]
  >(
    ["find-my-thesis"],
    async () => await ThesisService.findMyThesis(user?.userId ?? ""),
    {
      onSuccess: () => {},
    }
  );

  if (invitedLoading || myThesisLoading) {
    return <LoadingPage />;
  }

  if (myThesis != null && myThesis.length > 0) {
    return (
      <PageLayout pageTitle="Luận văn của tôi">
        {myThesis?.map((thesis) => {
          if ((thesis?.status ?? 0) > 2) {
            return <ThesisDetail key={thesis.id} thesis={thesis} />;
          } else {
            return (
              <Typography.Text key={thesis.id}>
                Luận văn {thesis.topic} đang đợi người khác xác nhận
              </Typography.Text>
            );
          }
        })}
      </PageLayout>
    );
  }

  if (thesisInvited != null && thesisInvited?.length > 0) {
    return <ThesisInvitedList data={thesisInvited} />;
  }

  return (
    <PageLayout pageTitle="Luận văn của tôi">
      <Typography.Text>
        Bạn chưa đăng ký luận văn hoặc đăng đợi người khác xác nhận
      </Typography.Text>
    </PageLayout>
  );
};

export default MyThesisPage;
