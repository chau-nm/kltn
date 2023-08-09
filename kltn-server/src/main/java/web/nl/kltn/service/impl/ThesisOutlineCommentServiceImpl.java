package web.nl.kltn.service.impl;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import web.nl.kltn.mapper.ThesisOutlineCommentCusMapper;
import web.nl.kltn.mapper.generator.ThesisOutlineCommentMapper;
import web.nl.kltn.model.generator.ThesisOutlineComment;
import web.nl.kltn.service.ThesisOutlineCommentService;

import static web.nl.kltn.common.Util.generateRandomString;

@Service
@Transactional(rollbackFor = Throwable.class)
public class ThesisOutlineCommentServiceImpl implements ThesisOutlineCommentService {

	@Autowired
	private ThesisOutlineCommentMapper thesisOutlineCommentMapper;

	@Autowired
	private ThesisOutlineCommentCusMapper thesisOutlineCommentCusMapper;

	@Override
	public List<ThesisOutlineComment> searchByThesisId(String thesisId) {
		return thesisOutlineCommentCusMapper.searchByThesisId(thesisId);
	}

	@Override
	public ThesisOutlineComment searchByUserId(String userId) {
		return thesisOutlineCommentCusMapper.searchByUserId(userId);
	}

	@Override
	public ThesisOutlineComment insert(ThesisOutlineComment thesisOutlineComment) {
		thesisOutlineComment.setId(String.valueOf(UUID.randomUUID()));
		thesisOutlineComment.setCreatedAt(new Date().getTime());
		thesisOutlineComment.setIsDeleted(false);
		thesisOutlineComment.setUpdatedAt(new Date().getTime());
		return thesisOutlineCommentMapper.insert(thesisOutlineComment) > 0 ? thesisOutlineComment : null;
	}

	@Override
	public void update(ThesisOutlineComment thesisOutlineComment) {
		thesisOutlineCommentMapper.updateByPrimaryKey(thesisOutlineComment);
	}

	@Override
	public void deleted(String id) {
		thesisOutlineCommentMapper.deleteByPrimaryKey(id);
	}
}
