import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { MouseEventHandler } from "react";

type IconCustomType = {
  onClick?: MouseEventHandler;
};

export const EditIconCustom = ({ onClick }: IconCustomType) => {
  return <FormOutlined className="text-[#ccbb00]" onClick={onClick} />;
};

export const DeleteIconCustom = ({ onClick }: IconCustomType) => {
  return <DeleteOutlined className="text-[#ff0000]" onClick={onClick} />;
};
