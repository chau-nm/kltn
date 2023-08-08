import { Col, Row, Space, Spin, Typography } from "antd";
import { useContext, useEffect, useState } from "react";
import { OutlineReviewContext } from "~/contexts/OutlineReviewContext";
import * as ThesisService from "~/services/thesisService";
import ButtonCommon from "../../../components/common/ButtonCommon";
import ModalCommon from "../../../components/common/ModalCommon";
import { getFileNameFromUrl } from "~/common/util";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { PaperClipOutlined } from "@ant-design/icons";
import { JSX } from "react";
import ReactQuillPreviewCommon from "~/components/common/ReactQuillPreviewCommon";

const EditOutlineReviewModal = (): JSX.Element => {
  const {
    openEditOutlineReviewModal,
    setOpenEditOutlineReviewModal,
    isLoadingDetail,
    OutlineReviewDetail,
  } = useContext(OutlineReviewContext);

  const [OutlineReview, setOutlineReview] = useState<ThesisModel>(
    {} as ThesisModel
  );
  const [editMode, setEditMode] = useState<boolean>(false);

  const getOutlineReviewByIdMutation = useMutation(
    ThesisService.getThesisById,
    {
      onSuccess: (data) => {
        const OutlineReviewRes: ThesisModel | null = data as ThesisModel;
        if (OutlineReviewRes) {
          setOutlineReview(OutlineReviewRes);
        } else {
          toast("Không thể lấy thông tin người dùng");
        }
      },
    }
  );

  useEffect(() => {
    if (OutlineReviewDetail) {
      getOutlineReviewByIdMutation.mutate(OutlineReviewDetail.id);
    }
  }, [openEditOutlineReviewModal, OutlineReviewDetail]);

  useEffect(() => {
    if (OutlineReviewDetail) {
      getOutlineReviewByIdMutation.mutate(OutlineReviewDetail!?.id);
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
              {OutlineReview!?.topic}
            </Typography.Text>
          </Col>
        </Row>
        <Row className="w-[800px]">
          <Col
            flex={1}
            className="py-3 px-4 w-full flex items-center justify-center"
          >
            <ReactQuillPreviewCommon
              content={OutlineReview!?.description}
            ></ReactQuillPreviewCommon>
          </Col>
        </Row>
        <Row>
          {OutlineReview!?.outlineUrls &&
            OutlineReview!?.outlineUrls.length > 0 && (
              <div className="border-t py-3 w-full">
                <Typography.Text className="font-bold">
                  Danh sách file đính kèm
                </Typography.Text>
                {OutlineReview!?.outlineUrls?.map((url) => {
                  return (
                    <Space className="block">
                      <a href={url} target="_blank">
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
