package web.nl.kltn.service.impl;

import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import web.nl.kltn.mapper.ReviewerCusMapper;
import web.nl.kltn.mapper.ReviewerQuestionCusMapper;
import web.nl.kltn.mapper.ReviewerScoreCusMapper;
import web.nl.kltn.mapper.generator.ReviewerMapper;
import web.nl.kltn.mapper.generator.ReviewerQuestionMapper;
import web.nl.kltn.mapper.generator.ReviewerScoreMapper;
import web.nl.kltn.mapper.generator.ThesisMapper;
import web.nl.kltn.model.dto.ReviewerDTO;
import web.nl.kltn.model.dto.ReviewerScoreDTO;
import web.nl.kltn.model.generator.Reviewer;
import web.nl.kltn.model.generator.ReviewerExample;
import web.nl.kltn.model.generator.ReviewerQuestion;
import web.nl.kltn.model.generator.Thesis;
import web.nl.kltn.service.ThesisReviewerService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class ThesisReviewerServiceImpl implements ThesisReviewerService{

	@Autowired
	private ReviewerMapper reviewerMapper;
	
	@Autowired
	private ReviewerCusMapper reviewerCusMapper;
	
	@Autowired
	private ReviewerScoreMapper reviewerScoreMapper;
	
	@Autowired
	private ReviewerScoreCusMapper reviewerScoreCusMapper;
	
	@Autowired
	private ReviewerQuestionMapper reviewerQuestionMapper;
	
	@Autowired
	private ReviewerQuestionCusMapper reviewerQuestionCusMapper;
	
	@Autowired
	private ThesisMapper thesisMapper;
	
	@Override
	public Reviewer insertUserReviewer(String thesisId, String userId) throws Exception{
		try {
			Reviewer reviewer = new Reviewer();
			reviewer.setId(UUID.randomUUID().toString());
			reviewer.setThesisId(thesisId);
			reviewer.setMarker(userId);
			reviewer.setIsDeleted(false);
			reviewer.setCreatedAt(new Date().getTime());
			reviewer.setUpdatedAt(new Date().getTime());
			
			if (reviewerMapper.insert(reviewer) <= 0) {
				throw new Exception("Thêm người phản biện thất bại");
			}
			return reviewer;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}
	
	@Override
	public ReviewerDTO update(ReviewerDTO reviewerDTO) throws Exception {
		try {
			if (reviewerMapper.updateByPrimaryKey(reviewerDTO) <= 0) {
				throw new Exception("Cập nhật phản biện thất bại");
			}
			reviewerScoreCusMapper.deleteAllByReviewerId(reviewerDTO.getId());
			for (ReviewerScoreDTO reviewerScoreDTO: reviewerDTO.getReviewerScores()) {
				if (reviewerScoreMapper.insert(reviewerScoreDTO) <= 0) {
					throw new Exception("Cập nhật phản biện thất bại");
				}
			}
			reviewerQuestionCusMapper.deleteAllByReviewerId(reviewerDTO.getId());
			for (String question: reviewerDTO.getQuestions()) {
				ReviewerQuestion reviewerQuestion = new ReviewerQuestion();
				reviewerQuestion.setId(UUID.randomUUID().toString());
				reviewerQuestion.setQuestion(question);
				reviewerQuestion.setReviewerId(reviewerDTO.getId());
				reviewerQuestion.setIsDeleted(false);
				reviewerQuestion.setCreatedAt(new Date().getTime());
				reviewerQuestion.setUpdatedAt(new Date().getTime());
				
				if (reviewerQuestionMapper.insert(reviewerQuestion) <= 0) {
					throw new Exception("Cập nhật phản biện thất bại");
				}
			}
			Thesis thesis = thesisMapper.selectByPrimaryKey(reviewerDTO.getThesisId());
			switch(reviewerDTO.getSuggestion()) {
				case 1:
					thesis.setStatus(6);
					break;
				case 2:
					thesis.setStatus(6);
					break;
				case 3:
					thesis.setStatus(-1);
					break;
				case 4:
					thesis.setStatus(4);
					break;
				default:
					break;
			}
			thesisMapper.updateByPrimaryKey(thesis);
			return reviewerDTO;
		}catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}
}
