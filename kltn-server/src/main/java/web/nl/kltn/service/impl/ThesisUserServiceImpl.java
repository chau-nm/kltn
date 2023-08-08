package web.nl.kltn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import web.nl.kltn.mapper.ThesisUserCusMapper;
import web.nl.kltn.mapper.generator.ThesisUserMapper;
import web.nl.kltn.model.generator.ThesisUser;
import web.nl.kltn.model.generator.User;
import web.nl.kltn.service.ThesisUserService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class ThesisUserServiceImpl implements ThesisUserService {

	@Autowired
	private ThesisUserMapper thesisUserMapper;

	@Autowired
	private ThesisUserCusMapper thesisUserCusMapper;

	@Override
	public ThesisUser view(String id) {
		return thesisUserMapper.selectByPrimaryKey(id);
	}

	@Override
	public ThesisUser insert(ThesisUser thesisUser) {
		return thesisUserMapper.insert(thesisUser) > 0 ? thesisUser : null;
	}

	@Override
	public List<ThesisUser> insertList(List<ThesisUser> thesisUsers) {
		try {
			for (ThesisUser thesisUser : thesisUsers) {
				if (thesisUserMapper.insertSelective(thesisUser) <= 0) {
					throw new RuntimeException("Error");
				}
			}
			return thesisUsers;
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public void update(ThesisUser thesisUser) {
		thesisUserMapper.updateByPrimaryKey(thesisUser);
	}

	@Override
	public void delete(String id) {
		thesisUserMapper.deleteByPrimaryKey(id);
	}

	@Override
	public List<ThesisUser> searchByThesis(String thesisId) {
		return thesisUserCusMapper.searchByThesis(thesisId);
	}

	/**
	 * Search thesis_user with thesis_id and type Type: Student : 1 Teacher : 2
	 * 
	 * @param thesisId
	 * @param type     : type user
	 * @return
	 */
	@Override
	public List<ThesisUser> search(String thesisId, int type) {
		return thesisUserCusMapper.search(thesisId, type);
	}

	@Override
	public void deleteByThesisId(String thesisId) {
		thesisUserCusMapper.deleteByTheisId(thesisId);
	}
}
