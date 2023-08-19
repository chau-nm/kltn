package web.nl.kltn.controllers;

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
import web.nl.kltn.model.generator.ThesisReportCalendar;
import web.nl.kltn.service.ThesisReportCalendarService;

@RestController
@RequestMapping("api/thesis-report-calendar")
public class ThesisReportCalendarContronller {

	@Autowired
	private ThesisReportCalendarService thesisReportCalendarService;

	@GetMapping("/view")
	public ResponseModel<ThesisReportCalendar> view(@RequestParam(required = true) String thesisId,
			@RequestParam(required = true) int type) {
		ResponseModel<ThesisReportCalendar> responseModel = new ResponseModel<>();
		responseModel.setData(thesisReportCalendarService.search(thesisId, type));
		return responseModel;
	}

	@PostMapping("/insert")
	public ResponseModel<ThesisReportCalendar> insert(
			@RequestBody RequestModel<ThesisReportCalendar> thesisReportCalendarRequest) {
		ThesisReportCalendar thesisReportCalendar = thesisReportCalendarRequest.getData();
		ResponseModel<ThesisReportCalendar> responseModel = new ResponseModel<>();
		try {
			responseModel.setData(thesisReportCalendarService.insert(thesisReportCalendar));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}

	@PutMapping("/update")
	public ResponseModel<Boolean> update(@RequestBody RequestModel<ThesisReportCalendar> thesisReportCalendarRequest) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		try {
			ThesisReportCalendar thesisReportCalendar = new ThesisReportCalendar();
			thesisReportCalendarService.update(thesisReportCalendar);
			responseModel.setData(true);
		} catch (Exception exception) {
			responseModel.setMessage(exception.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}

	@DeleteMapping("/delete/{id}")
	public ResponseModel<Boolean> update(@PathVariable String id) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		try {
			thesisReportCalendarService.delete(id);
			responseModel.setData(true);
		} catch (Exception exception) {
			responseModel.setMessage(exception.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}
}
