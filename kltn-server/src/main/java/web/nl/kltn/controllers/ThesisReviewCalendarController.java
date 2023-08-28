package web.nl.kltn.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.generator.ThesisReviewCalendar;
import web.nl.kltn.service.ThesisReviewCalendarService;

@RestController
@RequestMapping("/api/thesis-review-calendar")
public class ThesisReviewCalendarController {

	@Autowired
	private ThesisReviewCalendarService thesisReviewCalendarServicel;

	@PostMapping("/insert-list")
	public ResponseModel<List<ThesisReviewCalendar>> insertList(
			@RequestBody RequestModel<List<ThesisReviewCalendar>> requestModel) {
		ResponseModel<List<ThesisReviewCalendar>> responseModel = new ResponseModel<>();
		List<ThesisReviewCalendar> calendars = requestModel.getData();
		try {
			responseModel.setData(thesisReviewCalendarServicel.insertList(calendars));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}
}
