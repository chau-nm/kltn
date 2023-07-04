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
public class ThesisUserServiceImpl implements ThesisUserService{

	@Autowired
	private ThesisUserMapper thesisUserMapper;
	
	@Autowired
	private ThesisUserCusMapper thesisUserCusMapper;
	
	public ThesisUser insert(ThesisUser thesisUser) {
		return thesisUserMapper.insert(thesisUser) > 0 ? thesisUser : null;
	}
	
	public List<ThesisUser> insertList(List<ThesisUser> thesisUsers){
		try {
			for(ThesisUser thesisUser: thesisUsers) {
				if (thesisUserMapper.insertSelective(thesisUser) <= 0) {
					throw new RuntimeException("Error");
				}
			}
			return thesisUsers;
		}catch (Exception e) {
			return null;
		}
	}
	
	public void update(ThesisUser thesisUser) {
		thesisUserMapper.updateByPrimaryKey(thesisUser);
	}
	
	public void delete(String id) {
		thesisUserMapper.deleteByPrimaryKey(id);
	}
	/**
	 * Search thesis_user with thesis_id and type
	 * Type:
	 * 	Student : 1
	 * 	Teacher : 2
	 * @param thesisId
	 * @param type : type user
	 * @return
	 */
	public List<User> search(String thesisId, int type){
		return null;
	}
}
