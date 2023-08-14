import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Spin,
  Typography,
  message,
} from "antd";
import { Fragment, useContext, useEffect, useState } from "react";
import ButtonCommon from "../../../components/common/ButtonCommon";
import ModalCommon from "../../../components/common/ModalCommon";
import { useForm } from "antd/es/form/Form";
import * as UserService from "~/services/userServices";
import * as OutlineCommentService from "~/services/OutlineReviewServices";
import { v4 } from "uuid";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import { useMutation, useQuery } from "react-query";
import AuthConstants from "~/constants/authConstants";

const AddCouncilModal = (): JSX.Element => {
  const {
    openAddCouncilModal,
    setOpenAddCouncilModal,
    listThesisSelected,
    listThesis,
    setSearchCondition,
    search,
  } = useContext(ThesisConsoleContext);

  const [teacherSelectOptions, setTeacherSelectOptions] = useState<UserModel[]>(
    []
  );

  const { data: teachers, isLoading: isLoadingTeachers } = useQuery(
    ["load-teacher-select"],
    () => UserService.getUserByRole(AuthConstants.AUTH_ROLES.TEACHER)
  );

  useEffect(() => {
    handleSetDataTeacherSelect(teachers as UserModel[]);
  }, [teachers, isLoadingTeachers, listThesis]);

  const handleSetDataTeacherSelect = (data: UserModel[]) => {
    let idAllTeacherHaveThesis: string[] = [];
    listThesis.map((thesis) =>
      idAllTeacherHaveThesis.push(thesis.teacher!?.user!?.userId)
    );
    if (!data) return;
    let teachersHaveNoThesis = data.filter(
      (teacher) => idAllTeacherHaveThesis.indexOf(teacher.userId) < 0
    );
    setTeacherSelectOptions(teachersHaveNoThesis);
  };

  const [form] = useForm();

  const clearData = () => {
    form.resetFields();
  };

  const insertOulineCommentMutation = useMutation(
    OutlineCommentService.insert,
    {
      onSuccess: (data: OutlineCommentModel | null) => {
        if (data) {
          message.success("Thêm thành công");
          // setOpenAddCouncilModal(false);
          // clearData();
          // setSearchCondition(() => {
          //   return {};
          // });
          // search();
        } else {
          message.error("Thêm thất bại");
        }
      },
    }
  );

  const removeOulineCommentMutation = useMutation(
    OutlineCommentService.remove,
    {
      onSuccess: (data: boolean) => {
        if (data) {
          console.log("Xóa thành công");
        } else {
          // message.error("Thêm thất bại");
          console.log("Xóa thất bại");
        }
      },
    }
  );

  const handleSave = async () => {
    form.validateFields().then(() => {
      const outlineCommentsModel: OutlineCommentModel[] = [];
      const listIdTeacher: string[] = form.getFieldValue("coucil");
      for (let i = 0; i < listThesisSelected.length; i++) {
        const thesisId = listThesisSelected[i].id;
        removeOulineCommentMutation.mutate(thesisId);
        for (let j = 0; j < listIdTeacher.length; j++) {
          let oulineComment: OutlineCommentModel = {
            thesisId,
            userId: listIdTeacher[j],
            order: 1,
          };
          outlineCommentsModel.push(oulineComment);
        }
      }
      console.log(outlineCommentsModel);
      outlineCommentsModel.map((item) => {
        insertOulineCommentMutation.mutate(item);
      });
    });
  };

  const handleClose = () => {
    // clearData();
    setOpenAddCouncilModal(false);
  };

  const ButtonFooter = (): JSX.Element => {
    return (
      <Row justify={"end"}>
        <ButtonCommon value="Đóng" onClick={handleClose} />
        <ButtonCommon color="blue" value={"Lưu"} onClick={handleSave} />
      </Row>
    );
  };

  return (
    <ModalCommon
      title="Thêm thành viên hội đồng chấm"
      open={openAddCouncilModal}
      footer={[<ButtonFooter key={"1"} />]}
      onCancel={handleClose}
      maskCloseable={false}
    >
      <Spin spinning={false}>
        <Form layout="horizontal" className="w-[600px]" form={form}>
          <Row className="min-w-[400px]">
            <Col className="py-3 px-4">
              <Typography.Text strong>
                Danh sách luận văn đã chọn
              </Typography.Text>
            </Col>
          </Row>
          <Row>
            <>
              <Col span={15} className="py-3 px-4">
                <Typography.Text strong>Tên luận văn</Typography.Text>
              </Col>
              <Col flex={1} className=" py-3 px-4">
                <Typography.Text strong>Giảng viên hướng dẫn</Typography.Text>
              </Col>
            </>
          </Row>
          {listThesisSelected.map((thesis, index) => {
            return (
              <Row className="border" key={index}>
                <>
                  <Col span={15} className="py-3 px-4">
                    <Typography.Text>{thesis.topic}</Typography.Text>
                  </Col>
                  <Col flex={1} className=" py-3 px-4">
                    <Typography.Text>
                      {thesis.teacher?.user?.fname}
                    </Typography.Text>
                  </Col>
                </>
              </Row>
            );
          })}
          <Row className="min-w-[400px]">
            <Col span={5} className="border py-3 px-4">
              <Typography.Text strong>Chọn thành viên hội đồng</Typography.Text>
            </Col>
            <Col flex={1} className="border py-3 px-4">
              <Form.Item
                name="coucil"
                required
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select mode="multiple">
                  {teacherSelectOptions.map((teacher) => {
                    return (
                      <Select.Option key={teacher.userId}>
                        {teacher.fname}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Spin>
    </ModalCommon>
  );
};

export default AddCouncilModal;
