import { Col, Row, Space, Typography } from "antd";
import { type SetStateAction } from "react";
import CommonConstants from "~/constants/commonConstants";
import ButtonCommon from "./common/ButtonCommon";
import ModalCommon from "./common/ModalCommon";
import ReactQuillPreviewCommon from "./common/ReactQuillPreviewCommon";
import { PaperClipOutlined, SendOutlined } from "@ant-design/icons";
import { getFileNameFromUrl } from "~/common/util";

type ThesisDetailViewProps = {
  thesis: ThesisModel;
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

const getColorStatus = (status: number): string => {
  switch (status) {
    case -1:
      return "text-red-500";
    case 1:
      return "text-yellow-500";
    case 2 || 3 || 4 || 5:
      return "text-blue-500";
    case 6:
      return "text-green-500";
    default:
      return "text-blue-500";
  }
};

const ThesisDetailView = ({
  thesis,
  isOpen,
  setIsOpen,
}: ThesisDetailViewProps): JSX.Element => {
  const handleClose = (): void => {
    setIsOpen(false);
  };

  const outLines = thesis.fileAttachments?.filter((file) => file.type === 1);
  const documents = thesis.fileAttachments?.filter((file) => file.type === 2);

  return (
    <ModalCommon
      title={"Chi tiết luận văn"}
      footer={[<ButtonCommon key={1} value="Đóng" onClick={handleClose} />]}
      onCancel={handleClose}
      open={isOpen}
    >
      <div className="my-2 w-[1000px]">
        <div className="flex items-center mb-2">
          <SendOutlined />
          <span className="ml-2 text-lg font-bold">Thông tin đề tài</span>
        </div>
        <Row gutter={30} className="px-4">
          <Col span={8} className="border p-3">
            {"-"} Tên đề tài
          </Col>
          <Col span={16} className="border p-3">
            {thesis.topic}
          </Col>
        </Row>
        <Row gutter={30} className="px-4">
          <Col span={8} className="border p-3">
            {"-"} Thực hiện vào
          </Col>
          <Col span={16} className="border p-3">
            Học kì {thesis.semester} năm học {thesis.schoolYear}
          </Col>
        </Row>
        <Row gutter={30} className="px-4">
          <Col span={8} className="border p-3">
            {"-"} Trạng thái
          </Col>
          <Col span={16} className="border p-3">
            <Typography.Text
              className={getColorStatus(thesis.status ?? 0)}
              italic
            >
              {CommonConstants.THESIS_STATUS[thesis.status ?? 0].text}
            </Typography.Text>
          </Col>
        </Row>
        <Row gutter={30} className="px-4">
          <Col span={8} className="border p-3">
            {"-"} Mô tả
          </Col>
          <Col span={16} className="border p-3 max-h-[200px] overflow-y-scroll">
            <ReactQuillPreviewCommon content={thesis.description ?? ""} />
          </Col>
        </Row>
      </div>

      <div className="my-2">
        <div className="flex items-center mb-2">
          <SendOutlined />
          <span className="ml-2 text-lg font-bold">Sinh viên tham gia</span>
        </div>
        {thesis.students?.map((std, index) => {
          return (
            <div key={index} className="my-4 border">
              <Row gutter={30} className="px-4">
                <Col span={12} className=" p-3">
                  - Họ và tên: {std.fname}
                </Col>
                <Col span={12} className=" p-3">
                  - Mã số sinh viên: {std.username}
                </Col>
              </Row>
              <Row gutter={30} className="px-4">
                <Col span={12} className=" p-3">
                  - Lớp: {std.studentClass}
                </Col>
                <Col span={12} className=" p-3">
                  - Khoa: {std.faculty}
                </Col>
              </Row>
            </div>
          );
        })}
      </div>

      <div className="my-2">
        <div className="flex items-center mb-2">
          <SendOutlined />
          <span className="ml-2 text-lg font-bold">Giảng viên hướng dẫn</span>
        </div>
        {thesis.teachers?.map((teacher, index) => {
          return (
            <div key={index} className="my-4 border">
              <Row gutter={30} className="px-4">
                <Col span={12} className=" p-3">
                  - Họ và tên: {teacher.fname}
                </Col>
                <Col span={12} className=" p-3">
                  - Mã số giảng viên: {teacher.username}
                </Col>
              </Row>
              <Row gutter={30} className="px-4">
                <Col span={12} className=" p-3">
                  - Khoa: {teacher.faculty}
                </Col>
                <Col span={12} className=" p-3">
                  - Ngạnh bậc: {teacher.degree}
                </Col>
              </Row>
            </div>
          );
        })}
      </div>

      {(outLines?.length ?? 0) > 0 && (
        <div className="my-2">
          <div className="flex items-center mb-2">
            <SendOutlined />
            <span className="ml-2 text-lg font-bold">File đề cương:</span>
          </div>
          {outLines?.map((file, index) => {
            return (
              <Space key={index} className="block">
                <a href={file.fileUrl}>
                  <PaperClipOutlined /> {getFileNameFromUrl(file.fileUrl ?? "")}
                </a>
              </Space>
            );
          })}
        </div>
      )}
      {(documents?.length ?? 0) > 0 && (
        <div className="my-2">
          <div className="flex items-center mb-2">
            <SendOutlined />
            <span className="ml-2 text-lg font-bold">File tài liệu:</span>
          </div>
          {documents?.map((file, index) => {
            return (
              <Space key={index} className="block">
                <a href={file.fileUrl}>
                  <PaperClipOutlined /> {getFileNameFromUrl(file.fileUrl ?? "")}
                </a>
              </Space>
            );
          })}
        </div>
      )}
    </ModalCommon>
  );
};

export default ThesisDetailView;
