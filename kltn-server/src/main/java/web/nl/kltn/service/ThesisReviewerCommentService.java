package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.generator.ThesisReviewerComment;

public interface ThesisReviewerCommentService {

	public List<ThesisReviewerComment> insertReviewer(String thesisId, List<String> userIds) throws Exception;

	void update(ThesisReviewerComment thesisReviewerComment) throws Exception ;

	ThesisReviewerComment insertGeneralComment(ThesisReviewerComment thesisReviewerComment) throws Exception;

}
