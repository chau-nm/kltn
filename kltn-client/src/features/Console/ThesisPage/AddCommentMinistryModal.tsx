import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Form, Radio, Row, Spin, Typography, message } from "antd";
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
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import ButtonCommon from "../../../components/common/ButtonCommon";
import ModalCommon from "../../../components/common/ModalCommon";
import { AuthContext } from "~/contexts/AuthContext";
import { v4 } from "uuid";
import { useMutation } from "react-query";
import * as ThesisReviewerCommentService from "~/services/thesisReviewerCommentService";
import TeacherTargetModal from "~/components/TeacherTargetModal";

const AddCommentMinistryModal = (): JSX.Element => {
  const {
    openAddCommentMinistryModal,
    setOpenAddCommentMinistryModal,
    setIsOpenThesisDetailModal,
    thesis,
  } = useContext(ThesisConsoleContext);
  const { user } = useContext(AuthContext);
  const [editorHtml, setEditorHtml] = useState<string>("");
  const [form] = useForm();
  const [openTargetTeacher, setOpenTargetTeacher] = useState(false);

  const clearData = (): void => {
    form.resetFields();
    setEditorHtml("");
  };

  const handleSave = (): void => {
    form.setFieldValue("comment", editorHtml);
    void form.validateFields().then(() => {
      const thesisComment: ThesisReviewerComment = {
        id: v4(),
        thesisId: thesis?.id,
        userId: user?.userId,
        isGeneral: true,
        isDeleted: false,
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
        ...form.getFieldsValue(),
      };
      insertGeneralComment.mutate(thesisComment);
    });
  };

  const insertGeneralComment = useMutation(
    ThesisReviewerCommentService.insertGeneral,
    {
      onSuccess: (data: ThesisReviewerComment) => {
        if (data) {
          void message.success("Thêm đánh giá đề cương thành công");
          handleClose();
        }
      },
    }
  );

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
            setOpenTargetTeacher(true);
          }}
        />
        <ButtonCommon color="blue" value={"Lưu"} onClick={handleSave} />
      </Row>
    );
  };

  const insertReviewerMutation = useMutation(
    ThesisReviewerCommentService.insertReviewer,
    {
      onSuccess: (data: ThesisReviewerComment[]) => {
        if (data) {
          void message.success("Thêm hội đồng đánh giá đề cương thành công");
        }
      },
    }
  );

  const handleAddCouncil = (lecturers: LecturerModel[]): void => {
    const insertThesisUsersPayload = {
      thesisId: thesis?.id ?? "",
      userIds: lecturers.map((lec) => lec.userId ?? ""),
    };
    insertReviewerMutation.mutate(insertThesisUsersPayload);
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
        {thesis?.thesisReviewerComments?.map((comment, index) => {
          return (
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
                      {dateTimeDisplay(new Date(comment?.updatedAt as number))}
                    </Row>
                    {comment?.comment ? (
                      <ReactQuillPreviewCommon
                        content={comment?.comment ?? ""}
                      ></ReactQuillPreviewCommon>
                    ) : (
                      <Typography.Text type="danger">
                        Chưa có bình luận
                      </Typography.Text>
                    )}
                  </Typography.Text>
                </Col>
              </Row>
            </>
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
                <Radio value={2}>Không đạt</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Nhận xét"
              name="comment"
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
      <TeacherTargetModal
        isOpen={openTargetTeacher}
        setIsOpen={setOpenTargetTeacher}
        handleFinish={handleAddCouncil}
      />
    </ModalCommon>
  );
};

export default AddCommentMinistryModal;
