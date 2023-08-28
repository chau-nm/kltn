package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.generator.ThesisReviewCalendar;

public interface ThesisReviewCalendarService {

	List<ThesisReviewCalendar> insertList(List<ThesisReviewCalendar> thesisReviewCalendars) throws Exception;

	ThesisReviewCalendar insert(ThesisReviewCalendar thesisReviewCalendar) throws Exception;

}
