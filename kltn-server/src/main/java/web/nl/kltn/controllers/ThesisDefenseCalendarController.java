package web.nl.kltn.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.generator.ThesisDefenseCalendar;
import web.nl.kltn.service.ThesisDefenseCalendarService;

@RestController
@RequestMapping("/api/thesis-defense-calendar")
public class ThesisDefenseCalendarController {

	@Autowired
	private ThesisDefenseCalendarService defenseCalendarService;
	
	@PostMapping("/insert-list")
	public ResponseModel<List<ThesisDefenseCalendar>> insertList(
			@RequestBody RequestModel<List<ThesisDefenseCalendar>> requestModel) {
		ResponseModel<List<ThesisDefenseCalendar>> responseModel = new ResponseModel<>();
		List<ThesisDefenseCalendar> calendars = requestModel.getData();
		try {
			responseModel.setData(defenseCalendarService.insertList(calendars));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}
}
