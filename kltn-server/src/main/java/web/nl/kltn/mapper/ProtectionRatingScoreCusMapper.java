package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.ProtectionRatingScore;

public interface ProtectionRatingScoreCusMapper {
	public List<ProtectionRatingScore> searchByPrId(String prId);
	public void deleteByPrId(String prId);
}
