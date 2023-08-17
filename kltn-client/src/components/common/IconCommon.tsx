import {
  CommentOutlined,
  DeleteOutlined,
  EyeOutlined,
  FileProtectOutlined,
  FileSyncOutlined,
  FormOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { type MouseEventHandler } from "react";

type IconCommonType = {
  onClick?: MouseEventHandler;
};

const iconTextClass = "text-xl mx-2 cursor-pointer duration-300";

export const EditIconCommon = ({ onClick }: IconCommonType): JSX.Element => {
  return (
    <FormOutlined
      className={`text-yellow-700 mt-2 hover:text-yellow-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};

export const DeleteIconCommon = ({ onClick }: IconCommonType): JSX.Element => {
  return (
    <DeleteOutlined
      className={`text-red-700 mt-2 hover:text-red-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};

export const SeeIconCommon = ({ onClick }: IconCommonType): JSX.Element => {
  return (
    <EyeOutlined
      className={`text-blue-700 mt-2 hover:text-red-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};

export const UserIconCommon = ({ onClick }: IconCommonType): JSX.Element => {
  return (
    <UserOutlined
      className={`text-blue-700 mt-2 hover:text-red-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};

export const CriticalAssessmentIconCommon = ({
  onClick,
}: IconCommonType): JSX.Element => {
  return (
    <FileSyncOutlined
      className={`text-blue-700 mt-2 hover:text-red-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};

export const ProtectedIconCommon = ({
  onClick,
}: IconCommonType): JSX.Element => {
  return (
    <FileProtectOutlined
      className={`text-blue-700 mt-2 hover:text-red-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};

export const CommentIconCommon = ({ onClick }: IconCommonType): JSX.Element => {
  return (
    <CommentOutlined
      className={`text-blue-700 hover:text-red-500 ${iconTextClass}`}
      onClick={onClick}
    />
  );
};
