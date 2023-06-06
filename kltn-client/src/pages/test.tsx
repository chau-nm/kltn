import React, { useState } from "react";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  StyleSheet,
  Font,
  View,
} from "@react-pdf/renderer";
import { Form, Input, Button, Checkbox, Radio, Table } from "antd";

import NotoSansVietnameseFont from "~/font/NotoSans-Light.ttf"; // Adjust the path as per your project structure

// Register the font
Font.register({
  family: "Noto Sans Vietnamese",
  src: NotoSansVietnameseFont,
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
  heading: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
  },
  value: {
    fontSize: 12,
    marginBottom: 5,
  },
  table: {
    display: "flex",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    breakInside: "avoid",
  },
  tableRow: {
    flexDirection: "row",
    breakInside: "avoid",
  },
  tableCell: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
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
  studentsData,
}) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Thông tin đề tài</Text>

        <Text style={styles.label}>Tên đề tài:</Text>
        <Text style={styles.value}>{projectName}</Text>

        <Text style={styles.label}>Giảng viên hướng dẫn:</Text>
        <Text style={styles.value}>{supervisor}</Text>

        <Text style={styles.label}>Số trang:</Text>
        <Text style={styles.value}>{numberOfPages}</Text>

        <Text style={styles.label}>Số chương:</Text>
        <Text style={styles.value}>{numberOfChapters}</Text>

        <Text style={styles.label}>Số bảng:</Text>
        <Text style={styles.value}>{numberOfTables}</Text>

        <Text style={styles.label}>Số biểu đồ:</Text>
        <Text style={styles.value}>{numberOfCharts}</Text>

        <Text style={styles.label}>Số bảng vẻ:</Text>
        <Text style={styles.value}>{numberOfIllustrations}</Text>

        <Text style={styles.label}>Số hình ảnh:</Text>
        <Text style={styles.value}>{numberOfImages}</Text>

        <Text style={styles.label}>Số tài liệu tham khảo:</Text>
        <Text style={styles.value}>{numberOfReferences}</Text>

        <Text style={styles.label}>Số phần mềm tính toán:</Text>
        <Text style={styles.value}>{numberOfSoftware}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Đánh giá luận văn</Text>

        <Text style={styles.label}>Bố cục:</Text>
        <Text style={styles.value}>{layout}</Text>

        <Text style={styles.label}>Hành văn:</Text>
        <Text style={styles.value}>{writingStyle}</Text>

        <Text style={styles.label}>Thuật ngữ chuyên môn:</Text>
        <Text style={styles.value}>{technicalTerms}</Text>

        <Text style={styles.label}>Những ưu điểm chính của luận văn:</Text>
        <Text style={styles.value}>{advantages}</Text>

        <Text style={styles.label}>Kết quả, kết luận về đề tài:</Text>
        <Text style={styles.value}>{resultsAndConclusion}</Text>

        <Text style={styles.label}>Triển vọng của đề tài:</Text>
        <Text style={styles.value}>{prospects}</Text>

        <Text style={styles.label}>
          Những phần thiếu sót chính của luận văn:
        </Text>
        <Text style={styles.value}>{shortcomings}</Text>

        <Text style={styles.label}>Đề nghị:</Text>
        <Text style={styles.value}>{protection}</Text>
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
      </View>
    </Page>
  </Document>
);

const App: React.FC = () => {
  const [form] = Form.useForm();
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

  const handleCreatePDF = () => {
    const values = form.getFieldsValue();
    const result: MyDocumentProps = { ...values, studentsData };
    const pdf = (
      <PDFViewer width="100%" height={600}>
        <MyDocument {...result} />
      </PDFViewer>
    );
    setPdfContent(pdf);
  };

  return (
    <div>
      <Form form={form} layout="vertical">
        <Form.Item label="Tên đề tài" name="projectName">
          <Input />
        </Form.Item>
        <Form.Item label="Giảng viên hướng dẫn" name="supervisor">
          <Input />
        </Form.Item>
        <Form.Item label="Số trang" name="numberOfPages">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Số chương" name="numberOfChapters">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Số bảng" name="numberOfTables">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Số biểu đồ" name="numberOfCharts">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Số bảng vẻ" name="numberOfIllustrations">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Số hình ảnh" name="numberOfImages">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Số tài liệu tham khảo" name="numberOfReferences">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Số phần mềm tính toán" name="numberOfSoftware">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Bố cục" name="layout">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Hành văn" name="writingStyle">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Thuật ngữ chuyên môn" name="technicalTerms">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Những ưu điểm chính của luận văn" name="advantages">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Kết quả, kết luận về đề tài"
          name="resultsAndConclusion"
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Triển vọng của đề tài" name="prospects">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Những phần thiếu sót chính của luận văn"
          name="shortcomings"
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Bảo vệ" name="protection">
          <Radio.Group>
            <Radio value="Được bảo vệ">Được bảo vệ</Radio>
            <Radio value="Bổ sung thêm để bảo vệ">Bổ sung thêm để bảo vệ</Radio>
            <Radio value="Không được bảo vệ">Không được bảo vệ</Radio>
            <Radio value="Bảo vệ đợt khác">Bảo vệ đợt khác</Radio>
          </Radio.Group>
        </Form.Item>
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
                  onChange={(e) =>
                    handleStudentMarkChange(index, Number(e.target.value))
                  }
                />
              )}
            />
          </Table>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleCreatePDF}>
            Generate PDF
          </Button>
        </Form.Item>
      </Form>
      {pdfContent}
    </div>
  );
};

export default App;
