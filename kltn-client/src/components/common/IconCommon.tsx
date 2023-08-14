import {
  FormOutlined,
  DeleteOutlined,
  EyeOutlined,
  UserOutlined,
  FileProtectOutlined,
  FileSyncOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { MouseEventHandler } from "react";

type IconCommonType = {
  onClick?: MouseEventHandler;
};

const iconTextClass = "text-xl mx-2 cursor-pointer duration-300";

export const EditIconCommon = ({ onClick }: IconCommonType) => {
  return (
    <FormOutlined
      className={`text-yellow-700 mt-2 hover:text-yellow-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};

export const DeleteIconCommon = ({ onClick }: IconCommonType) => {
  return (
    <DeleteOutlined
      className={`text-red-700 mt-2 hover:text-red-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};

export const SeeIconCommon = ({ onClick }: IconCommonType) => {
  return (
    <EyeOutlined
      className={`text-blue-700 mt-2 hover:text-red-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};

export const UserIconCommon = ({ onClick }: IconCommonType) => {
  return (
    <UserOutlined
      className={`text-blue-700 mt-2 hover:text-red-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};

export const CriticalAssessmentIconCommon = ({ onClick }: IconCommonType) => {
  return (
    <FileSyncOutlined
      className={`text-blue-700 mt-2 hover:text-red-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};

export const ProtectedIconCommon = ({ onClick }: IconCommonType) => {
  return (
    <FileProtectOutlined
      className={`text-blue-700 mt-2 hover:text-red-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};
