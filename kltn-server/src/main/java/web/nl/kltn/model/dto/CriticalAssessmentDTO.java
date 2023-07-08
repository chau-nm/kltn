package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.model.generator.CriticalAssessment;
import web.nl.kltn.model.generator.User;

public class CriticalAssessmentDTO extends CriticalAssessment {

	private List<CriticalAssessmentScoreDTO> critialAssessmentScores;
	private User userMaker;
	
	public User getUserMaker() {
		return userMaker;
	}
	
	public void setUserMaker(User userMaker) {
		this.userMaker = userMaker;
	}

	public List<CriticalAssessmentScoreDTO> getCritialAssessmentScores() {
		return critialAssessmentScores;
	}

	public void setCritialAssessmentScores(List<CriticalAssessmentScoreDTO> critialAssessmentScores) {
		this.critialAssessmentScores = critialAssessmentScores;
	}
	
	public void load(CriticalAssessment criticalAssessment) {
		this.setId(criticalAssessment.getId());
		this.setThesisId(criticalAssessment.getThesisId());
		this.setContent(criticalAssessment.getContent());
		this.setAnalysisResults(criticalAssessment.getAnalysisResults());
		this.setFeedbackLecturerQuestion(criticalAssessment.getFeedbackLecturerQuestion());
		this.setCouncilQuestion(criticalAssessment.getCouncilQuestion());
		this.setBehavior(criticalAssessment.getBehavior());
		this.setMarker(criticalAssessment.getMarker());
		this.setIsDeleted(criticalAssessment.getIsDeleted());
		this.setCreatedAt(criticalAssessment.getCreatedAt());
		this.setUpdatedAt(criticalAssessment.getUpdatedAt());
	}
}
