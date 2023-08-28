package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.ReviewerQuestion;

public interface ReviewerQuestionCusMapper {
	public void deleteAllByReviewerId(String reviewerId);
	public List<ReviewerQuestion> findReviewerQuestionByReviewerId(String reviewerId);
}
