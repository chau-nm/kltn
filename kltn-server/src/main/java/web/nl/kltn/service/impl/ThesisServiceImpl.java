package web.nl.kltn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import web.nl.kltn.mapper.ThesisCusMapper;
import web.nl.kltn.mapper.generator.ThesisMapper;
import web.nl.kltn.model.ThesisSearchCondition;
import web.nl.kltn.model.generator.Thesis;
import web.nl.kltn.service.ThesisService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class ThesisServiceImpl implements ThesisService {

	@Autowired
	private ThesisMapper thesisMapper;
	
	@Autowired
	private ThesisCusMapper thesisCusMapper;

	@Override
	public Thesis insert(Thesis thesis) {
		return thesisMapper.insert(thesis) > 0 ? thesis : null;
	}

	@Override
	public void update(Thesis thesis) {
		thesisMapper.updateByPrimaryKey(thesis);
	}

	@Override
	public void delete(String id) {
		thesisMapper.deleteByPrimaryKey(id);
	}

	@Override
	public List<Thesis> search(int page, int pageSize, ThesisSearchCondition thesisSearchCondition) {
		return thesisCusMapper.search(page, pageSize, thesisSearchCondition);
	}
	
	@Override
	public int getTotal(ThesisSearchCondition searchCondition) {
		return thesisCusMapper.getTotal(searchCondition);
	}
}
