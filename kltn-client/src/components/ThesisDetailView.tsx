import { Col, Row, Space, Typography } from "antd";
import { type SetStateAction } from "react";
import CommonConstants from "~/constants/commonConstants";
import ButtonCommon from "./common/ButtonCommon";
import ModalCommon from "./common/ModalCommon";
import ReactQuillPreviewCommon from "./common/ReactQuillPreviewCommon";
import { PaperClipOutlined } from "@ant-design/icons";
import { getFileNameFromUrl } from "~/common/util";

type ThesisDetailViewProps = {
  thesis: ThesisModel;
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

const ThesisDetailView = ({
  thesis,
  isOpen,
  setIsOpen,
}: ThesisDetailViewProps): JSX.Element => {
  const colLayout = {
    span: 5,
    offset: 1,
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  return (
    <ModalCommon
      title={"Chi tiết luận văn"}
      footer={[<ButtonCommon key={1} value="Đóng" onClick={handleClose} />]}
      onCancel={handleClose}
      open={isOpen}
    >
      <div className="min-w-[800px] p-4">
        {thesis?.students?.map((student, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="mb-4">
              <Typography.Text className="block ml-[10px] font-bold text-lg">
                Thông tin sinh viên {index + 1}
              </Typography.Text>
              <Row align={"middle"}>
                <Col {...colLayout} className="text-lg">
                  Họ và tên:
                </Col>
                <Col className="text-base">{student?.fname}</Col>
              </Row>
              <Row align={"middle"}>
                <Col {...colLayout} className="text-lg">
                  Mã số sinh viên:
                </Col>
                <Col className="text-base">{student?.username}</Col>
              </Row>
              <Row align={"middle"}>
                <Col {...colLayout} className="text-lg">
                  Lớp:
                </Col>
                <Col className="text-base">{student?.studentClass}</Col>
              </Row>
            </div>
          );
        })}
        {thesis?.teachers?.map((teacher, index) => (
          <div key={index} className="mb-4">
            <Typography.Text className="block font-bold text-lg">
              Thông tin giảng viên hướng dẫn
            </Typography.Text>
            <Row align={"middle"}>
              <Col {...colLayout} className="text-lg">
                Họ và tên:
              </Col>
              <Col className="text-base">{teacher?.fname}</Col>
            </Row>
            <Row align={"middle"}>
              <Col {...colLayout} className="text-lg">
                Mã số giảng viên:
              </Col>
              <Col className="text-base">{teacher?.username}</Col>
            </Row>
          </div>
        ))}

        <div className="mb-4">
          <Typography.Text className="block font-bold text-lg">
            Thông tin đề tài:
          </Typography.Text>
          <Row align={"middle"}>
            <Col {...colLayout} className="text-lg">
              Tên đề tài:
            </Col>
            <Col className="text-base">{thesis.topic}</Col>
          </Row>
          {thesis.description && (
            <Row align={"middle"}>
              <Col {...colLayout} span={23}>
                <Typography.Text className="text-lg">Mô tả:</Typography.Text>
                <div className="w-full border-2 p-2">
                  <ReactQuillPreviewCommon content={thesis.description} />
                </div>
              </Col>
            </Row>
          )}
        </div>
        <div className="mb-4">
          <Typography.Text className="text-lg">
            <strong>Tài liệu:</strong>
          </Typography.Text>
          {thesis?.fileAttachments?.map((fa, index) => {
            return (
              <Space key={index} className="block">
                <a href={fa.fileUrl}>
                  <PaperClipOutlined /> {getFileNameFromUrl(fa.fileUrl ?? "")}
                </a>
              </Space>
            );
          })}
        </div>
        <Row gutter={20} align={"middle"}>
          <Col>
            <Typography.Text className="font-bold text-lg">
              Trạng thái:
            </Typography.Text>
          </Col>
          <Col className="text-base">
            {
              CommonConstants.THESIS_STATUS.filter(
                (ts) => ts.value === thesis.status
              )[0].text
            }
          </Col>
        </Row>
      </div>
    </ModalCommon>
  );
};

export default ThesisDetailView;
