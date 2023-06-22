import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { NewsData } from "~/fakedata";
import NewsModel from "~/models/news-model";
import CardCommon from "../common/CardCommon";
import SlickCommon from "../common/SlickCommon";
import NewsSlide from "./NewsSlide";

type NewsBannerProps = {
  slides: NewsModel[];
};

const NewsBanner = ({ slides }: NewsBannerProps) => {
  return (
    <CardCommon
      cardProps={{
        title: "Tin tức",
      }}
    >
      <SlickCommon>
        {NewsData.map((news) => {
          return <NewsSlide key={news.newsId} news={news} />;
        })}
      </SlickCommon>
    </CardCommon>
  );
};

export default NewsBanner;
