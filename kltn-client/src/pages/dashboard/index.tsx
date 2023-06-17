import { useEffect } from "react";
import NewsBanner from "~/components/home-page/NewsBanner";
import NotificationCard from "~/components/home-page/NotificationCard";
import { NotifyData } from "~/fakedata";
import NewsModel from "~/models/news-model";

const DashboardPage = (): JSX.Element => {

  return (
    <>
      <div className="2">
        <NewsBanner slides={[] as NewsModel[]} />
        <NotificationCard
            notifications={NotifyData} />
      </div>
    </>
  );
};

export default DashboardPage;
