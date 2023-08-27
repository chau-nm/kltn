package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.ThesisStudent;

public interface ThesisStudentCusMapper {

	public List<ThesisStudent> getThesisStudentByThesisId(String thesisId);
	
	public void acceptInvite(String thesisId, String userId);
	
	public void declineInvite(String thesisId, String userId);
}
