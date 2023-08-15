package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.dto.ProtectionRatingDTO;
import web.nl.kltn.model.generator.CriticalAssessment;
import web.nl.kltn.model.generator.ProtectionRating;

public interface ProtectionRatingService {

	void delete(String id);

	void update(ProtectionRatingDTO protectionRatingDTO);

	ProtectionRatingDTO insert(ProtectionRatingDTO protectionRatingDTO);

	List<ProtectionRatingDTO> searchByThesisId(String thesisId);

	List<ProtectionRating> insertUsers(String thesisId, List<String> usersId) throws Exception;

	boolean deleteByThesisId(String thesisId) throws Exception;

}
