import { InboxOutlined } from "@ant-design/icons";
import { UploadFile } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { SetStateAction } from "react";
import { uploadFileToFirebase } from "~/common/firebase";

type DraggerCommonProps = {
    handleUploadSuccess: (response : string) => void;
    handleUploadFailure: (response : string) => void;
    handleRemove?: (file: UploadFile) => void;
    fileList? : UploadFile[],
    setFileList?: React.Dispatch<SetStateAction<UploadFile[]>>;
}

const DraggerCommon = ({
    handleUploadSuccess,
    handleUploadFailure,
    handleRemove,
    fileList,
    setFileList
} : DraggerCommonProps): JSX.Element => {

  const commonUploadRequest = async (options: any) => {
    const { onSuccess, onError, file } = options;
    console.log("a")
    try{
        const downloadURL = await uploadFileToFirebase(file);
        onSuccess(downloadURL);
    }catch(error){
        onError(error);
    }
  };

  const handleOnChange = ({file} : any) => {
    if (fileList) {
      if (file.status === "uploading") {
        let newFileList : UploadFile[] = fileList?.concat(file) as UploadFile[];
        if (setFileList){
          setFileList(newFileList);
        }
      } else if(file.status === "removed") {
        let newFileList : UploadFile[] = fileList?.filter((f) => f.uid !== file.uid) as UploadFile[];
        if (setFileList){
          setFileList(newFileList);
        }
      } else {
        const files : UploadFile[] | undefined = fileList?.map((f) => {
          if (f.uid === file.uid) {
            return {
              ...file
            };
          }
          return f;
        });
        if (files && setFileList) {
          setFileList(files);
        }
      }
    }
    
    if (file.status === 'done') {
        handleUploadSuccess(file.response);
      } else if (file.status === 'error') {
        handleUploadFailure(file.response);
      }
  }

  return (
    <Dragger fileList={fileList} customRequest={commonUploadRequest} onChange={handleOnChange} onRemove={handleRemove}>
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
