package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.dto.DefenseRatingDTO;
import web.nl.kltn.model.generator.DefenseRating;

public interface ThesisDefenseService {

	List<DefenseRating> insertDefenseRaters(String thesisId, List<String> userIds) throws Exception;

	DefenseRatingDTO update(DefenseRatingDTO defenseRatingDTO) throws Exception;

}
