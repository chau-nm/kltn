package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.mapper.StudentCusMapper;
import web.nl.kltn.mapper.UserCusMapper;
import web.nl.kltn.model.generator.DefenseRatingScore;
import web.nl.kltn.model.generator.ReviewerScore;
import web.nl.kltn.model.generator.Student;
import web.nl.kltn.model.generator.User;

public class DefenseRatingScoreDTO extends DefenseRatingScore {
	private StudentDTO student;

	public StudentDTO getStudent() {
		return student;
	}

	public void setStudent(StudentDTO student) {
		this.student = student;
	}
	
	public static List<DefenseRatingScoreDTO> getDTOByEntity(List<DefenseRatingScore> defenseRatingScores, StudentCusMapper studentCusMapper) {
		return defenseRatingScores
				.stream()
				.map(dr -> {
					DefenseRatingScoreDTO defenseRatingScoreDTO = new DefenseRatingScoreDTO();
					defenseRatingScoreDTO.load(dr, studentCusMapper);
					return defenseRatingScoreDTO;
				})
				.toList();
	}

	public void load(DefenseRatingScore defenseRatingScore, StudentCusMapper userCusMapper) {
		this.setId(defenseRatingScore.getId());
		this.setDrId(defenseRatingScore.getDrId());
		this.setStudentId(defenseRatingScore.getStudentId());
		this.setScore1(defenseRatingScore.getScore1());
		this.setScore2(defenseRatingScore.getScore2());
		this.setScore3(defenseRatingScore.getScore3());
		this.setTotalScore(defenseRatingScore.getTotalScore());
		this.setIsDeleted(defenseRatingScore.getIsDeleted());
		this.setCreatedAt(defenseRatingScore.getCreatedAt());
		this.setUpdatedAt(defenseRatingScore.getUpdatedAt());
		if (userCusMapper != null) {
			this.setStudent(userCusMapper.getStudentByUserId(defenseRatingScore.getStudentId()));
		}
	}
}
