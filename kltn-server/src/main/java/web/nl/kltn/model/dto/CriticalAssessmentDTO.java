package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.model.generator.CriticalAssessment;
import web.nl.kltn.model.generator.CriticalAssessmentQuestion;
import web.nl.kltn.model.generator.User;

public class CriticalAssessmentDTO extends CriticalAssessment {

	private List<CriticalAssessmentScoreDTO> critialAssessmentScores;
	private List<String> criticalAssessmentQuestions;
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

	public List<String> getCriticalAssessmentQuestions() {
		return criticalAssessmentQuestions;
	}

	public void setCriticalAssessmentQuestions(List<String> criticalAssessmentQuestions) {
		this.criticalAssessmentQuestions = criticalAssessmentQuestions;
	}

	public void load(CriticalAssessment criticalAssessment) {
	}
}
