package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.mapper.DefenseRatingScoreCusMapper;
import web.nl.kltn.mapper.LecturerCusMapper;
import web.nl.kltn.mapper.ReviewerQuestionCusMapper;
import web.nl.kltn.mapper.ReviewerScoreCusMapper;
import web.nl.kltn.mapper.StudentCusMapper;
import web.nl.kltn.mapper.UserCusMapper;
import web.nl.kltn.model.generator.DefenseRating;
import web.nl.kltn.model.generator.Reviewer;
import web.nl.kltn.model.generator.User;

public class DefenseRatingDTO extends DefenseRating {
	private LecturerDTO userMaker;
	private List<DefenseRatingScoreDTO> scores;

	public LecturerDTO getUserMaker() {
		return userMaker;
	}

	public void setUserMaker(LecturerDTO userMaker) {
		this.userMaker = userMaker;
	}

	public List<DefenseRatingScoreDTO> getScores() {
		return scores;
	}

	public void setScores(List<DefenseRatingScoreDTO> scores) {
		this.scores = scores;
	}
	
	public static List<DefenseRatingDTO> getDTOsFromEntities(List<DefenseRating> defenseRatings, LecturerCusMapper lecturerCusMapper,
			DefenseRatingScoreCusMapper defenseRatingScoreCusMapper, StudentCusMapper studentCusMapper) {
		return defenseRatings
				.stream()
				.map(d -> {
					DefenseRatingDTO defenseRatingDTO = new DefenseRatingDTO();
					defenseRatingDTO.load(d, lecturerCusMapper, defenseRatingScoreCusMapper, studentCusMapper);
					return defenseRatingDTO;
				})
				.toList();
	}

	public void load(DefenseRating defenseRating, LecturerCusMapper lecturerCusMapper,
			DefenseRatingScoreCusMapper defenseRatingScoreCusMapper, StudentCusMapper studentCusMapper) {
		this.setId(defenseRating.getId());
		this.setThesisId(defenseRating.getThesisId());
		this.setMarker(defenseRating.getMarker());
		this.setContentScore(defenseRating.getContentScore());
		this.setAnalysisResultScore(defenseRating.getAnalysisResultScore());
		this.setFeedbackLecturerQuestionScore(defenseRating.getFeedbackLecturerQuestionScore());
		this.setCouncilQuestionScore(defenseRating.getCouncilQuestionScore());
		this.setBehaviorScore(defenseRating.getBehaviorScore());
		this.setIsDeleted(defenseRating.getIsDeleted());
		this.setCreatedAt(defenseRating.getCreatedAt());
		this.setUpdatedAt(defenseRating.getUpdatedAt());
		if (lecturerCusMapper != null) {
			this.setUserMaker(lecturerCusMapper.getLecturerByUserId(defenseRating.getMarker()));
		}
		if (defenseRatingScoreCusMapper != null) {
			this.setScores(DefenseRatingScoreDTO.getDTOByEntity(
					defenseRatingScoreCusMapper.findByDefenseRatingId(defenseRating.getId()), studentCusMapper));
		}
	}
}
