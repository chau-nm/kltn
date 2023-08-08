import {
  FormOutlined,
  DeleteOutlined,
  EyeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MouseEventHandler } from "react";

type IconCommonType = {
  onClick?: MouseEventHandler;
};

const iconTextClass = "text-xl mx-2 cursor-pointer duration-300";

export const EditIconCommon = ({ onClick }: IconCommonType) => {
  return (
    <FormOutlined
      className={`text-yellow-700 hover:text-yellow-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};

export const DeleteIconCommon = ({ onClick }: IconCommonType) => {
  return (
    <DeleteOutlined
      className={`text-red-700 hover:text-red-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};

export const SeeIconCommon = ({ onClick }: IconCommonType) => {
  return (
    <EyeOutlined
      className={`text-blue-700 hover:text-red-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};

export const UserIconCommon = ({ onClick }: IconCommonType) => {
  return (
    <UserOutlined
      className={`text-blue-700 hover:text-red-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};
