import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef } from "react";
import Slider, { Settings } from "react-slick";

type SlickCommonProps = {
  children: React.ReactNode;
};

type SlickButtonProps = {
  className?: string;
  style?: object;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const SlickPreviousButton = ({
  className,
  style,
  onClick,
}: SlickButtonProps): JSX.Element => {
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <LeftOutlined/>
    </div>
  );
};

const SlickNextButton = ({
  className,
  style,
  onClick,
}: SlickButtonProps): JSX.Element => {
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <RightOutlined />
    </div>
  );
};

const slickSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const SlickCommon = ({ children }: SlickCommonProps): JSX.Element => {
  const slickRef = useRef<Slider>(null);

  const handleOnClickPreviousButton = (): void => {
    slickRef.current?.slickPrev();
  };

  const handleOnClickNextButton = (): void => {
    slickRef.current?.slickNext();
  };

  return (
    <div className="relative p-3">
      <SlickPreviousButton
        className="absolute p-2 rounded-full border flex items-center justify-center text-gray-300 cursor-pointer left-5 top-[45%] z-[1] hover:bg-gray-200 hover:text-white duration-300"
        onClick={handleOnClickPreviousButton}
      />
      <SlickNextButton
        className="absolute p-2 rounded-full border flex items-center justify-center right-0 text-gray-300 cursor-pointer top-[45%] right-5 z-[1] hover:bg-gray-200 hover:text-white duration-300"
        onClick={handleOnClickNextButton}
      />
      <Slider ref={slickRef} {...slickSettings}>
        {children}
      </Slider>
    </div>
  );
};

export default SlickCommon;
