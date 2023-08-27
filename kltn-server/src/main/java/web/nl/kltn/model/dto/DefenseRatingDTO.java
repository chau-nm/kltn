package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.model.generator.DefenseRating;
import web.nl.kltn.model.generator.User;

public class DefenseRatingDTO extends DefenseRating{
	private User userMaker;
	private List<DefenseRatingScoreDTO> scores;

	public User getUserMaker() {
		return userMaker;
	}

	public void setUserMaker(User userMaker) {
		this.userMaker = userMaker;
	}

	public List<DefenseRatingScoreDTO> getScores() {
		return scores;
	}

	public void setScores(List<DefenseRatingScoreDTO> scores) {
		this.scores = scores;
	}
	
	
}
