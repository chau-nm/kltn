package web.nl.kltn.service;

import web.nl.kltn.model.generator.ThesisRegisterCalendar;

public interface ThesisRegisterCalendarService {

	ThesisRegisterCalendar getActiveCalendar();

	void deleted(int id);

	void update(ThesisRegisterCalendar thesisRegisterCalendar);

	ThesisRegisterCalendar insert(ThesisRegisterCalendar thesisRegisterCalendar);

}
