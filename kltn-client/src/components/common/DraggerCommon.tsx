import { InboxOutlined } from "@ant-design/icons";
import { type UploadFile } from "antd";
import Dragger, { type DraggerProps } from "antd/es/upload/Dragger";
import { type SetStateAction } from "react";
import { uploadFileToFirebase } from "~/common/firebase";

type DraggerCommonProps = {
  handleUploadSuccess: (response: string) => void;
  handleUploadFailure: (response: string) => void;
  handleRemove?: (file: UploadFile) => void;
  fileList?: UploadFile[];
  setFileList?: React.Dispatch<SetStateAction<UploadFile[]>>;
};

const DraggerCommon = ({
  handleUploadSuccess,
  handleUploadFailure,
  handleRemove,
  fileList,
  setFileList,
  ...rest
}: DraggerCommonProps & DraggerProps): JSX.Element => {
  const commonUploadRequest = async (options: any): Promise<void> => {
    const { onSuccess, onError, file } = options;
    try {
      const downloadURL = await uploadFileToFirebase(file);
      onSuccess(downloadURL);
    } catch (error) {
      onError(error);
    }
  };

  const handleOnChange = ({ file }: any): void => {
    if (fileList != null) {
      if (file.status === "uploading") {
        const newFileList: UploadFile[] = fileList?.concat(file);
        if (setFileList != null) {
          setFileList(newFileList);
        }
      } else if (file.status === "removed") {
        const newFileList: UploadFile[] = fileList?.filter(
          (f) => f.uid !== file.uid
        );
        if (setFileList != null) {
          setFileList(newFileList);
        }
      } else {
        const files: UploadFile[] | undefined = fileList?.map((f) => {
          if (f.uid === file.uid) {
            return {
              ...file,
            };
          }
          return f;
        });
        if (files && setFileList != null) {
          setFileList(files);
        }
      }
    }
    if (file.status === "done") {
      handleUploadSuccess(file.response);
    } else if (file.status === "error") {
      handleUploadFailure(file.response);
    }
  };

  return (
    <Dragger
      {...rest}
      fileList={fileList}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      customRequest={commonUploadRequest}
      onChange={handleOnChange}
      onRemove={handleRemove}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
    </Dragger>
  );
};

export default DraggerCommon;
