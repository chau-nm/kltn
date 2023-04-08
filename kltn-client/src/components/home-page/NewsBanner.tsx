import Slider from "react-slick";
import NewsModel from "~/models/news-model";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickCustom from "../common/SlickCustoom";
import NewsSlide from "./NewsSlide";
import { NewsData } from "~/fakedata";
import { Card } from "antd";
import CardCustom from "../common/CardCustom";

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
