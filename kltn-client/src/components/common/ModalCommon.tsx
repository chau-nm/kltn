import { Modal, ModalProps } from "antd";
import { ReactNode } from "react";
import "~/assets/styles/ModalCommon.scss"

type ModalCommonProps = {
  title?: string;
  open?: boolean;
  footer?: ReactNode[];
  children?: ReactNode;
  className?: string;
  maskCloseable?: boolean;
  onCanel?: () => void;
  onOk?: () => void;
};

const ModalCommon = ({
  title,
  open,
  footer,
  children,
  className,
  maskCloseable,
  onCanel,
  onOk,
  ...rest
}: ModalCommonProps & ModalProps): JSX.Element => {
  return (
    <Modal 
      title={title} 
      open={open} 
      footer={footer}
      onCancel={onCanel}
      onOk={onOk}
      maskClosable={maskCloseable}
      className={`${className} min-w-[500px]`}
      {...rest}>
      {children}
    </Modal>
  );
};

export default ModalCommon;
