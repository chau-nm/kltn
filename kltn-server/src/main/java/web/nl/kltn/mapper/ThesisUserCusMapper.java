package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.User;

public interface ThesisUserCusMapper {
	
	public List<User> search(String thesisId, int type);
}
