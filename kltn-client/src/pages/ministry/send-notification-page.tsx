import { Input, Button, message, Upload, Layout, Form, Select } from "antd";
import type { UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import PageLayout from "~/components/common/PageLayout";

const { TextArea } = Input;

const props: UploadProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const SendNotificationPage = (): JSX.Element => {
  return (
    <PageLayout pageTitle="Gửi thông báo" showTitle>
      <Form>
        <div className="bg-white h-full flex justify-around items-center flex-col p-2 mt-2 ml-2">
          <div className="w-full">
            <div className="w-full">
              <div className="w-full font-bold font text-lg">Tiêu Đề</div>
              <div className="w-full">
                <TextArea placeholder="Nhập tiêu đề" />
              </div>
            </div>
            <div className="w-full">
              <div className="w-full font-bold font text-lg">
                Nội dung báo cáo
              </div>
              <div className="w-full border ">
                <Editor
                  wrapperClassName="wrapper-class"
                  editorClassName="p-2 h-44"
                  toolbarClassName="toolbar-class"
                  placeholder="Nhập nội dung báo cáo"
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full font-bold font text-lg">Đính kèm file</div>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>
          <div className="w-full">
            <div className="w-full font-bold font text-lg mt-3">
              Phạm vi thông báo
            </div>
            <Form.Item
              label="Phạm vi"
              labelCol={{ span: 5 }}
              className="font-bold"
              name="council"
              rules={[{ required: true, message: "Please select council" }]}
            >
              <Select showSearch>
                <Select.Option value="public">Chung</Select.Option>
                <Select.Option value="id1">
                  Tiến trình luận văn 2019
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Giai đoạn"
              labelCol={{ span: 5 }}
              className="font-bold"
              name="council"
              rules={[{ required: true, message: "Please select council" }]}
            >
              <Select showSearch>
                <Select.Option value="public">Thông báo</Select.Option>
                <Select.Option value="id1">Xét duyệt</Select.Option>
                <Select.Option value="id2">Phản biện</Select.Option>
                <Select.Option value="id3">Bảo vệ</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className="w-full flex justify-end">
            <Button>Gửi</Button>
          </div>
        </div>
      </Form>
    </PageLayout>
  );
};

export default SendNotificationPage;
