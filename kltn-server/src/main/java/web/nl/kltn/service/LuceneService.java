package web.nl.kltn.service;
import web.nl.kltn.model.DocumentData;

import java.io.IOException;

public interface LuceneService {
    void indexDocument(DocumentData documentData) throws IOException;
}