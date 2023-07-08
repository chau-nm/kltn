package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.ProtectionRatingQuestion;

public interface ProtectionRatingQuestionCusMapper {
	public List<ProtectionRatingQuestion> searchByPrId(String prId);
	public void deleteByPrId(String prId);
}
