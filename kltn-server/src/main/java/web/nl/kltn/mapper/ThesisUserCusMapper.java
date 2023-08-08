package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.ThesisUser;
import web.nl.kltn.model.generator.User;

public interface ThesisUserCusMapper {
	
	public List<ThesisUser> search(String thesisId, int type);
	
	public void deleteByTheisId(String thesisId);
	
	public List<ThesisUser> searchByThesis(String thesisId);
}
