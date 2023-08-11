import { InboxOutlined } from "@ant-design/icons";
import { UploadFile } from "antd";
import Dragger, { DraggerProps } from "antd/es/upload/Dragger";
import { useState } from "react";
import { uploadFileToFirebase } from "~/common/firebase";

type DraggerSingleCommon = {
  handleSuccess?: (file: UploadFile) => void;
  handleFailure?: (file: UploadFile) => void;
  handleRemove?: () => void;
};

const DraggerSingleCommon = ({
  handleSuccess,
  handleFailure,
  handleRemove,
}: DraggerSingleCommon): JSX.Element => {
  const [file, setFile] = useState<UploadFile>();

  const commonUploadRequest = async (options: any) => {
    const { onSuccess, onError, file } = options;
    try {
      const downloadURL = await uploadFileToFirebase(file);
      onSuccess(downloadURL);
    } catch (error) {
      onError(error);
    }
  };

  const remove = () => {
    setFile(undefined);
    handleRemove && handleRemove();
  };

  const draggerConfig: DraggerProps = {
    onRemove: remove,
    onChange: ({ file }: { file: UploadFile }) => {
      setFile(file);
      if (file.status === "done") {
        handleSuccess && handleSuccess(file);
      } else if (file.status === "error") {
        handleFailure && handleFailure(file.response);
      }
    },
  };

  return (
    <Dragger
      fileList={file ? [file] : []}
      customRequest={commonUploadRequest}
      {...draggerConfig}
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

export default DraggerSingleCommon;
