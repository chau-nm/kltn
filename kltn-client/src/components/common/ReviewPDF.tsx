import NotoSansVietnameseFont from "~/font/NotoSans-Light.ttf"; // Adjust the path as per your project structure
import RobotoBold from "~/font/Roboto-BoldItalic.ttf";

import {
  PDFViewer,
  Document,
  Page,
  Text,
  StyleSheet,
  Font,
  View,
} from "@react-pdf/renderer";
import ModalCommon from "./ModalCommon";
import ButtonCommon from "./ButtonCommon";
import { useContext } from "react";
import { ThesisConsoleContext } from "~/contexts/ThesisConsoleContext";

Font.register({
  family: "Noto Sans Vietnamese",
  src: NotoSansVietnameseFont,
});

Font.register({
  family: "RobotoBold",
  src: RobotoBold,
});

const styles = StyleSheet.create({
  page: {
    width: "100%",
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

export const PDFReviewPreview: React.FC = () => {
  const { thesis, isOpenPreviewReviewPDF, setOpenPreviewReviewPDF } =
    useContext(ThesisConsoleContext);

  const values: PDFReviewProps = {
    projectName: thesis?.topic ?? "",
    supervisor: (thesis?.teachers && thesis?.teachers[0]?.fname) ?? "",
    numberOfPages: thesis?.reviewers && thesis?.reviewers[0]?.pageNumber,
    numberOfChapters: thesis?.reviewers && thesis?.reviewers[0]?.chapterNumber,
    numberOfTables: thesis?.reviewers && thesis?.reviewers[0]?.tableNumber,
    numberOfCharts: thesis?.reviewers && thesis?.reviewers[0]?.chartNumber,
    numberOfIllustrations:
      thesis?.reviewers && thesis?.reviewers[0]?.drawingBoardNumber,
    numberOfImages: thesis?.reviewers && thesis?.reviewers[0]?.imageNumber,
    numberOfReferences:
      thesis?.reviewers && thesis?.reviewers[0]?.documentNumber,
    numberOfSoftware:
      thesis?.reviewers && thesis?.reviewers[0]?.calculationSoftwareNumber,
    layout: thesis?.reviewers && thesis?.reviewers[0]?.layout,
    writingStyle: thesis?.reviewers && thesis?.reviewers[0]?.writing,
    technicalTerms: thesis?.reviewers && thesis?.reviewers[0]?.technicalTerms,
    advantages: thesis?.reviewers && thesis?.reviewers[0]?.advantage,
    resultsAndConclusion: undefined,
    prospects: thesis?.reviewers && thesis?.reviewers[0]?.conclude,
    shortcomings: thesis?.reviewers && thesis?.reviewers[0]?.limitation,
    protection: thesis?.reviewers && thesis?.reviewers[0]?.suggestion,
    questions: [],
    studentsData: [],
  };
  const questions: string[] = [];
  // for (let index = 1; index <= numQuestion; index++) {
  //   questions.push(values[`question${index}`]);
  // }
  const studentsData: StudentPDFReview[] =
    (thesis?.reviewers &&
      thesis?.reviewers[0].reviewerScores?.map((std, index) => {
        return {
          STT: index.toString(),
          MSSV: std?.student?.username ?? "", // Provide a default empty string
          fullName: std?.student?.fname ?? "", // Provide a default empty string
          mark: std?.score ?? undefined, // Provide a default value or undefined
        };
      })) ??
    []; // Provide a default empty array

  // const result: PDFReviewProps = { ...values, studentsData, questions };

  return (
    <ModalCommon
      title={"Preview PDF"}
      open={isOpenPreviewReviewPDF}
      // onCancel={() => setOpenPreviewReviewPDF(false)}
      footer={[
        <ButtonCommon
          key={2}
          value="Đóng"
          onClick={() => {
            setOpenPreviewReviewPDF(false);
          }}
        />,
      ]}
    >
      <PDFViewer className="min-w-[1300px]" height={600}>
        <Document>
          <Page style={styles.page}>
            <View style={styles.section}>
              <View style={styles.header}>
                <View style={styles.headerItem}>
                  <Text style={styles.headerItemText}>
                    TRƯỜNG ĐẠI HỌC NÔNG LÂM TP. HCM{" "}
                  </Text>
                  <Text style={styles.headerItemText}>
                    KHOA CÔNG NGHỆ THÔNG TIN
                  </Text>
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

              <Text style={{ ...styles.label, marginTop: 10 }}>
                1. Tên đề tài:
              </Text>
              <Text style={styles.value}>{values.projectName}</Text>

              <Text style={{ ...styles.label, marginTop: 20 }}>
                2. Giảng viên hướng dẫn:
              </Text>
              <Text style={styles.value}>{values.supervisor}</Text>

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
                  {values.numberOfPages}
                </Text>

                <Text style={styles.subLabel}>Số chương:</Text>
                <Text style={{ ...styles.value, textAlign: "center" }}>
                  {values.numberOfChapters}
                </Text>

                <Text style={styles.subLabel}>Số bảng:</Text>
                <Text style={{ ...styles.value, textAlign: "center" }}>
                  {values.numberOfTables}
                </Text>

                <Text style={styles.subLabel}>Số biểu đồ:</Text>
                <Text style={{ ...styles.value, textAlign: "center" }}>
                  {values.numberOfCharts}
                </Text>

                <Text style={styles.subLabel}>Số bảng vẻ:</Text>
                <Text style={{ ...styles.value, textAlign: "center" }}>
                  {values.numberOfIllustrations}
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
                  {values.numberOfImages}
                </Text>

                <Text style={styles.subLabel}>Số tài liệu tham khảo:</Text>
                <Text style={{ ...styles.value, textAlign: "center" }}>
                  {values.numberOfReferences}
                </Text>

                <Text style={styles.subLabel}>Số phần mềm tính toán:</Text>
                <Text style={{ ...styles.value, textAlign: "center" }}>
                  {values.numberOfSoftware}
                </Text>
              </view>
            </View>

            <Text style={{ ...styles.subLabel, marginLeft: 30 }}>Bố cục:</Text>
            <Text style={styles.value}>{values.layout}</Text>

            <Text style={{ ...styles.subLabel, marginLeft: 30, marginTop: 10 }}>
              Hành văn:
            </Text>
            <Text style={styles.value}>{values.writingStyle}</Text>

            <Text style={{ ...styles.subLabel, marginLeft: 30, marginTop: 10 }}>
              Thuật ngữ chuyên môn:
            </Text>
            <Text style={styles.value}>{values.technicalTerms}</Text>

            <View style={{ ...styles.section, marginTop: 20 }}>
              <Text style={styles.label}>
                4. Những ưu điểm chính của luận văn:
              </Text>

              <Text
                style={{ ...styles.subLabel, marginLeft: 30, marginTop: 5 }}
              >
                Nội dung:
              </Text>
              <Text style={styles.value}>{values.advantages}</Text>

              <Text
                style={{ ...styles.subLabel, marginLeft: 30, marginTop: 20 }}
              >
                Kết quả, kết luận đề tài và triển vọng đề tài :
              </Text>
              <Text style={styles.value}>{values.resultsAndConclusion}</Text>
              <Text style={styles.value}>{values.prospects}</Text>

              <Text style={{ ...styles.label, marginTop: 20 }}>
                5. Những phần thiếu sót chính của luận văn:
              </Text>
              <Text style={styles.value}>{values.shortcomings}</Text>
              <view
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                }}
              >
                <Text style={styles.label}>6. Đề nghị:</Text>
                <Text style={styles.value}>{values.protection}</Text>
              </view>
              <Text style={{ ...styles.label, marginTop: 20 }}>
                7. Câu hỏi sinh viên phải trả lời trước hội đồng (Cán bộ phản
                biện ra ít nhất 02 câu):
              </Text>

              {questions?.map((values, index) => (
                <>
                  <Text
                    style={{ ...styles.subLabel, marginLeft: 30, marginTop: 5 }}
                  >
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
                {studentsData?.map((student) => (
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
      </PDFViewer>
    </ModalCommon>
  );
};
