import {
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Space,
  Spin,
  Typography,
  UploadFile,
  message,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext, useEffect, useState } from "react";
import { v4 } from "uuid";
import { OutlineReviewContext } from "~/contexts/OutlineReviewContext";
import * as OutlineReviewService from "~/services/OutlineReviewServices";
import ButtonCommon from "../../../components/common/ButtonCommon";
import DraggerCommon from "../../../components/common/DraggerCommon";
import ModalCommon from "../../../components/common/ModalCommon";
import RichTextEditorCommon from "../../../components/common/RichTextEditorCommon";
import { dateDisplay, getFileNameFromUrl } from "~/common/util";
import dayjs from "dayjs";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { ApiUrlConstants } from "~/constants/apiUrlConstants";
import AuthConstants from "~/constants/authConstants";
import { PaperClipOutlined } from "@ant-design/icons";
import { JSX } from "react";

const { Option } = Select;
const EditOutlineReviewModal = (): JSX.Element => {
  const {
    openEditOutlineReviewModal,
    setOpenEditOutlineReviewModal,
    isLoadingDetail,
    OutlineReviewDetail,
  } = useContext(OutlineReviewContext);

  const [OutlineReview, setOutlineReview] = useState<OutlineReviewModel>(
    {} as OutlineReviewModel
  );
  const [editMode, setEditMode] = useState<boolean>(false);

  const getOutlineReviewByIdMutation = useMutation(
    OutlineReviewService.getOutlineReviewById,
    {
      onSuccess: (data) => {
        const OutlineReviewRes: OutlineReviewModel | null =
          data as OutlineReviewModel;
        if (OutlineReviewRes) {
          setOutlineReview(OutlineReviewRes);
        } else {
          toast("Không thể lấy thông tin người dùng");
        }
      },
    }
  );

  // const updateOutlineReviewMuitation = useMutation(OutlineReviewService.updateOutlineReview, {
  //   onSuccess: () => {
  //     message.success("Cập nhật thành công");
  //   },
  // });
  // const resetPasswordMuitation = useMutation(OutlineReviewService.resetPasswordOutlineReview, {
  //   onSuccess: () => {
  //     message.success(
  //       "Đặt lại thành công, mật khẩu mới đã được gửi qua email người dùng"
  //     );
  //   },
  // });

  const resetPasswordOutlineReviewHandle = (
    OutlineReview: OutlineReviewModel
  ) => {
    if (confirm("Bạn chắc chắn muốn đặt lại mật khẩu cho tài khoản này?")) {
      // resetPasswordMuitation.mutate(OutlineReview);
    }
  };

  useEffect(() => {
    if (OutlineReviewDetail) {
      // getOutlineReviewByIdMutation.mutate(OutlineReviewDetail!?.OutlineReviewId);
    }
  }, [openEditOutlineReviewModal, OutlineReviewDetail]);

  useEffect(() => {
    if (OutlineReviewDetail) {
      // getOutlineReviewByIdMutation.mutate(OutlineReviewDetail!?.OutlineReviewId);
    }
  }, []);

  const ModalFooter = (): JSX.Element => {
    return (
      <Row justify={"end"}>
        <ButtonCommon value="Đóng" onClick={handleCancel} />
        {editMode ? (
          <ButtonCommon
            value="Lưu"
            onClick={() => {
              // updateOutlineReviewMuitation.mutate(OutlineReview);
              setEditMode(false);
            }}
          />
        ) : (
          <ButtonCommon value="Lưu" onClick={() => setEditMode(true)} />
        )}
      </Row>
    );
  };

  const handleCancel = () => {
    setOpenEditOutlineReviewModal(false);
    setEditMode(false);
  };
  return (
    <ModalCommon
      title="Đánh giá luận văn"
      open={openEditOutlineReviewModal}
      footer={[<ModalFooter key={"1"} />]}
      onCanel={handleCancel}
      maskCloseable={false}
    >
      <Spin spinning={isLoadingDetail}>
        <Row className="w-[800px]">
          <Col
            flex={1}
            className="py-3 px-4 w-full flex items-center justify-center"
          >
            <Typography.Text className="font-bold text-xl">
              {OutlineReview!?.topic || "Xây dựng hệ thống quản lý luận văn"}
            </Typography.Text>
          </Col>
        </Row>
        <Row className="w-[800px]">
          <Col
            flex={1}
            className="py-3 px-4 w-full flex items-center justify-center"
          >
            <Typography.Text className="">
              {OutlineReview!?.topic ||
                "Contrary to popular belief, Lorem Ipsum is nosimply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
            </Typography.Text>
          </Col>
        </Row>
        <Row>
          {OutlineReview!?.attachmentUrls &&
            OutlineReview!?.attachmentUrls.length > 0 && (
              <div className="border-t py-3">
                <Typography.Text className="font-bold">
                  Danh sách file đính kèm
                </Typography.Text>
                {OutlineReview!?.attachmentUrls?.map((url) => {
                  return (
                    <Space className="block">
                      <a href={url}>
                        <PaperClipOutlined /> {getFileNameFromUrl(url)}
                      </a>
                    </Space>
                  );
                })}
              </div>
            )}
        </Row>
      </Spin>
    </ModalCommon>
  );
};

export default EditOutlineReviewModal;
