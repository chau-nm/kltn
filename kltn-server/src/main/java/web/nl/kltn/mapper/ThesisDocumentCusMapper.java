package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.ThesisDocument;

public interface ThesisDocumentCusMapper {
    public List<String> getFilesByThesisId(String thesisId, int type);
    public void deteleByThesisId(String thesisId, int type);
    public List<ThesisDocument> getFileAttachmentsByThesisId(String thesisId);
}
