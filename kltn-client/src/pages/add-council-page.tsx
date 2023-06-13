import { Button, Select, Col, Row, Transfer, Input } from "antd";
import type { TransferDirection } from "antd/es/transfer";
import { Form } from "antd";
import PageLayout from "~/components/common/PageLayout";
import { useState } from "react";

interface RecordType {
  key: string;
  title: string;
  email: string;
}

const data: RecordType[] = [
  {
    key: "01",
    title: `account 1`,
    email: `email of account 1`,
  },
  {
    key: "02",
    title: `account 2`,
    email: `email of account 2`,
  },
  {
    key: "03",
    title: `account 3`,
    email: `email of account 3`,
  },
  {
    key: "04",
    title: `account 4`,
    email: `email of account 4`,
  },
  {
    key: "05",
    title: `account 5`,
    email: `email of account 5`,
  },
];
const AddCouncilPage = (): JSX.Element => {
  const [mockData, setMockData] = useState<RecordType[]>(data);
  const [targetKeys, setTargetKeys] = useState<string[]>([]);

  const filterOption = (inputValue: string, option: RecordType) =>
    option.email.indexOf(inputValue) > -1;

  const handleChange = (newTargetKeys: string[]) => {
    setTargetKeys(newTargetKeys);
  };

  const handleSearch = (dir: TransferDirection, value: string) => {
    console.log("search:", dir, value);
  };
  const dateFormat = "YYYY/MM/DD";
  return (
    <PageLayout pageTitle="Thêm hội đồng" showTitle>
      <Row>
        <Form.Item
          label="Tên hội đồng"
          className="w-full"
          labelCol={{ span: 4 }}
        >
          <Input></Input>
        </Form.Item>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item label="Trạng thái" labelCol={{ span: 4 }}>
            <Select
              style={{ width: "40%" }}
              options={[
                {
                  value: 0,
                  label: "Active",
                },
                {
                  value: 1,
                  label: "Inactive",
                },
              ]}
            ></Select>
          </Form.Item>
        </Col>
      </Row>
      <div className="w-full flex justify-center">
        <Transfer
          dataSource={mockData}
          showSearch
          locale={{ itemsUnit: "tài khoản" }}
          operations={["add to council"]}
          operationStyle={{
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#cdc3c3",
          }}
          listStyle={{
            width: 350,
            height: 300,
          }}
          render={(item) => `${item.title}-${item.email}`}
          filterOption={filterOption}
          targetKeys={targetKeys}
          onChange={handleChange}
          onSearch={handleSearch}
          oneWay={true}
        />
      </div>
      <div className="w-full flex justify-end mt-6">
        <Button>Xác nhận</Button>
      </div>
    </PageLayout>
  );
};
export default AddCouncilPage;
