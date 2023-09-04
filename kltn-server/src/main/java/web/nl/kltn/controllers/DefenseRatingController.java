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
import web.nl.kltn.model.dto.DefenseRatingDTO;
import web.nl.kltn.model.dto.ReviewerDTO;
import web.nl.kltn.model.generator.DefenseRating;
import web.nl.kltn.service.ProtectionRatingService;
import web.nl.kltn.service.ThesisDefenseService;

@RestController
@RequestMapping("/api/defense-rating")
public class DefenseRatingController {
	
	@Autowired
	private ThesisDefenseService defenseService;
	
	@PostMapping("/insert-raters")
	public ResponseModel<List<DefenseRating>> insertDefenseRaters(@RequestParam String thesisId, @RequestBody RequestModel<List<String>> userIdsRequest) {
		ResponseModel<List<DefenseRating>> responseModel = new ResponseModel<>();
		List<String> userIds = userIdsRequest.getData();
		try {
			responseModel.setData(defenseService.insertDefenseRaters(thesisId, userIds));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}
	
	@PutMapping("/update")
	public ResponseModel<DefenseRatingDTO> update(@RequestBody RequestModel<DefenseRatingDTO> requestModel) {
		DefenseRatingDTO defenseRatingDTO = requestModel.getData();
		ResponseModel<DefenseRatingDTO> responseModel = new ResponseModel<>();
		try {
			responseModel.setData(defenseService.update(defenseRatingDTO));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}
}
