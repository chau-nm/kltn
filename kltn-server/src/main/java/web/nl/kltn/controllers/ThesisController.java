package web.nl.kltn.controllers;

import java.util.Date;
import java.util.List;
import java.util.UUID;

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

import web.nl.kltn.common.Constant;
import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.SearchResponse;
import web.nl.kltn.model.ThesisSearchCondition;
import web.nl.kltn.model.dto.ThesisDTO;
import web.nl.kltn.model.dto.UserDTO;
import web.nl.kltn.model.generator.Thesis;
import web.nl.kltn.model.generator.ThesisUser;
import web.nl.kltn.model.generator.User;
import web.nl.kltn.service.ThesisService;
import web.nl.kltn.service.ThesisUserService;

@RestController
@RequestMapping("/api/thesis")
public class ThesisController {

	@Autowired
	private ThesisService thesisService;

	@Autowired
	private ThesisUserService thesisUserService;

	@GetMapping("/{id}")
	public ResponseModel<ThesisDTO> viewDetail(@PathVariable(required = true) String id) {
		ResponseModel<ThesisDTO> responseModel = new ResponseModel<>();
		
		return null;
	}

	@PostMapping("/search/{page}")
	public ResponseModel<SearchResponse<List<Thesis>>> search(@PathVariable int page,
			@RequestParam(defaultValue = "1") int pageSize,
			@RequestBody(required = false) RequestModel<ThesisSearchCondition> searchConditionRequest) {
		ThesisSearchCondition searchCondition = searchConditionRequest.getData();
		ResponseModel<SearchResponse<List<Thesis>>> responseModel = new ResponseModel<>();
		List<Thesis> thesisResponse = thesisService.search(page, pageSize, searchCondition);
		SearchResponse<List<Thesis>> searchResponse = new SearchResponse<>();
		searchResponse.setData(thesisResponse);
		searchResponse.setTotal(thesisService.getTotal(searchCondition));
		responseModel.setData(searchResponse);
		return responseModel;
	}

	@PostMapping("/insert")
	public ResponseModel<ThesisDTO> insert(@RequestBody RequestModel<ThesisDTO> thesisRequest) {
		ResponseModel<ThesisDTO> responseModel = new ResponseModel<>();
		
		try {
			// insert thesis
			ThesisDTO thesis = thesisRequest.getData();
			Thesis thesisInserted = thesisService.insert(thesis);
			if (thesisInserted == null) {
				responseModel.setMessage("Insert Fail");
				return responseModel;
			}
//			// insert student for thesis
//			List<User> students = thesis.getStudents();
//			List<ThesisUser> thesisStudents = students.stream().map(student -> {
//				ThesisUser thesisStudent = new ThesisUser();
//				thesisStudent.setId(UUID.randomUUID().toString());
//				thesisStudent.setThesisId(thesis.getId());
//				thesisStudent.setType(Constant.THESIS_STUDENT);
//				thesisStudent.setUserId(student.getUserId());
//				thesisStudent.setIsDeleted(false);
//				thesisStudent.setCreatedAt(new Date().getTime());
//				return thesisStudent;
//			}).toList();
//			if (thesisUserService.insertList(thesisStudents) == null) {
//				responseModel.setMessage("Insert Fail");
//				return responseModel;
//			}
//			// insert teacher for thesis
//			List<User> teachers = thesis.getTeachers();
//			List<ThesisUser> thesisTeachers = teachers.stream().map(teacher -> {
//				ThesisUser thesisTeacher = new ThesisUser();
//				thesisTeacher.setId(UUID.randomUUID().toString());
//				thesisTeacher.setThesisId(thesis.getId());
//				thesisTeacher.setType(Constant.THESIS_STUDENT);
//				thesisTeacher.setUserId(teacher.getUserId());
//				thesisTeacher.setIsDeleted(false);
//				thesisTeacher.setCreatedAt(new Date().getTime());
//				return thesisTeacher;
//			}).toList();
//			if (thesisUserService.insertList(thesisTeachers) == null) {
//				responseModel.setMessage("Insert Fail");
//				return responseModel;
//			}
			responseModel.setData(thesis);
			return responseModel;
		} catch (Exception e) {
			responseModel.setStatus(500);
			responseModel.setMessage(e.getCause().getMessage());
			return responseModel;
		}
	}

	@PutMapping("/update")
	public ResponseModel<Boolean> update(@RequestBody RequestModel<ThesisDTO> thesisUpdateRequest) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		try {
			ThesisDTO thesis = thesisUpdateRequest.getData();
			thesisService.update(thesis);
			
			thesisUserService.deleteByThesisId(thesis.getId());
			
			// insert student for thesis
			List<User> students = thesis.getStudents();
			List<ThesisUser> thesisStudents = students.stream().map(student -> {
				ThesisUser thesisStudent = new ThesisUser();
				thesisStudent.setId(UUID.randomUUID().toString());
				thesisStudent.setThesisId(thesis.getId());
				thesisStudent.setType(Constant.THESIS_STUDENT);
				thesisStudent.setUserId(student.getUserId());
				thesisStudent.setIsDeleted(false);
				thesisStudent.setCreatedAt(new Date().getTime());
				return thesisStudent;
			}).toList();
			if (thesisUserService.insertList(thesisStudents) == null) {
				responseModel.setMessage("Insert Fail");
				return responseModel;
			}
			// insert teacher for thesis
			List<User> teachers = thesis.getTeachers();
			List<ThesisUser> thesisTeachers = teachers.stream().map(teacher -> {
				ThesisUser thesisTeacher = new ThesisUser();
				thesisTeacher.setId(UUID.randomUUID().toString());
				thesisTeacher.setThesisId(thesis.getId());
				thesisTeacher.setType(Constant.THESIS_STUDENT);
				thesisTeacher.setUserId(teacher.getUserId());
				thesisTeacher.setIsDeleted(false);
				thesisTeacher.setCreatedAt(new Date().getTime());
				return thesisTeacher;
			}).toList();
			if (thesisUserService.insertList(thesisTeachers) == null) {
				responseModel.setMessage("Insert Fail");
				return responseModel;
			}
			responseModel.setData(true);
			return responseModel;
		}catch(Exception e) {
			return responseModel;
		}
	}

	@DeleteMapping("/delete/{id}")
	public ResponseModel<Boolean> delete(@PathVariable(required = true) String id) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		thesisService.delete(id);
		responseModel.setData(true);
		return responseModel;
	}
}
