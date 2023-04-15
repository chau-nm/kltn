import { Button } from "antd";
import { MouseEventHandler } from "react";

const ButtonColorType = {
  yellow: "bg-yellow-500",
  green: "bg-green-700 text-white",
  blue: "bg-blue-700 text-white",
  red: "bg-red-700 text-white",
  gray: "bg-gray-700 text-white",
};

type ButtonCustomProps = {
  value: string;
  color?: "yellow" | "green" | "blue" | "red" | "gray";
  className?: string;
  onClick?: MouseEventHandler;
};

const ButtonCustom = ({
  value,
  color,
  className,
  onClick,
}: ButtonCustomProps): JSX.Element => {
  return (
    <Button
      className={`py-5 flex text-base items-center ${className} ${
        color && ButtonColorType[color]
      }`}
      onClick={onClick}
    >
      {value}
    </Button>
  );
};

export default ButtonCustom;
