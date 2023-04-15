import { FormOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { MouseEventHandler } from "react";

type IconCustomType = {
  onClick?: MouseEventHandler;
};

const iconTextClass = "text-xl mx-2 cursor-pointer duration-300";

export const EditIconCustom = ({ onClick }: IconCustomType) => {
  return (
    <FormOutlined
      className={`text-yellow-700 hover:text-yellow-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};

export const DeleteIconCustom = ({ onClick }: IconCustomType) => {
  return (
    <DeleteOutlined
      className={`text-red-700 hover:text-red-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};

export const SeeIconCustom = ({ onClick }: IconCustomType) => {
  return (
    <EyeOutlined
      className={`text-blue-700 hover:text-red-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};
