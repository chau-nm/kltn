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
	}
}
