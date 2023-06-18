import { Modal } from "antd";
import { ReactNode } from "react";
import "~/assets/styles/ModalCustom.scss"

type ModalCustomProps = {
  title?: string;
  open?: boolean;
  footer?: ReactNode[];
  children?: ReactNode;
  className?: string;
  maskCloseable?: boolean;
  onCanel?: () => void;
  onOk?: () => void;
};

const ModalCustom = ({
  title,
  open,
  footer,
  children,
  className,
  maskCloseable,
  onCanel,
  onOk
}: ModalCustomProps): JSX.Element => {
  return (
    <Modal 
      title={title} 
      open={open} 
      footer={footer}
      onCancel={onCanel}
      onOk={onOk}
      maskClosable={maskCloseable}
      className={`${className}`}>
      {children}
    </Modal>
  );
};

export default ModalCustom;
