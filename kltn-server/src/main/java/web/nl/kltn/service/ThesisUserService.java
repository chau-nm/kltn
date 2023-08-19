package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.generator.ThesisUser;

public interface ThesisUserService {

	/**
	 * Search thesis_user with thesis_id and type Type: Student : 1 Teacher : 2
	 * 
	 * @param thesisId
	 * @param type     : type user
	 * @return
	 */
	List<ThesisUser> search(String thesisId, int type);

	void delete(String id);

	void update(ThesisUser thesisUser) throws Exception;

	List<ThesisUser> insertList(List<ThesisUser> thesisUsers) throws Exception;

	ThesisUser insert(ThesisUser thesisUser);

	void deleteByThesisId(String thesisId);

	List<ThesisUser> searchByThesis(String thesisId);

	ThesisUser view(String id);

}
