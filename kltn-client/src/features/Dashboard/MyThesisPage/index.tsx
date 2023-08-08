import { Spin, Typography } from "antd";
import { useContext } from "react";
import { useQuery } from "react-query";
import PageLayout from "~/components/common/PageLayout";
import { AuthContext } from "~/contexts/AuthContext";
import * as ThesisService from "~/services/thesisService";
import UserCreatedMessage from "./UserCreateMessage";
import ThesisInvitedList from "./ThesisInvitedList";

const MyThesisPage = (): JSX.Element => {
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useQuery<ThesisModel[]>(
    ["search-thesis-by-user"],
    () => {
      return user ? ThesisService.searchByUser(user?.userId) : [];
    },
    {
      onSuccess: () => {},
    }
  );

  return (
    <PageLayout pageTitle="Luận văn của tôi">
      <Spin spinning={isLoading}>
        {data && data.length <= 0 && (
          <Typography.Text type="warning">
            Bạn chưa có tham gia luận văn nào
          </Typography.Text>
        )}
        <UserCreatedMessage data={data} />
        <ThesisInvitedList data={data}/>
      </Spin>
    </PageLayout>
  );
};

export default MyThesisPage;
