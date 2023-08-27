import ButtonCommon from "../common/ButtonCommon";
import ModalCommon from "../common/ModalCommon";
import { type SetStateAction } from "react";
import SearchForm from "./SearchForm";
import TableResult from "./TableResult";

type ThesisTargetModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

const ThesisTargetModal = ({
  isOpen,
  setIsOpen,
}: ThesisTargetModalProps): JSX.Element => {
  return (
    <ModalCommon
      title="Chọn luận văn"
      open={isOpen}
      footer={[
        <ButtonCommon key={1} value="Đóng" />,
        <ButtonCommon key={2} value="Hoàn tất" />,
      ]}
    >
      <SearchForm />
      <TableResult />
    </ModalCommon>
  );
};

export default ThesisTargetModal;
