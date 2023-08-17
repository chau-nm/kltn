import { Col, Row, Table, Typography } from "antd";
import { type SetStateAction } from "react";
import ButtonCommon from "./common/ButtonCommon";
import ModalCommon from "./common/ModalCommon";

type ProtectionDetailViewProps = {
  protectionRating?: ProtectionRatingModel;
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

const ProtectionDetailView = ({
  protectionRating,
  isOpen,
  setIsOpen,
}: ProtectionDetailViewProps): JSX.Element => {
  // const colLayout = {
  //   span: 5,
  //   offset: 1,
  // };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const columns = [
    {
      title: "STT",
    },
    {
      title: "Mã số sinh viên",
    },
    {
      title: "Họ và tên",
    },
    {
      title: "Điểm phần 1.1",
    },
    {
      title: "Điểm phần 1.2",
    },
    {
      title: "Điểm phần 1.3",
    },
    {
      title: "Điểm tổng (thang điểm 10)",
    },
  ];

  return (
    <ModalCommon
      title={"Chi tiết đánh giá bảo vệ"}
      footer={[<ButtonCommon key={1} value="Đóng" onClick={handleClose} />]}
      onCancel={handleClose}
      open={isOpen}
    >
      <div className="min-w-[800px] p-4">
        <Row className="mb-4">
          <Col span={15}>
            <Typography className="font-bold">Người đánh giá</Typography>
          </Col>
          <Col>
            <Typography className="font-bold">Nguyễn văn A</Typography>
          </Col>
        </Row>
        <Row>
          <Typography className="font-bold">
            1. Đánh giá và cho điểm (theo thang điểm 100)
          </Typography>{" "}
        </Row>
        <Row className="pl-8">
          <Typography className="font-bold">
            1.1 Nội dung báo cáo (tối đa 40 điểm)
          </Typography>
        </Row>
        <Row className="pl-16">
          <Col span={15}>
            <Typography>- Nội dung và phương pháp tiến hành đề tài:</Typography>
          </Col>
          <Col className="pl-10">20</Col>
        </Row>
        <Row className="pl-16">
          <Col span={15}>
            <Typography>
              - Phân tích kết quả & thảo luận những vấn đề liên quan đề tài:
            </Typography>
          </Col>
          <Col className="pl-10">20</Col>
        </Row>
        <Row className="pl-8">
          <Typography className="font-bold mt-3">
            1.2 Trả lời các câu hỏi (tối đa 40 điểm)
          </Typography>
        </Row>
        <Row className="pl-16">
          <Col span={15}>
            <Typography>
              - Của giảng viên phản biện (đủ, đúng/ thiếu, sai):
            </Typography>
          </Col>
          <Col className="pl-10">20</Col>
        </Row>
        <Row className="pl-16">
          <Col span={15}>
            <Typography>
              - Của thành viên hội đồng (đủ, đúng/ thiếu sai):
            </Typography>
          </Col>
          <Col className="pl-10">20</Col>
        </Row>
        <Row className="pl-8">
          <Typography className="font-bold mt-3">
            1.3 Thái độ, cách ứng xử, bản lĩnh, tính sáng tạo (tối đa 20 điểm)
          </Typography>
        </Row>
        <Row className="pl-16">
          <Col span={15}>
            <Typography>
              Tự tin trả lời câu hỏi của giảng viên phản biện và thành viên hội
              đồng
            </Typography>
          </Col>
          <Col className="pl-10">20</Col>
        </Row>
      </div>
      <div className="mt-5">
        <Table columns={columns} />
      </div>
    </ModalCommon>
  );
};

export default ProtectionDetailView;
