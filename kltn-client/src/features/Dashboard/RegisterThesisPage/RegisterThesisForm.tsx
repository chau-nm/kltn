import { PaperClipOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Row,
  Select,
  Space,
  Spin,
  Typography,
  message,
  type UploadFile,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { v4 } from "uuid";
import { getFileNameFromUrl } from "~/common/util";
import ButtonCommon from "~/components/common/ButtonCommon";
import DraggerSingleCommon from "~/components/common/DraggerSingleCommon";
import ReactQuillPreviewCommon from "~/components/common/ReactQuillPreviewCommon";
import RichTextEditorCommon from "~/components/common/RichTextEditorCommon";
import AuthConstants from "~/constants/authConstants";
import { AuthContext } from "~/contexts/AuthContext";
import * as Doc2VecServices from "~/services/doc2vecService";
import * as ThesisService from "~/services/thesisService";
import * as UserService from "~/services/userServices";

const RegisterThesisForm = (): JSX.Element => {
  const [thesisName, setThesisName] = useState(""); // State to store the thesis name input value
  const [documentList, setDocumentList] = useState<Doc2VecModel[]>([]); // State to store the list of documents

  const handleThesisNameChange = async (value: string): Promise<void> => {
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

  // const handleUploadFailed = (): void => {};
  const [studentSelectOptions, setStudentSelectOptions] = useState<UserModel[]>(
    []
  );
  const [teacherSelectOptions, setTeacherSelectOptions] = useState<UserModel[]>(
    []
  );
  const [editorHtml, setEditorHtml] = useState<string | undefined>("");
  const [outlineDocument, setOutlineDocument] = useState<string>();
  const [file, setFile] = useState<UploadFile>();

  const { user } = useContext(AuthContext);
  const [form] = useForm();

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

  const insertThesisMutation = useMutation(ThesisService.insert, {
    onSuccess: (data: ThesisModel | null) => {
      if (data != null) {
        void message.success("Đăng ký thành công");
        location.reload();
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
    form.setFieldValue("outline", outlineDocument);
  }, [outlineDocument]);

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

  const handleUploadFailure = (): void => {};

  const handleUploadSuccess = (file: UploadFile): void => {
    setOutlineDocument(file.response);
  };

  // const handleRemove = (file: UploadFile) => {
  //   setOutlineDocument(undefined);
  // };

  // const handleSetEditorHtml = (value: string) => {
  //   setEditorHtml(value);
  //   form.setFieldValue("description", value);
  // };

  const handleFinish = (): void => {
    const studentIds = [
      user?.userId,
      ...studentSelectOptions
        .map((std) => {
          if (std.userId === form.getFieldValue("student2")) {
            return std.userId;
          }
          return undefined;
        })
        .filter((std) => std),
    ];

    const teacherId = teacherSelectOptions
      .map((teacher) => {
        if (teacher.userId === form.getFieldValue("teacher")) {
          return teacher.userId;
        }
        return undefined;
      })
      .filter((std) => std)[0];

    void form.validateFields().then(() => {
      const thesisId = v4();
      const thesis: ThesisModel = {
        id: thesisId,
        topic: form.getFieldValue("topic"),
        description: form.getFieldValue("description"),
        year: new Date().getFullYear(),
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
          } satisfies ThesisUserModel;
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
        } satisfies ThesisUserModel,
        userCreated: user ?? undefined,
        outlineUrl: outlineDocument,
        isDeleted: false,
        createdBy: user?.userId ?? undefined,
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
      };
      insertThesisMutation.mutate(thesis);
      form.resetFields();
    });
  };

  const filterOptions = (input: string, option: any): boolean => {
    return (option?.label?.toString().toLowerCase() ?? "").includes(
      input.toLowerCase()
    );
  };

  return (
    <Spin spinning={insertThesisMutation.isLoading}>
      <Form layout="vertical" onFinish={handleFinish} form={form}>
        <Form.Item label="Sinh viên cùng tham gia" name="student2">
          <Select
            placeholder="Chọn sinh viên tham gia luận văn cùng bạn"
            showSearch
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
            placeholder="Chọn giảng viên hướng dẫn"
            showSearch
            filterOption={filterOptions}
            options={[
              ...teacherSelectOptions.map((std) => {
                return {
                  value: std.userId,
                  label: `${std.fname ?? ""} - ${std.username ?? ""}`,
                };
              }),
            ]}
          />
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
            placeholder="Nhập tên đề tài"
            onChange={async (e) => {
              await handleThesisNameChange(e.target.value);
            }}
          />
        </Form.Item>
        {documentList.length > 0 &&
          documentList.map((data, index) => {
            return (
              <div
                key={index}
                className="border-2 border-slate-200 rounded-sm p-1 mb-1"
              >
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
          <DraggerSingleCommon
            handleSuccess={handleUploadSuccess}
            handleFailure={handleUploadFailure}
            file={file}
            setFile={setFile}
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
              placeholder="Nhập mô tả"
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
