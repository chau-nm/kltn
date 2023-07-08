package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.CriticalAssessment;

public interface CriticalAssessmentCusMapper {
	public List<CriticalAssessment> searchByThesisId(String thesisId);
	
	public CriticalAssessment searchByMarker(String marker);
}
