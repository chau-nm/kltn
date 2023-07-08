package web.nl.kltn.model.dto;

import web.nl.kltn.model.generator.ProtectionRatingScore;
import web.nl.kltn.model.generator.User;

public class ProtectionRatingScoreDTO extends ProtectionRatingScore{

	private User student;
	
	public User getStudent() {
		return student;
	}
	
	public void setStudent(User student) {
		this.student = student;
	}
	
	public void load(ProtectionRatingScore protectionRatingScore) {
		this.setId(protectionRatingScore.getId());
		this.setPrId(protectionRatingScore.getPrId());
		this.setStudentId(protectionRatingScore.getStudentId());
		this.setScore(protectionRatingScore.getScore());
		this.setIsDeleted(protectionRatingScore.getIsDeleted());
		this.setCreatedAt(protectionRatingScore.getCreatedAt());
		this.setUpdatedAt(protectionRatingScore.getUpdatedAt());
	}
}
