package web.nl.kltn.controllers;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
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
import web.nl.kltn.model.dto.ProtectionRatingDTO;
import web.nl.kltn.service.ProtectionRatingService;

@RestController
@RequestMapping("/api/protection-rating")
public class ProtectionRatingController {

	@Autowired
	private ProtectionRatingService protectionRatingService;

	@GetMapping("/search-by-thesis-id")
	public ResponseModel<List<ProtectionRatingDTO>> searchByThesisId(@RequestParam String thesisId) {
		ResponseModel<List<ProtectionRatingDTO>> responseModel = new ResponseModel<>();
		responseModel.setData(protectionRatingService.searchByThesisId(thesisId));
		return responseModel;
	}

	@PostMapping("/insert")
	public ResponseModel<ProtectionRatingDTO> insert(
			@RequestBody RequestModel<ProtectionRatingDTO> protectionRatingRequest) {
		ResponseModel<ProtectionRatingDTO> responseModel = new ResponseModel<>();
		ProtectionRatingDTO protectionRatingDTO = protectionRatingRequest.getData();
		responseModel.setData(protectionRatingService.insert(protectionRatingDTO));
		return responseModel;
	}

	@PutMapping("/update")
	public ResponseModel<Boolean> update(@RequestBody RequestModel<ProtectionRatingDTO> protectionRatingRequest) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		ProtectionRatingDTO protectionRatingDTO = protectionRatingRequest.getData();
		protectionRatingService.update(protectionRatingDTO);
		responseModel.setData(true);
		return responseModel;
	}

	@Delete("/delete/{id}")
	public ResponseModel<Boolean> delete(@PathVariable String id) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		protectionRatingService.delete(id);
		responseModel.setData(true);
		return responseModel;
	}
}
