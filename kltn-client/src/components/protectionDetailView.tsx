import { Col, Row, Table, Typography } from "antd";
import { type SetStateAction } from "react";
import ButtonCommon from "./common/ButtonCommon";
import ModalCommon from "./common/ModalCommon";
import { useContext } from "react";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import { type ColumnType } from "antd/es/table";

type ProtectionDetailViewProps = {
  protectionRating?: DefenseRatingModel;
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

const ProtectionDetailView = ({
  protectionRating,
  isOpen,
  setIsOpen,
}: ProtectionDetailViewProps): JSX.Element => {
  const { setOpenPreviewDefensePDF } = useContext(ThesisConsoleContext);
  const handleClose = (): void => {
    setIsOpen(false);
  };

  const columns: Array<ColumnType<DefenseRatingScoreModel>> = [
    {
      title: "STT",
      render: (row, record, index) => {
        return index + 1;
      },
    },
    {
      title: "Mã số sinh viên",
      render: (row, record, index) => {
        return record.student?.username;
      },
    },
    {
      title: "Họ và tên",
      render: (row, record, index) => {
        return record.student?.fname;
      },
    },
    {
      title: "Điểm phần 1.1",
      render: (row, record, index) => {
        return record.score1;
      },
    },
    {
      title: "Điểm phần 1.2",
      render: (row, record, index) => {
        return record.score2;
      },
    },
    {
      title: "Điểm phần 1.3",
      render: (row, record, index) => {
        return record.score3;
      },
    },
    {
      title: "Điểm tổng (thang điểm 10)",
      render: (row, record, index) => {
        return record.totalScore;
      },
    },
  ];

  return (
    <ModalCommon
      title={"Chi tiết đánh giá bảo vệ"}
      footer={[
        <ButtonCommon
          key={1}
          value="Preview PDF"
          onClick={() => {
            setOpenPreviewDefensePDF(true);
          }}
        />,
        <ButtonCommon key={1} value="Đóng" onClick={handleClose} />,
      ]}
      onCancel={handleClose}
      open={isOpen}
    >
      <div className="min-w-[800px] p-4">
        <Row className="mb-4">
          <Col span={15}>
            <Typography className="font-bold">Người đánh giá</Typography>
          </Col>
          <Col>
            <Typography className="font-bold">
              {protectionRating?.userMaker.fname}
            </Typography>
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
          <Col className="pl-10">{protectionRating?.contentScore}</Col>
        </Row>
        <Row className="pl-16">
          <Col span={15}>
            <Typography>
              - Phân tích kết quả & thảo luận những vấn đề liên quan đề tài:
            </Typography>
          </Col>
          <Col className="pl-10">{protectionRating?.analysisResultScore}</Col>
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
          <Col className="pl-10">
            {protectionRating?.feedbackLecturerQuestionScore}
          </Col>
        </Row>
        <Row className="pl-16">
          <Col span={15}>
            <Typography>
              - Của thành viên hội đồng (đủ, đúng/ thiếu sai):
            </Typography>
          </Col>
          <Col className="pl-10">{protectionRating?.councilQuestionScore}</Col>
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
          <Col className="pl-10">{protectionRating?.behaviorScore}</Col>
        </Row>
      </div>
      <div className="mt-5">
        <Table columns={columns} dataSource={protectionRating?.scores} />
      </div>
    </ModalCommon>
  );
};

export default ProtectionDetailView;
