import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import ButtonCommon from "~/components/common/ButtonCommon";
import ReactQuillPreviewCommon from "~/components/common/ReactQuillPreviewCommon";
import * as OutlineReviewServices from "~/services/thesisOutlineCommentService";

type ThesisDetailProps = {
  thesis: ThesisModel;
};

const ThesisDetail = ({ thesis }: ThesisDetailProps): JSX.Element => {
  const colLayout = {
    span: 3,
    offset: 1,
  };
  const [listCommentOfCouncil, setListCommentOfCouncil] = useState<
    OutlineCommentModel[]
  >([]);
  const searchCommentMutaion = useMutation(
    OutlineReviewServices.getCommentByThesisId,
    {
      onSuccess: (data: OutlineCommentModel[] | []) => {
        if (data) {
          setListCommentOfCouncil(data as OutlineCommentModel[]);
        }
      },
    }
  );

  const searchListComment = (idThesis: string): void => {
    searchCommentMutaion.mutate(idThesis);
  };

  useEffect(() => {
    thesis?.id && searchListComment(thesis?.id);
  }, [thesis]);

  const thesisStudents = thesis.students;
  const thesisTeacher = thesis.teacher;

  return (
    <div>
      {thesisStudents?.map((tu, index) => {
        const student = tu.user;
        return (
          // eslint-disable-next-line react/jsx-key
          <div>
            <Typography.Text className="block font-bold">
              Thông tin sinh viên {index + 1}
            </Typography.Text>
            <Row>
              <Col {...colLayout}>Họ và tên:</Col>
              <Col>{student?.fname}</Col>
            </Row>
            <Row>
              <Col {...colLayout}>Mã số sinh viên:</Col>
              <Col>{student?.username}</Col>
            </Row>
            <Row>
              <Col {...colLayout}>Lớp:</Col>
              <Col>{student?.studentClass}</Col>
            </Row>
          </div>
        );
      })}
      <div>
        <Typography.Text className="block font-bold">
          Thông tin giảng viên hướng dẫn
        </Typography.Text>
        <Row>
          <Col {...colLayout}>Họ và tên:</Col>
          <Col>{thesisTeacher?.user?.fname}</Col>
        </Row>
        <Row>
          <Col {...colLayout}>Mã số giảng viên:</Col>
          <Col>{thesisTeacher?.user?.username}</Col>
        </Row>
      </div>
      <div>
        <Typography.Text className="block font-bold">
          Thông tin đề tài:
        </Typography.Text>
        <Row>
          <Col {...colLayout}>Tên đề tài:</Col>
          <Col>{thesis.topic}</Col>
        </Row>
        <div className="ml-[41.125px]">
          <Typography.Text>Mô tả:</Typography.Text>
          <ReactQuillPreviewCommon content={thesis.description!} />
        </div>
      </div>
      <div>
        <Typography.Text className="font-bold">
          Đề cương:
          <a href={thesis.outlineUrl}>click here</a>
        </Typography.Text>
      </div>
      <div>
        <Typography.Text className="font-bold">
          Đánh giá đề cương
        </Typography.Text>
        {listCommentOfCouncil.map((comment, index) => {
          return (
            comment?.user?.roles &&
            comment?.user?.roles.includes("MINISTRY") && (
              <Row
                className="p-3 border rounded-lg max-w-[1000px] mb-3"
                key={index}
              >
                <>
                  <Col span={2} className="comment-avatar">
                    <Avatar
                      icon={<UserOutlined />}
                      size={50}
                      className="flex items-center justify-center"
                    />
                  </Col>
                  <Col span={18} className="comment-content">
                    <Typography.Text>
                      <strong className="commenter-name">
                        {comment?.user?.fname}
                      </strong>
                      <ReactQuillPreviewCommon
                        content={comment?.comment as string}
                      ></ReactQuillPreviewCommon>
                    </Typography.Text>
                  </Col>
                </>
              </Row>
            )
          );
        })}
      </div>
      <div>
        <Typography.Text className="font-bold">
          Tài liệu bảo vệ:
        </Typography.Text>
        {/** Têm preview tại đây */}
      </div>
      <div>
        <Typography.Text className="font-bold">
          Đánh giá bảo vệ bảo vệ:
        </Typography.Text>
      </div>
      <div className="flex justify-end">
        <ButtonCommon value="Hủy luận văn" />
      </div>
    </div>
  );
};

export default ThesisDetail;
