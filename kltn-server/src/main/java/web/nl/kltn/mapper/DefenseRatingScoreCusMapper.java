package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.DefenseRatingScore;

public interface DefenseRatingScoreCusMapper {
	public List<DefenseRatingScore> findByDefenseRatingId(String drId);
	public void deleteByDrId(String drId);
}
