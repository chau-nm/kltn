import { Col, Form, Row, Space, Spin, Typography } from "antd";
import { useContext, useEffect, useState } from "react";
import { OutlineReviewContext } from "~/contexts/OutlineReviewContext";
import * as ThesisService from "~/services/thesisService";
import ButtonCommon from "../../../components/common/ButtonCommon";
import ModalCommon from "../../../components/common/ModalCommon";
import { getFileNameFromUrl } from "~/common/util";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { PaperClipOutlined } from "@ant-design/icons";
import { JSX } from "react";
import ReactQuillPreviewCommon from "~/components/common/ReactQuillPreviewCommon";
import RichTextEditorCommon from "~/components/common/RichTextEditorCommon";
import { useForm } from "antd/es/form/Form";
import * as Doc2VecServices from "~/services/doc2vecService";

const EditOutlineReviewModal = (): JSX.Element => {
  const {
    openEditOutlineReviewModal,
    setOpenEditOutlineReviewModal,
    isLoadingDetail,
    OutlineReviewDetail,
  } = useContext(OutlineReviewContext);

  const [documentList, setDocumentList] = useState<Doc2VecModel[]>();
  const [OutlineReview, setOutlineReview] = useState<ThesisModel>(
    {} as ThesisModel
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editorHtml, setEditorHtml] = useState<string>("");
  const [form] = useForm();

  useEffect(() => {
    form.setFieldValue("description", editorHtml);
  }, [editorHtml]);

  useEffect(() => {
    getSimilarData(OutlineReview.topic);
    console.log(documentList);
  }, [OutlineReview]);

  const getSimilarData = async (value: string) => {
    let data: [] | Doc2VecModel[] = [];
    if (value) {
      data = await Doc2VecServices.searchDoc2vec(value);
    }
    setDocumentList(data);
  };

  const getOutlineReviewByIdMutation = useMutation(
    ThesisService.getThesisById,
    {
      onSuccess: (data) => {
        const OutlineReviewRes: ThesisModel | null = data as ThesisModel;
        if (OutlineReviewRes) {
          setOutlineReview(OutlineReviewRes);
        } else {
          toast("Không thể lấy thông tin người dùng");
        }
      },
    }
  );

  useEffect(() => {
    if (OutlineReviewDetail) {
      getOutlineReviewByIdMutation.mutate(OutlineReviewDetail.id);
    }
  }, [openEditOutlineReviewModal, OutlineReviewDetail]);

  useEffect(() => {
    if (OutlineReviewDetail) {
      getOutlineReviewByIdMutation.mutate(OutlineReviewDetail!?.id);
    }
  }, []);

  const ModalFooter = (): JSX.Element => {
    return (
      <Row justify={"end"}>
        <ButtonCommon value="Đóng" onClick={handleCancel} />
        {editMode ? (
          <ButtonCommon
            value="Lưu"
            onClick={() => {
              setEditMode(false);
            }}
          />
        ) : (
          <ButtonCommon value="Lưu" onClick={() => setEditMode(true)} />
        )}
      </Row>
    );
  };

  const handleCancel = () => {
    setOpenEditOutlineReviewModal(false);
    setEditMode(false);
  };

  const handleFinish = () => {};
  return (
    <ModalCommon
      title="Đánh giá luận văn"
      open={openEditOutlineReviewModal}
      footer={[<ModalFooter key={"1"} />]}
      onCanel={handleCancel}
      maskCloseable={false}
    >
      <Spin spinning={isLoadingDetail}>
        {OutlineReview.students?.map((student) => {
          return (
            <Row className="w-[800px]">
              <Col className="w-[250px]">
                <Typography.Text className="font-bold">
                  Họ tên sinh viên:{" "}
                </Typography.Text>
                <Typography.Text>{student.user?.fname}</Typography.Text>
              </Col>
              <Col className="w-[250px]">
                <Typography.Text className="font-bold">Lớp: </Typography.Text>
                <Typography.Text>{student.user?.studentClass}</Typography.Text>
              </Col>
              <Col className="w-[250px]">
                <Typography.Text className="font-bold">Email: </Typography.Text>
                <Typography.Text>{student.user?.email}</Typography.Text>
              </Col>
            </Row>
          );
        })}

        <Row className="w-[800px] mt-4">
          <Col flex={1} className="w-[450px]">
            <Typography.Text className="font-bold ">
              Họ tên Giảng viên hướng dẫn:{" "}
            </Typography.Text>
            <Typography.Text>
              {OutlineReview.teacher?.user?.fname}
            </Typography.Text>
          </Col>
          <Col flex={1} className="w-[250px]">
            <Typography.Text className="font-bold ">Email: </Typography.Text>
            <Typography.Text>
              {OutlineReview.teacher?.user?.email}
            </Typography.Text>
          </Col>
        </Row>

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
              {OutlineReview!?.topic}
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
            <ReactQuillPreviewCommon
              content={OutlineReview!?.description}
            ></ReactQuillPreviewCommon>
          </Col>
        </Row>
        <Row>
          {OutlineReview!?.outlineUrls &&
            OutlineReview!?.outlineUrls.length > 0 && (
              <div className="border-t py-3 w-full">
                <Typography.Text className="font-bold">
                  Danh sách file đính kèm
                </Typography.Text>
                {OutlineReview!?.outlineUrls?.map((url) => {
                  return (
                    <Space className="block">
                      <a href={url} target="_blank">
                        <PaperClipOutlined /> {getFileNameFromUrl(url)}
                      </a>
                    </Space>
                  );
                })}
              </div>
            )}
        </Row>
        <Row className="w-[800px] mt-8">
          <Col flex={1} className="w-[250px]">
            <Typography.Text className="font-bold ">
              Danh sách luận văn có tiêu đề tương tự:{" "}
            </Typography.Text>
          </Col>
        </Row>
        {documentList!?.length > 0 &&
          documentList!?.map((data) => {
            return (
              <Row>
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
          <Form layout="vertical" onFinish={handleFinish} form={form}>
            <Form.Item
              label="Đánh giá"
              name="description"
              rules={[{ required: true }]}
            >
              <div style={{ height: "300px", marginBottom: "20px" }}>
                <RichTextEditorCommon
                  editorHtml={editorHtml}
                  setEditorHtml={setEditorHtml}
                  style={{ height: 270 }}
                />
              </div>
            </Form.Item>
          </Form>
        </Row>
      </Spin>
    </ModalCommon>
  );
};

export default EditOutlineReviewModal;
