import {
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
import { useMutation, useQuery } from "react-query";
import { v4 } from "uuid";
import ButtonCommon from "~/components/common/ButtonCommon";
import CardCommon from "~/components/common/CardCommon";
import DraggerCommon from "~/components/common/DraggerCommon";
import ReactQuillPreviewCommon from "~/components/common/ReactQuillPreviewCommon";
import RichTextEditorCommon from "~/components/common/RichTextEditorCommon";
import AuthConstants from "~/constants/authConstants";
import { AuthContext } from "~/contexts/AuthContext";
import * as UserService from "~/services/userServices";
import * as ThesisService from "~/services/thesisService";
import * as Doc2VecServices from "~/services/doc2vecService";
import { PaperClipOutlined } from "@ant-design/icons";
import { getFileNameFromUrl } from "~/common/util";

const RegisterThesisForm = (): JSX.Element => {
  const [thesisName, setThesisName] = useState(""); // State to store the thesis name input value
  const [documentList, setDocumentList] = useState<Doc2VecModel[]>([]); // State to store the list of documents

  const handleThesisNameChange = async (value: string) => {
    setThesisName(value);
    form.setFieldValue("topic", value);
    // Clear any existing timeout to prevent the API call from being made immediately
    // Create a new timeout to call the API after 400 milliseconds of inactivity
    // Call the API to fetch documents here
    let data: [] | Doc2VecModel[] = [];
    if (value) {
      data = await Doc2VecServices.searchDoc2vec(value);
    }
    setDocumentList(data);
  };

  const handleUploadFailed = () => {};
  const [studentSelectOptions, setStudentSelectOptions] = useState<UserModel[]>(
    []
  );
  const [teacherSelectOptions, setTeacherSelectOptions] = useState<UserModel[]>(
    []
  );
  const [editorHtml, setEditorHtml] = useState<string>("");
  const [attachments, setAttachments] = useState<string[]>([]);

  const { user } = useContext(AuthContext);
  const [form] = useForm();

  const { data: students, isLoading: isLoadingStudents } = useQuery(
    ["load-student-select"],
    () => UserService.getUserByRole(AuthConstants.AUTH_ROLES.STUDENT)
  );
  const { data: teachers, isLoading: isLoadingTeachers } = useQuery(
    ["load-teacher-select"],
    () => UserService.getUserByRole(AuthConstants.AUTH_ROLES.TEACHER)
  );

  const insertThesisMutation = useMutation(ThesisService.insert, {
    onSuccess: (data: ThesisModel | null) => {
      if (data) {
        message.success("Đăng ký thành công");
      } else {
        message.error("Đăng ký thất bại");
      }
    },
  });

  useEffect(() => {
    handleSetDataStudentSelect(students as UserModel[]);
  }, [students]);

  useEffect(() => {
    handleSetDataTeacherSelect(teachers as UserModel[]);
  }, [teachers]);

  useEffect(() => {
    form.setFieldValue("description", editorHtml);
  }, [editorHtml]);

  useEffect(() => {
    form.setFieldValue("outline", attachments);
  }, [attachments]);

  const handleSetDataStudentSelect = (data: UserModel[]) => {
    if (!data) return;
    let students = data.filter((std) => std.userId != user?.userId);
    setStudentSelectOptions(students);
  };

  const handleSetDataTeacherSelect = (data: UserModel[]) => {
    if (!data) return;
    let teachers = data.filter((teacher) => teacher.userId != user?.userId);
    setTeacherSelectOptions(teachers);
  };

  const handleUploadFailure = () => {};

  const handleUploadSuccess = (response: string) => {
    const updateAttachments = attachments.concat(response);
    console.log("updateAttachments", updateAttachments);

    setAttachments(updateAttachments);
  };

  const handleRemove = (file: UploadFile) => {
    const updateAttachment = attachments.filter(
      (attachment) => attachment !== file.response
    );
    setAttachments(updateAttachment);
  };

  const handlesetEditorHtml = (value: string) => {
    setEditorHtml(value);
    form.setFieldValue("description", value);
  };

  const handleFinish = () => {
    let studentIds = [
      user?.userId,
      ...studentSelectOptions.map((std) => {
        if (std.userId === form.getFieldValue("student2")) {
          return std.userId;
        }
      }),
    ];

    let teacherId = teacherSelectOptions.map((teacher) => {
      if (teacher.userId === form.getFieldValue("teacher")) {
        return teacher.userId;
      }
    })[0];

    form.validateFields().then(() => {
      let thesisId = v4();
      const thesis: ThesisModel = {
        id: thesisId,
        topic: form.getFieldValue("topic"),
        description: form.getFieldValue("description"),
        year: 2000,
        semester: 1,
        status: 1,
        students: studentIds.map((stdId) => {
          return {
            id: v4(),
            thesisId,
            userId: stdId,
            type: 1,
            status: stdId === user?.userId ? 1 : 0,
            isDeleted: false,
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
          } as ThesisUserModel;
        }),
        teacher: {
          id: v4(),
          thesisId,
          userId: teacherId,
          type: 2,
          status: 0,
          isDeleted: false,
          createdAt: new Date().getTime(),
          updatedAt: new Date().getTime(),
        } as ThesisUserModel,
        userCreated: user ?? undefined,
        outlineUrls: attachments,
        isDeleted: false,
        createdBy: user?.userId ?? undefined,
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
      };
      insertThesisMutation.mutate(thesis);
      form.resetFields();
    });
  };



  return (
    <Spin spinning={insertThesisMutation.isLoading}>
      <Form layout="vertical" onFinish={handleFinish} form={form}>
        <Form.Item label="Sinh viên 2" name="student2">
          <Select>
            {studentSelectOptions.map((std) => {
              return (
                <Select.Option key={std.userId}>{std.fname}</Select.Option>
              );
            })}
          </Select>
        </Form.Item>
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
          <Select>
            {teacherSelectOptions.map((teacher) => {
              return (
                <Select.Option key={teacher.userId}>
                  {teacher.fname}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="Tên đề tài"
          name="topic"
          rules={[
            {
              max: 255,
              required: true,
            },
          ]}
        >
          <Input
            type="text"
            value={thesisName}
            onChange={(e) => handleThesisNameChange(e.target.value)}
          />
        </Form.Item>
        {documentList.length > 0 &&
          documentList.map((data) => {
            return (
              <div className="border-2 border-slate-200 rounded-sm p-1 mb-1">
                <ReactQuillPreviewCommon content={data?.title as string} />
                {data?.url && (
                  <div className="border-t py-3">
                    <Typography.Text className="font-bold">
                      Danh sách file đính kèm
                    </Typography.Text>
                    <Space className="block">
                      <a href={data?.url}>
                        <PaperClipOutlined /> {getFileNameFromUrl(data?.url)}
                      </a>
                    </Space>
                  </div>
                )}
              </div>
            );
          })}
        <Form.Item
          label="File đề cương"
          name="outline"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DraggerCommon
            handleUploadSuccess={handleUploadSuccess}
            handleUploadFailure={handleUploadFailure}
            handleRemove={handleRemove}
          />
        </Form.Item>
        <Form.Item
          label="Mô tả"
          name="description"
          rules={[{ required: true }]}
        >
          <div style={{ height: "300px", marginBottom: "20px" }}>
            <RichTextEditorCommon
              editorHtml={editorHtml}
              setEditorHtml={setEditorHtml}
              style={{ height: 270 }}
            />
          </div>
        </Form.Item>
        <Form.Item name="buttons" className="mt-5">
          <Row justify={"end"}>
            <ButtonCommon
              htmlType="submit"
              color="blue"
              value="Đăng ký"
              loading={insertThesisMutation.isLoading}
            />
          </Row>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default RegisterThesisForm;
