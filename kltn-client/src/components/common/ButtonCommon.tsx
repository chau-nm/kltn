import { Button } from "antd";
import { type ButtonProps } from "antd/es/button/button";
import { type MouseEventHandler } from "react";

const ButtonColorType = {
  yellow: "bg-yellow-500",
  green: "bg-green-700 text-white",
  blue: "bg-blue-700 text-white",
  red: "bg-red-700 text-white",
  gray: "bg-gray-700 text-white",
};

interface ButtonCommonProps extends Omit<ButtonProps, "type"> {
  value: string;
  color?: "yellow" | "green" | "blue" | "red" | "gray";
  className?: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;
  type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed";
}

const ButtonCommon = ({
  value,
  color,
  className,
  onClick,
  disabled,
  ...rest
}: ButtonCommonProps): JSX.Element => {
  return (
    <Button
      {...rest}
      className={`py-5 flex text-base items-center ${className ?? ""} ${
        (color && ButtonColorType[color]) ?? ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </Button>
  );
};

export default ButtonCommon;
