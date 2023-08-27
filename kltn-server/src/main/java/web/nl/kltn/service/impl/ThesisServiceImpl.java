package web.nl.kltn.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import web.nl.kltn.common.Constant;
import web.nl.kltn.mapper.LeturerCusMapper;
import web.nl.kltn.mapper.StudentCusMapper;
import web.nl.kltn.mapper.ThesisCusMapper;
import web.nl.kltn.mapper.ThesisDocumentCusMapper;
import web.nl.kltn.mapper.ThesisLeturerCusMapper;
import web.nl.kltn.mapper.ThesisStudentCusMapper;
import web.nl.kltn.mapper.ThesisUserCusMapper;
import web.nl.kltn.mapper.generator.LeturerMapper;
import web.nl.kltn.mapper.generator.StudentMapper;
import web.nl.kltn.mapper.generator.ThesisDocumentMapper;
import web.nl.kltn.mapper.generator.ThesisLeturerMapper;
import web.nl.kltn.mapper.generator.ThesisMapper;
import web.nl.kltn.mapper.generator.ThesisStudentMapper;
import web.nl.kltn.mapper.generator.ThesisUserMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.DocumentData;
import web.nl.kltn.model.ThesisSearchCondition;
import web.nl.kltn.model.dto.LeturerDTO;
import web.nl.kltn.model.dto.StudentDTO;
import web.nl.kltn.model.dto.ThesisDTO;
import web.nl.kltn.model.generator.Student;
import web.nl.kltn.model.generator.Thesis;
import web.nl.kltn.model.generator.ThesisDocument;
import web.nl.kltn.model.generator.ThesisLeturer;
import web.nl.kltn.model.generator.ThesisStudent;
import web.nl.kltn.model.generator.ThesisUser;
import web.nl.kltn.model.generator.User;
import web.nl.kltn.service.ThesisService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class ThesisServiceImpl implements ThesisService {

	/**
	 * Thesis
	 */
	@Autowired
	private ThesisMapper thesisMapper;

	@Autowired
	private ThesisCusMapper thesisCusMapper;

	/**
	 * User
	 */
	@Autowired
	private UserMapper userMapper;

	/**
	 * Student
	 */
	@Autowired
	private StudentMapper studentMapper;

	@Autowired
	private StudentCusMapper studentCusMapper;

	/**
	 * Leturer
	 */
	@Autowired
	private LeturerMapper leturerMapper;
	@Autowired
	private LeturerCusMapper leturerCusMapper;

	/**
	 * Thesis Student
	 */
	@Autowired
	private ThesisStudentMapper thesisStudentMapper;

	@Autowired
	private ThesisStudentCusMapper thesisStudentCusMapper;

	/**
	 * Thesis Leturer
	 */
	@Autowired
	private ThesisLeturerMapper thesisLeturerMapper;

	private ThesisLeturerCusMapper thesisLeturerCusMapper;

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
		thesisDTO.load(thesisEntity, thesisStudentCusMapper, thesisLeturerCusMapper, studentCusMapper, leturerCusMapper,
				userMapper);
		return thesisDTO;
	}

	@Override
	public ThesisDTO findDetailById(String id) {
		ThesisDTO thesisDTO = new ThesisDTO();
		Thesis thesisEntity = thesisMapper.selectByPrimaryKey(id);
		thesisDTO.load(thesisEntity, thesisStudentCusMapper, thesisLeturerCusMapper, studentCusMapper, leturerCusMapper,
				userMapper);
		return thesisDTO;
	}

	@Override
	public List<ThesisDTO> findByUser(String userId) {
		List<Thesis> thesisList = thesisCusMapper.findByUser(userId);
		List<ThesisDTO> thesisDTOList = thesisList.stream().map(thesis -> {
			ThesisDTO thesisDTO = new ThesisDTO();
			thesisDTO.load(thesis, thesisStudentCusMapper, thesisLeturerCusMapper, studentCusMapper, leturerCusMapper,
					userMapper);
			return thesisDTO;
		}).toList();
		return thesisDTOList;
	}

	@Override
	public ThesisDTO insert(ThesisDTO thesisDTO) throws Exception {
		try {
			if (thesisDTO == null) {
				return null;
			}
			if (thesisMapper.insert(thesisDTO) <= 0) {
				throw new Exception("Thêm thất bại");
			}
			List<StudentDTO> students = thesisDTO.getStudents();
			for (StudentDTO studentDTO : students) {
				ThesisStudent thesisStudent = new ThesisStudent();
				if (studentDTO.getUserId().equals(thesisDTO.getCreatedBy())) {
					thesisStudent.setIsActive(true);
				} else {
					thesisStudent.setIsActive(false);
				}
				thesisStudent.setThesisId(thesisDTO.getId());
				thesisStudent.setStudentId(studentDTO.getUserId());
				thesisStudent.setIsDeleted(false);
				thesisStudent.setCreatedAt(new Date().getTime());
				thesisStudent.setUpdatedAt(new Date().getTime());

				if (thesisStudentMapper.insert(thesisStudent) <= 0) {
					throw new Exception("Thêm thất bại");
				}
			}
			List<LeturerDTO> leturers = thesisDTO.getTeachers();
			for (LeturerDTO leturerDTO : leturers) {
				ThesisLeturer thesisLeturer = new ThesisLeturer();
				thesisLeturer.setIsActive(false);
				thesisLeturer.setThesisId(thesisDTO.getId());
				thesisLeturer.setLecturerId(leturerDTO.getUserId());
				thesisLeturer.setIsDeleted(false);
				thesisLeturer.setCreatedAt(new Date().getTime());
				thesisLeturer.setUpdatedAt(new Date().getTime());

				if (thesisLeturerMapper.insert(thesisLeturer) <= 0) {
					throw new Exception("Thêm thất bại");
				}
			}

//            //doc2vec index only when import not when create
//            if (thesisDTO.getDocumentUrl() != null) {
//                DocumentData doc;
//                doc = new DocumentData(thesisDTO.getId(), thesisDTO.getTopic(), thesisDTO.getDocumentUrl());
//                System.err.println(thesisDTO.getId() + " " + thesisDTO.getTopic() + " " + thesisDTO.getDocumentUrl());
//                luceneService.indexDocument(doc);
//            }

			List<ThesisDocument> thesisDocuments = thesisDTO.getFileAttachments();

			for (ThesisDocument thesisDocument : thesisDocuments) {
				if (thesisDocumentMapper.insert(thesisDocument) <= 0) {
					throw new Exception("Thêm thất bại");
				}
			}

			return thesisDTO;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}

	@Override
	public void update(ThesisDTO thesisDTO) throws Exception {
		try {
			if (thesisDTO == null) {
				thesisMapper.updateByPrimaryKey(thesisDTO);
			}
//            List<ThesisUserDTO> students = thesisDTO.getStudents();
//            thesisUserCusMapper.deleteByTheisId(thesisDTO.getId());
//            for (ThesisUser thesisUser : students) {
//                thesisUser.setIsDeleted(false);
//                System.err.println(thesisUser.getIsDeleted());
//                if (thesisUserMapper.insert(thesisUser) <= 0) {
//                    throw new Exception("Cập nhật thất bại");
//                }
//            }
//            ThesisUserDTO thesisUser = thesisDTO.getTeacher();
//            thesisUser.setIsDeleted(false);
//            if (thesisUserMapper.insert(thesisUser) <= 0) {
//                throw new Exception("Cập nhật thất bại");
//            }
//            thesisDocumentCusMapper.deteleByThesisId(thesisDTO.getId(), 2);
//            String thesisDocumentUrl = thesisDTO.getDocumentUrl();
//            if (thesisDocumentUrl != null) {
//                ThesisDocument document = new ThesisDocument();
//                document.setId(String.valueOf(UUID.randomUUID()));
//                document.setFileUrl(thesisDocumentUrl);
//                document.setType(Constant.THESIS_DOCUMENT_TYPE_DOCUMENT);
//                document.setThesisId(thesisDTO.getId());
//                document.setIsDeleted(false);
//                document.setCreatedAt(new Date().getTime());
//                document.setUpdatedAt(new Date().getTime());
//                if (thesisDocumentMapper.insert(document) <= 0) {
//                    throw new Exception("Cập nhật thất bại");
//                }
//            }
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
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
			thesisDTO.load(thesis, thesisStudentCusMapper, thesisLeturerCusMapper, studentCusMapper, leturerCusMapper,
					userMapper);
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
//            thesisDTO.load(thesisDTO, thesisUserCusMapper, userMapper, thesisDocumentCusMapper);
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
	public boolean updateStatus(String id, int status) {
		Thesis thesis = thesisMapper.selectByPrimaryKey(id);
		thesis.setStatus(status);
		return thesisMapper.updateByPrimaryKey(thesis) > 0;
	}

	@Override
	public List<ThesisDTO> searchThesisCAByUserId(String userId) {
		List<Thesis> thesisList = thesisCusMapper.searchThesisCAByUserId(userId);
		List<ThesisDTO> thesisDTOs = thesisList.stream().map(thesis -> {
			ThesisDTO thesisDTO = new ThesisDTO();
//			thesisDTO.load(thesis, thesisUserCusMapper, userMapper, thesisDocumentCusMapper);
			return thesisDTO;
		}).toList();
		return thesisDTOs;
	}

	@Override
	public int getTotalByCouncilId(ThesisSearchCondition searchCondition) {
		return thesisCusMapper.getTotalByCouncilId(searchCondition);
	}
	
	@Override
	public List<ThesisDTO> findThesisInvited(String userId) {
		User user = userMapper.selectByPrimaryKey(userId);
		List<Thesis> thesisList;
		if (user.getIsStudent()) {
			thesisList = thesisCusMapper.findThesisStudentInvided(userId);
		} else if (user.getIsTeacher()) {
			thesisList = thesisCusMapper.findThesisLeturerInvided(userId);
		} else {
			thesisList = new ArrayList<>();
		}
		List<ThesisDTO> thesisDTOs = thesisList.stream().map(thesis -> {
			ThesisDTO thesisDTO = new ThesisDTO();
			thesisDTO.load(thesis, thesisStudentCusMapper, thesisLeturerCusMapper, studentCusMapper, leturerCusMapper,
					userMapper);
			return thesisDTO;
		}).toList();
		return thesisDTOs;
	}
}
