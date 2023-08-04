import { PaperClipOutlined } from "@ant-design/icons";
import { Button, Form, Input, Row, Select, Space, Typography } from "antd";
import { useState } from "react";
import { getFileNameFromUrl } from "~/common/util";
import ButtonCommon from "~/components/common/ButtonCommon";
import CardCommon from "~/components/common/CardCommon";
import DraggerCommon from "~/components/common/DraggerCommon";
import ReactQuillPreviewCommon from "~/components/common/ReactQuillPreviewCommon";
import RichTextEditorCommon from "~/components/common/RichTextEditorCommon";
import * as Doc2VecServices from "~/services/doc2vecService";

const RegisterThesisForm = (): JSX.Element => {
  const [thesisName, setThesisName] = useState(""); // State to store the thesis name input value
  const [documentList, setDocumentList] = useState<Doc2VecModel[]>([]); // State to store the list of documents

  const handleThesisNameChange = async (value: string) => {
    setThesisName(value);
    // Clear any existing timeout to prevent the API call from being made immediately
    // Create a new timeout to call the API after 400 milliseconds of inactivity
    // Call the API to fetch documents here
    let data: [] | Doc2VecModel[] = [];
    if (value) {
      data = await Doc2VecServices.searchDoc2vec(value);
    }
    setDocumentList(data);
    console.log(data);
  };

  const handleUploadFailed = () => {};

  const handleUploadSuccess = () => {};

  return (
    <Form layout="vertical">
      <Form.Item label="Sinh viên 1">
        <Select></Select>
      </Form.Item>
      <Form.Item label="Sinh viên 2">
        <Select></Select>
      </Form.Item>
      <Form.Item label="Giảng viên hướng dẫn">
        <Select></Select>
      </Form.Item>
      <Form.Item label="Tên đề tài">
        <Input
          type="text"
          value={thesisName}
          onChange={(e) => handleThesisNameChange(e.target.value)}
        />
        {documentList.length > 0 && (
          <CardCommon
            cardProps={{
              title: "Danh sách đề tài có tiêu đề tương tự" as string,
            }}
          >
            {documentList.map((data) => {
              return (
                <div className="border-2 border-slate-200 rounded-sm p-1 mb-1">
                  <ReactQuillPreviewCommon content={data?.title as string} />
                  {data?.url && (
                    <div className="border-t py-3">
                      <Typography.Text className="font-bold">
                        Danh sách file đính kèm
                      </Typography.Text>
                      <Space className="block">
                        <a href={data?.url}>
                          <PaperClipOutlined /> {getFileNameFromUrl(data?.url)}
                        </a>
                      </Space>
                    </div>
                  )}
                  {/* <Row justify={"end"}>
          <Typography.Text type="secondary" italic>Cập nhật: {dateTimeDisplay(new Date(data?.updatedAt as number))}</Typography.Text>
        </Row> */}
                </div>
              );
            })}
          </CardCommon>
        )}
      </Form.Item>
      <Form.Item label="Mô tả">
        <RichTextEditorCommon />
      </Form.Item>
      <Form.Item label="File đề cương" className="mt-14">
        <DraggerCommon
          handleUploadFailure={handleUploadFailed}
          handleUploadSuccess={handleUploadSuccess}
        />
      </Form.Item>
      <Form.Item>
        <Row justify={"end"}>
          <ButtonCommon color="blue" value="Đăng ký" />
        </Row>
      </Form.Item>
    </Form>
  );
};

export default RegisterThesisForm;
