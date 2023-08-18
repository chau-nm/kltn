package web.nl.kltn.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.security.auth.message.callback.PrivateKeyCallback.Request;
import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.generator.ThesisUser;
import web.nl.kltn.service.ThesisUserService;

@RestController
@RequestMapping("/api/thesis-user")
public class ThesisUserController {

	@Autowired
	private ThesisUserService thesisUserService;

	@GetMapping("/{id}")
	public ResponseModel<ThesisUser> view(@PathVariable String id) {
		ResponseModel<ThesisUser> responseModel = new ResponseModel<>();
		responseModel.setData(thesisUserService.view(id));
		return responseModel;
	}

	@GetMapping("/find-by-thesis")
	public ResponseModel<List<ThesisUser>> findByThesisId(@RequestParam String thesisId) {
		ResponseModel<List<ThesisUser>> responseModel = new ResponseModel<>();
		responseModel.setData(thesisUserService.searchByThesis(thesisId));
		return responseModel;
	}

	@PutMapping("/update")
	public ResponseModel<Boolean> update(@RequestBody RequestModel<ThesisUser> thesisUser) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		thesisUserService.update(thesisUser.getData());
		responseModel.setData(true);
		return responseModel;
	}

}
