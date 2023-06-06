import { Input, Button, message, Select, Col, Row, Divider } from "antd";
import { Checkbox, Table } from "antd";
import type { UploadProps } from "antd";
import { Form, Radio, DatePicker } from "antd";
import { useState } from "react";

const { TextArea } = Input;

import {
  PDFViewer,
  Document,
  Page,
  Text,
  StyleSheet,
  Font,
  View,
} from "@react-pdf/renderer";

import NotoSansVietnameseFont from "~/font/NotoSans-Light.ttf"; // Adjust the path as per your project structure
import RobotoBold from "~/font/Roboto-BoldItalic.ttf";
import PageLayout from "~/components/common/PageLayout";
// Register the font
Font.register({
  family: "Noto Sans Vietnamese",
  src: NotoSansVietnameseFont,
});

Font.register({
  family: "RobotoBold",
  src: RobotoBold,
});

interface MyDocumentProps {
  projectName: string;
  supervisor: string;
  numberOfPages: number;
  numberOfChapters: number;
  numberOfTables: number;
  numberOfCharts: number;
  numberOfIllustrations: number;
  numberOfImages: number;
  numberOfReferences: number;
  numberOfSoftware: number;
  layout: string;
  writingStyle: string;
  technicalTerms: string;
  advantages: string;
  resultsAndConclusion: string;
  prospects: string;
  shortcomings: string;
  protection: string;
  questions: string[];
  studentsData: Student[];
}

interface Student {
  STT: string;
  MSSV: string;
  fullName: string;
  mark: number;
}
const styles = StyleSheet.create({
  page: {
    fontFamily: "Noto Sans Vietnamese",
    flexDirection: "column",
    padding: 20,
  },
  section: {
    marginBottom: 10,
    breakInside: "avoid",
  },
  header: {
    fontFamily: "RobotoBold",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  headerItem: {
    fontFamily: "RobotoBold",
    fontSize: "11px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headerItemText: {
    fontFamily: "RobotoBold",
  },
  headerItemDate: {
    fontFamily: "RobotoBold",
    marginTop: 5,
    fontSize: 8,
    paddingLeft: 110,
  },
  heading: {
    fontFamily: "RobotoBold",
    marginBottom: 5,
    fontSize: 16,
  },
  label: {
    fontFamily: "RobotoBold",
    fontSize: 12,
  },
  subLabel: {
    fontFamily: "RobotoBold",
    fontSize: 10,
    fontWeight: `bold`,
  },
  value: {
    width: "100%",
    fontSize: 10,
    marginLeft: 30,
  },
  table: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    breakInside: "avoid",
    keepWithNext: true,
  },
  tableRow: {
    flexDirection: "row",
    breakInside: "avoid",
    keepWithNext: true,
  },
  tableCell: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
    breakInside: "avoid",
    keepWithNext: true,
  },
});

const MyDocument: React.FC<MyDocumentProps> = ({
  projectName,
  supervisor,
  numberOfPages,
  numberOfChapters,
  numberOfTables,
  numberOfCharts,
  numberOfIllustrations,
  numberOfImages,
  numberOfReferences,
  numberOfSoftware,
  layout,
  writingStyle,
  technicalTerms,
  advantages,
  resultsAndConclusion,
  prospects,
  shortcomings,
  protection,
  questions,
  studentsData,
}) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <View style={styles.header}>
          <View style={styles.headerItem}>
            <Text style={styles.headerItemText}>
              TRƯỜNG ĐẠI HỌC NÔNG LÂM TP. HCM{" "}
            </Text>
            <Text style={styles.headerItemText}>KHOA CÔNG NGHỆ THÔNG TIN</Text>
          </View>
          <View style={styles.headerItem}>
            <Text style={styles.headerItemText}>
              CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
            </Text>
            <Text style={styles.headerItemText}>
              Độc Lập – Tự Do – Hạnh Phúc
            </Text>
          </View>
        </View>

        <View style={styles.header}>
          <View style={styles.headerItem}></View>
          <View style={styles.headerItem}>
            <Text style={styles.headerItemDate}>
              TP. HCM, ngày……tháng……năm……
            </Text>
          </View>
        </View>
        <View style={styles.header}>
          <Text style={{ ...styles.heading, marginTop: 15 }}>
            PHIẾU ĐÁNH GIÁ BẢO VỆ LUẬN VĂN TỐT NGHIỆP
          </Text>
        </View>
        <View style={styles.header}>
          <Text style={{ ...styles.heading, fontSize: 10 }}>
            (Dùng cho giảng viên hướng dẫn / giảng viên phản biện)
          </Text>
        </View>

        <Text style={{ ...styles.label, marginTop: 10 }}>1. Tên đề tài:</Text>
        <Text style={styles.value}>{projectName}</Text>

        <Text style={{ ...styles.label, marginTop: 20 }}>
          2. Giảng viên hướng dẫn:
        </Text>
        <Text style={styles.value}>{supervisor}</Text>

        <Text style={{ ...styles.label, marginTop: 20 }}>
          3. Hình Thức luận văn:
        </Text>
        <view
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            marginLeft: 30,
          }}
        >
          <Text style={styles.subLabel}>Số trang:</Text>
          <Text style={{ ...styles.value, textAlign: "center" }}>
            {numberOfPages}
          </Text>

          <Text style={styles.subLabel}>Số chương:</Text>
          <Text style={{ ...styles.value, textAlign: "center" }}>
            {numberOfChapters}
          </Text>

          <Text style={styles.subLabel}>Số bảng:</Text>
          <Text style={{ ...styles.value, textAlign: "center" }}>
            {numberOfTables}
          </Text>

          <Text style={styles.subLabel}>Số biểu đồ:</Text>
          <Text style={{ ...styles.value, textAlign: "center" }}>
            {numberOfCharts}
          </Text>

          <Text style={styles.subLabel}>Số bảng vẻ:</Text>
          <Text style={{ ...styles.value, textAlign: "center" }}>
            {numberOfIllustrations}
          </Text>
        </view>

        <view
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            marginLeft: 30,
          }}
        >
          <Text style={styles.subLabel}>Số hình ảnh:</Text>
          <Text style={{ ...styles.value, textAlign: "center" }}>
            {numberOfImages}
          </Text>

          <Text style={styles.subLabel}>Số tài liệu tham khảo:</Text>
          <Text style={{ ...styles.value, textAlign: "center" }}>
            {numberOfReferences}
          </Text>

          <Text style={styles.subLabel}>Số phần mềm tính toán:</Text>
          <Text style={{ ...styles.value, textAlign: "center" }}>
            {numberOfSoftware}
          </Text>
        </view>
      </View>

      <Text style={{ ...styles.subLabel, marginLeft: 30 }}>Bố cục:</Text>
      <Text style={styles.value}>{layout}</Text>

      <Text style={{ ...styles.subLabel, marginLeft: 30, marginTop: 10 }}>
        Hành văn:
      </Text>
      <Text style={styles.value}>{writingStyle}</Text>

      <Text style={{ ...styles.subLabel, marginLeft: 30, marginTop: 10 }}>
        Thuật ngữ chuyên môn:
      </Text>
      <Text style={styles.value}>{technicalTerms}</Text>

      <View style={{ ...styles.section, marginTop: 20 }}>
        <Text style={styles.label}>4. Những ưu điểm chính của luận văn:</Text>

        <Text style={{ ...styles.subLabel, marginLeft: 30, marginTop: 5 }}>
          Nội dung:
        </Text>
        <Text style={styles.value}>{advantages}</Text>

        <Text style={{ ...styles.subLabel, marginLeft: 30, marginTop: 20 }}>
          Kết quả, kết luận đề tài và triển vọng đề tài :
        </Text>
        <Text style={styles.value}>{resultsAndConclusion}</Text>
        <Text style={styles.value}>{prospects}</Text>

        <Text style={{ ...styles.label, marginTop: 20 }}>
          5. Những phần thiếu sót chính của luận văn:
        </Text>
        <Text style={styles.value}>{shortcomings}</Text>
        <view
          style={{
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Text style={styles.label}>6. Đề nghị:</Text>
          <Text style={styles.value}>{protection}</Text>
        </view>
        <Text style={{ ...styles.label, marginTop: 20 }}>
          7. Câu hỏi sinh viên phải trả lời trước hội đồng (Cán bộ phản biện ra
          ít nhất 02 câu):
        </Text>

        {questions.map((values, index) => (
          <>
            <Text style={{ ...styles.subLabel, marginLeft: 30, marginTop: 5 }}>
              Câu {index + 1}:
            </Text>
            <Text style={styles.value}>{values}</Text>
          </>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Danh sách sinh viên</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.label}>STT</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.label}>MSSV</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.label}>Họ và tên SV</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.label}>Điểm</Text>
            </View>
          </View>
          {studentsData.map((student) => (
            <View key={student.MSSV} style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.value}>{student.STT}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.value}>{student.MSSV}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.value}>{student.fullName}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.value}>{student.mark}</Text>
              </View>
            </View>
          ))}
        </View>
        <view
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            marginLeft: 30,
          }}
        >
          <View></View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ ...styles.label, marginTop: 20 }}>
              Giảng viên chấm điểm
            </Text>
            <Text style={styles.subLabel}>(Ký & ghi rõ họ tên)</Text>
          </View>
        </view>
      </View>
    </Page>
  </Document>
);

const CounterArgumentFrom = (): JSX.Element => {
  const [form] = Form.useForm();
  const [numQuestion, setNumQuesttion] = useState<number>(2);
  const [studentsData, setStudentsData] = useState<Student[]>([
    {
      STT: "1",
      MSSV: "123456",
      fullName: "John Doe",
      mark: 0,
    },
    {
      STT: "2",
      MSSV: "789012",
      fullName: "Jane Smith",
      mark: 0,
    },
    // Add more student objects as needed
  ]);
  const [pdfContent, setPdfContent] = useState<JSX.Element | null>(null);
  const handleStudentMarkChange = (index: number, value: number) => {
    const updatedStudentsData = [...studentsData];
    updatedStudentsData[index].mark = value;
    setStudentsData(updatedStudentsData);
  };

  const renderQuestion = () => {
    const components: JSX.Element[] = [];
    for (let index = 1; index <= numQuestion; index++) {
      components.push(
        <Form.Item name={`question${index}`}>
          <TextArea rows={1} placeholder={`Câu ${index}`} />
        </Form.Item>
      );
    }
    return components;
  };
  const handleAddQuestion = () => {
    setNumQuesttion(numQuestion + 1);
  };
  const handleCreatePDF = () => {
    const values = form.getFieldsValue();
    const questions: string[] = [];
    for (let index = 1; index <= numQuestion; index++) {
      questions.push(values[`question${index}`]);
    }
    console.log(values);
    const result: MyDocumentProps = { ...values, studentsData, questions };
    const pdf = (
      <PDFViewer width="100%" height={600}>
        <MyDocument {...result} />
      </PDFViewer>
    );
    setPdfContent(pdf);
  };

  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <PageLayout pageTitle="Form phản biện" showTitle>
      <div className="bg-white h-full flex justify-around items-center flex-col p-2 mt-2 ml-2">
        <div className="w-full p-5">
          <Form
            form={form}
            labelCol={{ span: 5 }}
            layout="horizontal"
            colon={false}
            labelAlign={"left"}
            labelWrap={true}
            onFinish={onFinish}
          >
            <Form.Item
              label="Tên đề tài"
              className="font-bold"
              name="projectName"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Giảng viên hướng dẫn"
              className="font-bold"
              name="supervisor"
            >
              <Select showSearch>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Divider>Hình thức luận văn</Divider>
            <div>
              <Row>
                <Col span={8}>
                  <Form.Item
                    label="Số trang"
                    className="font-bold"
                    labelCol={{ span: 15 }}
                    name="numberOfPages"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Số chương"
                    className="font-bold"
                    labelCol={{ span: 15 }}
                    labelAlign="right"
                    name="numberOfChapters"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Số bảng"
                    className="font-bold"
                    labelCol={{ span: 15 }}
                    labelAlign="right"
                    name="numberOfTables"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <Form.Item
                    label="Số biểu đồ"
                    className="font-bold"
                    labelCol={{ span: 15 }}
                    name="numberOfCharts"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Số bảng vẻ"
                    className="font-bold"
                    labelCol={{ span: 15 }}
                    labelAlign="right"
                    name="numberOfIllustrations"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Số hình ảnh"
                    className="font-bold"
                    labelCol={{ span: 15 }}
                    labelAlign="right"
                    name="numberOfImages"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <Form.Item
                    label="Số tài liệu tham khảo"
                    className="font-bold"
                    labelCol={{ span: 15 }}
                    name="numberOfReferences"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Số phần mềm tính toán"
                    className="font-bold"
                    labelCol={{ span: 15 }}
                    labelAlign="right"
                    name="numberOfSoftware"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <Form.Item label="Bố cục" className="font-bold" name="layout">
              <Input />
            </Form.Item>
            <Form.Item
              label="Hành văn"
              className="font-bold"
              name="writingStyle"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Thuật ngữ chuyên môn"
              className="font-bold"
              name="technicalTerms"
            >
              <Input />
            </Form.Item>
            <Divider>Nội dung</Divider>
            <Form.Item
              label="Những ưu điểm chính của luận văn"
              className="font-bold"
              name="advantages"
            >
              <TextArea rows={8} />
            </Form.Item>
            <Form.Item
              label="Kết quả, kết luận về đề tài và triển vọng của đề tài"
              className="font-bold"
              name="resultsAndConclusion"
              // name="prospects"
            >
              <TextArea rows={8} />
            </Form.Item>
            <Form.Item
              label="Những phần thiếu sót chính của luận văn"
              className="font-bold"
              name="shortcomings"
            >
              <TextArea rows={8} />
            </Form.Item>
            <Form.Item label="Đề nghị" className="font-bold" name="protection">
              <Radio.Group>
                <Radio value="Được bảo vệ">Được bảo vệ</Radio>
                <Radio value="Bổ sung thêm để bảo vệ">
                  Bổ sung thêm để bảo vệ
                </Radio>
                <Radio value="Không được bảo vệ">Không được bảo vệ</Radio>
                <Radio value=" Bảo vệ đợt khác"> Bảo vệ đợt khác</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Câu hỏi sinh viên phải trả lời trước hội đồng (Cán bộ phản biện ra ít nhất 02 câu)"
              className="font-bold"
            >
              {renderQuestion()}
              <Button className="mt-1 mb-4" onClick={handleAddQuestion}>
                Thêm câu hỏi
              </Button>
            </Form.Item>
            <div className="table-mark h-40 flex  flex-col justify-around">
              <Form.Item>
                <Table dataSource={studentsData} pagination={false}>
                  <Table.Column
                    title="STT"
                    dataIndex="STT"
                    key="STT"
                    // render={(text) => <Text key={text}>{text}</Text>}
                  />
                  <Table.Column
                    title="MSSV"
                    dataIndex="MSSV"
                    key="MSSV"
                    // render={() => <Input disabled />}
                  />
                  <Table.Column
                    title={<Text key="fullName">Họ và tên SV</Text>}
                    dataIndex="fullName"
                    key="fullName"
                    // render={() => <Input disabled />}
                  />
                  <Table.Column
                    title="Điểm"
                    dataIndex="mark"
                    key="mark"
                    render={(text, record, index) => (
                      <Input
                        key={index}
                        value={text}
                        type="number"
                        onChange={(e) =>
                          handleStudentMarkChange(index, Number(e.target.value))
                        }
                      />
                    )}
                  />
                </Table>
              </Form.Item>
            </div>
            <div style={{ display: "flex" }}>
              <Form.Item>
                <Button
                  className="mt-5"
                  style={{ color: "black" }}
                  type="default"
                  // onClick={handleCreatePDF}
                  htmlType="submit"
                >
                  Xác Nhận
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  className="mt-5 ml-5"
                  style={{ color: "black" }}
                  type="default"
                  onClick={handleCreatePDF}
                >
                  Tạo file pdf
                </Button>
              </Form.Item>
            </div>
          </Form>
          {pdfContent}
        </div>
      </div>
    </PageLayout>
  );
};
export default CounterArgumentFrom;
