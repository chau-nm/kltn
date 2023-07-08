package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.CriticalAssessmentScore;

public interface CriticalAssessmentScoreCusMapper {
	public List<CriticalAssessmentScore> searchByCAId(String caId);
	public void deleteByCAId(String caId);
}
