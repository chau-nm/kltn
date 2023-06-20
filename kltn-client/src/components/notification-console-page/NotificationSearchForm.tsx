import { Button, DatePicker, Form, Input } from "antd";

const NotificationSearchForm = (): JSX.Element => {
    return (
        <Form layout="inline" className="bg-white p-7 shadow">
            <Form.Item label="Tiêu đề">
                <Input className="w-[300px]"/>
            </Form.Item>
            <Form.Item label="Thời gian">
                <DatePicker.RangePicker />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">Tìm kiếm</Button>
            </Form.Item>
        </Form>
    )
}

export default NotificationSearchForm;