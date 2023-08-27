package web.nl.kltn.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.dto.LeturerDTO;
import web.nl.kltn.service.LeturerService;

@RestController
@RequestMapping("api/leturer")
public class LeturerController {
	
	@Autowired
	private LeturerService leturerService;
	
	@PostMapping("/insert")
	public ResponseModel<LeturerDTO> insert(@RequestBody RequestModel<LeturerDTO> requestModel) {
		
		LeturerDTO leturerDTO = requestModel.getData();
		ResponseModel<LeturerDTO> responseModel = new ResponseModel<>();
		try {
			responseModel.setData(leturerService.insert(leturerDTO));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		
		return responseModel;
	}
	
}
