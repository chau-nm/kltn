package web.nl.kltn.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.generator.ThesisDocument;
import web.nl.kltn.service.ThesisDocumentService;

@RestController
@RequestMapping("/api/thesis-document")
public class ThesisDocumentController {
	
	@Autowired
	private ThesisDocumentService thesisDocumentService;

	@PostMapping("/insert-list")
	public ResponseModel<List<ThesisDocument>> insertList(@RequestBody RequestModel<List<ThesisDocument>> requestModel ) {
		ResponseModel<List<ThesisDocument>> responseModel = new ResponseModel<>();
		try {
			responseModel.setData(thesisDocumentService.insertList(requestModel.getData()));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel; 
	}
	
}
