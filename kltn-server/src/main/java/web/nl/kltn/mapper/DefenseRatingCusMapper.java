package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.DefenseRating;

public interface DefenseRatingCusMapper {
	public List<DefenseRating> findByThesisId(String thesisId);
}
