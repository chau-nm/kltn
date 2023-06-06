import { Button, Collapse, Form, Input } from "antd";

import PageLayout from "~/components/common/PageLayout";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import NotificationPage from "../notification-page";
import { useState } from "react";

const { Panel } = Collapse;
const { TextArea } = Input;
interface FormItem {
  id: number;
  name: string;
}
const EvalueThesisOutlinePage = () => {
  const [form] = Form.useForm();
  const [formItems, setFormItems] = useState<FormItem[]>([]);

  const addFormItem = () => {
    const newItem: FormItem = {
      id: formItems.length + 1,
      name: `field_${formItems.length + 1}`,
    };
    setFormItems([...formItems, newItem]);
  };

  const removeFormItem = (id: number) => {
    const updatedItems = formItems.filter((item) => item.id !== id);
    setFormItems(updatedItems);
  };

  const handleSubmit = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <PageLayout pageTitle="Đề cương" showTitle>
      <NotificationPage />

      <div>
        <div className="w-full font-bold font text-lg">
          Danh sách luận văn có nội dung tương tự
        </div>
        <Collapse accordion>
          <Panel header="xây dựng mạng xã hội - khóa 2015" key="1">
            <NotificationPage />
          </Panel>
          <Panel header="Xây dựng ứng dụng chat - khóa 2019" key="2">
            <NotificationPage />
          </Panel>
          <Panel header="xây dựng hệ thống nhận dạng - khóa 2020" key="3">
            <NotificationPage />
          </Panel>
        </Collapse>
      </div>
      <div className="mt-8 shadow-2xl p-3 rounded shadow-slate-800">
        <div className="w-full font-bold font text-lg mb-3">Đánh giá</div>
        {/* <div className="w-full border mb-3">
          <Editor
            wrapperClassName="wrapper-class"
            editorClassName="p-2 h-44"
            toolbarClassName="toolbar-class bg-slate-50"
            placeholder="Nhập nội dung đánh giá"
          />
        </div> */}
        <Form form={form}>
          {formItems.map((item) => (
            <Form.Item key={item.id} name={item.name}>
              <Input className="w-4/5 mr-2" />
              <Button onClick={() => removeFormItem(item.id)}>Remove</Button>
            </Form.Item>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              className="mt-1 mb-4"
              onClick={addFormItem}
              style={{ width: "100%" }}
            >
              Add Form Item
            </Button>
          </Form.Item>
        </Form>
        <div className="w-full flex justify-end">
          <Button>Gửi</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default EvalueThesisOutlinePage;
