package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.mapper.DefenseRatingCusMapper;
import web.nl.kltn.mapper.DefenseRatingScoreCusMapper;
import web.nl.kltn.mapper.LecturerCusMapper;
import web.nl.kltn.mapper.ReviewerCusMapper;
import web.nl.kltn.mapper.ReviewerQuestionCusMapper;
import web.nl.kltn.mapper.ReviewerScoreCusMapper;
import web.nl.kltn.mapper.StudentCusMapper;
import web.nl.kltn.mapper.ThesisDefenseCalendarCusMapper;
import web.nl.kltn.mapper.ThesisDocumentCusMapper;
import web.nl.kltn.mapper.ThesisLecturerCusMapper;
import web.nl.kltn.mapper.ThesisReviewCalendarCusMapper;
import web.nl.kltn.mapper.ThesisReviewerCommentCusMapper;
import web.nl.kltn.mapper.ThesisStudentCusMapper;
import web.nl.kltn.mapper.UserCusMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.generator.Thesis;
import web.nl.kltn.model.generator.ThesisDefenseCalendar;
import web.nl.kltn.model.generator.ThesisDocument;
import web.nl.kltn.model.generator.ThesisReviewCalendar;
import web.nl.kltn.model.generator.User;

public class ThesisDTO extends Thesis {
	private User userCreated;
	private List<StudentDTO> students;
	private List<LecturerDTO> teachers;
	private List<ThesisDocument> fileAttachments;
	private List<ThesisReviewCommentDTO> thesisReviewerComments;
	private List<ReviewerDTO> reviewers;
	private List<DefenseRatingDTO> defenseRatings;
	private ThesisReviewCalendar reviewCalendar;
	private ThesisDefenseCalendar defenseCalendar;

	public User getUserCreated() {
		return userCreated;
	}

	public void setUserCreated(User userCreated) {
		this.userCreated = userCreated;
	}

	public List<StudentDTO> getStudents() {
		return students;
	}

	public void setStudents(List<StudentDTO> students) {
		this.students = students;
	}

	public List<LecturerDTO> getTeachers() {
		return teachers;
	}

	public void setTeacher(List<LecturerDTO> teachers) {
		this.teachers = teachers;
	}

	public List<ThesisDocument> getFileAttachments() {
		return fileAttachments;
	}

	public void setFileAttachments(List<ThesisDocument> fileAttachments) {
		this.fileAttachments = fileAttachments;
	}

	public List<ThesisReviewCommentDTO> getThesisReviewerComments() {
		return thesisReviewerComments;
	}

	public void setThesisReviewerComments(List<ThesisReviewCommentDTO> thesisReviewerComments) {
		this.thesisReviewerComments = thesisReviewerComments;
	}

	public List<ReviewerDTO> getReviewers() {
		return reviewers;
	}

	public void setReviewers(List<ReviewerDTO> reviewers) {
		this.reviewers = reviewers;
	}

	public List<DefenseRatingDTO> getDefenseRatings() {
		return defenseRatings;
	}

	public void setDefenseRatings(List<DefenseRatingDTO> defenseRatings) {
		this.defenseRatings = defenseRatings;
	}

	public ThesisReviewCalendar getReviewCalendar() {
		return reviewCalendar;
	}

	public void setReviewCalendar(ThesisReviewCalendar reviewCalendar) {
		this.reviewCalendar = reviewCalendar;
	}

	public ThesisDefenseCalendar getDefenseCalendar() {
		return defenseCalendar;
	}

	public void setDefenseCalendar(ThesisDefenseCalendar defenseCalendar) {
		this.defenseCalendar = defenseCalendar;
	}

	public void load(Thesis thesis, ThesisStudentCusMapper thesisStudentCusMapper,
			ThesisLecturerCusMapper thesislecturerCusMapper, StudentCusMapper studentCusMapper,
			LecturerCusMapper lecturerCusMapper, UserMapper userMapper, UserCusMapper userCusMapper,
			ThesisReviewerCommentCusMapper thesisReviewerCommentCusMapper, ReviewerCusMapper reviewerCusMapper,
			ReviewerScoreCusMapper reviewerScoreCusMapper, ReviewerQuestionCusMapper reviewerQuestionCusMapper,
			ThesisDocumentCusMapper thesisDocumentCusMapper, DefenseRatingCusMapper defenseRatingCusMapper,
			DefenseRatingScoreCusMapper defenseRatingScoreCusMapper,
			ThesisReviewCalendarCusMapper thesisReviewCalendarCusMapper,
			ThesisDefenseCalendarCusMapper thesisDefenseCalendarCusMapper) {
		this.setId(thesis.getId());
		this.setTopic(thesis.getTopic());
		this.setDescription(thesis.getDescription());
		this.setSchoolYear(thesis.getSchoolYear());
		this.setSemester(thesis.getSemester());
		this.setStatus(thesis.getStatus());
		this.setCreatedBy(thesis.getCreatedBy());
		this.setIsDeleted(thesis.getIsDeleted());
		this.setUpdatedAt(thesis.getUpdatedAt());
		this.setCreatedAt(thesis.getCreatedAt());
		if (userMapper != null) {
			this.setUserCreated(userMapper.selectByPrimaryKey(this.getCreatedBy()));
		}
		if (thesisStudentCusMapper != null) {
			this.setStudents(ThesisStudentDTO.getStudentDTOsByListThesisStudent(
					thesisStudentCusMapper.getThesisStudentByThesisId(thesis.getId()), studentCusMapper));
		}
		if (thesislecturerCusMapper != null) {
			this.setTeacher(ThesisLecturerDTO.getStudentDTOsByListThesisStudent(
					thesislecturerCusMapper.getThesisLecturerByThesisId(thesis.getId()), lecturerCusMapper));
		}
		if (thesisReviewerCommentCusMapper != null) {
			this.setThesisReviewerComments(ThesisReviewCommentDTO.getThesisReviewCommentDTOsByEntity(
					thesisReviewerCommentCusMapper.getThesisCommentByThesisId(thesis.getId()), userCusMapper));
		}
		if (reviewerCusMapper != null) {
			this.setReviewers(ReviewerDTO.getDTOsFromEntities(reviewerCusMapper.findReviewerByThesisId(thesis.getId()),
					lecturerCusMapper, reviewerScoreCusMapper, studentCusMapper, reviewerQuestionCusMapper));
		}
		if (thesisDocumentCusMapper != null) {
			this.setFileAttachments(thesisDocumentCusMapper.getFileAttachmentsByThesisId(thesis.getId()));
		}
		if (defenseRatingCusMapper != null) {
			this.setDefenseRatings(
					DefenseRatingDTO.getDTOsFromEntities(defenseRatingCusMapper.findByThesisId(thesis.getId()),
							lecturerCusMapper, defenseRatingScoreCusMapper, studentCusMapper));
		}
		if (thesisReviewCalendarCusMapper != null) {
			this.setReviewCalendar(thesisReviewCalendarCusMapper.getByThesisId(thesis.getId()));
		}
		if (thesisDefenseCalendarCusMapper != null) {
			this.setDefenseCalendar(thesisDefenseCalendarCusMapper.getByThesisId(thesis.getId()));
		}
	}
}
