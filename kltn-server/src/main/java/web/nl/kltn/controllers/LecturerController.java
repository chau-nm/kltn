package web.nl.kltn.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.dto.LecturerDTO;
import web.nl.kltn.service.LecturerService;

@RestController
@RequestMapping("api/lecturer")
public class LecturerController {
	
	@Autowired
	private LecturerService lecturerService;
	
	@PostMapping("/insert")
	public ResponseModel<LecturerDTO> insert(@RequestBody RequestModel<LecturerDTO> requestModel) {
		
		LecturerDTO lecturerDTO = requestModel.getData();
		ResponseModel<LecturerDTO> responseModel = new ResponseModel<>();
		try {
			responseModel.setData(lecturerService.insert(lecturerDTO));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		
		return responseModel;
	}
	
	@PutMapping("/update")
	public ResponseModel<LecturerDTO> update(@RequestBody RequestModel<LecturerDTO> requestModel) {
		
		LecturerDTO lecturerDTO = requestModel.getData();
		ResponseModel<LecturerDTO> responseModel = new ResponseModel<>();
		try {
			responseModel.setData(lecturerService.update(lecturerDTO));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		
		return responseModel;
	}
	
}
