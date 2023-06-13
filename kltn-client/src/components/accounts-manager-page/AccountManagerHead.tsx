import Search from "antd/es/input/Search";
import ButtonCustom from "../common/ButtonCustom";

interface AcountManagerHeadProps {
  titleButton: string;
  placeHolderSearch: string;
}

const AcountManagerHead = (props: AcountManagerHeadProps): JSX.Element => {
  const { titleButton, placeHolderSearch } = props;
  return (
    <div className="w-full flex justify-between items-center px-2 mb-3">
      <ButtonCustom value={titleButton} color="green" />
      <Search
        placeholder={placeHolderSearch}
        allowClear
        style={{ width: 200 }}
      />
    </div>
  );
};

export default AcountManagerHead;
