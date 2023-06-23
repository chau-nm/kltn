import { Spin } from "antd";
import TableCommon from "~/components/common/TableCommon";

const ThesisTableResult = (): JSX.Element => {
  const columns: any[] = [];

  return (
    <Spin spinning={false}>
      <TableCommon columns={columns} />
    </Spin>
  );
};

export default ThesisTableResult;
