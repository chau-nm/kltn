import { Col, Row, Table, Typography } from "antd";
import ModalCommon from "~/components/common/ModalCommon";

const CriticalAssessmentFormModal = (): JSX.Element => {
  return (
    <ModalCommon title="Form đánh giá">
      <div className="min-w-[1000px]">
        <Row justify={"space-between"}>
          <Col className="text-base">
            <strong> Đề tài:</strong> ""
          </Col>
          <Col>
            <span
              className="text-blue-400 select-none cursor-pointer hover:text-blue-500 duration-300"
            //   onClick={() => setIsOpenThesisDetailModal(true)}
            >
              Xem chi tiết
            </span>
          </Col>
        </Row>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold">
            Hình thức luận văn:
          </Typography.Text>
          <Row gutter={30} justify={"start"}>
            <Col span={4}>Số trang: 1</Col>
            <Col span={4}>Số chương: 1</Col>
            <Col span={4}>Số bảng: 1</Col>
            <Col span={4}>Số biểu đồ: 1</Col>
            <Col span={4}>Số bản vẽ: 1</Col>
            <Col span={4}>Số hình ảnh: 1</Col>
            <Col span={4}>Số tài liệu tham khảo: 1</Col>
            <Col span={4}>Phần mền tính toán: 1</Col>
            <Col span={24}>Bố cục: Hay</Col>
            <Col span={24}>Hành văn: Hay</Col>
            <Col span={24}>Sử dụng thuật ngữ chuyên môn: Hay</Col>
          </Row>
        </div>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold">
            Những ưu điểm của luận văn
          </Typography.Text>
          <Row>
            <Col span={24}>
              - Nội dung: <br />
              ádasd
            </Col>
            <Col span={24}>
              - Kết quả, kết luận đề tài và triển vọng đề tài:
              <br />
              ádasd
            </Col>
          </Row>
        </div>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold">
            Những phần thiếu sót chính của luận văn:
          </Typography.Text>
          <div>Abc</div>
        </div>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold mr-4">
            Đề nghị:
          </Typography.Text>
          <span>Dẹp không báo cáo</span>
          <div></div>
        </div>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold">
            Câu hỏi sinh viên phải trả lời trước hội đồng:
          </Typography.Text>
        </div>
        <div className="mt-5">
          <Table />
        </div>
      </div>
    </ModalCommon>
  );
};
export default CriticalAssessmentFormModal;
