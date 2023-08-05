package web.nl.kltn.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import web.nl.kltn.mapper.ThesisRegisterCalendarCusMapper;
import web.nl.kltn.mapper.generator.ThesisRegisterCalendarMapper;
import web.nl.kltn.model.generator.ThesisRegisterCalendar;
import web.nl.kltn.service.ThesisRegisterCalendarService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class ThesisRegisterCalendarServiceImpl implements ThesisRegisterCalendarService{

	@Autowired
	private ThesisRegisterCalendarMapper thesisRegisterCalendarMapper;

	@Autowired
	private ThesisRegisterCalendarCusMapper thesisRegisterCalendarCusMapper;
	
	@Override
	public ThesisRegisterCalendar getActiveCalendar() {
		return thesisRegisterCalendarCusMapper.getActiveRegisterCalendar();
	}
	
	@Override
	public ThesisRegisterCalendar insert(ThesisRegisterCalendar thesisRegisterCalendar) {
		return thesisRegisterCalendarMapper.insert(thesisRegisterCalendar) > 0 ? thesisRegisterCalendar : null;
	}
	
	@Override
	public void update(ThesisRegisterCalendar thesisRegisterCalendar) {
		thesisRegisterCalendarMapper.updateByPrimaryKey(thesisRegisterCalendar);
	}
	
	@Override
	public void deleted(int id) {
		thesisRegisterCalendarMapper.deleteByPrimaryKey(id);
	}
}