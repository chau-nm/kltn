package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.ThesisReviewerComment;

public interface ThesisReviewerCommentCusMapper {

	public List<ThesisReviewerComment> getThesisCommentByUserId(String userId);
	
	public List<ThesisReviewerComment> getThesisCommentByThesisId(String thesisId);
}
