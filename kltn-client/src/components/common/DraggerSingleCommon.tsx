import { InboxOutlined } from "@ant-design/icons";
import { type UploadFile } from "antd";
import Dragger, { type DraggerProps } from "antd/es/upload/Dragger";
import { type SetStateAction } from "react";
import { uploadFileToFirebase } from "~/common/firebase";

type DraggerSingleCommonProps = {
  handleSuccess?: (file: UploadFile) => void;
  handleFailure?: (file: UploadFile) => void;
  handleRemove?: () => void;
  file: UploadFile | undefined;
  setFile: React.Dispatch<SetStateAction<UploadFile | undefined>>;
};

const DraggerSingleCommon = ({
  handleSuccess,
  handleFailure,
  handleRemove,
  file,
  setFile,
}: DraggerSingleCommonProps): JSX.Element => {
  const commonUploadRequest = async (options: any): Promise<void> => {
    const { onSuccess, onError, file } = options;
    try {
      const downloadURL = await uploadFileToFirebase(file);
      onSuccess(downloadURL);
    } catch (error) {
      onError(error);
    }
  };

  const remove = (): void => {
    setFile(undefined);
    handleRemove?.();
  };

  const draggerConfig: DraggerProps = {
    onRemove: remove,
    onChange: ({ file }: { file: UploadFile }) => {
      if (file.status === "removed") {
        setFile(undefined);
      } else {
        setFile(file);
      }
      if (file.status === "done") {
        handleSuccess?.(file);
      } else if (file.status === "error") {
        handleFailure?.(file.response);
      }
    },
  };

  return (
    <Dragger
      fileList={file != null ? [file] : []}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
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
