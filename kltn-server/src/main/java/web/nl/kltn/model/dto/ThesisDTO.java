package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.model.generator.CriticalAssessment;
import web.nl.kltn.model.generator.Thesis;
import web.nl.kltn.model.generator.User;

public class ThesisDTO extends Thesis {
	private List<User> students;
	private List<User> teachers;
	private List<ThesisOutlineCommentDTO> thesisOutlineComments;
	private CriticalAssessmentDTO criticalAssessment;
	private ProtectionRatingScoreDTO protectionRatingScoreDTO;
	private long feedbackTime;
	private long protectdTime;

	public List<User> getStudents() {
		return students;
	}

	public long getFeedbackTime() {
		return feedbackTime;
	}

	public CriticalAssessmentDTO getCriticalAssessment() {
		return criticalAssessment;
	}

	public void setCriticalAssessment(CriticalAssessmentDTO criticalAssessment) {
		this.criticalAssessment = criticalAssessment;
	}

	public ProtectionRatingScoreDTO getProtectionRatingScoreDTO() {
		return protectionRatingScoreDTO;
	}

	public void setProtectionRatingScoreDTO(ProtectionRatingScoreDTO protectionRatingScoreDTO) {
		this.protectionRatingScoreDTO = protectionRatingScoreDTO;
	}

	public void setFeedbackTime(long feedbackTime) {
		this.feedbackTime = feedbackTime;
	}

	public long getProtectdTime() {
		return protectdTime;
	}

	public void setProtectdTime(long protectdTime) {
		this.protectdTime = protectdTime;
	}

	public void setStudents(List<User> students) {
		this.students = students;
	}

	public List<User> getTeachers() {
		return teachers;
	}

	public void setTeachers(List<User> teachers) {
		this.teachers = teachers;
	}

	public List<ThesisOutlineCommentDTO> getThesisOutlineComments() {
		return thesisOutlineComments;
	}

	public void setThesisOutlineComments(List<ThesisOutlineCommentDTO> thesisOutlineComments) {
		this.thesisOutlineComments = thesisOutlineComments;
	}
	
	public void load(Thesis thesis) {
		this.setId(thesis.getId());
		this.setTopic(thesis.getTopic());
		this.setDescription(thesis.getDescription());
		this.setYear(thesis.getYear());
		this.setSemester(thesis.getSemester());
		this.setStatus(thesis.getStatus());
		this.setIsDeleted(thesis.getIsDeleted());
		this.setCreatedAt(thesis.getCreatedAt());
		this.setUpdatedAt(thesis.getUpdatedAt());
	}
}
