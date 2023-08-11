package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.model.generator.*;

public class ThesisDTO extends Thesis {
	private User userCreated;
	private List<ThesisUserDTO> students;
	private ThesisUserDTO teacher;
	private List<String> outlineUrls;
	private List<ThesisOutlineCommentDTO> thesisOutlineComments;
	private CriticalAssessmentDTO criticalAssessment;
	private ProtectionRatingScoreDTO protectionRatingScoreDTO;
	private long feedbackTime;
	private long protectdTime;

	public List<ThesisUserDTO> getStudents() {
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

	public void setStudents(List<ThesisUserDTO> students) {
		this.students = students;
	}

	public ThesisUserDTO getTeacher() {
		return teacher;
	}

	public void setTeacher(ThesisUserDTO teacher) {
		this.teacher = teacher;
	}

	public List<ThesisOutlineCommentDTO> getThesisOutlineComments() {
		return thesisOutlineComments;
	}

	public void setThesisOutlineComments(List<ThesisOutlineCommentDTO> thesisOutlineComments) {
		this.thesisOutlineComments = thesisOutlineComments;
	}

	public List<String> getOutlineUrls() {
		return outlineUrls;
	}

	public void setOutlineUrls(List<String> outlineUrls) {
		this.outlineUrls = outlineUrls;
	}

	public User getUserCreated() {
		return userCreated;
	}

	public void setUserCreated(User userCreated) {
		this.userCreated = userCreated;
	}

	public void load(Thesis thesis) {
		this.setId(thesis.getId());
		this.setTopic(thesis.getTopic());
		this.setDescription(thesis.getDescription());
		this.setYear(thesis.getYear());
		this.setSemester(thesis.getSemester());
		this.setStatus(thesis.getStatus());
		this.setCreatedBy(thesis.getCreatedBy());
		this.setIsDeleted(thesis.getIsDeleted());
		this.setCreatedAt(thesis.getCreatedAt());
		this.setUpdatedAt(thesis.getUpdatedAt());
	}
}
