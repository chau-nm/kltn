import { Col, Form, Input, Row, Typography, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext } from "react";
import { useMutation } from "react-query";
import { v4 } from "uuid";
import ButtonCommon from "~/components/common/ButtonCommon";
import ModalCommon from "~/components/common/ModalCommon";
import { AuthContext } from "~/contexts/AuthContext";
import { DefenseDashboardContext } from "~/contexts/DefenseDashboardContext";
import * as ThesisDefenseRatingService from "~/services/thesisDefenseRatingService";

const DefenseRatingFormModal = (): JSX.Element => {
  const {
    thesis,
    isOpenDefenseForm,
    setIsOpenDefenseForm,
    setIsOpenThesisDetail,
  } = useContext(DefenseDashboardContext);

  const { user } = useContext(AuthContext);

  const defenseRatingDefault = thesis?.defenseRatings?.filter(
    (dr) => dr.marker === user?.userId
  )[0];

  const [form] = useForm();

  const updateRatingMutation = useMutation(ThesisDefenseRatingService.update, {
    onSuccess: (data) => {
      if (data) {
        void message.success("Cập nhật đánh giá thành công");
        handleClose();
      }
    },
  });

  const handleSave = (): void => {
    const defenseRatingId = defenseRatingDefault?.id;
    const defenseRatingScores: DefenseRatingScoreModel[] =
      thesis?.students?.map((std) => {
        return {
          id: v4(),
          drId: defenseRatingId,
          studentId: std.userId,
          score1: form.getFieldValue(`score1${std.username ?? ""}`),
          score2: form.getFieldValue(`score2${std.username ?? ""}`),
          score3: form.getFieldValue(`score3${std.username ?? ""}`),
          totalScore: form.getFieldValue(`scoret${std.username ?? ""}`),
          isDeleted: false,
          createdAt: new Date().getTime(),
          updatedAt: new Date().getTime(),
        };
      }) ?? [];

    const defenseRating: DefenseRatingModel = {
      id: defenseRatingId,
      marker: user?.userId ?? "",
      thesisId: thesis?.id ?? "",
      ...form.getFieldsValue(),
      scores: defenseRatingScores,
      isDeleted: false,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };
    updateRatingMutation.mutate(defenseRating);
  };

  const handleClose = (): void => {
    setIsOpenDefenseForm(false);
  };

  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { offset: 1 },
  };

  return (
    <ModalCommon
      title="Form đánh giá (Thang điểm 100)"
      open={isOpenDefenseForm}
      onCancel={handleClose}
      footer={[
        <ButtonCommon key={1} value="Hủy" onClick={handleClose} />,
        <ButtonCommon key={2} value="Lưu" onClick={handleSave} />,
      ]}
    >
      <Row justify={"space-between"}>
        <Col className="text-base">
          <strong> Đề tài: </strong> {thesis?.topic}
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
      <Form layout="horizontal" style={{ width: 1500 }} form={form}>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold">
            Nội dung báo cáo (Tối đa 40đ):
          </Typography.Text>
          <Form.Item
            {...formItemLayout}
            label="Nội dung và phương pháp tiến hành đề tài"
            name="contentScore"
            rules={[{ required: true }]}
            labelAlign="left"
          >
            <Input placeholder="Nhập điểm nội dung và phương pháp tiến hành đề tài" />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Phân tích kết quả & thảo luận những vấn đề liên quan đề tài"
            name="analysisResultScore"
            rules={[{ required: true }]}
            labelAlign="left"
          >
            <Input placeholder="Nhập điểm phân tích kết quả & thảo luận những vấn đề liên quan đề tài" />
          </Form.Item>
        </div>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold">
            Trả lời các câu hỏi (Tối đa 40đ):
          </Typography.Text>
          <Form.Item
            {...formItemLayout}
            label="Của giảng viên phản biện (đủ, đúng/ thiếu, sai):"
            name="feedbackLecturerQuestionScore"
            rules={[{ required: true }]}
            labelAlign="left"
          >
            <Input placeholder="Nhập điểm" />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Của thành viên hội đồng (đủ, đúng/ thiếu sai):"
            name="councilQuestionScore"
            rules={[{ required: true }]}
            labelAlign="left"
          >
            <Input placeholder="Nhập điểm" />
          </Form.Item>
        </div>
        <div className="mt-4">
          <Typography.Text className="text-base font-bold">
            Thái độ, cách ứng xử, bản lĩnh, tính sáng tạo (tối đa 20 điểm):
          </Typography.Text>
          <Form.Item
            {...formItemLayout}
            label="Tự tin trả lời câu hỏi của giảng viên phản biện và thành viên hội đồng"
            name="behaviorScore"
            rules={[{ required: true }]}
            labelAlign="left"
          >
            <Input placeholder="Nhập điểm" />
          </Form.Item>
        </div>
        <div className="mt-5">
          <Typography.Text className="text-base font-bold">
            Điểm số
          </Typography.Text>
          {thesis?.students?.map((std) => {
            return (
              <Row key={std.userId} gutter={25}>
                <Col span={5}>
                  <span>Mã số sinh viên: {std.username}</span>
                </Col>
                <Col span={5}>
                  <span>Họ và tên: {std.fname}</span>
                </Col>
                <Col>
                  <Row gutter={25}>
                    <Col>
                      <span>Điểm phần 3.1</span>
                    </Col>
                    <Col>
                      <Form.Item name={`score1${std.username ?? ""}`}>
                        <Input
                          type="number"
                          placeholder="Điểm số sinh viên 1"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row gutter={25}>
                    <Col>
                      <span>Điểm phần 3.2</span>
                    </Col>
                    <Col>
                      <Form.Item name={`score2${std.username ?? ""}`}>
                        <Input
                          type="number"
                          placeholder="Điểm số sinh viên 1"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row gutter={25}>
                    <Col>
                      <span>Điểm phần 3.3</span>
                    </Col>
                    <Col>
                      <Form.Item name={`score3${std.username ?? ""}`}>
                        <Input
                          type="number"
                          placeholder="Điểm số sinh viên 1"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row gutter={25}>
                    <Col>
                      <span>Điểm tổng</span>
                    </Col>
                    <Col>
                      <Form.Item name={`scoret${std.username ?? ""}`}>
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
export default DefenseRatingFormModal;
