package web.nl.kltn.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.dto.CriticalAssessmentDTO;
import web.nl.kltn.model.generator.CriticalAssessment;
import web.nl.kltn.service.CriticalAssessmentService;

@RestController
@RequestMapping("/api/critical-assessment")
public class CriticalAssessmentController {

	@Autowired
	private CriticalAssessmentService criticalAssessmentService;

	@GetMapping("/search-by-thesisId")
	public ResponseModel<List<CriticalAssessmentDTO>> searchByThesisId(@RequestParam String thesisId) {
		ResponseModel<List<CriticalAssessmentDTO>> responseModel = new ResponseModel<>();
		responseModel.setData(criticalAssessmentService.searchByThesisId(thesisId));
		return responseModel;
	}

	@GetMapping("/search-by-marker")
	public ResponseModel<CriticalAssessmentDTO> searchByMarker(@RequestParam String userId) {
		ResponseModel<CriticalAssessmentDTO> responseModel = new ResponseModel<>();
		responseModel.setData(criticalAssessmentService.searchByMarker(userId));
		return responseModel;
	}

	@PostMapping("/insert-user")
	public ResponseModel<CriticalAssessment> insertCriticalAssessmentUser(@RequestParam String thesisId,
			@RequestParam String userId) {

		ResponseModel<CriticalAssessment> responseModel = new ResponseModel<>();
		try {
			responseModel.setData(criticalAssessmentService.insertUser(thesisId, userId));
		} catch (Exception e) {
			responseModel.setMessage(e.getStackTrace().toString());
			responseModel.setStatus(500);
		}
		return responseModel;
	}

	@PostMapping("/insert")
	public ResponseModel<CriticalAssessmentDTO> insert(
			@RequestBody RequestModel<CriticalAssessmentDTO> criticalAssessmentRequest) {
		ResponseModel<CriticalAssessmentDTO> responseModel = new ResponseModel<>();
		CriticalAssessmentDTO criticalAssessmentDTO = criticalAssessmentRequest.getData();
		try {
			responseModel.setData(criticalAssessmentService.insert(criticalAssessmentDTO));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}

	@PutMapping("/update")
	public ResponseModel<Boolean> update(@RequestBody RequestModel<CriticalAssessmentDTO> criticalAssessmentRequest) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		try {
			CriticalAssessmentDTO criticalAssessmentDTO = criticalAssessmentRequest.getData();
			criticalAssessmentService.update(criticalAssessmentDTO);
			responseModel.setData(true);
		} catch (Exception exception) {
			responseModel.setMessage(exception.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}

	@DeleteMapping("/delete/{id}")
	public ResponseModel<Boolean> delete(@PathVariable String id) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		try {
			criticalAssessmentService.delete(id);
			responseModel.setData(true);
		} catch (Exception exception) {
			responseModel.setMessage(exception.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}
}
