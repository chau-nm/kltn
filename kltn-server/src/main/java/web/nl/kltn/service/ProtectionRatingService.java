package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.dto.ProtectionRatingDTO;

public interface ProtectionRatingService {

	void delete(String id);

	void update(ProtectionRatingDTO protectionRatingDTO);

	ProtectionRatingDTO insert(ProtectionRatingDTO protectionRatingDTO);

	List<ProtectionRatingDTO> searchByThesisId(String thesisId);

}
