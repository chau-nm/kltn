package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.ThesisOutlineComment;

public interface ThesisOutlineCommentCusMapper {

	public List<ThesisOutlineComment> searchByThesisId(String thesisId);
	
	public ThesisOutlineComment searchByUserId(String userId);

	public ThesisOutlineComment searchByThesisIdAndUserId(String thesisId,String userId);

	public List<String> findCouncilByOutlineComment(String thesisId);

	public void deleteByThesis (String thesisId);
}
