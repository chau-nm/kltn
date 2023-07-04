package web.nl.kltn.controllers;

import java.util.List;

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

@RestController
@RequestMapping("/api/thesis")
public class ThesisController {
	
	@GetMapping("/{id}")
	public ThesisDTO viewDetail(@PathVariable(required = true) String id) {
		return null;
	}
	
	@PostMapping("/search/{page}")
	public ResponseModel<SearchResponse<List<ThesisDTO>>> search(
			@PathVariable int page, 
			@RequestParam(defaultValue = "1") int pageSize, 
			@RequestBody(required = false) RequestModel<ThesisSearchCondition> searchConditionRequest
	){
		return null;
	}
	
	@PostMapping("/insert")
	public ResponseModel<ThesisDTO> insert(
			@RequestBody RequestModel<ThesisDTO> thesisDTO
	){
		return null;
	}
	
	@PutMapping("/update")
	public ResponseModel<Boolean> update(
			@RequestBody RequestModel<ThesisDTO> thesisUpdateRequest
	){
		return null;
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseModel<Boolean> delete(@PathVariable(required = true) String id){
		return null;
	}
}
