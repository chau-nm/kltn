package web.nl.kltn.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import web.nl.kltn.mapper.generator.ThesisMapper;
import web.nl.kltn.mapper.generator.ThesisReviewerCommentMapper;
import web.nl.kltn.model.dto.ThesisReviewCommentDTO;
import web.nl.kltn.model.generator.Thesis;
import web.nl.kltn.model.generator.ThesisReviewerComment;
import web.nl.kltn.service.ThesisReviewerCommentService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class ThesisReviewerCommentServiceImpl implements ThesisReviewerCommentService {

	@Autowired
	private ThesisReviewerCommentMapper reviewerCommentMapper;

	@Autowired
	private ThesisMapper thesisMapper;

	@Override
	public List<ThesisReviewerComment> insertReviewer(String thesisId, List<String> userIds) throws Exception {
		try {
			List<ThesisReviewerComment> thesisReviewerComments = new ArrayList<>();
			for (String userId: userIds) {
				ThesisReviewerComment thesisReviewerComment = new ThesisReviewerComment();
				thesisReviewerComment.setId(UUID.randomUUID().toString());
				thesisReviewerComment.setThesisId(thesisId);
				thesisReviewerComment.setUserId(userId);
				thesisReviewerComment.setIsGeneral(false);
				thesisReviewerComment.setCreatedAt(new Date().getTime());
				thesisReviewerComment.setUpdatedAt(new Date().getTime());
				thesisReviewerComment.setIsDeleted(false);
				if (reviewerCommentMapper.insert(thesisReviewerComment) <= 0) {
					throw new Exception("Thêm thất bại");
				}
			}
			Thesis thesis = thesisMapper.selectByPrimaryKey(thesisId);
			thesis.setStatus(3);
			thesisMapper.updateByPrimaryKey(thesis);
			
			return thesisReviewerComments;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}

	@Override
	public void update(ThesisReviewerComment thesisReviewerComment) throws Exception {
		try {
			reviewerCommentMapper.updateByPrimaryKey(thesisReviewerComment);
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}

	@Override
	public ThesisReviewerComment insertGeneralComment(ThesisReviewerComment thesisReviewerComment) throws Exception {
		try {
			if (!thesisReviewerComment.getIsGeneral()) {
				throw new Exception("Có gì đó không đúng");
			}
			Thesis thesis = thesisMapper.selectByPrimaryKey(thesisReviewerComment.getThesisId());
			switch (thesisReviewerComment.getResult()) {
			case 1:
				thesis.setStatus(4);
				break;
			case 2:
				thesis.setStatus(-1);
				break;
			default:
				break;
			}
			thesisMapper.updateByPrimaryKey(thesis);
			return thesisReviewerComment;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}
}
