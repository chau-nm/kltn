package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.generator.ThesisDocument;

public interface ThesisDocumentService {

	List<ThesisDocument> insertList(List<ThesisDocument> thesisDocuments) throws Exception;

}
