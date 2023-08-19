package web.nl.kltn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import web.nl.kltn.mapper.ThesisCusMapper;
import web.nl.kltn.mapper.ThesisUserCusMapper;
import web.nl.kltn.mapper.generator.ThesisMapper;
import web.nl.kltn.mapper.generator.ThesisUserMapper;
import web.nl.kltn.model.generator.Thesis;
import web.nl.kltn.model.generator.ThesisUser;
import web.nl.kltn.service.ThesisUserService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class ThesisUserServiceImpl implements ThesisUserService {

	@Autowired
	private ThesisUserMapper thesisUserMapper;

	@Autowired
	private ThesisUserCusMapper thesisUserCusMapper;

	@Autowired
	private ThesisMapper thesisMapper;

	@Autowired
	private ThesisCusMapper thesisCusMapper;

	@Override
	public ThesisUser view(String id) {
		return thesisUserMapper.selectByPrimaryKey(id);
	}

	@Override
	public ThesisUser insert(ThesisUser thesisUser) {
		return thesisUserMapper.insert(thesisUser) > 0 ? thesisUser : null;
	}

	@Override
	public List<ThesisUser> insertList(List<ThesisUser> thesisUsers) throws Exception {
		try {
			for (ThesisUser thesisUser : thesisUsers) {
				if (thesisUserMapper.insertSelective(thesisUser) <= 0) {
					throw new RuntimeException("Error");
				}
			}
			return thesisUsers;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}

	@Override
	public void update(ThesisUser thesisUser) throws Exception {
		try {
			thesisUserMapper.updateByPrimaryKey(thesisUser);
			List<ThesisUser> thesisUsers = thesisUserCusMapper.searchByThesis(thesisUser.getThesisId());
			List<ThesisUser> thesisUserDontAccept = thesisUsers.stream().filter(tu -> tu.getStatus() != 1).toList();
			if (thesisUserDontAccept.size() == 0) {
				Thesis thesis = thesisMapper.selectByPrimaryKey(thesisUser.getThesisId());
				thesis.setStatus(2);
				thesisMapper.updateByPrimaryKey(thesis);
			}
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}

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
