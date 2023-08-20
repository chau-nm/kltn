package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.InsertThesisCouncilPayload;
import web.nl.kltn.model.dto.ThesisOutlineCommentDTO;
import web.nl.kltn.model.generator.ThesisOutlineComment;

public interface ThesisOutlineCommentService {

	void deleted(String id);

	void update(ThesisOutlineComment thesisOutlineComment);

	ThesisOutlineComment insert(ThesisOutlineComment thesisOutlineComment)  throws Exception ;

	ThesisOutlineComment searchByUserId(String userId);

	List<ThesisOutlineComment> searchByThesisId(String thesisId);

	List<ThesisOutlineCommentDTO> searchCommentByThesisId(String thesisId);

	ThesisOutlineComment searchByThesisIdAndCouncilId(String thesisId, String userId);

	void deletedByThesis(String id);

	List<ThesisOutlineComment> insertCouncils(InsertThesisCouncilPayload insertThesisCouncilPayload) throws Exception;

}
