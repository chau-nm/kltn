import { Button, Input } from "antd";

import PageLayout from "~/components/common/PageLayout";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const AggregateRatingPage = () => {
  return (
    <PageLayout pageTitle="Đề cương" showTitle>
      <div className="bg-white h-full flex justify-around items-center p-2 mt-2 ml-2 mb-5">
        <div>
          <ArrowLeftOutlined className="cursor-pointer"></ArrowLeftOutlined>
        </div>
        <div className="border-solid rounded-sm border-slate-100 border-2 p-3 w-[90%]">
          <div className="w-full">
            <div className="w-full">
              <div className="w-full font-bold font text-lg text-center">
                Đây là tiêu đề
              </div>
            </div>
            <div className="w-full">
              <div className="w-full font-bold font text-lg">Nội dung</div>
              <div className="w-full font text-lg mt-5 mb-5">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full font-bold font text-lg mb-10">
              File đính kèm
            </div>
            {/* <FileViewer
                fileType={type}
                filePath={file}
                errorComponent={CustomErrorComponent}
                onError={this.onError}
              /> */}
          </div>
          <div className="w-full">
            <div className="w-full font-bold font text-lg mb-3">
              Đánh giá từ hội đồng
            </div>
            <div className="w-full font-bold font text-sm mb-3">
              Số lượng đánh giá 3/5
            </div>
            <div className="flex items-center justify-around">
              <div className="cursor-pointer">
                <ArrowLeftOutlined></ArrowLeftOutlined>
              </div>
              <div className="w-4/5 border-solid rounded-sm border-slate-50 border-2 px-5">
                <div className="font-bold mb-2">Nguyễn Văn A</div>
                <ul>
                  <li>
                    {" "}
                    Cần chỉnh sửa very popular during the Renaissance. The first
                    line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
                    from a line in section 1.10.32. The standard chunk of Lorem
                    Ipsum used since the 1500s is reproduced below for those
                    interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                    Bonorum et Malorum" by Cicero are also reproduced in their
                    exact original form, accompanied by English versions from
                    the 1914 translation by H.
                  </li>
                  <li>Cần chỉnh sửa B</li>
                  <li>
                    very popular during the Renaissance. The first line of Lorem
                    Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                    section 1.10.32. The standard chunk of Lorem Ipsum used
                    since the 1500s is reproduced below for those interested.
                    Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
                    Malorum" by Cicero are also reproduced in their exact
                    original form, accompanied by English versions from the 1914
                    translation by H.
                  </li>
                </ul>
              </div>
              <div className="cursor-pointer">
                <ArrowRightOutlined></ArrowRightOutlined>
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          <ArrowRightOutlined></ArrowRightOutlined>
        </div>
      </div>

      <div>
        <div className="w-full font-bold font text-lg mb-3">
          Tổng hợp đánh giá từ hội đồng
        </div>
        <div className="w-full border mb-3">
          <Editor
            wrapperClassName="wrapper-class"
            editorClassName="p-2 h-44"
            toolbarClassName="toolbar-class bg-slate-50"
            placeholder="Nhập nội dung đánh giá"
          />
        </div>
        <div className="w-full flex justify-end">
          <Button>Bước kế</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default AggregateRatingPage;
