import { Col, Form, Row, Space, Spin, Typography, message } from "antd";
import { useContext, useEffect, useState } from "react";
import { OutlineReviewContext } from "~/contexts/OutlineReviewContext";
import * as ThesisService from "~/services/thesisService";
import ButtonCommon from "../../../components/common/ButtonCommon";
import ModalCommon from "../../../components/common/ModalCommon";
import { getFileNameFromUrl } from "~/common/util";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { PaperClipOutlined } from "@ant-design/icons";
import ReactQuillPreviewCommon from "~/components/common/ReactQuillPreviewCommon";
import RichTextEditorCommon from "~/components/common/RichTextEditorCommon";
import { useForm } from "antd/es/form/Form";
import * as Doc2VecServices from "~/services/doc2vecService";
import * as OutlineReviewServices from "~/services/OutlineReviewServices";
import { AuthContext } from "~/contexts/AuthContext";

const EditOutlineReviewModal = (): JSX.Element => {
  const {
    openEditOutlineReviewModal,
    setOpenEditOutlineReviewModal,
    isLoadingDetail,
    thesisDetail,
    setThesisDetail,
  } = useContext(OutlineReviewContext);
  const { user } = useContext(AuthContext);
  const [documentList, setDocumentList] = useState<Doc2VecModel[]>();
  // const [thesis, setThesis] = useState<ThesisModel>({} as ThesisModel);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editorHtml, setEditorHtml] = useState<string>();
  const [form] = useForm();

  useEffect(() => {
    form.setFieldValue("description", editorHtml);
  }, [editorHtml]);

  useEffect(() => {
    void (thesisDetail?.topic && getSimilarData(thesisDetail?.topic));
  }, [thesisDetail]);

  const getSimilarData = async (value: string): Promise<void> => {
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
        const thesisRes: ThesisModel = data as ThesisModel;
        if (thesisRes) {
          setThesisDetail(thesisRes);
        } else {
          toast("Không thể lấy thông tin luận văn");
        }
      },
    }
  );

  useEffect(() => {
    if (thesisDetail != null) {
      thesisDetail?.id && getOutlineReviewByIdMutation.mutate(thesisDetail?.id);
    }
  }, [openEditOutlineReviewModal]);

  useEffect(() => {
    if (thesisDetail != null) {
      thesisDetail?.id && getOutlineReviewByIdMutation.mutate(thesisDetail?.id);
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
              void handleSave();
            }}
          />
        ) : (
          <ButtonCommon
            value="Lưu"
            onClick={() => {
              setEditMode(true);
            }}
          />
        )}
      </Row>
    );
  };

  const handleCancel = (): void => {
    setOpenEditOutlineReviewModal(false);
    setEditMode(false);
  };

  const handleSave = async (): Promise<void> => {
    form.setFieldValue("description", editorHtml);
    void form.validateFields().then(() => {
      const outlineCommentModel: OutlineCommentModel = {
        thesisId: thesisDetail?.id ? thesisDetail?.id : "",
        userId: user?.userId ? user?.userId : "",
        comment: form.getFieldValue("description"),
      };

      updateOutlineReviewMutation.mutate(outlineCommentModel);
    });
  };

  const updateOutlineReviewMutation = useMutation(
    OutlineReviewServices.updateComment,
    {
      onSuccess: (data: boolean) => {
        if (data) {
          void message.success("Thêm thành công");
          // clearData();
          // setSearchCondition(() => {
          //   return {};
          // });
          // search();
        } else {
          void message.error("Thêm thất bại");
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
      <Spin spinning={isLoadingDetail}>
        {thesisDetail?.students?.map((student, index) => {
          return (
            <Row key={index} className="w-[800px]">
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
              {thesisDetail?.teacher?.user?.fname}
            </Typography.Text>
          </Col>
          <Col flex={1} className="w-[250px]">
            <Typography.Text className="font-bold ">Email: </Typography.Text>
            <Typography.Text>
              {thesisDetail?.teacher?.user?.email}
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
            <ReactQuillPreviewCommon
              content={thesisDetail?.description as string}
            ></ReactQuillPreviewCommon>
          </Col>
        </Row>
        <Row>
          {thesisDetail?.outlineUrl && (
            <div className="border-t py-3 w-full">
              <Typography.Text className="font-bold">
                Danh sách file đính kèm
              </Typography.Text>
              <Space className="block">
                <a
                  href={thesisDetail?.outlineUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <PaperClipOutlined />{" "}
                  {getFileNameFromUrl(thesisDetail?.outlineUrl)}
                </a>
              </Space>
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
