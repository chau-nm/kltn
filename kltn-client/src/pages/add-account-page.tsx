import { Button, Select, Col, Row, Transfer, Input } from "antd";
import type { TransferDirection } from "antd/es/transfer";
import { Form } from "antd";
import PageLayout from "~/components/common/PageLayout";
import { useState } from "react";

const AddAccountPage = (): JSX.Element => {
  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };
  const dateFormat = "YYYY/MM/DD";
  return (
    <PageLayout pageTitle="Thêm tài khoản" showTitle>
      <Form onFinish={onFinish}>
        <Form.Item
          name="fullName"
          label="Họ và tên"
          labelCol={{ span: 5 }}
          rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
        >
          <Input />
        </Form.Item>

        <Row>
          <Col span={8} className="flex justify-start">
            <Form.Item
              name="studentId"
              label="Mã số sinh viên/ giảng viên"
              labelCol={{ span: 15 }}
              rules={[{ required: true, message: "Vui lòng nhập mã số" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              name="class"
              label="Lớp"
              labelCol={{ span: 10 }}
              //   rules={[{ required: true, message: "Vui lòng nhập lớp" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="role"
              label="Chức vụ"
              labelCol={{ span: 10 }}
              //   rules={[{ required: true, message: "Vui lòng nhập lớp" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="email"
          label="Email"
          labelCol={{ span: 5 }}
          rules={[
            { required: true, message: "Vui lòng nhập email" },
            { type: "email", message: "Email không hợp lệ" },
          ]}
        >
          <Input className="w-1/3" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="border-slate-400 text-slate-400"
          >
            Thêm tài khoản
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  );
};
export default AddAccountPage;
