package web.nl.kltn.service;

import web.nl.kltn.model.DocumentData;

import java.io.IOException;
import java.util.List;

public interface Doc2vecService {
    List<DocumentData> search(String inputTitle) throws IOException;
}
