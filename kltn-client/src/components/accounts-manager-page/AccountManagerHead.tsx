import Search from "antd/es/input/Search";
import ButtonCommon from "../common/ButtonCommon";

const AcountManagerHead = (): JSX.Element => {
  return (
    <div className="w-full flex justify-between items-center px-2 mb-3">
      <ButtonCommon value="Thêm tài khoản" color="green" />
      <Search
        placeholder="tìm tiếm người dùng"
        allowClear
        style={{ width: 200 }}
      />
    </div>
  );
};

export default AcountManagerHead;
