import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { NewsData } from "~/fakedata";
import NewsModel from "~/models/news-model";
import CardCustom from "../common/CardCustom";
import SlickCustom from "../common/SlickCustoom";
import NewsSlide from "./NewsSlide";

type NewsBannerProps = {
  slides: NewsModel[];
};

const NewsBanner = ({ slides }: NewsBannerProps) => {
  return (
    <CardCustom
      cardProps={{
        title: "Tin tức",
      }}
    >
      <SlickCustom>
        {NewsData.map((news) => {
          return <NewsSlide key={news.newsId} news={news} />;
        })}
      </SlickCustom>
    </CardCustom>
  );
};

export default NewsBanner;
