package web.nl.kltn.mapper;

import java.util.List;

public interface ThesisDocumentCusMapper {
    public List<String> getFilesByThesisId(String thesisId);
}
