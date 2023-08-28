import {
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Spin,
  type UploadFile,
  message,
} from "antd";
import { useForm } from "antd/es/form/Form";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { v4 } from "uuid";
import ButtonCommon from "~/components/common/ButtonCommon";
import DraggerSingleCommon from "~/components/common/DraggerSingleCommon";
import ModalCommon from "~/components/common/ModalCommon";
import RichTextEditorCommon from "~/components/common/RichTextEditorCommon";
import AuthConstants from "~/constants/authConstants";
import { AuthContext } from "~/contexts/AuthContext";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";
import * as ThesisService from "~/services/thesisService";
import * as UserService from "~/services/userServices";

const AddEditThesisModal = (): JSX.Element => {
  const {
    isEditModal,
    isOpenAddEditThesisModal,
    setIsOpenAddEditThesisModal,
    thesis,
    setIsEditModal,
  } = useContext(ThesisConsoleContext);

  const insertThesisMutation = useMutation(ThesisService.insert, {
    onSuccess: (data: ThesisModel | null) => {
      if (data != null) {
        void message.success("Thêm thành công");
        setIsOpenAddEditThesisModal(false);
        resetModal();
      } else {
        void message.error("Thêm thất bại");
      }
    },
  });
  const updateThesisMutation = useMutation(ThesisService.update, {
    onSuccess: (data: boolean) => {
      if (data) {
        void message.success("Cập nhật thành công");
        resetModal();
        setIsOpenAddEditThesisModal(false);
      } else {
        void message.error("Cập nhật thất bại");
      }
    },
  });

  const { user } = useContext(AuthContext);

  const [file, setFile] = useState<UploadFile>();
  const [documentUrl, setDocumentUrl] = useState<string | undefined>(undefined);
  const [desciption, setDesciption] = useState<string | undefined>();
  const [studentSelectOptions, setStudentSelectOptions] = useState<UserModel[]>(
    []
  );
  const [teacherSelectOptions, setTeacherSelectOptions] = useState<UserModel[]>(
    []
  );

  const { data: students } = useQuery(
    ["load-student-select"],
    async () =>
      await UserService.getUserByRole(AuthConstants.AUTH_ROLES.STUDENT)
  );
  const { data: teachers } = useQuery(
    ["load-teacher-select"],
    async () =>
      await UserService.getUserByRole(AuthConstants.AUTH_ROLES.TEACHER)
  );

  const [form] = useForm();

  useEffect(() => {
    handleSetDataStudentSelect(students as UserModel[]);
  }, [students]);

  useEffect(() => {
    handleSetDataTeacherSelect(teachers as UserModel[]);
  }, [teachers]);

  useEffect(() => {
    if (isEditModal) {
      const documentUrl = thesis?.fileAttachments?.filter(
        (file) => file.type === 2
      )[0].fileUrl;
      form.setFieldsValue({
        student1: thesis?.students?.[0]?.userId,
        student2: thesis?.students?.[1]?.userId,
        teacher: thesis?.teachers?.[0]?.userId,
        topic: thesis?.topic,
        desciption: thesis?.description,
        year: moment(thesis?.schoolYear, "YYYY"),
        semester: thesis?.semester,
        documentUrl,
      });
      setDesciption(thesis?.description);
      setDocumentUrl(documentUrl);
      documentUrl &&
        setFile({
          uid: v4(),
          name: documentUrl.substring(
            documentUrl.lastIndexOf("/") + 1,
            documentUrl.indexOf("?")
          ),
          status: "done",
          url: documentUrl,
          response: documentUrl,
        });
    }
  }, [thesis]);

  const handleSetDataStudentSelect = (data: UserModel[]): void => {
    if (!data) return;
    const students = data.filter((std) => std.userId !== user?.userId);
    setStudentSelectOptions(students);
  };

  const handleSetDataTeacherSelect = (data: UserModel[]): void => {
    if (!data) return;
    const teachers = data.filter((teacher) => teacher.userId !== user?.userId);
    setTeacherSelectOptions(teachers);
  };

  const resetModal = (): void => {
    setFile(undefined);
    setIsEditModal(false);
    setDesciption(undefined);
    setDocumentUrl(undefined);
    form.resetFields();
  };

  const title = isEditModal ? "Chỉnh sửa luận văn" : "Thêm luận văn";

  const handleSave = (): void => {
    form.setFieldsValue({
      desciption,
      documentUrl,
    });
    const student1Id = form.getFieldValue("student1");
    const student2Id = form.getFieldValue("student2");
    const students = studentSelectOptions.filter(
      (std) => std.userId === student1Id || std.userId === student2Id
    );

    const teacherId = form.getFieldValue("teacher");
    const teachers = teacherSelectOptions.filter(
      (teacher) => teacher.userId === teacherId
    );

    void form.validateFields().then(() => {
      const thesisId = isEditModal ? thesis?.id : v4();
      const thesisReq: ThesisModel = {
        id: thesisId,
        ...form.getFieldsValue(),
        schoolYear: form.getFieldValue("year").year(),
        fileAttachments: [
          {
            id: v4(),
            fileUrl: documentUrl,
            type: 2,
            thesisId,
            createdAt: new Date().getTime(),
            isDeleted: false,
            updatedAt: new Date().getTime(),
          },
        ],
        students,
        teachers,
        status: 9,
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
        userCreated: user,
        createdBy: user?.userId,
        isDeleted: false,
        teacher: undefined,
      };
      if (isEditModal) {
        updateThesisMutation.mutate(thesisReq);
      } else {
        insertThesisMutation.mutate(thesisReq);
      }
    });
  };

  const handleUploadSuccess = (file: UploadFile): void => {
    setDocumentUrl(file.response ?? undefined);
  };
  const handleRemove = (): void => {
    setDocumentUrl(undefined);
  };

  const handleClose = (): void => {
    setIsOpenAddEditThesisModal(false);
    resetModal();
  };

  const filterOptions = (input: string, option: any): boolean => {
    return (option?.label?.toString().toLowerCase() ?? "").includes(
      input.toLowerCase()
    );
  };

  return (
    <ModalCommon
      title={title}
      footer={[
        <ButtonCommon key={1} value="Hủy" onClick={handleClose} />,
        <ButtonCommon key={2} color="blue" value="Lưu" onClick={handleSave} />,
      ]}
      open={isOpenAddEditThesisModal}
      onCancel={handleClose}
      forceRender
    >
      <Spin
        spinning={
          insertThesisMutation.isLoading || updateThesisMutation.isLoading
        }
      >
        <Form className="min-w-[800px]" layout="vertical" form={form}>
          <Row gutter={30}>
            <Col span={12}>
              <Form.Item label="Sinh viên 1" name="student1">
                <Select
                  showSearch
                  placeholder="Nhập mã số sinh viên"
                  filterOption={filterOptions}
                  options={[
                    ...studentSelectOptions.map((std) => {
                      return {
                        value: std.userId,
                        label: `${std.fname ?? ""} - ${std.username ?? ""}`,
                      };
                    }),
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Sinh viên 2" name="student2">
                <Select
                  showSearch
                  placeholder="Nhập mã số sinh viên"
                  filterOption={filterOptions}
                  options={[
                    ...studentSelectOptions.map((std) => {
                      return {
                        value: std.userId,
                        label: `${std.fname ?? ""} - ${std.username ?? ""}`,
                      };
                    }),
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="Giảng viên hướng dẫn"
            name="teacher"
            required
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Nhập mã số giảng viên"
              filterOption={filterOptions}
              options={[
                ...teacherSelectOptions.map((teacher) => {
                  return {
                    value: teacher.userId,
                    label: `${teacher.fname ?? ""} - ${teacher.username ?? ""}`,
                  };
                }),
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Tên đề tài"
            name="topic"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Mô tả" name="desciption">
            <div style={{ height: 230 }}>
              <RichTextEditorCommon
                style={{ height: 200 }}
                editorHtml={desciption}
                setEditorHtml={setDesciption}
              />
            </div>
          </Form.Item>
          <Row gutter={30}>
            <Col span={10}>
              <Form.Item label="Năm" name="year" rules={[{ required: true }]}>
                <DatePicker.YearPicker className="w-full" />
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item
                label="Học kì"
                name="semester"
                rules={[{ required: true }]}
              >
                <Select>
                  <Select.Option key={1}>Học kì 1</Select.Option>
                  <Select.Option key={2}>Học kì 2</Select.Option>
                  <Select.Option key={3}>Học kì 3</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="File tài liệu"
            name="documentUrl"
            rules={[{ required: true }]}
          >
            <DraggerSingleCommon
              handleRemove={handleRemove}
              handleSuccess={handleUploadSuccess}
              file={file}
              setFile={setFile}
            />
          </Form.Item>
        </Form>
      </Spin>
    </ModalCommon>
  );
};

export default AddEditThesisModal;
