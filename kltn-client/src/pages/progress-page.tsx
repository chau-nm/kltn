import PageLayout from "~/components/common/PageLayout";
import React, { useState } from "react";
import {
  Button,
  Divider,
  Form,
  Input,
  Select,
  Steps,
  DatePicker,
  TimePicker,
  Row,
  Col,
} from "antd";

import moment, { Moment } from "moment";
import dayjs, { Dayjs } from "dayjs";

const { RangePicker } = DatePicker;
const { Step } = Steps;
const { TextArea } = Input;

type StepData = {
  title: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
};
const defaultSteps: StepData[] = [
  { title: "Thông báo đăng ký", startDate: null, endDate: null },
  { title: "Tiến hành xét duyệt", startDate: null, endDate: null },
  { title: "Tổng kết xét duyệt", startDate: null, endDate: null },
  { title: "Tiến hành luận văn", startDate: null, endDate: null },
  { title: "Phản biện luận văn", startDate: null, endDate: null },
  { title: "Bảo vệ luận văn", startDate: null, endDate: null },
];
const ProgressPage = (props: any): JSX.Element => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  const [steps, setSteps] = useState<StepData[]>(defaultSteps);

  const handleChangeTitle = (index: number, value: string) => {
    const updatedSteps = [...steps];
    updatedSteps[index].title = value;
    setSteps(updatedSteps);
  };

  const handleChangeStartDate = (index: number, value: Dayjs | null) => {
    const updatedSteps = [...steps];
    updatedSteps[index].startDate = value;
    setSteps(updatedSteps);
  };

  const handleChangeEndDate = (index: number, value: Dayjs | null) => {
    const updatedSteps = [...steps];
    updatedSteps[index].endDate = value;
    setSteps(updatedSteps);
  };

  const handleRemoveStep = (index: number) => {
    const updatedSteps = [...steps];
    updatedSteps.splice(index, 1);
    setSteps(updatedSteps);
  };

  const handleAddStep = () => {
    const newStep: StepData = { title: "", startDate: null, endDate: null };
    setSteps([...steps, newStep]);
  };
  const handleSubmit = (values: any) => {
    // Gửi dữ liệu steps đi để lưu trữ hoặc xử lý
    console.log("Submitted Steps:", steps);
    console.log("Form Values:", values);
  };
  const validateEndDate = (rule: any, value: Dayjs | null, callback: any) => {
    const index = rule.field.split(".")[1]; // Extract the index from the field name
    const formValues = form.getFieldsValue(); // Get all form field values
    const startDate = formValues.steps[index].startDate; // Get the start date value
    // console.log(startDate.toDate());
    // console.log(value.toDate());

    if (value && startDate && value.isBefore(startDate)) {
      return Promise.reject("End Date must be after Start Date");
    } else {
      return Promise.resolve();
    }
  };
  return (
    <PageLayout pageTitle="Xây dựng tiến trình luận văn" showTitle>
      <div className="bg-white h-full flex justify-around items-center flex-col p-2 mt-2 ml-2">
        <div className="w-full p-5">
          <Form
            form={form}
            labelCol={{ span: 5 }}
            layout="horizontal"
            colon={false}
            labelAlign={"left"}
            labelWrap={true}
            onFinish={handleSubmit}
          >
            <Form.Item
              label="Tên tiến trình"
              className="font-bold"
              name="progressName"
              rules={[
                { required: true, message: "Please input progress name" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Hội đồng hướng dẫn"
              className="font-bold"
              name="council"
              rules={[{ required: true, message: "Please select council" }]}
            >
              <Select showSearch>
                <Select.Option value="demo">Hội Đồng khóa 2019</Select.Option>
                <Select.Option value="demo">Hội Đồng khóa 2018</Select.Option>
                <Select.Option value="demo">Hội Đồng khóa 2017</Select.Option>
                <Select.Option value="demo">Hội Đồng khóa 2016</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Thời gian tiến trình"
              className="font-bold"
              name="timeProgress"
              rules={[
                {
                  required: true,
                  message: "Please select Start-End Date Progress",
                },
              ]}
            >
              <RangePicker />
            </Form.Item>
            <Divider>Xây dựng giai đoạn</Divider>
            {/* <Steps
              className="mt-8"
              type="default"
              labelPlacement="vertical"
              // current={current}
              items={items}
              responsive
            /> */}

            <Steps
              labelPlacement="vertical"
              current={steps.length}
              className="mb-6"
            >
              {steps.map((step, index) => (
                <Step key={index} title={step.title} />
              ))}
            </Steps>
            {steps.map((step, index) => (
              <Row className="flex justify-between" key={index}>
                <Form.Item
                  label="Thông tin giai đoạn"
                  labelCol={{ span: 12 }}
                  name={["steps", index, "name"]}
                  // initialValue={step.title}
                  rules={[
                    { required: true, message: "Please input step name" },
                  ]}
                >
                  <Input
                    onChange={(e) => handleChangeTitle(index, e.target.value)}
                    placeholder="Title"
                  />
                </Form.Item>

                <Col span={5}>
                  <Form.Item
                    name={["steps", index, "startDate"]}
                    initialValue={step.startDate}
                    rules={[
                      { required: true, message: "Please select Start Date" },
                    ]}
                  >
                    <DatePicker
                      onChange={(value) => handleChangeStartDate(index, value)}
                      placeholder="Start Date"
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    name={["steps", index, "endDate"]}
                    initialValue={step.endDate}
                    dependencies={[`steps[${index}].startDate`]}
                    rules={[
                      { required: true, message: "Please select End Date" },
                      { validator: validateEndDate },
                    ]}
                  >
                    <DatePicker
                      onChange={(value) => handleChangeEndDate(index, value)}
                      placeholder="End Date"
                    />
                  </Form.Item>
                </Col>
                <Button onClick={() => handleRemoveStep(index)}>Remove</Button>
              </Row>
            ))}
            <Button onClick={handleAddStep}>Add Step</Button>

            <div style={{ display: "flex" }}>
              <Form.Item>
                <Button
                  className="mt-5"
                  style={{ color: "black" }}
                  type="default"
                  htmlType="submit"
                >
                  Xác Nhận
                </Button>
              </Form.Item>
              <Form.Item></Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProgressPage;
