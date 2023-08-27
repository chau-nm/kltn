package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.ThesisLecturer;

public interface ThesisLecturerCusMapper {

	public List<ThesisLecturer> getThesisLecturerByThesisId(String thesisId);
	
	public void acceptInvite(String thesisId, String userId);

	public void declineInvite(String thesisId, String userId);
}
