package web.nl.kltn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import web.nl.kltn.mapper.generator.ThesisDefenseCalendarMapper;
import web.nl.kltn.mapper.generator.ThesisMapper;
import web.nl.kltn.model.generator.Thesis;
import web.nl.kltn.model.generator.ThesisDefenseCalendar;
import web.nl.kltn.service.ThesisDefenseCalendarService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class ThesisDefenseCalendarServiceImpl implements ThesisDefenseCalendarService{

	@Autowired
	private ThesisDefenseCalendarMapper thesisDefenseCalendarMapper;
	
	@Autowired
	private ThesisMapper thesisMapper;

	@Override
	public ThesisDefenseCalendar insert(ThesisDefenseCalendar thesisDefenseCalendar) throws Exception {
		try {
			if (thesisDefenseCalendarMapper.insert(thesisDefenseCalendar) <= 0) {
				throw new Exception("Thêm lịch bảo vệ thất bại");
			}
			Thesis thesis = thesisMapper.selectByPrimaryKey(thesisDefenseCalendar.getThesisId());
			thesis.setStatus(7);
			thesisMapper.updateByPrimaryKey(thesis);
			return thesisDefenseCalendar;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}

	@Override
	public List<ThesisDefenseCalendar> insertList(List<ThesisDefenseCalendar> thesisDefenseCalendars) throws Exception {
		try {
			for (ThesisDefenseCalendar thesisDefenseCalendar : thesisDefenseCalendars) {
				insert(thesisDefenseCalendar);
			}
			return thesisDefenseCalendars;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}
}
