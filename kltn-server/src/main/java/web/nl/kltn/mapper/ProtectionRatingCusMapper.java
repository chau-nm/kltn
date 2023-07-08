package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.ProtectionRating;

public interface ProtectionRatingCusMapper {
	public List<ProtectionRating> searchByThesisId(String thesisId);
}
