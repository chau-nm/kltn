import { Col, Form, Input, Radio, Row, Typography, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext } from "react";
import { useMutation } from "react-query";
import { v4 } from "uuid";
import ButtonCommon from "~/components/common/ButtonCommon";
import ModalCommon from "~/components/common/ModalCommon";
import { CriticalAssessmentDashboardContext } from "~/contexts/CriticalAssessmentDashboardContext";
import * as ReviewerService from "~/services/thesisReviewerService";

const CriticalAssessmentFormModal = (): JSX.Element => {
  const {
    isOpenCriticalAssessmentFormModal,
    setIsOpenCriticalAssessmentFormModal,
    setIsOpenThesisDetail,
    thesis,
  } = useContext(CriticalAssessmentDashboardContext);

  const [form] = useForm();

  // const updateCriticalAssessmentMutation = useMutation(
  //   CriticalAssessmentService.update
  // );

  const handleClose = (): void => {
    setIsOpenCriticalAssessmentFormModal(false);
  };

  // const { data: ca, mutate: searchByThesisIdAndMarkerMutate } = useMutation(
  //   CriticalAssessmentService.searchByThesisIdAndMarker
  // );

  const handleSave = (): void => {
    void form.validateFields().then(() => {
      const reviewerScores: ReviewerScoreModel[] =
        thesis?.students?.map((std) => {
          return {
            id: v4(),
            reviewerId: thesis?.reviewers![0].id,
            studentId: std.userId,
            score: form.getFieldValue(`score${std.username ?? ""}`),
            isDeleted: false,
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
          };
        }) ?? [];

      const reviewer: ReviewerModel = {
        ...thesis?.reviewers![0],
        ...form.getFieldsValue(),
        questions: [
          form.getFieldValue("question1"),
          form.getFieldValue("question2"),
        ],
        reviewerScores: [...reviewerScores],
      };
      updateReviewerMutation.mutate(reviewer);
    });
  };

  const updateReviewerMutation = useMutation(ReviewerService.updateReviewer, {
    onSuccess: (data: ReviewerModel) => {
      if (data) {
        void message.success("Cập nhật đánh giá phản biện thành công");
        handleClose();
      }
    },
  });

  return (
    <ModalCommon
      title="Form đánh giá"
      open={isOpenCriticalAssessmentFormModal}
      onCancel={handleClose}
      footer={[
        <ButtonCommon key={1} value="Hủy" onClick={handleClose} />,
        <ButtonCommon key={2} value="Lưu" onClick={handleSave} />,
      ]}
    >
      <Row justify={"space-between"}>
        <Col className="text-base">
          <strong> Đề tài:</strong>
        </Col>
        <Col>
          <span
            className="text-blue-400 select-none cursor-pointer hover:text-blue-500 duration-300"
            onClick={() => {
              setIsOpenThesisDetail(true);
            }}
          >
            Xem chi tiết
          </span>
        </Col>
      </Row>
      <Form layout="vertical" style={{ width: 1500 }} form={form}>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold">
            Hình thức luận văn:
          </Typography.Text>
          <Row gutter={30} justify={"start"}>
            <Col span={4}>
              <Form.Item
                label="Số trang"
                name="pageNumber"
                rules={[{ required: true }]}
              >
                <Input placeholder="Nhập số trang" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                label="Số chương"
                name="chapterNumber"
                rules={[{ required: true }]}
              >
                <Input placeholder="Nhập số chương" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                label="Số bảng"
                name="tableNumber"
                rules={[{ required: true }]}
              >
                <Input placeholder="Nhập số bảng" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                label="Số biểu đồ"
                name="chartNumber"
                rules={[{ required: true }]}
              >
                <Input placeholder="Nhập số biểu đồ" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                label="Số bản vẽ"
                name="drawingBoardNumber"
                rules={[{ required: true }]}
              >
                <Input placeholder="Nhập số bản vẽ" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                label="Số Hình ảnh"
                name="imageNumber"
                rules={[{ required: true }]}
              >
                <Input placeholder="Nhập số hình ảnh" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                label="Số tài liệu tham khảo"
                name="documentNumber"
                rules={[{ required: true }]}
              >
                <Input placeholder="Nhập số tài liệu tham khảo" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                label="Phần mềm tính toán"
                name="calculationSoftwareNumber"
                rules={[{ required: true }]}
              >
                <Input placeholder="Nhập phầm mềm tính toán" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Bố cục"
                name="layout"
                rules={[{ required: true }]}
              >
                <Input placeholder="Nhập bố cục" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Hành văn"
                name="writing"
                rules={[{ required: true }]}
              >
                <Input placeholder="Nhập hành văn" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Sử dụng thuật ngữ chuyên môn"
                name="technicalTerms"
                rules={[{ required: true }]}
              >
                <Input placeholder="Nhập sử dụng thuật ngữ chuyên môn" />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold">
            Những ưu điểm của luận văn
          </Typography.Text>
          <Row>
            <Col span={24}>
              <Form.Item
                label="Nội dung"
                name="advantage"
                rules={[{ required: true }]}
              >
                <Input.TextArea placeholder="Nhập nội dung" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Kết quả, kết luận đề tài và triển vọng đề tài"
                name="limitation"
                rules={[{ required: true }]}
              >
                <Input.TextArea placeholder="Nhập kết quả, kết luận đề tài và triển vọng đề tài" />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold">
            Những điểm thiếu sót của luận văn:
          </Typography.Text>
          <Form.Item name="conclude" rules={[{ required: true }]}>
            <Input.TextArea placeholder="Nhập những điểm thiếu sót của luận văn" />
          </Form.Item>
        </div>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold mr-4">
            Đề nghị:
          </Typography.Text>
          <Form.Item name="suggestion" rules={[{ required: true }]}>
            <Radio.Group>
              <Radio value={1}>Được bảo vệ</Radio>
              <Radio value={2}>Bổ sung thêm để bảo vệ</Radio>
              <Radio value={3}>Không được bảo vệ</Radio>
              <Radio value={4}>Bảo vệ đợt khác</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold">
            Câu hỏi sinh viên phải trả lời trước hội đồng:
          </Typography.Text>
          <Form.Item label="Câu hỏi 1" name="question1">
            <Input.TextArea placeholder="Nhập câu hỏi 1" />
          </Form.Item>
          <Form.Item label="Câu hỏi 2" name="question2">
            <Input.TextArea placeholder="Nhập câu hỏi 2" />
          </Form.Item>
        </div>
        <div className="mt-5">
          <Typography.Text className="text-base font-bold">
            Điểm số
          </Typography.Text>
          {thesis?.students?.map((std) => {
            return (
              <Row key={std.userId} gutter={30}>
                <Col span={5}>
                  <span>Mã số sinh viên: {std.username}</span>
                </Col>
                <Col span={5}>
                  <span>Họ và tên: {std.fname}</span>
                </Col>
                <Col>
                  <Row gutter={30}>
                    <Col>
                      <span>Điểm số</span>
                    </Col>
                    <Col>
                      <Form.Item name={`score${std.username ?? ""}`}>
                        <Input
                          type="number"
                          placeholder="Điểm số sinh viên 1"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            );
          })}
        </div>
      </Form>
    </ModalCommon>
  );
};
export default CriticalAssessmentFormModal;
