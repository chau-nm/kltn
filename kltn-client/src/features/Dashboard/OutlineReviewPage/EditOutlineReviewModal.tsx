import { PaperClipOutlined } from "@ant-design/icons";
import { Col, Form, Radio, Row, Space, Typography, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext, useEffect, useState } from "react";
import { getFileNameFromUrl } from "~/common/util";
import ReactQuillPreviewCommon from "~/components/common/ReactQuillPreviewCommon";
import RichTextEditorCommon from "~/components/common/RichTextEditorCommon";
import { OutlineReviewContext } from "~/contexts/OutlineReviewContext";
import * as Doc2VecServices from "~/services/doc2vecService";
import ButtonCommon from "../../../components/common/ButtonCommon";
import ModalCommon from "../../../components/common/ModalCommon";
import { AuthContext } from "~/contexts/AuthContext";
import { useMutation } from "react-query";
import * as ThesisReviewerCommnetService from "~/services/thesisReviewerCommentService";

const EditOutlineReviewModal = (): JSX.Element => {
  const {
    openEditOutlineReviewModal,
    setOpenEditOutlineReviewModal,
    thesisDetail,
  } = useContext(OutlineReviewContext);
  const { user } = useContext(AuthContext);
  const [documentList, setDocumentList] = useState<Doc2VecModel[]>();
  // const [thesis, setThesis] = useState<ThesisModel>({} as ThesisModel);
  const [editorHtml, setEditorHtml] = useState<string>();
  const [form] = useForm();
  const [myComment, setMyComment] = useState<ThesisReviewerComment>();

  useEffect(() => {
    form.setFieldValue("comment", editorHtml);
  }, [editorHtml]);

  useEffect(() => {
    void (thesisDetail?.topic && getSimilarData(thesisDetail?.topic));
    handleGetMyComment();
  }, [thesisDetail]);

  const handleGetMyComment = (): void => {
    const thesisComments = thesisDetail?.thesisReviewerComments;
    const myComment = thesisComments?.filter(
      (tc) => tc.userId === user?.userId
    )[0];
    setMyComment(myComment);
    setEditorHtml(myComment?.comment);
    console.log(myComment?.result);
    form.setFieldsValue({
      result: myComment?.result,
      description: myComment?.comment,
    });
  };

  const getSimilarData = async (value: string): Promise<void> => {
    let data: [] | Doc2VecModel[] = [];
    if (value) {
      data = await Doc2VecServices.searchDoc2vec(value);
    }
    setDocumentList(data);
  };

  const ModalFooter = (): JSX.Element => {
    return (
      <Row justify={"end"}>
        <ButtonCommon value="Đóng" onClick={handleCancel} />
        <ButtonCommon
          value="Lưu"
          onClick={() => {
            void handleSave();
          }}
        />
      </Row>
    );
  };

  const handleCancel = (): void => {
    setOpenEditOutlineReviewModal(false);
  };

  const handleSave = async (): Promise<void> => {
    form.setFieldValue("comment", editorHtml);
    void form.validateFields().then(() => {
      const thesisReviewerComment: ThesisReviewerComment = {
        ...myComment,
        ...form.getFieldsValue(),
      };
      updateThesisReviewerComment.mutate(thesisReviewerComment);
    });
  };

  const updateThesisReviewerComment = useMutation(
    ThesisReviewerCommnetService.update,
    {
      onSuccess: (data: boolean) => {
        if (data) {
          void message.success("Cập nhật đánh giá thành công");
          handleCancel();
        }
      },
    }
  );

  return (
    <ModalCommon
      title="Đánh giá luận văn"
      open={openEditOutlineReviewModal}
      footer={[<ModalFooter key={"1"} />]}
      onCancel={handleCancel}
      maskCloseable={false}
    >
      {thesisDetail?.students?.map((student, index) => {
        return (
          <Row key={index} className="w-[800px]">
            <Col className="w-[250px]">
              <Typography.Text className="font-bold">
                Họ tên sinh viên:{" "}
              </Typography.Text>
              <Typography.Text>{student?.fname}</Typography.Text>
            </Col>
            <Col className="w-[250px]">
              <Typography.Text className="font-bold">Lớp: </Typography.Text>
              <Typography.Text>{student?.studentClass}</Typography.Text>
            </Col>
            <Col className="w-[250px]">
              <Typography.Text className="font-bold">Email: </Typography.Text>
              <Typography.Text>{student?.email}</Typography.Text>
            </Col>
          </Row>
        );
      })}

      {thesisDetail?.teachers?.map((teacher, index) => {
        return (
          <Row key={index} className="w-[800px] mt-4">
            <Col flex={1} className="w-[450px]">
              <Typography.Text className="font-bold ">
                Họ tên Giảng viên hướng dẫn:{" "}
              </Typography.Text>
              <Typography.Text>{teacher?.fname}</Typography.Text>
            </Col>
            <Col flex={1} className="w-[250px]">
              <Typography.Text className="font-bold ">Email: </Typography.Text>
              <Typography.Text>{teacher?.email}</Typography.Text>
            </Col>
          </Row>
        );
      })}

      <Row className="w-[800px] mt-8">
        <Col flex={1} className="w-[250px]">
          <Typography.Text className="font-bold ">Đề tài: </Typography.Text>
        </Col>
      </Row>
      <Row className="w-[800px] mb-8">
        <Col
          flex={1}
          className="py-3 px-4 w-full flex items-center justify-center"
        >
          <Typography.Text className="font-bold text-xl">
            {thesisDetail?.topic}
          </Typography.Text>
        </Col>
      </Row>

      <Row className="w-[800px] mt-8">
        <Col flex={1} className="w-[250px]">
          <Typography.Text className="">Mô tả: </Typography.Text>
        </Col>
      </Row>

      <Row className="w-[800px]">
        <Col
          flex={1}
          className="py-3 px-4 w-full flex items-center justify-center"
        >
          <ReactQuillPreviewCommon content={thesisDetail?.description ?? ""} />
        </Col>
      </Row>
      <Row>
        <div className="mb-4">
          <Typography.Text className="text-lg">
            <strong>Danh sách file đính kèm:</strong>
          </Typography.Text>
          {thesisDetail?.fileAttachments?.map((fa, index) => {
            return (
              <Space key={index} className="block">
                <a href={fa.fileUrl}>
                  <PaperClipOutlined /> {getFileNameFromUrl(fa.fileUrl ?? "")}
                </a>
              </Space>
            );
          })}
        </div>
      </Row>
      <Row className="w-[800px] mt-8">
        <Col flex={1} className="w-[250px]">
          <Typography.Text className="font-bold ">
            Danh sách luận văn có tiêu đề tương tự:{" "}
          </Typography.Text>
        </Col>
      </Row>
      {documentList &&
        documentList?.length > 0 &&
        documentList?.map((data, index) => {
          return (
            <Row key={index}>
              <div className="w-full border-2 border-slate-200 rounded-sm p-1 mb-1">
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
              </div>
            </Row>
          );
        })}

      <Row className="mt-9">
        <Form layout="vertical" onFinish={handleSave} form={form}>
          <Form.Item
            label="Đánh giá"
            name="result"
            rules={[{ required: true }]}
          >
            <Radio.Group>
              <Radio value={1}>Đạt</Radio>
              <Radio value={2}>Không đạt</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Nhận xét"
            name="comment"
            rules={[{ required: true }]}
          >
            <div style={{ height: "300px", marginBottom: "20px" }}>
              <RichTextEditorCommon
                editorHtml={editorHtml}
                setEditorHtml={setEditorHtml}
                style={{ height: 270 }}
                placeholder="Nhập nhận xét"
              />
            </div>
          </Form.Item>
        </Form>
      </Row>
    </ModalCommon>
  );
};

export default EditOutlineReviewModal;
