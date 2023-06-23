import { NotifyData } from "~/fakedata";
import NotificationCard from "./NotificationCard";

const DashboardPage = (): JSX.Element => {

  return (
    <>
      <div className="2">
        {/* <NewsBanner slides={[] as NewsModel[]} /> */}
        <NotificationCard
            notifications={NotifyData} />
      </div>
    </>
  );
};

export default DashboardPage;
