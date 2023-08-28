package web.nl.kltn.service;

import web.nl.kltn.model.dto.ReviewerDTO;
import web.nl.kltn.model.generator.Reviewer;

public interface ThesisReviewerService {

	ReviewerDTO update(ReviewerDTO reviewerDTO) throws Exception;

	Reviewer insertUserReviewer(String thesisId, String userId) throws Exception;

}
