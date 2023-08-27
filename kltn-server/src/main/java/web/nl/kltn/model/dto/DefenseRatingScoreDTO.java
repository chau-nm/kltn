package web.nl.kltn.model.dto;

import web.nl.kltn.model.generator.DefenseRatingScore;
import web.nl.kltn.model.generator.User;

public class DefenseRatingScoreDTO extends DefenseRatingScore {
	private User student;

	public User getStudent() {
		return student;
	}

	public void setStudent(User student) {
		this.student = student;
	}

}
