import { Modal, type ModalProps } from "antd";
import { type ReactNode } from "react";
import "~/assets/styles/ModalCommon.scss";

type ModalCommonProps = {
  title?: string;
  open?: boolean;
  footer?: ReactNode[];
  children?: ReactNode;
  className?: string;
  maskCloseable?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
};

const ModalCommon = ({
  title,
  open,
  footer,
  children,
  className,
  maskCloseable,
  onCancel,
  onOk,
  ...rest
}: ModalCommonProps & ModalProps): JSX.Element => {
  return (
    <Modal
      {...rest}
      title={title}
      open={open}
      footer={footer}
      onCancel={onCancel}
      onOk={onOk}
      maskClosable={maskCloseable}
      className={`${className ?? ""} min-w-[500px]`}
    >
      {children}
    </Modal>
  );
};

export default ModalCommon;
