package web.nl.kltn.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import web.nl.kltn.mapper.ThesisOutlineCommentCusMapper;
import web.nl.kltn.mapper.UserCusMapper;
import web.nl.kltn.mapper.generator.ThesisOutlineCommentMapper;
import web.nl.kltn.model.dto.ThesisOutlineCommentDTO;
import web.nl.kltn.model.dto.UserDTO;
import web.nl.kltn.model.generator.ProtectionRating;
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
    public List<ThesisOutlineComment> insertListThesisCouncil(String theisId, List<String> usersId) throws Exception {
        List<ThesisOutlineComment> thesisOutlineComments = new ArrayList<>();
        for (int i = 0; i < usersId.size(); i++) {
            ThesisOutlineComment thesisOutlineComment = new ThesisOutlineComment();
            thesisOutlineComment.setId(String.valueOf(UUID.randomUUID()));
            thesisOutlineComment.setUserId(usersId.get(i));
            thesisOutlineComment.setThesisId(theisId);
            thesisOutlineComment.setOrder(1);
            thesisOutlineComment.setCreatedAt(new Date().getTime());
            thesisOutlineComment.setIsDeleted(false);
            thesisOutlineComment.setUpdatedAt(new Date().getTime());
            if (thesisOutlineCommentMapper.insert(thesisOutlineComment) <= 0) {
                throw new Exception("Thêm hội đồng thất bại");
            }
            thesisOutlineComments.add(thesisOutlineComment);
        }
        return thesisOutlineComments;
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

}
