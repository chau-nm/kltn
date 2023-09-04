package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.ThesisSearchCondition;
import web.nl.kltn.model.generator.Thesis;

public interface ThesisCusMapper {
	public List<Thesis> search(int page, int pageSize, ThesisSearchCondition searchCondition);

	public int getTotal(ThesisSearchCondition searchCondition);

	public List<Thesis> findByUser(String userId);

	public int getTotalByCouncilId(ThesisSearchCondition searchCondition);

	public List<Thesis> findByCouncilPreviewerCommentId(String userId);

	public List<Thesis> searchThesisCAByUserId(String userId);
	
//	public List<Thesis> findThesisInvided(String userId);
	
	public List<Thesis> findThesisStudentInvided(String userId);
	
	public List<Thesis> findThesisLecturerInvided(String userId);
	
	public List<Thesis> findStudentThesis(String userId);
	
	public List<Thesis> findLecturerThesis(String userId);
	
	public List<Thesis> findThesisByReviewerMarker(String userId);
	
	public List<Thesis> findThesisByDefenseMarker(String userId);
	
}
