package web.nl.kltn.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import web.nl.kltn.common.Constant;
import web.nl.kltn.mapper.ThesisCusMapper;
import web.nl.kltn.mapper.ThesisDocumentCusMapper;
import web.nl.kltn.mapper.ThesisOutlineCommentCusMapper;
import web.nl.kltn.mapper.ThesisUserCusMapper;
import web.nl.kltn.mapper.generator.ThesisDocumentMapper;
import web.nl.kltn.mapper.generator.ThesisMapper;
import web.nl.kltn.mapper.generator.ThesisUserMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.DocumentData;
import web.nl.kltn.model.ThesisSearchCondition;
import web.nl.kltn.model.dto.ThesisDTO;
import web.nl.kltn.model.dto.ThesisUserDTO;
import web.nl.kltn.model.generator.Thesis;
import web.nl.kltn.model.generator.ThesisDocument;
import web.nl.kltn.model.generator.ThesisUser;
import web.nl.kltn.model.generator.User;
import web.nl.kltn.service.ThesisService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class ThesisServiceImpl implements ThesisService {

    @Autowired
    private ThesisMapper thesisMapper;

    @Autowired
    private ThesisCusMapper thesisCusMapper;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private ThesisUserMapper thesisUserMapper;

    @Autowired
    private ThesisUserCusMapper thesisUserCusMapper;

    @Autowired
    private ThesisDocumentMapper thesisDocumentMapper;

    @Autowired
    private ThesisDocumentCusMapper thesisDocumentCusMapper;

    @Autowired
    private LuceneServiceImpl luceneService;

    @Override
    public ThesisDTO findById(String id) {
        ThesisDTO thesisDTO = new ThesisDTO();
        Thesis thesisEntity = thesisMapper.selectByPrimaryKey(id);
        thesisDTO.load(thesisEntity, thesisUserCusMapper, userMapper, thesisDocumentCusMapper);
        return thesisDTO;
    }

    @Override
    public ThesisDTO findDetailById(String id) {
        ThesisDTO thesisDTO = new ThesisDTO();
        Thesis thesisEntity = thesisMapper.selectByPrimaryKey(id);
        thesisDTO.load(thesisEntity, thesisUserCusMapper, userMapper, thesisDocumentCusMapper);
        return thesisDTO;
    }

    @Override
    public List<ThesisDTO> findByUser(String userId) {
        List<Thesis> thesisList = thesisCusMapper.findByUser(userId);
        List<ThesisDTO> thesisDTOList = thesisList.stream().map(thesis -> {
            ThesisDTO thesisDTO = new ThesisDTO();
            thesisDTO.load(thesis, thesisUserCusMapper, userMapper, thesisDocumentCusMapper);
            return thesisDTO;
        }).toList();
        return thesisDTOList;
    }

    @Transactional(rollbackFor = Throwable.class)
    @Override
    public ThesisDTO insert(ThesisDTO thesisDTO) throws Exception {
        if (thesisDTO == null) {
            return null;
        }
        if (thesisMapper.insert(thesisDTO) <= 0) {
            throw new Exception("Thêm thất bại");
        }
        List<ThesisUserDTO> students = thesisDTO.getStudents();
        for (ThesisUser thesisUser : students) {
            if (thesisUserMapper.insert(thesisUser) <= 0) {
                throw new Exception("Thêm thất bại");
            }
        }
        ThesisUserDTO thesisUser = thesisDTO.getTeacher();
        if (thesisUserMapper.insert(thesisUser) <= 0) {
            throw new Exception("Thêm thất bại");
        }

        //doc2vec index only when import not when create
        if (thesisDTO.getDocumentUrl() != null) {
            DocumentData doc;
            doc = new DocumentData(thesisDTO.getId(), thesisDTO.getTopic(), thesisDTO.getDocumentUrl());
            System.err.println(thesisDTO.getId() + " " + thesisDTO.getTopic() + " " + thesisDTO.getDocumentUrl());
            luceneService.indexDocument(doc);
        }

        String outlineUrl = thesisDTO.getOutlineUrl();
        if (outlineUrl != null) {
            ThesisDocument document = new ThesisDocument();
            document.setId(String.valueOf(UUID.randomUUID()));
            document.setFileUrl(outlineUrl);
            document.setType(Constant.THESIS_DOCUMENT_TYPE_OUTLINE);
            document.setThesisId(thesisDTO.getId());
            document.setIsDeleted(false);
            document.setCreatedAt(new Date().getTime());
            document.setUpdatedAt(new Date().getTime());
            if (thesisDocumentMapper.insert(document) <= 0) {
                throw new Exception("Thêm thất bại");
            }
        }
        String thesisDocumentUrl = thesisDTO.getDocumentUrl();
        if (thesisDocumentUrl != null) {
            ThesisDocument document = new ThesisDocument();
            document.setId(String.valueOf(UUID.randomUUID()));
            document.setFileUrl(thesisDocumentUrl);
            document.setType(Constant.THESIS_DOCUMENT_TYPE_DOCUMENT);
            document.setThesisId(thesisDTO.getId());
            document.setIsDeleted(false);
            document.setCreatedAt(new Date().getTime());
            document.setUpdatedAt(new Date().getTime());
            if (thesisDocumentMapper.insert(document) <= 0) {
                throw new Exception("Thêm thất bại");
            }

        }

        return thesisDTO;
    }

    @Transactional(rollbackFor = Throwable.class)
    @Override
    public void update(ThesisDTO thesisDTO) throws Exception {

        if (thesisDTO == null) {
            thesisMapper.updateByPrimaryKey(thesisDTO);
        }
        List<ThesisUserDTO> students = thesisDTO.getStudents();
        thesisUserCusMapper.deleteByTheisId(thesisDTO.getId());
        for (ThesisUser thesisUser : students) {
            thesisUser.setIsDeleted(false);
            System.err.println(thesisUser.getIsDeleted());
            if (thesisUserMapper.insert(thesisUser) <= 0) {
                throw new Exception("Cập nhật thất bại");
            }
        }
        ThesisUserDTO thesisUser = thesisDTO.getTeacher();
        thesisUser.setIsDeleted(false);
        if (thesisUserMapper.insert(thesisUser) <= 0) {
            throw new Exception("Cập nhật thất bại");
        }
        thesisDocumentCusMapper.deteleByThesisId(thesisDTO.getId(), 2);
        String thesisDocumentUrl = thesisDTO.getDocumentUrl();
        if (thesisDocumentUrl != null) {
            ThesisDocument document = new ThesisDocument();
            document.setId(String.valueOf(UUID.randomUUID()));
            document.setFileUrl(thesisDocumentUrl);
            document.setType(Constant.THESIS_DOCUMENT_TYPE_DOCUMENT);
            document.setThesisId(thesisDTO.getId());
            document.setIsDeleted(false);
            document.setCreatedAt(new Date().getTime());
            document.setUpdatedAt(new Date().getTime());
            if (thesisDocumentMapper.insert(document) <= 0) {
                throw new Exception("Cập nhật thất bại");
            }
        }
    }

    @Override
    public void delete(String id) {
        thesisMapper.deleteByPrimaryKey(id);
    }

    @Override
    public List<ThesisDTO> search(int page, int pageSize, ThesisSearchCondition thesisSearchCondition) {
        List<Thesis> thesisList = thesisCusMapper.search(page, pageSize, thesisSearchCondition);
        List<ThesisDTO> thesisDTOs = thesisList.stream().map(thesis -> {
            ThesisDTO thesisDTO = new ThesisDTO();
            thesisDTO.load(thesis, thesisUserCusMapper, userMapper, thesisDocumentCusMapper);
            return thesisDTO;
        }).toList();
        return thesisDTOs;
    }

    @Override
    public int getTotal(ThesisSearchCondition searchCondition) {
        return thesisCusMapper.getTotal(searchCondition);
    }

    @Override
    public List<ThesisDTO> findByCouncil(int page, int pageSize, ThesisSearchCondition thesisSearchCondition) {
        List<ThesisDTO> thesisDTOs = thesisCusMapper.findByCouncilId(page, pageSize, thesisSearchCondition);
        thesisDTOs.forEach((thesisDTO -> {
            thesisDTO.load(thesisDTO, thesisUserCusMapper, userMapper, thesisDocumentCusMapper);
//			List<ThesisUser> thesisUsers = thesisUserCusMapper.search(thesisDTO.getId(), 1);
//			thesisDTO.setStudents(thesisUsers.stream().map(tu -> {
//				ThesisUserDTO thesisUserDTO = new ThesisUserDTO();
//				thesisUserDTO.load(tu);
//				thesisUserDTO.setUser(userMapper.selectByPrimaryKey(tu.getUserId()));
//				return thesisUserDTO;
//			}).toList());
//			ThesisUser teacher = thesisUserCusMapper.search(thesisDTO.getId(), 2).get(0);
//			if (teacher != null) {
//				ThesisUserDTO teacherDTO = new ThesisUserDTO();
//				teacherDTO.load(teacher);
//				teacherDTO.setUser(userMapper.selectByPrimaryKey(teacher.getUserId()));
//				thesisDTO.setTeacher(teacherDTO);
//			}
        }));
        return thesisDTOs;
    }

    @Override
    public int getTotalByCouncilId(ThesisSearchCondition searchCondition) {
        return thesisCusMapper.getTotalByCouncilId(searchCondition);
    }

    @Override
    public boolean updateStatus(String id, int status) {
        Thesis thesis = thesisMapper.selectByPrimaryKey(id);
        thesis.setStatus(status);
        return thesisMapper.updateByPrimaryKey(thesis) > 0;
    }


}
