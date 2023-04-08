import { Col, Image, Row, Space } from "antd";
import { useNavigate } from "react-router-dom";
import NewsModel from "~/models/news-model";
import logo from "~/assets/images/logo.png";
import { useRef, useState } from "react";

type NewsSlideProps = {
  news: NewsModel;
};

const NewsSlide = ({ news }: NewsSlideProps) => {
  const [wrapVisible, setWrapVisible] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news/${news.newsId}`);
  };

  return (
    <div
      className="w-full relative cursor-pointer before:content-[''] 
                before:absolute before:h-full before:w-full 
                hover:before:bg-black hover:before:opacity-30 before:duration-300"
      onClick={handleClick}
    >
      <img className="block h-[175px] w-full" src={logo} />
      <div className="absolute h-10 w-full z-[1] bottom-0 bg-black opacity-70"></div>
      <div className="absolute h-10 w-full text-white z-[1] bottom-0 flex justify-center items-center">
        <span>{news.newsTitle}</span>
      </div>
    </div>
  );
};

export default NewsSlide;
