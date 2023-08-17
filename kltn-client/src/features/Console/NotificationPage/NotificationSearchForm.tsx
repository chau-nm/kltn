import { Button, DatePicker, Form, Input } from "antd";
import { useContext } from "react";
import { NotificationConsoleContext } from "~/contexts/NotificationConsoleContext";

const NotificationSearchForm = (): JSX.Element => {
  const { search, setSearchCondition } = useContext(NotificationConsoleContext);

  const handleSearch = (): void => {
    search();
  };

  const handleValueChange = (value: any, allValues: any): void => {
    setSearchCondition({
      title: allValues.title,
      startAt: allValues.dateRange
        ? allValues.dateRange[0].toDate().getTime()
        : undefined,
      endAt: allValues.dateRange
        ? allValues.dateRange[1].toDate().getTime()
        : undefined,
    });
  };

  return (
    <Form
      layout="inline"
      className="bg-white p-7 shadow"
      onFinish={handleSearch}
      onValuesChange={handleValueChange}
    >
      <Form.Item label="Tiêu đề" name="title">
        <Input className="w-[300px]" />
      </Form.Item>
      <Form.Item label="Thời gian" name="dateRange">
        <DatePicker.RangePicker />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Tìm kiếm</Button>
      </Form.Item>
    </Form>
  );
};

export default NotificationSearchForm;
