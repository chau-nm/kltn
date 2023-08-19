package web.nl.kltn.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.generator.ThesisRegisterCalendar;
import web.nl.kltn.service.ThesisRegisterCalendarService;

@RestController
@RequestMapping("/api/thesis-register-calendar")
public class ThesisRegisterCalendarController {

	@Autowired
	private ThesisRegisterCalendarService thesisRegisterCalendarService;

	@GetMapping("/view")
	public ResponseModel<ThesisRegisterCalendar> getActiveCalendar() {
		ResponseModel<ThesisRegisterCalendar> responseModel = new ResponseModel<>();
		responseModel.setData(thesisRegisterCalendarService.getActiveCalendar());
		return responseModel;
	}

	@PostMapping("/insert")
	public ResponseModel<ThesisRegisterCalendar> insert(
			@RequestBody RequestModel<ThesisRegisterCalendar> theisRegisterCalendarRequest) {
		ResponseModel<ThesisRegisterCalendar> responseModel = new ResponseModel<>();
		ThesisRegisterCalendar thesisRegisterCalendar = theisRegisterCalendarRequest.getData();
		try {
			responseModel.setData(thesisRegisterCalendarService.insert(thesisRegisterCalendar));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}

	@PutMapping("/disable")
	public ResponseModel<Boolean> disableRegiter() {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		ThesisRegisterCalendar calendarActive = thesisRegisterCalendarService.getActiveCalendar();
		if (calendarActive == null) {
			responseModel.setData(false);
			return responseModel;
		}
		calendarActive.setActive(false);
		thesisRegisterCalendarService.update(calendarActive);
		responseModel.setData(true);
		return responseModel;
	}
}
