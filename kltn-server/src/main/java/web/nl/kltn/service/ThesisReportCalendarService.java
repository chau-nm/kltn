package web.nl.kltn.service;

import web.nl.kltn.model.generator.ThesisReportCalendar;

public interface ThesisReportCalendarService {

	ThesisReportCalendar search(String thesisId, int type);

	void delete(String id);

	void update(ThesisReportCalendar thesisReportCalendar);

	ThesisReportCalendar insert(ThesisReportCalendar thesisReportCalendar) throws Exception;

}
