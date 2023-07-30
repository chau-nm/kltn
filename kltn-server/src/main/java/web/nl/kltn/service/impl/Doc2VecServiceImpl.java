package web.nl.kltn.service.impl;

import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TopDocs;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;
import org.deeplearning4j.models.paragraphvectors.ParagraphVectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import web.nl.kltn.common.Constant;
import web.nl.kltn.model.DocumentData;
import web.nl.kltn.service.Doc2vecService;
import web.nl.kltn.service.LuceneService;
import web.nl.kltn.service.ParagraphVectorsService;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Service
public class Doc2VecServiceImpl implements Doc2vecService {

    ParagraphVectorsService p2v;
    LuceneService luceneService;

    public Doc2VecServiceImpl() {
        this.p2v =new ParagraphVectorsServiceImpl();
        this.luceneService= new LuceneServiceImpl();
    }

    @Override
    public List<DocumentData> search(String inputTitle) throws IOException {
        return searchSimilarDocuments(inputTitle);
    }

    public List<DocumentData> searchSimilarDocuments(String inputTitle) throws IOException {
        List<DocumentData> similarDocuments = new ArrayList<>();

        Analyzer analyzer = new StandardAnalyzer();
        Directory directory = FSDirectory.open(Paths.get(Constant.INDEX_DIR));
        IndexSearcher indexSearcher = new IndexSearcher(DirectoryReader.open(directory));

        QueryParser queryParser = new QueryParser("title", analyzer);
        Query query;
        try {
            query = queryParser.parse(inputTitle.toLowerCase());
        } catch (ParseException e) {
            e.printStackTrace();
            return similarDocuments;
        }

        TopDocs topDocs = indexSearcher.search(query, 5);
        ScoreDoc[] scoreDocs = topDocs.scoreDocs;

        for (ScoreDoc scoreDoc : scoreDocs) {
            Document luceneDoc = indexSearcher.doc(scoreDoc.doc);
            int id = Integer.parseInt(luceneDoc.get("id"));
            String title = luceneDoc.get("title");
            String url = luceneDoc.get("url");

            double similarity = p2v.similarityTwoRawText(inputTitle, title);
            if (similarity > Constant.similarityThreshold) {
                System.out.println("stored title: " + title);
                System.out.println("title input: " + inputTitle + "\n" + "Similar: " + similarity);
                similarDocuments.add(new DocumentData(id, title, url));
            }
        }
        return similarDocuments;
    }

    public static void main(String[] args) throws IOException {
        Doc2vecService d2v = new Doc2VecServiceImpl();
        d2v.search("lập trình ứng dụng Android");
    }
}
