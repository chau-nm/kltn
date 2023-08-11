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
import web.nl.kltn.model.generator.ThesisOutlineComment;
import web.nl.kltn.service.ThesisOutlineCommentService;

@RestController
@RequestMapping("/api/thesis-outline-comment")
public class ThesisOutlineCommentController {

	@Autowired
	private ThesisOutlineCommentService thesisOutlineCommentService;
	
	@GetMapping("/search-by-thesisId")
	public ResponseModel<List<ThesisOutlineComment>> searchByThesisId(@RequestParam String thesisId) {
		ResponseModel<List<ThesisOutlineComment>> responseModel = new ResponseModel<>();
		responseModel.setData(thesisOutlineCommentService.searchByThesisId(thesisId));
		return responseModel;
	}
	
	@GetMapping("/search-by-userId")
	public ResponseModel<ThesisOutlineComment> searchByUserId(@RequestParam String userId) {
		ResponseModel<ThesisOutlineComment> responseModel = new ResponseModel<>();
		responseModel.setData(thesisOutlineCommentService.searchByUserId(userId));
		return responseModel;
	}
	
	@PostMapping("/insert")
	public ResponseModel<ThesisOutlineComment> insert(@RequestBody RequestModel<ThesisOutlineComment> thesisOutlineCommentRequest) {
		ResponseModel<ThesisOutlineComment> responseModel = new ResponseModel<>();
		ThesisOutlineComment thesisOutlineComment = thesisOutlineCommentRequest.getData();
		responseModel.setData(thesisOutlineCommentService.insert(thesisOutlineComment));
		return responseModel;
	}
	
	@PutMapping("/update")
	public ResponseModel<Boolean> update(@RequestBody RequestModel<ThesisOutlineComment> thesisOutlineCommentRequest) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		try {
			ThesisOutlineComment thesisOutlineComment = thesisOutlineCommentRequest.getData();
			thesisOutlineCommentService.update(thesisOutlineComment);
			responseModel.setData(true);
		} catch (Exception exception) {
			responseModel.setData(false);
		}
		return responseModel;
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseModel<Boolean> delete(@PathVariable String id) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		try {
			thesisOutlineCommentService.deleted(id);
			responseModel.setData(true);
		} catch (Exception exception) {
			responseModel.setData(false);
		}
		return responseModel;
	}
	@DeleteMapping("/delete-by-thesis/{id}")
	public ResponseModel<Boolean> deleteByThesis(@PathVariable String id) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		System.err.println(id);
		try {
			thesisOutlineCommentService.deletedByThesis(id);
			responseModel.setData(true);
		} catch (Exception exception) {
			responseModel.setData(false);
		}
		return responseModel;
	}
}
