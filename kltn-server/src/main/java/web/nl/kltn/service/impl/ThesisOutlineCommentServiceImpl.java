package web.nl.kltn.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import web.nl.kltn.mapper.ThesisOutlineCommentCusMapper;
import web.nl.kltn.mapper.UserCusMapper;
import web.nl.kltn.mapper.generator.ThesisOutlineCommentMapper;
import web.nl.kltn.model.InsertThesisCouncilPayload;
import web.nl.kltn.model.dto.ThesisOutlineCommentDTO;
import web.nl.kltn.model.dto.UserDTO;
import web.nl.kltn.model.generator.ThesisOutlineComment;
import web.nl.kltn.service.ThesisOutlineCommentService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class ThesisOutlineCommentServiceImpl implements ThesisOutlineCommentService {

    @Autowired
    private ThesisOutlineCommentMapper thesisOutlineCommentMapper;

    @Autowired
    private ThesisOutlineCommentCusMapper thesisOutlineCommentCusMapper;

    @Autowired
    private UserCusMapper userCusMapper;

    @Override
    public List<ThesisOutlineComment> searchByThesisId(String thesisId) {
        return thesisOutlineCommentCusMapper.searchByThesisId(thesisId);
    }

    @Override
    public List<ThesisOutlineCommentDTO> searchCommentByThesisId(String thesisId) {
        List<ThesisOutlineComment> thesisOutlineComments = thesisOutlineCommentCusMapper.searchByThesisId(thesisId);
        List<ThesisOutlineCommentDTO> thesisOutlineCommentDTOS = new ArrayList<>();
        for (int i = 0; i < thesisOutlineComments.size(); i++) {
            ThesisOutlineCommentDTO thesisOutlineCommentDTO = new ThesisOutlineCommentDTO();
            thesisOutlineCommentDTO.load(thesisOutlineComments.get(i));
            UserDTO userDTO = userCusMapper.findByUserId(thesisOutlineCommentDTO.getUserId());
            userDTO.setPassword(null);
            thesisOutlineCommentDTO.setUser(userDTO);
            thesisOutlineCommentDTOS.add(thesisOutlineCommentDTO);
        }
        return thesisOutlineCommentDTOS;
    }

    @Override
    public ThesisOutlineComment searchByUserId(String userId) {
        return thesisOutlineCommentCusMapper.searchByUserId(userId);
    }

    @Override
    public ThesisOutlineComment insert(ThesisOutlineComment thesisOutlineComment) throws Exception {
    	try {
    		thesisOutlineComment.setId(String.valueOf(UUID.randomUUID()));
            thesisOutlineComment.setCreatedAt(new Date().getTime());
            thesisOutlineComment.setIsDeleted(false);
            thesisOutlineComment.setUpdatedAt(new Date().getTime());
            if (thesisOutlineCommentMapper.insert(thesisOutlineComment) <= 0) {
            	throw new Exception("Thêm đề cương thất bại");
            }
            return thesisOutlineComment;
    	} catch (Exception e) {
    		TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
    		throw e;
    	}
    }

    @Override
    public void update(ThesisOutlineComment thesisOutlineComment) {
        thesisOutlineCommentMapper.updateByPrimaryKey(thesisOutlineComment);
    }

    @Override
    public void deleted(String id) {
        thesisOutlineCommentMapper.deleteByPrimaryKey(id);
    }

    @Override
    public void deletedByThesis(String id) {
        thesisOutlineCommentCusMapper.deleteByThesis(id);
    }

    @Override
    public ThesisOutlineComment searchByThesisIdAndCouncilId(String thesisId, String userId) {
        return thesisOutlineCommentCusMapper.searchByThesisIdAndUserId(thesisId, userId);
    }
    
    @Override
	public List<ThesisOutlineComment> insertCouncils(InsertThesisCouncilPayload insertThesisCouncilPayload) throws Exception {
    	try {
    		thesisOutlineCommentCusMapper.deleteByThesis(insertThesisCouncilPayload.getThesisId());
    		List<String> councils = insertThesisCouncilPayload.getCouncils();
    		for (String council: councils) {
    			ThesisOutlineComment thesisOutlineComment = new ThesisOutlineComment();
    			thesisOutlineComment.setId(UUID.randomUUID().toString());
    			thesisOutlineComment.setThesisId(insertThesisCouncilPayload.getThesisId());
    			thesisOutlineComment.setUserId(council);
    			thesisOutlineComment.setIsDeleted(false);
    			thesisOutlineComment.setCreatedAt(new Date().getTime());
    			thesisOutlineComment.setUpdatedAt(new Date().getTime());
    			
    			if (thesisOutlineCommentMapper.insert(thesisOutlineComment) <= 0) {
    				throw new Exception("Thêm hội đồng thất bại");
    			}
    		}
    		return thesisOutlineCommentCusMapper.searchByThesisId(insertThesisCouncilPayload.getThesisId());
    	} catch (Exception e) {
    		TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
    		throw e;
    	}
    }

}
