import { InboxOutlined } from "@ant-design/icons";
import {
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Upload,
  UploadFile,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { DraggerProps } from "antd/es/upload";
import { useContext, useEffect, useState } from "react";
import { useMutation } from "react-query";
import ButtonCommon from "~/components/common/ButtonCommon";
import DraggerCommon from "~/components/common/DraggerCommon";
import DraggerSingleCommon from "~/components/common/DraggerSingleCommon";
import ModalCommon from "~/components/common/ModalCommon";
import RichTextEditorCommon from "~/components/common/RichTextEditorCommon";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import * as ThesisService from "~/services/thesisService";

const AddEditThesisModal = (): JSX.Element => {
  const { isEditModal, isOpenAddEditThesisModal, setIsOpenAddEditThesisModal } =
    useContext(ThesisConsoleContext);

  const insertThesisMutation = useMutation(ThesisService.insert);
  const updateThesisMutation = useMutation(ThesisService.update);

  const [documentUrl, setDocumentUrl] = useState<string | undefined>(undefined);
  const [desciption, setDesciption] = useState<string | undefined>();

  const [form] = useForm();

  useEffect(() => {}, []);

  const title = isEditModal ? "Chỉnh sửa luận văn" : "Thêm luận văn";
  const handleSave = () => {
    form.setFieldsValue({
      desciption,
      documentUrl,
    });
    form.validateFields().then(() => {
      const thesis: ThesisModel = {
          // id: 
      }
      if (isEditModal) {
        // updateThesisMutation.mutate({});
      }
    });
  };

  const handleUploadSuccess = (file: UploadFile) => {
    setDocumentUrl(file.response ?? undefined);
  };
  const handleRemove = () => {
    setDocumentUrl(undefined);
  };

  const handleClose = () => {
    setIsOpenAddEditThesisModal(false);
    form.resetFields();
  };

  return (
    <ModalCommon
      title={title}
      footer={[
        <ButtonCommon key={1} value="Hủy" onClick={handleClose} />,
        <ButtonCommon key={2} color="blue" value="Lưu" onClick={handleSave} />,
      ]}
      open={isOpenAddEditThesisModal}
      onCanel={handleClose}
    >
      <Form className="min-w-[800px]" layout="vertical" form={form}>
        <Form.Item label="Tên đề tài" name="topic" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Mô tả" name="desciption">
          <div style={{ height: 230 }}>
            <RichTextEditorCommon
              style={{ height: 200 }}
              editorHtml={desciption}
              setEditorHtml={setDesciption}
            />
          </div>
        </Form.Item>
        <Row gutter={30}>
          <Col span={10}>
            <Form.Item label="Năm" name="year" rules={[{ required: true }]}>
              <DatePicker.YearPicker className="w-full" />
            </Form.Item>
          </Col>
          <Col span={14}>
            <Form.Item
              label="Học kì"
              name="semester"
              rules={[{ required: true }]}
            >
              <Select>
                <Select.Option key={1}>Học kì 1</Select.Option>
                <Select.Option key={2}>Học kì 2</Select.Option>
                <Select.Option key={3}>Học kì 3</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="File tài liệu"
          name="documentUrl"
          rules={[{ required: true }]}
        >
          <DraggerSingleCommon
            handleRemove={handleRemove}
            handleSuccess={handleUploadSuccess}
          />
        </Form.Item>
      </Form>
    </ModalCommon>
  );
};

export default AddEditThesisModal;
