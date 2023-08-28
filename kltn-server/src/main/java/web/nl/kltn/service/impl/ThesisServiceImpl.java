package web.nl.kltn.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import web.nl.kltn.mapper.LecturerCusMapper;
import web.nl.kltn.mapper.ReviewerCusMapper;
import web.nl.kltn.mapper.ReviewerQuestionCusMapper;
import web.nl.kltn.mapper.ReviewerScoreCusMapper;
import web.nl.kltn.mapper.StudentCusMapper;
import web.nl.kltn.mapper.ThesisCusMapper;
import web.nl.kltn.mapper.ThesisDocumentCusMapper;
import web.nl.kltn.mapper.ThesisLecturerCusMapper;
import web.nl.kltn.mapper.ThesisReviewerCommentCusMapper;
import web.nl.kltn.mapper.ThesisStudentCusMapper;
import web.nl.kltn.mapper.UserCusMapper;
import web.nl.kltn.mapper.generator.LecturerMapper;
import web.nl.kltn.mapper.generator.ReviewerMapper;
import web.nl.kltn.mapper.generator.ReviewerQuestionMapper;
import web.nl.kltn.mapper.generator.ReviewerScoreMapper;
import web.nl.kltn.mapper.generator.StudentMapper;
import web.nl.kltn.mapper.generator.ThesisDocumentMapper;
import web.nl.kltn.mapper.generator.ThesisLecturerMapper;
import web.nl.kltn.mapper.generator.ThesisMapper;
import web.nl.kltn.mapper.generator.ThesisReviewerCommentMapper;
import web.nl.kltn.mapper.generator.ThesisStudentMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.ThesisSearchCondition;
import web.nl.kltn.model.dto.LecturerDTO;
import web.nl.kltn.model.dto.StudentDTO;
import web.nl.kltn.model.dto.ThesisDTO;
import web.nl.kltn.model.generator.Thesis;
import web.nl.kltn.model.generator.ThesisDocument;
import web.nl.kltn.model.generator.ThesisLecturer;
import web.nl.kltn.model.generator.ThesisStudent;
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

	@Autowired
	private UserCusMapper userCusMapper;

	/**
	 * Student
	 */
	@Autowired
	private StudentMapper studentMapper;

	@Autowired
	private StudentCusMapper studentCusMapper;

	/**
	 * Lecturer
	 */
	@Autowired
	private LecturerMapper lecturerMapper;
	@Autowired
	private LecturerCusMapper lecturerCusMapper;

	/**
	 * Thesis Student
	 */
	@Autowired
	private ThesisStudentMapper thesisStudentMapper;

	@Autowired
	private ThesisStudentCusMapper thesisStudentCusMapper;

	/**
	 * Thesis Lecturer
	 */
	@Autowired
	private ThesisLecturerMapper thesisLecturerMapper;

	@Autowired
	private ThesisLecturerCusMapper thesisLecturerCusMapper;

	/**
	 * Thesis Reviewer Comment
	 */
	@Autowired
	private ThesisReviewerCommentMapper thesisReviewerCommentMapper;

	@Autowired
	private ThesisReviewerCommentCusMapper thesisReviewerCommentCusMapper;

	/**
	 * Reviewer
	 */
	@Autowired
	private ReviewerCusMapper reviewerCusMapper;

	@Autowired
	private ReviewerMapper reviewerMapper;

	/**
	 * Reviewer Score
	 */
	@Autowired
	private ReviewerScoreCusMapper reviewerScoreCusMapper;

	@Autowired
	private ReviewerScoreMapper reviewerScoreMapper;

	/**
	 * Reviewer Question
	 */
	@Autowired
	private ReviewerQuestionCusMapper reviewerQuestionCusMapper;

	@Autowired
	private ReviewerQuestionMapper reviewerQuestionMapper;

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
		thesisDTO.load(thesisEntity, thesisStudentCusMapper, thesisLecturerCusMapper, studentCusMapper,
				lecturerCusMapper, userMapper, userCusMapper, thesisReviewerCommentCusMapper, reviewerCusMapper,
				reviewerScoreCusMapper, reviewerQuestionCusMapper);
		return thesisDTO;
	}

	@Override
	public ThesisDTO findDetailById(String id) {
		ThesisDTO thesisDTO = new ThesisDTO();
		Thesis thesisEntity = thesisMapper.selectByPrimaryKey(id);
		thesisDTO.load(thesisEntity, thesisStudentCusMapper, thesisLecturerCusMapper, studentCusMapper,
				lecturerCusMapper, userMapper, userCusMapper, thesisReviewerCommentCusMapper, reviewerCusMapper,
				reviewerScoreCusMapper, reviewerQuestionCusMapper);
		return thesisDTO;
	}

	@Override
	public List<ThesisDTO> findByUser(String userId) {
		List<Thesis> thesisList = thesisCusMapper.findByUser(userId);
		List<ThesisDTO> thesisDTOList = thesisList.stream().map(thesis -> {
			ThesisDTO thesisDTO = new ThesisDTO();
			thesisDTO.load(thesis, thesisStudentCusMapper, thesisLecturerCusMapper, studentCusMapper, lecturerCusMapper,
					userMapper, userCusMapper, thesisReviewerCommentCusMapper, reviewerCusMapper,
					reviewerScoreCusMapper, reviewerQuestionCusMapper);
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
			List<LecturerDTO> Lecturers = thesisDTO.getTeachers();
			for (LecturerDTO LecturerDTO : Lecturers) {
				
				ThesisLecturer thesisLecturer = new ThesisLecturer();
				thesisLecturer.setIsActive(false);
				thesisLecturer.setThesisId(thesisDTO.getId());
				thesisLecturer.setLecturerId(LecturerDTO.getUserId());
				thesisLecturer.setIsDeleted(false);
				thesisLecturer.setCreatedAt(new Date().getTime());
				thesisLecturer.setUpdatedAt(new Date().getTime());

				if (thesisLecturerMapper.insert(thesisLecturer) <= 0) {
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
			thesisDTO.load(thesis, thesisStudentCusMapper, thesisLecturerCusMapper, studentCusMapper, lecturerCusMapper,
					userMapper, userCusMapper, thesisReviewerCommentCusMapper, reviewerCusMapper,
					reviewerScoreCusMapper, reviewerQuestionCusMapper);
			return thesisDTO;
		}).toList();
		return thesisDTOs;
	}

	@Override
	public int getTotal(ThesisSearchCondition searchCondition) {
		return thesisCusMapper.getTotal(searchCondition);
	}

	@Override
	public List<ThesisDTO> findByCouncilReviewerComment(String userId) {
		List<Thesis> thesisList = thesisCusMapper.findByCouncilPreviewerCommentId(userId);
		List<ThesisDTO> thesisDTOs = thesisList.stream().map(thesis -> {
			ThesisDTO thesisDTO = new ThesisDTO();
			thesisDTO.load(thesis, thesisStudentCusMapper, thesisLecturerCusMapper, studentCusMapper, lecturerCusMapper,
					userMapper, userCusMapper, thesisReviewerCommentCusMapper, reviewerCusMapper,
					reviewerScoreCusMapper, reviewerQuestionCusMapper);
			return thesisDTO;
		}).toList();
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
			thesisList = thesisCusMapper.findThesisLecturerInvided(userId);
		} else {
			thesisList = new ArrayList<>();
		}
		List<ThesisDTO> thesisDTOs = thesisList.stream().map(thesis -> {
			ThesisDTO thesisDTO = new ThesisDTO();
			thesisDTO.load(thesis, thesisStudentCusMapper, thesisLecturerCusMapper, studentCusMapper, lecturerCusMapper,
					userMapper, userCusMapper, thesisReviewerCommentCusMapper, reviewerCusMapper,
					reviewerScoreCusMapper, reviewerQuestionCusMapper);
			return thesisDTO;
		}).toList();
		return thesisDTOs;
	}

	@Override
	public List<ThesisDTO> findMyThesis(String userId) {
		User user = userMapper.selectByPrimaryKey(userId);
		List<Thesis> thesisList;
		if (user.getIsStudent()) {
			thesisList = thesisCusMapper.findStudentThesis(userId);
		} else if (user.getIsTeacher()) {
			thesisList = thesisCusMapper.findLecturerThesis(userId);
		} else {
			thesisList = new ArrayList<>();
		}
		List<ThesisDTO> thesisDTOs = thesisList.stream().map(thesis -> {
			ThesisDTO thesisDTO = new ThesisDTO();
			thesisDTO.load(thesis, thesisStudentCusMapper, thesisLecturerCusMapper, studentCusMapper, lecturerCusMapper,
					userMapper, userCusMapper, thesisReviewerCommentCusMapper, reviewerCusMapper,
					reviewerScoreCusMapper, reviewerQuestionCusMapper);
			return thesisDTO;
		}).toList();
		return thesisDTOs;
	}

	@Override
	public void acceptInvite(String thesisId, String userId) throws Exception {
		try {
			User user = userMapper.selectByPrimaryKey(userId);
			if (user.getIsStudent()) {
				thesisStudentCusMapper.acceptInvite(thesisId, userId);
				System.out.println(userId);
			} else if (user.getIsTeacher()) {
				thesisLecturerCusMapper.acceptInvite(thesisId, userId);
			} else {
				throw new Exception("Unknow user");
			}
			boolean checkChangeStatus = true;
			List<ThesisStudent> thesisStudents = thesisStudentCusMapper.getThesisStudentByThesisId(thesisId);
			for (ThesisStudent thesisStudent : thesisStudents) {
				if (!thesisStudent.getIsActive()) {
					checkChangeStatus = false;
				}
			}
			List<ThesisLecturer> thesisLecturers = thesisLecturerCusMapper.getThesisLecturerByThesisId(thesisId);
			for (ThesisLecturer thesisLecturer : thesisLecturers) {
				if (!thesisLecturer.getIsActive()) {
					System.out.println(checkChangeStatus);
					checkChangeStatus = false;
				}
			}

			if (checkChangeStatus) {
				Thesis thesis = thesisMapper.selectByPrimaryKey(thesisId);
				thesis.setStatus(2);
				thesisMapper.updateByPrimaryKey(thesis);
			}
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}

	@Override
	public void declineInvite(String thesisId, String userId) throws Exception {
		try {
			User user = userMapper.selectByPrimaryKey(userId);
			boolean checkChangeStatus = false;
			if (user.getIsStudent()) {
				checkChangeStatus = true;
				thesisStudentCusMapper.declineInvite(thesisId, userId);
			} else if (user.getIsTeacher()) {
				checkChangeStatus = true;
				thesisLecturerCusMapper.declineInvite(thesisId, userId);
			} else {
				throw new Exception("Unknow user");
			}
			if (checkChangeStatus) {
				Thesis thesis = thesisMapper.selectByPrimaryKey(thesisId);
				thesis.setStatus(-1);
				thesisMapper.updateByPrimaryKey(thesis);
			}
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}
	
	@Override
	public List<ThesisDTO> findByReviewerId(String userId) {
		List<Thesis> thesisList = thesisCusMapper.findThesisByReviewerMarker(userId);
		List<ThesisDTO> thesisDTOs = thesisList.stream().map(thesis -> {
			ThesisDTO thesisDTO = new ThesisDTO();
			thesisDTO.load(thesis, thesisStudentCusMapper, thesisLecturerCusMapper, studentCusMapper, lecturerCusMapper,
					userMapper, userCusMapper, thesisReviewerCommentCusMapper, reviewerCusMapper,
					reviewerScoreCusMapper, reviewerQuestionCusMapper);
			return thesisDTO;
		}).toList();
		return thesisDTOs;
	}
}
