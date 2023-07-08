package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.model.generator.ProtectionRating;
import web.nl.kltn.model.generator.ProtectionRatingQuestion;
import web.nl.kltn.model.generator.User;

public class ProtectionRatingDTO extends ProtectionRating {
	private User userMaker;
	private List<ProtectionRatingQuestion> questions;
	private List<ProtectionRatingScoreDTO> scores;

	public User getUserMaker() {
		return userMaker;
	}

	public void setUserMaker(User userMaker) {
		this.userMaker = userMaker;
	}

	public List<ProtectionRatingQuestion> getQuestions() {
		return questions;
	}

	public void setQuestions(List<ProtectionRatingQuestion> questions) {
		this.questions = questions;
	}

	public List<ProtectionRatingScoreDTO> getScores() {
		return scores;
	}

	public void setScores(List<ProtectionRatingScoreDTO> scores) {
		this.scores = scores;
	}
	
	public void load(ProtectionRating protectionRating) {
		this.setId(protectionRating.getId());
		this.setThesisId(protectionRating.getThesisId());
		this.setMarker(protectionRating.getMarker());
		this.setPageNumber(protectionRating.getPageNumber());
		this.setChapterNumber(protectionRating.getChapterNumber());
		this.setTableNumber(protectionRating.getTableNumber());
		this.setChartBumber(protectionRating.getChartBumber());
		this.setDrawingBoardNumber(protectionRating.getDrawingBoardNumber());
		this.setImageNumber(protectionRating.getImageNumber());
		this.setDocumentNumber(protectionRating.getDocumentNumber());
		this.setCalculationSoftwareNumber(protectionRating.getCalculationSoftwareNumber());
		this.setWriting(protectionRating.getWriting());
		this.setTechnicalTerms(protectionRating.getTechnicalTerms());
		this.setAdvantage(protectionRating.getAdvantage());
		this.setConclude(protectionRating.getConclude());
		this.setSuggestion(protectionRating.getSuggestion());
		this.setIsDeleted(protectionRating.getIsDeleted());
		this.setCreatedAt(protectionRating.getCreatedAt());
		this.setUpdatedAt(protectionRating.getUpdatedAt());
	}
}
