import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Form, Radio, Row, Spin, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import {
  useContext,
  // useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { dateTimeDisplay } from "~/common/util";
import ReactQuillPreviewCommon from "~/components/common/ReactQuillPreviewCommon";
import RichTextEditorCommon from "~/components/common/RichTextEditorCommon";
import { AuthContext } from "~/contexts/AuthContext";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
// import * as OutlineCommentService from "~/services/OutlineReviewServices";
import ButtonCommon from "../../../components/common/ButtonCommon";
import ModalCommon from "../../../components/common/ModalCommon";

const AddCommentMinistryModal = (): JSX.Element => {
  const {
    openAddCommentMinistryModal,
    setOpenAddCommentMinistryModal,
    listCommentOfCouncil,
    setIsOpenThesisDetailModal,
    thesis,
    setOpenAddCouncilModal,
  } = useContext(ThesisConsoleContext);
  const { user } = useContext(AuthContext);

  const [editorHtml, setEditorHtml] = useState<string>("");
  const [form] = useForm();

  const clearData = (): void => {
    form.resetFields();
    setEditorHtml("");
  };

  const handleSave = (): void => {
    form.setFieldValue("description", editorHtml);
    void form.validateFields().then(() => {
      // const outlineCommentModel: OutlineCommentModel = {
      //   thesisId: thesis?.id ?? "",
      //   userId: user?.userId ?? "",
      //   comment: form.getFieldValue("description"),
      //   order: 1,
      // };
      // if (shouldUpdate) {
      //   updateOutlineReviewMutation.mutate(outlineCommentModel);
      // } else {
      //   insertOulineCommentMutation.mutate(outlineCommentModel);
      // }
    });
  };

  // const insertOulineCommentMutation = useMutation(
  //   OutlineReviewServices.insert,
  //   {
  //     onSuccess: (data: OutlineCommentModel | null) => {
  //       if (data != null) {
  //         void message.success("Thêm thành công");
  //         setOpenAddCommentMinistryModal(false);
  //         clearData();
  //       } else {
  //         void message.error("Thêm thất bại");
  //       }
  //     },
  //   }
  // );
  // const updateOutlineReviewMutation = useMutation(
  //   OutlineReviewServices.updateComment,
  //   {
  //     onSuccess: (data: boolean) => {
  //       if (data) {
  //         void message.success("Thêm thành công");
  //         setOpenAddCommentMinistryModal(false);
  //         clearData();
  //       } else {
  //         void message.error("Thêm thất bại");
  //       }
  //     },
  //   }
  // );

  const handleClose = (): void => {
    setOpenAddCommentMinistryModal(false);
    clearData();
  };

  const ButtonFooter = (): JSX.Element => {
    return (
      <Row justify={"end"}>
        <ButtonCommon value="Đóng" onClick={handleClose} />
        <ButtonCommon
          value="Thêm hội đồng đánh giá"
          onClick={() => {
            setOpenAddCouncilModal(true);
          }}
        />
        <ButtonCommon color="blue" value={"Lưu"} onClick={handleSave} />
      </Row>
    );
  };

  return (
    <ModalCommon
      title="Tổng hợp đánh giá luận văn"
      open={openAddCommentMinistryModal}
      footer={[<ButtonFooter key={"1"} />]}
      onCancel={() => {
        handleClose();
      }}
      maskCloseable={true}
    >
      <Spin spinning={false}>
        <Row justify={"space-between"}>
          <Col className="text-base">
            <strong> Đề tài:</strong> {thesis?.topic}
          </Col>
          <Col>
            <span
              className="text-blue-400 select-none cursor-pointer hover:text-blue-500 duration-300"
              onClick={() => {
                setIsOpenThesisDetailModal(true);
              }}
            >
              Xem chi tiết
            </span>
          </Col>
        </Row>
        <Row className="min-w-[400px]">
          <Col className=" py-3 px-4">
            <Typography.Text strong>
              Danh sách đánh giá của hội đồng
            </Typography.Text>
          </Col>
        </Row>

        {listCommentOfCouncil.map((comment, index) => {
          return (
            !comment?.user?.roles?.includes("MINISTRY") && (
              <>
                <Row
                  className="p-3 border rounded-lg max-w-[1000px] mb-3"
                  key={index}
                >
                  <Col span={2} className="comment-avatar">
                    <Avatar
                      icon={<UserOutlined />}
                      size={50}
                      className="flex items-center justify-center"
                    />
                  </Col>
                  <Col span={18} className="comment-content">
                    <Typography.Text>
                      <strong className="commenter-name">
                        {comment?.user?.fname}
                      </strong>
                      <Row>
                        {dateTimeDisplay(
                          new Date(comment?.updatedAt as number)
                        )}
                      </Row>
                      <ReactQuillPreviewCommon
                        content={comment?.comment as string}
                      ></ReactQuillPreviewCommon>
                    </Typography.Text>
                  </Col>
                </Row>
              </>
            )
          );
        })}
        <Row className="mt-11 w-full">
          <Form
            layout="vertical"
            onFinish={handleSave}
            form={form}
            className="w-full"
          >
            <Form.Item
              label="Đánh giá"
              name="result"
              rules={[{ required: true }]}
            >
              <Radio.Group>
                <Radio value={1}>Đạt</Radio>
                <Radio value={2}>Cần chỉnh sửa</Radio>
                <Radio value={3}>Không đạt</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Nhận xét"
              name="description"
              rules={[{ required: true }]}
            >
              <div
                style={{ height: "300px", marginBottom: "20px", width: "100%" }}
              >
                <RichTextEditorCommon
                  editorHtml={editorHtml}
                  setEditorHtml={
                    setEditorHtml as
                      | Dispatch<SetStateAction<string | undefined>>
                      | undefined
                  }
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

export default AddCommentMinistryModal;
