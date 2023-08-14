package web.nl.kltn.service.impl;

import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;
import org.springframework.stereotype.Service;
import web.nl.kltn.common.Constant;
import web.nl.kltn.model.DocumentData;
import web.nl.kltn.service.LuceneService;

import java.io.IOException;
import java.nio.file.Paths;

@Service
public class LuceneServiceImpl implements LuceneService {
    @Override
    public void indexDocument(DocumentData documentData) throws IOException {
        Analyzer analyzer = new StandardAnalyzer();
        Directory directory = FSDirectory.open(Paths.get(Constant.INDEX_DIR));
        IndexWriterConfig config = new IndexWriterConfig(analyzer);
        IndexWriter indexWriter = new IndexWriter(directory, config);
        Document luceneDoc = new Document();
        luceneDoc.add(new TextField("id", String.valueOf(documentData.getId()), Field.Store.YES));
        luceneDoc.add(new TextField("title", documentData.getTitle().toLowerCase(), Field.Store.YES));
        luceneDoc.add(new TextField("url", documentData.getUrl(), Field.Store.YES));
        indexWriter.addDocument(luceneDoc);
        indexWriter.close();
        directory.close();
    }

    public static void main(String[] args) throws IOException {
        LuceneService lucene = new LuceneServiceImpl();
        DocumentData document1 = new DocumentData(
                "1",
                "thêm Cách đàm_phán mức_lương cao hơn khi nhảy việc Vậy khi nào bạn nên ghi mức_lương mong_muốn trên CV",
                "https://example.com/gioi-thieu-java"
        );

        DocumentData document2 = new DocumentData(
                "2",
                "Python cho người mới bắt đầu",
                "https://example.com/python-cho-nguoi-moi-bat-dau"
        );

        DocumentData document3 = new DocumentData(
                "3",
                "Phát triển web với HTML và CSS",
                "https://example.com/phat-trien-web-html-css"
        );

        DocumentData document4 = new DocumentData(
                "4",
                "Cơ bản về Học máy",
                "https://example.com/co-ban-ve-hoc-may"
        );
        DocumentData document5 = new DocumentData(
                "5",
                "Hướng dẫn lập trình C++ cơ bản dành cho người mới bắt đầu với những kiến thức căn bản và ví dụ thực tế",
                "https://example.com/document5"
        );

        DocumentData document6 = new DocumentData(
                "6",
                "Phân tích dữ liệu với Python và ứng dụng trong trí tuệ nhân tạo cho việc dự đoán và phân loại",
                "https://example.com/document6"
        );

        DocumentData document7 = new DocumentData(
                "7",
                "Tạo đồ họa sáng tạo với phần mềm Photoshop và Illustrator để thiết kế banner và poster chuyên nghiệp",
                "https://example.com/document7"
        );

        DocumentData document8 = new DocumentData(
                "8",
                "Bắt đầu lập trình ứng dụng Android từ những kiến thức căn bản và xây dựng ứng dụng đơn giản",
                "https://example.com/document8"
        );

        DocumentData document9 = new DocumentData(
                "9",
                "Học tiếng Anh giao tiếp cơ bản trong cuộc sống hàng ngày với các từ vựng phổ biến và môi trường học tập",
                "https://example.com/document9"
        );

        DocumentData document10 = new DocumentData(
                "10",
                "mức_lương là một vấn_đề khá nhạy_cảm đặc_biệt là khi những câu_trả_lời phỏng_vấn trước_đó của bạn đều thành_công trót_lọt",
                "https://example.com/document10"
        );
        lucene.indexDocument(document1);
        lucene.indexDocument(document2);
        lucene.indexDocument(document3);
        lucene.indexDocument(document4);
        lucene.indexDocument(document5);
        lucene.indexDocument(document6);
        lucene.indexDocument(document7);
        lucene.indexDocument(document8);
        lucene.indexDocument(document9);
        lucene.indexDocument(document10);



    }
}
