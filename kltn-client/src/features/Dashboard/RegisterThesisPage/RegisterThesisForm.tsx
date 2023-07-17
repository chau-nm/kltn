import { Button, Form, Input, Row, Select } from "antd";
import ButtonCommon from "~/components/common/ButtonCommon";
import DraggerCommon from "~/components/common/DraggerCommon";
import RichTextEditorCommon from "~/components/common/RichTextEditorCommon";

const RegisterThesisForm = (): JSX.Element => {
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
        <Input type="text" />
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
            <ButtonCommon color="blue" value="Đăng ký"/>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default RegisterThesisForm;
