package web.nl.kltn.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/critical-assessment")
public class ReviewerController {


//	@GetMapping("/search-by-thesisId")
//	public ResponseModel<List<CriticalAssessmentDTO>> searchByThesisId(@RequestParam String thesisId) {
//		ResponseModel<List<CriticalAssessmentDTO>> responseModel = new ResponseModel<>();
//		responseModel.setData(criticalAssessmentService.searchByThesisId(thesisId));
//		return responseModel;
//	}
//
//	@GetMapping("/search-by-marker")
//	public ResponseModel<CriticalAssessmentDTO> searchByMarker(@RequestParam String userId) {
//		ResponseModel<CriticalAssessmentDTO> responseModel = new ResponseModel<>();
//		responseModel.setData(criticalAssessmentService.searchByMarker(userId));
//		return responseModel;
//	}
//
//	@PostMapping("/insert-user")
//	public ResponseModel<CriticalAssessment> insertCriticalAssessmentUser(@RequestParam String thesisId,
//			@RequestParam String userId) {
//
//		ResponseModel<CriticalAssessment> responseModel = new ResponseModel<>();
//		try {
//			responseModel.setData(criticalAssessmentService.insertUser(thesisId, userId));
//		} catch (Exception e) {
//			responseModel.setMessage(e.getStackTrace().toString());
//			responseModel.setStatus(500);
//		}
//		return responseModel;
//	}
//
//	@PostMapping("/insert")
//	public ResponseModel<CriticalAssessmentDTO> insert(
//			@RequestBody RequestModel<CriticalAssessmentDTO> criticalAssessmentRequest) {
//		ResponseModel<CriticalAssessmentDTO> responseModel = new ResponseModel<>();
//		CriticalAssessmentDTO criticalAssessmentDTO = criticalAssessmentRequest.getData();
//		try {
//			responseModel.setData(criticalAssessmentService.insert(criticalAssessmentDTO));
//		} catch (Exception e) {
//			responseModel.setMessage(e.getMessage());
//			responseModel.setStatus(1);
//		}
//		return responseModel;
//	}
//
//	@PutMapping("/update")
//	public ResponseModel<Boolean> update(@RequestBody RequestModel<CriticalAssessmentDTO> criticalAssessmentRequest) {
//		ResponseModel<Boolean> responseModel = new ResponseModel<>();
//		try {
//			CriticalAssessmentDTO criticalAssessmentDTO = criticalAssessmentRequest.getData();
//			criticalAssessmentService.update(criticalAssessmentDTO);
//			responseModel.setData(true);
//		} catch (Exception exception) {
//			responseModel.setMessage(exception.getMessage());
//			responseModel.setStatus(1);
//		}
//		return responseModel;
//	}
//	
//	@GetMapping("search-by-thesis-id-and-masker")
//	public ResponseModel<CriticalAssessmentDTO> searchByThesisIdAndMasker(@RequestParam String thesisId,
//			@RequestParam String userId) {
//		ResponseModel<CriticalAssessmentDTO> responseModel = new ResponseModel<>();
//		responseModel.setData(criticalAssessmentService.searchByThesisIdAndMarker(thesisId, userId));
//		return responseModel;
//	}
//
//	@DeleteMapping("/delete/{id}")
//	public ResponseModel<Boolean> delete(@PathVariable String id) {
//		ResponseModel<Boolean> responseModel = new ResponseModel<>();
//		try {
//			criticalAssessmentService.delete(id);
//			responseModel.setData(true);
//		} catch (Exception exception) {
//			responseModel.setMessage(exception.getMessage());
//			responseModel.setStatus(1);
//		}
//		return responseModel;
//	}
}
