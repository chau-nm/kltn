package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.dto.CriticalAssessmentDTO;

public interface CriticalAssessmentService {

	void delete(String id);

	void update(CriticalAssessmentDTO criticalAssessmentDTO);

	CriticalAssessmentDTO insert(CriticalAssessmentDTO criticalAssessmentDTO);

	CriticalAssessmentDTO searchByMarker(String userId);

	List<CriticalAssessmentDTO> searchByThesisId(String thesisId);

}
