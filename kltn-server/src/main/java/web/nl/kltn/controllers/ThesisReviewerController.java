package web.nl.kltn.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.dto.ReviewerDTO;
import web.nl.kltn.model.generator.Reviewer;
import web.nl.kltn.service.ThesisReviewerService;

@RestController
@RequestMapping("/api/reviewer")
public class ThesisReviewerController {

	@Autowired
	private ThesisReviewerService thesisReviewerService;

	@PostMapping("/insert-user-reviewer")
	public ResponseModel<Reviewer> insertUserReviewer(@RequestParam String thesisId, @RequestParam String userId) {
		ResponseModel<Reviewer> responseModel = new ResponseModel<>();
		try {
			responseModel.setData(thesisReviewerService.insertUserReviewer(thesisId, userId));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}

	@PutMapping("/update")
	public ResponseModel<ReviewerDTO> update(@RequestBody RequestModel<ReviewerDTO> requestModel) {
		ReviewerDTO reviewerDTO = requestModel.getData();
		ResponseModel<ReviewerDTO> responseModel = new ResponseModel<>();
		try {
			responseModel.setData(thesisReviewerService.update(reviewerDTO));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}
}
