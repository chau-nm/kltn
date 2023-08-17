import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Form, Row, Spin, Typography, message } from "antd";
import { useForm } from "antd/es/form/Form";
import {
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { useMutation } from "react-query";
import { dateTimeDisplay } from "~/common/util";
import ReactQuillPreviewCommon from "~/components/common/ReactQuillPreviewCommon";
import RichTextEditorCommon from "~/components/common/RichTextEditorCommon";
import { AuthContext } from "~/contexts/AuthContext";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
// import * as OutlineCommentService from "~/services/OutlineReviewServices";
import * as OutlineReviewServices from "~/services/OutlineReviewServices";
import * as ThesisService from "~/services/thesisService";
import ButtonCommon from "../../../components/common/ButtonCommon";
import ModalCommon from "../../../components/common/ModalCommon";

const AddCommentMinistryModal = (): JSX.Element => {
  const {
    listThesisSelected,
    openAddCommentMinistryModal,
    setOpenAddCommentMinistryModal,
    listCommentOfCouncil,
    searchListComment,
    search,
  } = useContext(ThesisConsoleContext);
  const { user } = useContext(AuthContext);

  const [shouldUpdate, setShouldUpdate] = useState<boolean>(false);

  useEffect(() => {
    setShouldUpdate(false);
    for (let index = 0; index < listCommentOfCouncil.length; index++) {
      const element = listCommentOfCouncil[index];
      if (element.user?.roles?.includes("MINISTRY")) {
        setShouldUpdate(true);
        break;
      }
    }
  }, [listCommentOfCouncil]);

  const [editorHtml, setEditorHtml] = useState<string>("");
  const [form] = useForm();

  const clearData = (): void => {
    form.resetFields();
    setEditorHtml("");
  };

  useEffect(() => {
    listThesisSelected[0]?.id && searchListComment(listThesisSelected[0]?.id);
  }, [listThesisSelected]);

  const handleSave = (): void => {
    form.setFieldValue("description", editorHtml);
    void form.validateFields().then(() => {
      const outlineCommentModel: OutlineCommentModel = {
        thesisId: listThesisSelected[0]?.id ? listThesisSelected[0]?.id : "",
        userId: user?.userId ? user?.userId : "",
        comment: form.getFieldValue("description"),
        order: 1,
      };
      if (shouldUpdate) {
        updateOutlineReviewMutation.mutate(outlineCommentModel);
      } else {
        insertOulineCommentMutation.mutate(outlineCommentModel);
      }
    });
  };

  const insertOulineCommentMutation = useMutation(
    OutlineReviewServices.insert,
    {
      onSuccess: (data: OutlineCommentModel | null) => {
        if (data != null) {
          void message.success("Thêm thành công");
          setOpenAddCommentMinistryModal(false);
          clearData();
        } else {
          void message.error("Thêm thất bại");
        }
      },
    }
  );
  const updateOutlineReviewMutation = useMutation(
    OutlineReviewServices.updateComment,
    {
      onSuccess: (data: boolean) => {
        if (data) {
          void message.success("Thêm thành công");
          setOpenAddCommentMinistryModal(false);
          clearData();
        } else {
          void message.error("Thêm thất bại");
        }
      },
    }
  );

  const handleClose = (): void => {
    setOpenAddCommentMinistryModal(false);
    clearData();
  };
  const updateStatusThesis = async (): Promise<void> => {
    const data = await ThesisService.updateStatus(
      listThesisSelected[0]?.id as string,
      3
    );
    if (data) {
      void message.success("Phê duyệt thành công");
      setOpenAddCommentMinistryModal(false);
      clearData();
      search();
    } else {
      void message.error("Phê duyệt thất bại");
    }
  };

  const ButtonFooter = (): JSX.Element => {
    return (
      <Row justify={"end"}>
        <ButtonCommon value="Đóng" onClick={handleClose} />
        {listThesisSelected[0].status === 2 && (
          <ButtonCommon value="Duyệt đề cương" onClick={updateStatusThesis} />
        )}
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
        <Row>
          <>
            <Col span={15} className="py-3 px-4">
              <Typography.Text strong>Tên luận văn</Typography.Text>
            </Col>
            <Col flex={1} className=" py-3 px-4">
              <Typography.Text strong>Giảng viên hướng dẫn</Typography.Text>
            </Col>
          </>
        </Row>
        {listThesisSelected.map((thesis, index) => {
          return (
            <Row className="border rounded-lg" key={index}>
              <>
                <Col span={15} className="py-3 px-4">
                  <Typography.Text>{thesis.topic}</Typography.Text>
                </Col>
                <Col flex={1} className=" py-3 px-4">
                  <Typography.Text>
                    {thesis.teacher?.user?.fname}
                  </Typography.Text>
                </Col>
              </>
            </Row>
          );
        })}
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
