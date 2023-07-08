package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.User;

public interface ThesisUserCusMapper {
	
	public List<User> searchUser(String thesisId, int type);
	
	public void deleteByTheisId(String thesisId);
}
