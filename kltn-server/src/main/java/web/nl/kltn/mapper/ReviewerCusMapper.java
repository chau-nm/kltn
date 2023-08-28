package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.Reviewer;

public interface ReviewerCusMapper {
	
	public List<Reviewer> findReviewerByThesisId(String thesisId);
}
