package web.nl.kltn.model.dto;

import web.nl.kltn.model.generator.ReviewerScore;
import web.nl.kltn.model.generator.User;

public class ReviewerScoreDTO extends ReviewerScore {

	private StudentDTO student;

	public User getStudent() {
		return student;
	}

	public void setStudent(StudentDTO student) {
		this.student = student;
	}

	public void load(ReviewerScore reviewerScore) {
		this.setId(reviewerScore.getId());
		this.setReviewerId(reviewerScore.getReviewerId());
		this.setStudentId(reviewerScore.getStudentId());
		this.setScore(reviewerScore.getScore());
		this.setIsDeleted(reviewerScore.getIsDeleted());
		this.setCreatedAt(reviewerScore.getCreatedAt());
		this.setUpdatedAt(reviewerScore.getUpdatedAt());
	}

}
