import { InboxOutlined } from "@ant-design/icons";
import { UploadFile } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { uploadFileToFirebase } from "~/common/firebase";

type DraggerCommonProps = {
    handleUploadSuccess: (response : string) => void;
    handleUploadFailure: (response : string) => void;
    handleRemove?: (file: UploadFile) => void;
}

const DraggerCommon = ({
    handleUploadSuccess,
    handleUploadFailure,
    handleRemove
} : DraggerCommonProps): JSX.Element => {

  const CommonUploadRequest = async (options: any) => {
    const { onSuccess, onError, file } = options;

    try{
        const downloadURL = await uploadFileToFirebase(file);
        onSuccess(downloadURL);
    }catch(error){
        onError(error);
    }
  };

  const handleOnChange = ({file} : any) => {
    if (file.status === 'done') {
        handleUploadSuccess(file.response);
      } else if (file.status === 'error') {
        handleUploadFailure(file.response);
      }
  }

  return (
    <Dragger CommonRequest={CommonUploadRequest} onChange={handleOnChange} onRemove={handleRemove}>
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
