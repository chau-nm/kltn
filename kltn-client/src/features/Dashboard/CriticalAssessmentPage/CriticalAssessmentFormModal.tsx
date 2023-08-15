import { Col, Form, Input, Radio, Row, Table, Typography } from "antd";
import { useContext } from "react";
import ModalCommon from "~/components/common/ModalCommon";
import { CriticalAssessmentDashboardContext } from "~/contexts/CriticalAssessmentDashboardContext";

const CriticalAssessmentFormModal = (): JSX.Element => {
  const {
    isOpenCriticalAssessmentFormModal,
    setIsOpenCriticalAssessmentFormModal,
    setIsOpenThesisDetail,
  } = useContext(CriticalAssessmentDashboardContext);

  const handleClose = () => {
    setIsOpenCriticalAssessmentFormModal(false);
  };

  return (
    <ModalCommon
      title="Form đánh giá"
      open={isOpenCriticalAssessmentFormModal}
      onCancel={handleClose}
    >
      {/* <div className="min-w-[800px]"> */}
      <Row justify={"space-between"}>
        <Col className="text-base">
          <strong> Đề tài:</strong> ""
        </Col>
        <Col>
          <span
            className="text-blue-400 select-none cursor-pointer hover:text-blue-500 duration-300"
            onClick={() => setIsOpenThesisDetail(true)}
          >
            Xem chi tiết
          </span>
        </Col>
      </Row>
      <Form layout="vertical" style={{ width: 1500 }}>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold">
            Hình thức luận văn:
          </Typography.Text>
          <Row gutter={30} justify={"start"}>
            <Col span={4}>
              <Form.Item label="Số trang">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Số chương">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Số bảng">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Số biểu đồ">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Số bản vẽ">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Số Hình ảnh">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Số tài liệu tham khảo">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Phần mềm tính toán">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Bố cục">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Hành văn">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Sử dụng thuật ngữ chuyên môn">
                <Input />
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
              <Form.Item label="Nội dung">
                <Input.TextArea />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Kết quả, kết luận đề tài và triển vọng đề tài">
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold">
            Những ưu điểm của luận văn
          </Typography.Text>
          <Form.Item>
            <Input.TextArea />
          </Form.Item>
        </div>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold mr-4">
            Đề nghị:
          </Typography.Text>
          <Form.Item>
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
          <Form.Item label="Câu hỏi 1">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Câu hỏi 2">
            <Input.TextArea />
          </Form.Item>
        </div>
        <div className="mt-5">
          <Table />
        </div>
      </Form>
      {/* </div> */}
    </ModalCommon>
  );
};
export default CriticalAssessmentFormModal;
