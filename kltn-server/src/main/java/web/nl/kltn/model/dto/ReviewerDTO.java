package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.model.generator.Reviewer;

public class ReviewerDTO extends Reviewer {
	private List<ReviewerScoreDTO> reviewerScores;

	private List<String> questions;
	
	private LeturerDTO leturerMaker;

	public void setReviewerScores(List<ReviewerScoreDTO> reviewerScores) {
		this.reviewerScores = reviewerScores;
	}

	public List<ReviewerScoreDTO> getReviewerScores() {
		return reviewerScores;
	}

	public List<String> getQuestions() {
		return questions;
	}

	public void setQuestions(List<String> questions) {
		this.questions = questions;
	}
	
	public LeturerDTO getLeturerMaker() {
		return leturerMaker;
	}
	
	public void setLeturerMaker(LeturerDTO leturerMaker) {
		this.leturerMaker = leturerMaker;
	}
}
