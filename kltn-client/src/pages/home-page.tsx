import NewsBanner from "~/components/home-page/NewsBanner";
import NotificationCard from "~/components/home-page/NotificationCard";
import { NotifyData } from "~/fakedata";
import NewsModel from "~/models/news-model";

const HomePage = (): JSX.Element => {
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

export default HomePage;
