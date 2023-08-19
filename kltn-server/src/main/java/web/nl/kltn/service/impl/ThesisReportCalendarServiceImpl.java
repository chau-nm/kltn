package web.nl.kltn.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import web.nl.kltn.mapper.ThesisReportCalendarCusMapper;
import web.nl.kltn.mapper.generator.ThesisReportCalendarMapper;
import web.nl.kltn.model.generator.ThesisReportCalendar;
import web.nl.kltn.service.ThesisReportCalendarService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class ThesisReportCalendarServiceImpl implements ThesisReportCalendarService {

	@Autowired
	private ThesisReportCalendarMapper thesisReportCalendarMapper;

	@Autowired
	private ThesisReportCalendarCusMapper thesisReportCalendarCusMapper;

	@Override
	public ThesisReportCalendar insert(ThesisReportCalendar thesisReportCalendar) throws Exception {
		try {

			if (thesisReportCalendarMapper.insert(thesisReportCalendar) <= 0) {
				throw new Exception("Thêm lịch bảo vệ thất bại");
			}
			return thesisReportCalendar;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}

	@Override
	public void update(ThesisReportCalendar thesisReportCalendar) {
		thesisReportCalendarMapper.updateByPrimaryKey(thesisReportCalendar);
	}

	@Override
	public void delete(String id) {
		thesisReportCalendarMapper.deleteByPrimaryKey(id);
	}

	@Override
	public ThesisReportCalendar search(String thesisId, int type) {
		return thesisReportCalendarCusMapper.search(thesisId, type);
	}
}
