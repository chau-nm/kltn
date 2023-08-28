package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.mapper.StudentCusMapper;
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
	
	public static List<ReviewerScoreDTO> getDTOByEntity(List<ReviewerScore> reviewerScores, StudentCusMapper studentCusMapper) {
		return reviewerScores
				.stream()
				.map(rs -> {
					ReviewerScoreDTO reviewerScoreDTO = new ReviewerScoreDTO();
					reviewerScoreDTO.load(rs, studentCusMapper);
					return reviewerScoreDTO;
				})
				.toList();
	}

	public void load(ReviewerScore reviewerScore, StudentCusMapper studentCusMapper) {
		this.setId(reviewerScore.getId());
		this.setReviewerId(reviewerScore.getReviewerId());
		this.setStudentId(reviewerScore.getStudentId());
		this.setScore(reviewerScore.getScore());
		this.setIsDeleted(reviewerScore.getIsDeleted());
		this.setCreatedAt(reviewerScore.getCreatedAt());
		this.setUpdatedAt(reviewerScore.getUpdatedAt());
		if (studentCusMapper != null) {
			this.setStudent(studentCusMapper.getStudentByUserId(reviewerScore.getStudentId()));
		}
	}

}
