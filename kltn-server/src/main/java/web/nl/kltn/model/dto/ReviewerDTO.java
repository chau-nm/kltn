package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.mapper.LecturerCusMapper;
import web.nl.kltn.mapper.ReviewerQuestionCusMapper;
import web.nl.kltn.mapper.ReviewerScoreCusMapper;
import web.nl.kltn.mapper.StudentCusMapper;
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
	
	public static List<ReviewerDTO> getDTOsFromEntities(List<Reviewer> reviewers, LecturerCusMapper lecturerCusMapper,
			ReviewerScoreCusMapper reviewerScoreCusMapper, StudentCusMapper studentCusMapper,
			ReviewerQuestionCusMapper questionCusMapper) {
		return reviewers
				.stream()
				.map(r -> {
					ReviewerDTO reviewerDTO = new ReviewerDTO();
					reviewerDTO.load(r, lecturerCusMapper, reviewerScoreCusMapper, studentCusMapper, questionCusMapper);
					return reviewerDTO;
				})
				.toList();
	}

	public void load(Reviewer reviewer, LecturerCusMapper lecturerCusMapper,
			ReviewerScoreCusMapper reviewerScoreCusMapper, StudentCusMapper studentCusMapper,
			ReviewerQuestionCusMapper questionCusMapper) {
		this.setId(reviewer.getId());
		this.setAdvantage(reviewer.getAdvantage());
		this.setCalculationSoftwareNumber(reviewer.getCalculationSoftwareNumber());
		this.setChapterNumber(reviewer.getChapterNumber());
		this.setChartNumber(reviewer.getChartNumber());
		this.setConclude(reviewer.getConclude());
		this.setCreatedAt(reviewer.getCreatedAt());
		this.setDocumentNumber(reviewer.getDocumentNumber());
		this.setDrawingBoardNumber(reviewer.getDrawingBoardNumber());
		this.setImageNumber(reviewer.getImageNumber());
		this.setIsDeleted(reviewer.getIsDeleted());
		this.setLayout(reviewer.getLayout());
		this.setLimitation(reviewer.getLimitation());
		this.setMarker(reviewer.getMarker());
		this.setPageNumber(reviewer.getPageNumber());
		this.setSuggestion(reviewer.getSuggestion());
		this.setTableNumber(reviewer.getTableNumber());
		this.setTechnicalTerms(reviewer.getTechnicalTerms());
		this.setThesisId(reviewer.getThesisId());
		this.setUpdatedAt(reviewer.getUpdatedAt());
		this.setWriting(reviewer.getWriting());
		if (lecturerCusMapper != null) {
			this.setlecturerMaker(lecturerCusMapper.getLecturerByUserId(reviewer.getMarker()));
		}
		if (reviewerScoreCusMapper != null) {
			this.setReviewerScores(ReviewerScoreDTO.getDTOByEntity(
					reviewerScoreCusMapper.findReviewerScoreByReviewerId(reviewer.getId()), studentCusMapper));
		}
		if (questionCusMapper != null) {
			this.setQuestions(questionCusMapper.findReviewerQuestionByReviewerId(reviewer.getId()).stream().map(q -> {
				return q.getQuestion();
			}).toList());
		}
	}
}
