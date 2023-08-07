package web.nl.kltn.service.impl;

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
import web.nl.kltn.model.ThesisSearchCondition;
import web.nl.kltn.model.dto.ThesisDTO;
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

    @Override
    public ThesisDTO findById(String id) {
        ThesisDTO thesisDTO = new ThesisDTO();
        Thesis thesisEntity = thesisMapper.selectByPrimaryKey(id);
        thesisDTO.load(thesisEntity);
        thesisDTO.setOutlineUrls(thesisDocumentCusMapper.getFilesByThesisId(id));
        return thesisDTO;
    }

    @Override
    public ThesisDTO findDetailById(String id) {
        ThesisDTO thesisDTO = new ThesisDTO();
        Thesis thesisEntity = thesisMapper.selectByPrimaryKey(id);
        thesisDTO.load(thesisEntity);
        thesisDTO.setOutlineUrls(thesisDocumentCusMapper.getFilesByThesisId(id));
        return thesisDTO;
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
        List<User> students = thesisDTO.getStudents();
        for (User std : students) {
            ThesisUser thesisUser = new ThesisUser();
            thesisUser.setId(String.valueOf(UUID.randomUUID()));
            thesisUser.setThesisId(thesisDTO.getId());
            thesisUser.setUserId(std.getUserId());
            thesisUser.setType(Constant.THESIS_STUDENT);
            thesisUser.setIsDeleted(false);
            thesisUser.setCreatedAt(new Date().getTime());
            thesisUser.setUpdatedAt(new Date().getTime());
            if (thesisUserMapper.insert(thesisUser) <= 0) {
                throw new Exception("Thêm thất bại");
            }
        }
        User teacher = thesisDTO.getTeacher();
        ThesisUser thesisUser = new ThesisUser();
        thesisUser.setId(String.valueOf(UUID.randomUUID()));
        thesisUser.setThesisId(thesisDTO.getId());
        thesisUser.setUserId(teacher.getUserId());
        thesisUser.setType(Constant.THESIS_TEACHER);
        thesisUser.setIsDeleted(false);
        thesisUser.setCreatedAt(new Date().getTime());
        thesisUser.setUpdatedAt(new Date().getTime());
        if (thesisUserMapper.insert(thesisUser) <= 0) {
            throw new Exception("Thêm thất bại");
        }

        List<String> outlineUrls = thesisDTO.getOutlineUrls();
        for (String outlineUrl : outlineUrls) {
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

        return thesisDTO;
    }

    @Override
    public void update(Thesis thesis) {
        thesisMapper.updateByPrimaryKey(thesis);
    }

    @Override
    public void delete(String id) {
        thesisMapper.deleteByPrimaryKey(id);
    }

    @Override
    public List<Thesis> search(int page, int pageSize, ThesisSearchCondition thesisSearchCondition) {
        return thesisCusMapper.search(page, pageSize, thesisSearchCondition);
    }

    @Override
    public int getTotal(ThesisSearchCondition searchCondition) {
        return thesisCusMapper.getTotal(searchCondition);
    }
}
