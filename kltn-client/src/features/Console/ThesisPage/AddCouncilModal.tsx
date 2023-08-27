import { Col, Form, Row, Select, Spin, Typography, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import AuthConstants from "~/constants/authConstants";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import * as UserService from "~/services/userServices";
import * as ThesisOutlineCommentService from "~/services/thesisOutlineCommentService";
import ButtonCommon from "../../../components/common/ButtonCommon";
import ModalCommon from "../../../components/common/ModalCommon";

const AddCouncilModal = (): JSX.Element => {
  const { openAddCouncilModal, setOpenAddCouncilModal, thesis } =
    useContext(ThesisConsoleContext);

  const [teacherSelectOptions, setTeacherSelectOptions] = useState<UserModel[]>(
    []
  );

  const { data: teachers, isLoading: isLoadingTeachers } = useQuery(
    ["load-teacher-select"],
    async () =>
      await UserService.getUserByRole(AuthConstants.AUTH_ROLES.TEACHER)
  );

  // const { data: thesisOutlines } = useQuery(
  //   ["load-councils"],
  //   async () =>
  //     await ThesisOutlineCommentService.getCommentByThesisId(thesis?.id ?? "")
  // );

  // const insertCouncils = useMutation(
  //   ThesisOutlineCommentService.insertCouncils,
  //   {
  //     onSuccess: (data: OutlineCommentModel[]) => {
  //       if (data) {
  //         void message.success("Thêm hội đồng thành công");
  //       }
  //     },
  //   }
  // );

  // useEffect(() => {
  //   if (thesisOutlines) {
  //     const councils = thesisOutlines.map((to) => to.userId);
  //     form.setFieldValue("councils", councils);
  //   }
  // }, [thesisOutlines]);

  useEffect(() => {
    handleSetDataTeacherSelect(teachers as UserModel[]);
  }, [teachers, isLoadingTeachers]);

  const handleSetDataTeacherSelect = (data: UserModel[]): void => {
    if (!data) return;
    const teachersHaveNoThesis = data.filter((teacher) => teacher.userId);
    setTeacherSelectOptions(teachersHaveNoThesis);
  };

  const [form] = useForm();

  const handleSave = (): void => {
    // void form.validateFields().then(() => {
    //   const insertCouncilsPayload: InsertThesisCouncilPayload = {
    //     thesisId: thesis?.id,
    //     councils: form.getFieldValue("councils"),
    //   };
    //   insertCouncils.mutate(insertCouncilsPayload);
    // });
  };

  const handleClose = (): void => {
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
            <Col span={5} className="border py-3 px-4">
              <Typography.Text strong>Chọn thành viên hội đồng</Typography.Text>
            </Col>
            <Col flex={1} className="border py-3 px-4">
              <Form.Item
                name="councils"
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
