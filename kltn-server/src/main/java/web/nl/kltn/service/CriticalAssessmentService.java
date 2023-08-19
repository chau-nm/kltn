package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.dto.CriticalAssessmentDTO;
import web.nl.kltn.model.generator.CriticalAssessment;

public interface CriticalAssessmentService {

	void delete(String id);

	void update(CriticalAssessmentDTO criticalAssessmentDTO) throws Exception;

	CriticalAssessmentDTO insert(CriticalAssessmentDTO criticalAssessmentDTO) throws Exception;

	CriticalAssessmentDTO searchByMarker(String userId);

	List<CriticalAssessmentDTO> searchByThesisId(String thesisId);

	CriticalAssessment insertUser(String thesisId, String userId) throws Exception;

}
