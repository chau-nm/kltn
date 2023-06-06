import { Input, Button, message, Upload, Layout, Card } from "antd";
import type { UploadProps } from "antd";
import Meta from "antd/es/card/Meta";
import { useState } from "react";
// import FileViewer from "react-file-viewer";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import PageLayout from "~/components/common/PageLayout";

const props: UploadProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const NotificationPage = (props: any): JSX.Element => {
  const { showTitle } = props;
  const [isOpenFile, setIsOpenFile] = useState(false);
  return (
    <PageLayout pageTitle="Thông báo" showTitle={showTitle}>
      <div className="bg-white h-full flex justify-around items-center flex-col p-2 mt-2 ml-2">
        <div className="w-full">
          <div className="w-full">
            <div className="w-full font-bold font text-lg text-center">
              Đây là tiêu đề
            </div>
          </div>
          <div className="w-full">
            <div className="w-full font-bold font text-lg">Nội dung</div>
            <div className="w-full font text-lg mt-5 mb-5">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full font-bold font text-lg">File đính kèm</div>\
          {!isOpenFile && (
            <Card
              hoverable
              onClick={() => setIsOpenFile(true)}
              style={{ width: 240, maxHeight: 300, overflow: "hidden" }}
              cover={
                <img
                  alt="example"
                  src="https://doceye.vn/wp-content/uploads/2022/08/202004221922198608-e5c3bd235c81327d9ac3d5406e16ada4.jpg"
                />
              }
            >
              <Meta
                title="Đề tài Xây dựng hệ thống Khóa 2019"
                description="xây dựng hệ thống quản lý quá trình thực hiện luận văn tốt nghiệp"
              />
            </Card>
          )}
          {isOpenFile && (
            <>
              <iframe
                src="https://www.africau.edu/images/default/sample.pdf"
                width="100%"
                height="600px"
              ></iframe>
              <div className="w-full mt-5 flex justify-end">
                <Button
                  type="primary"
                  className="text-slate-600 border-slate-600"
                  onClick={() => setIsOpenFile(false)}
                >
                  Close file
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default NotificationPage;
