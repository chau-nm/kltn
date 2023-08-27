package web.nl.kltn.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.dto.StudentDTO;
import web.nl.kltn.service.StudentService;

@RestController
@RequestMapping("api/student")
public class StudentController {

	@Autowired
	private StudentService studentService;
	
	@PostMapping("/insert")
	public ResponseModel<StudentDTO> insert(@RequestBody RequestModel<StudentDTO> requestModel) {
		StudentDTO studentDTO = requestModel.getData();
		ResponseModel<StudentDTO> responseModel = new ResponseModel<>();
		
		try {
			responseModel.setData(studentService.insert(studentDTO));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}
	
}
