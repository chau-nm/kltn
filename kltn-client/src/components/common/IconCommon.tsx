import {
  CommentOutlined,
  DeleteOutlined,
  EyeOutlined,
  FileProtectOutlined,
  FileSyncOutlined,
  FormOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import { type MouseEventHandler } from "react";

type IconCommonType = {
  onClick?: MouseEventHandler;
};

const iconTextClass = "text-xl mx-2 cursor-pointer duration-300";

export const EditIconCommon = ({ onClick }: IconCommonType): JSX.Element => {
  return (
    <Tooltip title="Chỉnh sửa">
      <FormOutlined
        className={`text-yellow-700 mt-2 hover:text-yellow-500 ${iconTextClass}`}
        onClick={onClick}
      />
    </Tooltip>
  );
};

export const DeleteIconCommon = ({ onClick }: IconCommonType): JSX.Element => {
  return (
    <Tooltip title="Xóa">
      <DeleteOutlined
        className={`text-red-700 mt-2 hover:text-red-500 ${iconTextClass}`}
        onClick={onClick}
      />
    </Tooltip>
  );
};

export const SeeIconCommon = ({ onClick }: IconCommonType): JSX.Element => {
  return (
    <Tooltip title="Xem chi tiết">
      <EyeOutlined
        className={`text-blue-700 mt-2 hover:text-red-500 ${iconTextClass}`}
        onClick={onClick}
      />
    </Tooltip>
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
    <Tooltip title="Phản biện">
      <FileSyncOutlined
        className={`text-blue-700 mt-2 hover:text-red-500 ${iconTextClass}`}
        onClick={onClick}
      />
    </Tooltip>
  );
};

export const ProtectedIconCommon = ({
  onClick,
}: IconCommonType): JSX.Element => {
  return (
    <Tooltip title="Bảo vệ">
      <FileProtectOutlined
        className={`text-blue-700 mt-2 hover:text-red-500 ${iconTextClass}`}
        onClick={onClick}
      />
    </Tooltip>
  );
};

export const CommentIconCommon = ({ onClick }: IconCommonType): JSX.Element => {
  return (
    <Tooltip title="Đề cương">
      <CommentOutlined
        className={`text-blue-700 hover:text-red-500 ${iconTextClass}`}
        onClick={onClick}
      />
    </Tooltip>
  );
};
