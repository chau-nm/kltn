package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.ReviewerScore;

public interface ReviewerScoreCusMapper {
	public void deleteAllByReviewerId(String reviewerId);
	
	public List<ReviewerScore> findReviewerScoreByReviewerId(String reviewerId);
}
