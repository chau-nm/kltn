package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.mapper.LeturerCusMapper;
import web.nl.kltn.mapper.StudentCusMapper;
import web.nl.kltn.mapper.ThesisDocumentCusMapper;
import web.nl.kltn.mapper.ThesisLeturerCusMapper;
import web.nl.kltn.mapper.ThesisStudentCusMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.generator.Thesis;
import web.nl.kltn.model.generator.ThesisDefenseCalendar;
import web.nl.kltn.model.generator.ThesisDocument;
import web.nl.kltn.model.generator.ThesisReviewCalendar;
import web.nl.kltn.model.generator.User;

public class ThesisDTO extends Thesis {
	private User userCreated;
	private List<StudentDTO> students;
	private List<LeturerDTO> teachers;
	private List<ThesisDocument> fileAttachments;
	private List<ThesisReviewCommentDTO> thesisReviewerComments;
	private List<ReviewerDTO> reviewerDTO;
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

	public List<LeturerDTO> getTeachers() {
		return teachers;
	}

	public void setTeacher(List<LeturerDTO> teachers) {
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

	public List<ReviewerDTO> getReviewerDTO() {
		return reviewerDTO;
	}

	public void setReviewerDTO(List<ReviewerDTO> reviewerDTO) {
		this.reviewerDTO = reviewerDTO;
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
			ThesisLeturerCusMapper thesisLeturerCusMapper, StudentCusMapper studentCusMapper,
			LeturerCusMapper leturerCusMapper, UserMapper userMapper) {
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
		if (thesisLeturerCusMapper != null) {
			this.setTeacher(ThesisLeturerDTO.getStudentDTOsByListThesisStudent(
					thesisLeturerCusMapper.getThesisLeturerByThesisId(thesis.getId()), leturerCusMapper));
		}
	}
}
