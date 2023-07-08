package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.model.generator.CriticalAssessment;
import web.nl.kltn.model.generator.Thesis;

public class ThesisDTO extends Thesis {
	private List<UserDTO> students;
	private List<UserDTO> teachers;
	private List<ThesisOutlineCommentDTO> thesisOutlineComments;
	private CriticalAssessmentDTO criticalAssessment;
	private ProtectionRatingScoreDTO protectionRatingScoreDTO;
	private long feedbackTime;
	private long protectdTime;

	public List<UserDTO> getStudents() {
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

	public void setStudents(List<UserDTO> students) {
		this.students = students;
	}

	public List<UserDTO> getTeachers() {
		return teachers;
	}

	public void setTeachers(List<UserDTO> teachers) {
		this.teachers = teachers;
	}

	public List<ThesisOutlineCommentDTO> getThesisOutlineComments() {
		return thesisOutlineComments;
	}

	public void setThesisOutlineComments(List<ThesisOutlineCommentDTO> thesisOutlineComments) {
		this.thesisOutlineComments = thesisOutlineComments;
	}
}
