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
import { v4 } from "uuid";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import { useQuery } from "react-query";
import AuthConstants from "~/constants/authConstants";

const AddCouncilModal = (): JSX.Element => {
  const {
    openAddCouncilModal,
    setOpenAddCouncilModal,
    listThesisSelected,
    listThesis,
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
  }, [teachers]);

  const handleSetDataTeacherSelect = (data: UserModel[]) => {
    // console.log(the);
    let idAllTeacherHaveThesis: string[] = [];
    console.log(listThesis);
    listThesis.map((thesis) =>
      idAllTeacherHaveThesis.push(thesis.teacher!?.userId)
    );
    if (!data) return;
    console.log("idAllTeacherHaveThesis", idAllTeacherHaveThesis);
    let teachersHaveNoThesis = data.filter(
      (teacher) => idAllTeacherHaveThesis.indexOf(teacher.userId) < 0
    );
    console.log("teachersHaveNoThesis", teachersHaveNoThesis);
    setTeacherSelectOptions(teachersHaveNoThesis);
  };

  const [form] = useForm();

  const clearData = () => {
    form.resetFields();
  };

  const handleSave = async () => {
    form.validateFields().then(async () => {
      const user: UserModel = {
        userId: v4(),
        username: form.getFieldValue("username"),
        password: form.getFieldValue("password"),
        email: form.getFieldValue("email"),
        fname: form.getFieldValue("fname"),
        gender: form.getFieldValue("gender"),
        birthday: form.getFieldValue("birthday"),
        roles: [],
        faculty: form.getFieldValue("faculty"),
        studentClass: form.getFieldValue("studentClass"),
      };
      console.log(user);
      const UserResponse: UserModel | null = await UserService.insert(user);
      if (UserResponse) {
        message.success("Lưu thành công");
        setOpenAddCouncilModal(false);
        clearData();
      } else {
        message.error("Lưu thất bại");
      }
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
      onCanel={handleClose}
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
          {listThesisSelected.map((thesis) => {
            return (
              <Row className="border">
                <>
                  <Col span={15} className="py-3 px-4">
                    <Typography.Text>{thesis.topic}</Typography.Text>
                  </Col>
                  <Col flex={1} className=" py-3 px-4">
                    <Typography.Text>{thesis.teacher?.fname}</Typography.Text>
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
