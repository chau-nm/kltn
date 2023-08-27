package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.model.generator.Reviewer;

public class ReviewerDTO extends Reviewer {
	private List<ReviewerScoreDTO> reviewerScores;

	private List<String> questions;
	
	private LecturerDTO lecturerMaker;

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
	
	public LecturerDTO getlecturerMaker() {
		return lecturerMaker;
	}
	
	public void setlecturerMaker(LecturerDTO lecturerMaker) {
		this.lecturerMaker = lecturerMaker;
	}
}
