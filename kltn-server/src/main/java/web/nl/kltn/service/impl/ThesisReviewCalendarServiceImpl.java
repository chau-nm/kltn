package web.nl.kltn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import web.nl.kltn.mapper.ThesisReviewCalendarCusMapper;
import web.nl.kltn.mapper.generator.ThesisMapper;
import web.nl.kltn.mapper.generator.ThesisReviewCalendarMapper;
import web.nl.kltn.model.generator.Thesis;
import web.nl.kltn.model.generator.ThesisReviewCalendar;
import web.nl.kltn.service.ThesisReviewCalendarService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class ThesisReviewCalendarServiceImpl implements ThesisReviewCalendarService {

	@Autowired
	private ThesisReviewCalendarMapper thesisReviewCalendarMapper;
	
	@Autowired
	private ThesisReviewCalendarCusMapper thesisReviewCalendarCusMapper;
	
	@Autowired
	private ThesisMapper thesisMapper;

	@Override
	public ThesisReviewCalendar insert(ThesisReviewCalendar thesisReviewCalendar) throws Exception {
		try {
			if (thesisReviewCalendarMapper.insert(thesisReviewCalendar) <= 0) {
				throw new Exception("Thêm lịch phản biện thất bại");
			}
			Thesis thesis = thesisMapper.selectByPrimaryKey(thesisReviewCalendar.getThesisId());
			thesis.setStatus(5);
			thesisMapper.updateByPrimaryKey(thesis);
			return thesisReviewCalendar;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}

	@Override
	public List<ThesisReviewCalendar> insertList(List<ThesisReviewCalendar> thesisReviewCalendars) throws Exception {
		try {
			for (ThesisReviewCalendar thesisReviewCalendar : thesisReviewCalendars) {
				insert(thesisReviewCalendar);
			}
			return thesisReviewCalendars;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}
	
	@Override
	public ThesisReviewCalendar findByThesisId(String thesisId) {
		return thesisReviewCalendarCusMapper.getByThesisId(thesisId);
	}
}
