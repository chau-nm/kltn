package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.model.generator.ProtectionRating;
import web.nl.kltn.model.generator.ProtectionRatingQuestion;
import web.nl.kltn.model.generator.User;

public class ProtectionRatingDTO extends ProtectionRating {
	private User userMaker;
	private List<ProtectionRatingScoreDTO> scores;

	public User getUserMaker() {
		return userMaker;
	}

	public void setUserMaker(User userMaker) {
		this.userMaker = userMaker;
	}

	public List<ProtectionRatingScoreDTO> getScores() {
		return scores;
	}

	public void setScores(List<ProtectionRatingScoreDTO> scores) {
		this.scores = scores;
	}
	
	public void load(ProtectionRating protectionRating) {
	}
}
