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
import web.nl.kltn.model.SearchResponse;
import web.nl.kltn.model.ThesisSearchCondition;
import web.nl.kltn.model.dto.ThesisDTO;
import web.nl.kltn.model.generator.User;
import web.nl.kltn.service.ThesisService;
import web.nl.kltn.service.UserService;

@RestController
@RequestMapping("/api/thesis")
public class ThesisController {
	@Autowired
	private ThesisService thesisService;
	
	@Autowired
	private UserService userService;

	@GetMapping("/{id}")
	public ResponseModel<ThesisDTO> viewDetail(@PathVariable(required = true) String id) {
		ResponseModel<ThesisDTO> responseModel = new ResponseModel<>();
		responseModel.setData(thesisService.findById(id));
		return responseModel;
	}

	@GetMapping("/find-by-user")
	public ResponseModel<List<ThesisDTO>> findByUser(@RequestParam String userId) {
		ResponseModel<List<ThesisDTO>> responseModel = new ResponseModel<>();
		responseModel.setData(thesisService.findByUser(userId));
		return responseModel;
	}

	@PostMapping("/search/{page}")
	public ResponseModel<SearchResponse<List<ThesisDTO>>> search(@PathVariable int page,
			@RequestParam(defaultValue = "1") int pageSize,
			@RequestBody(required = false) RequestModel<ThesisSearchCondition> searchConditionRequest) {
		ThesisSearchCondition searchCondition = searchConditionRequest.getData();
		ResponseModel<SearchResponse<List<ThesisDTO>>> responseModel = new ResponseModel<>();
		List<ThesisDTO> thesisResponse = thesisService.search(page, pageSize, searchCondition);
		SearchResponse<List<ThesisDTO>> searchResponse = new SearchResponse<>();
		searchResponse.setData(thesisResponse);
		searchResponse.setTotal(thesisService.getTotal(searchCondition));
		responseModel.setData(searchResponse);
		return responseModel;
	}

	@PostMapping("/insert")
	public ResponseModel<ThesisDTO> insert(@RequestBody RequestModel<ThesisDTO> thesisRequest) {
		ResponseModel<ThesisDTO> responseModel = new ResponseModel<>();
		try {
			ThesisDTO thesis = thesisRequest.getData();
			ThesisDTO thesisInserted = thesisService.insert(thesis);
			responseModel.setData(thesisInserted);
			return responseModel;
		} catch (Exception e) {
			responseModel.setStatus(500);
			responseModel.setMessage(e.getMessage());
			return responseModel;
		}
	}

	@PutMapping("/update")
	public ResponseModel<Boolean> update(@RequestBody RequestModel<ThesisDTO> thesisUpdateRequest) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		try {
			ThesisDTO thesis = thesisUpdateRequest.getData();
			thesisService.update(thesis);
			responseModel.setData(true);
			return responseModel;
		} catch (Exception e) {
			responseModel.setData(false);
			return responseModel;
		}
	}

	@PutMapping("/update-status/{id}")
	public ResponseModel<Boolean> updateStatus(@PathVariable String id, @RequestParam int status) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		responseModel.setData(thesisService.updateStatus(id, status));
		return responseModel;

	}

	@DeleteMapping("/delete/{id}")
	public ResponseModel<Boolean> delete(@PathVariable(required = true) String id) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		try {
			thesisService.delete(id);
			responseModel.setData(true);
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}
	
	@GetMapping("/invited")
	public ResponseModel<List<ThesisDTO>> findThesisInvited(@RequestParam String userId) {
		ResponseModel<List<ThesisDTO>> responseModel = new ResponseModel<>();
		responseModel.setData(thesisService.findThesisInvited(userId));
		return responseModel;
	}
	
	@GetMapping("/my-thesis")
	public ResponseModel<List<ThesisDTO>> findMyThesis(@RequestParam String userId) {
		ResponseModel<List<ThesisDTO>> responseModel = new ResponseModel<>();
		responseModel.setData(thesisService.findMyThesis(userId));
		return responseModel;
	}

	@GetMapping("/find-by-council-review-comment")
	public ResponseModel<List<ThesisDTO>> findByCouncilReviewerComment(@RequestParam String userId) {
		ResponseModel<List<ThesisDTO>> responseModel = new ResponseModel<>();
		responseModel.setData(thesisService.findByCouncilReviewerComment(userId));
		return responseModel;
	}
	
	@PutMapping("/accept-invite")
	public ResponseModel<Boolean> acceptInvite(@RequestParam String thesisId, @RequestParam String userId) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		try {
			thesisService.acceptInvite(thesisId, userId);
			responseModel.setData(true);
		} catch (Exception e) {
			System.out.println(e);
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}
	
	@PutMapping("/decline-invite")
	public ResponseModel<Boolean> declineInvite(@RequestParam String thesisId, @RequestParam String userId) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		try {
			thesisService.declineInvite(thesisId, userId);
			responseModel.setData(true);
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}
	
	@GetMapping("/search-thesis-ca-by-user-id")
	public ResponseModel<List<ThesisDTO>> searchThesisCriticalAssessmentByUserId(@RequestParam String userId) {
		ResponseModel<List<ThesisDTO>> responseModel = new ResponseModel<>();
		responseModel.setData(thesisService.searchThesisCAByUserId(userId));
		return responseModel;
	}
	
	@GetMapping("/find-by-reviewer")
	public ResponseModel<List<ThesisDTO>> findByReviewerId(@RequestParam String userId) {
		ResponseModel<List<ThesisDTO>> responseModel = new ResponseModel<>();
		responseModel.setData(thesisService.findByReviewerId(userId));
		return responseModel;
	}
	
	@GetMapping("/find-by-rater")
	public ResponseModel<List<ThesisDTO>> findByDefenseRater(@RequestParam String userId) {
		ResponseModel<List<ThesisDTO>> responseModel = new ResponseModel<>();
		responseModel.setData(thesisService.findByDefenseRater(userId));
		return responseModel;
	}
}
