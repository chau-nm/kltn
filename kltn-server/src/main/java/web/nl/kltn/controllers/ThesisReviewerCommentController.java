package web.nl.kltn.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.generator.ThesisReviewerComment;
import web.nl.kltn.service.ThesisReviewerCommentService;

@RestController
@RequestMapping("/api/reviewer-comment")
public class ThesisReviewerCommentController {
	
	@Autowired
	private ThesisReviewerCommentService reviewerCommentService;
	
	@PostMapping("/insert-reviewer")
	public ResponseModel<List<ThesisReviewerComment>> insertReviewer(@RequestParam String thesisId, @RequestBody RequestModel<List<String>> requestModel) {
		ResponseModel<List<ThesisReviewerComment>> responseModel = new ResponseModel<>();
		List<String> userIds = requestModel.getData();
		try {
			responseModel.setData(reviewerCommentService.insertReviewer(thesisId, userIds));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}
	
	@PutMapping("/update")
	public ResponseModel<Boolean> update(@RequestBody RequestModel<ThesisReviewerComment> requestModel) {
		ThesisReviewerComment thesisReviewerComment = requestModel.getData();
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		try {
			reviewerCommentService.update(thesisReviewerComment);
			responseModel.setData(true);
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}
	
	@PostMapping("/insert-general")
	public ResponseModel<ThesisReviewerComment> insertGeneralComment(@RequestBody RequestModel<ThesisReviewerComment> requestModel) {
		ThesisReviewerComment thesisReviewerComment = requestModel.getData();
		ResponseModel<ThesisReviewerComment> responseModel = new ResponseModel<>();
		try {
			responseModel.setData(reviewerCommentService.insertGeneralComment(thesisReviewerComment));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}
}
