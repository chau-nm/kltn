package web.nl.kltn.model.dto;

import web.nl.kltn.model.generator.CriticalAssessmentScore;
import web.nl.kltn.model.generator.User;

public class CriticalAssessmentScoreDTO extends CriticalAssessmentScore{

	private User student;
	
	public User getStudent() {
		return student;
	}
	
	public void setStudent(User student) {
		this.student = student;
	}
	
	public void load(CriticalAssessmentScore criticalAssessmentScore) {
	}
}
