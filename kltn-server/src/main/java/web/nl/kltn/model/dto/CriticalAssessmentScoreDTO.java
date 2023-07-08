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
		this.setId(criticalAssessmentScore.getId());
		this.setCaId(criticalAssessmentScore.getCaId());
		this.setStudentId(criticalAssessmentScore.getStudentId());
		this.setScore1(criticalAssessmentScore.getScore1());
		this.setScore2(criticalAssessmentScore.getScore2());
		this.setScore3(criticalAssessmentScore.getScore3());
		this.setTotalScore(criticalAssessmentScore.getTotalScore());
		this.setIsDeleted(criticalAssessmentScore.getIsDeleted());
		this.setCreatedAt(criticalAssessmentScore.getCreatedAt());
		this.setUpdatedAt(criticalAssessmentScore.getUpdatedAt());
	}
}
