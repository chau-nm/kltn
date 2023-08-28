package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.generator.ThesisDefenseCalendar;

public interface ThesisDefenseCalendarService {

	List<ThesisDefenseCalendar> insertList(List<ThesisDefenseCalendar> thesisDefenseCalendars) throws Exception;

	ThesisDefenseCalendar insert(ThesisDefenseCalendar thesisDefenseCalendar) throws Exception;

}
