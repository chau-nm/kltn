package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.mapper.ThesisDocumentCusMapper;
import web.nl.kltn.mapper.ThesisUserCusMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.generator.*;

public class ThesisDTO extends Thesis {
	private User userCreated;
	private List<ThesisUserDTO> students;
	private ThesisUserDTO teacher;
	private String outlineUrl;
	private List<ThesisOutlineCommentDTO> thesisOutlineComments;
	private String documentUrl;
	private CriticalAssessmentDTO criticalAssessment;
	private ProtectionRatingScoreDTO protectionRatingScoreDTO;
	private long feedbackTime;
	private long protectdTime;

	public List<ThesisUserDTO> getStudents() {
		return students;
	}

	public long getFeedbackTime() {
		return feedbackTime;
	}

	public CriticalAssessmentDTO getCriticalAssessment() {
		return criticalAssessment;
	}

	public void setCriticalAssessment(CriticalAssessmentDTO criticalAssessment) {
		this.criticalAssessment = criticalAssessment;
	}

	public ProtectionRatingScoreDTO getProtectionRatingScoreDTO() {
		return protectionRatingScoreDTO;
	}

	public void setProtectionRatingScoreDTO(ProtectionRatingScoreDTO protectionRatingScoreDTO) {
		this.protectionRatingScoreDTO = protectionRatingScoreDTO;
	}

	public void setFeedbackTime(long feedbackTime) {
		this.feedbackTime = feedbackTime;
	}

	public long getProtectdTime() {
		return protectdTime;
	}

	public void setProtectdTime(long protectdTime) {
		this.protectdTime = protectdTime;
	}

	public void setStudents(List<ThesisUserDTO> students) {
		this.students = students;
	}

	public ThesisUserDTO getTeacher() {
		return teacher;
	}

	public void setTeacher(ThesisUserDTO teacher) {
		this.teacher = teacher;
	}

	public List<ThesisOutlineCommentDTO> getThesisOutlineComments() {
		return thesisOutlineComments;
	}

	public void setThesisOutlineComments(List<ThesisOutlineCommentDTO> thesisOutlineComments) {
		this.thesisOutlineComments = thesisOutlineComments;
	}

	public String getOutlineUrl() {
		return outlineUrl;
	}

	public void setOutlineUrl(String outlineUrl) {
		this.outlineUrl = outlineUrl;
	}

	public String getDocumentUrl() {
		return documentUrl;
	}

	public void setDocumentUrl(String documentUrl) {
		this.documentUrl = documentUrl;
	}

	public User getUserCreated() {
		return userCreated;
	}

	public void setUserCreated(User userCreated) {
		this.userCreated = userCreated;
	}

	public void load(Thesis thesis, ThesisUserCusMapper thesisUserCusMapper, UserMapper userMapper,
			ThesisDocumentCusMapper thesisDocumentCusMapper) {
		this.setId(thesis.getId());
		this.setTopic(thesis.getTopic());
		this.setDescription(thesis.getDescription());
		this.setYear(thesis.getYear());
		this.setSemester(thesis.getSemester());
		this.setStatus(thesis.getStatus());
		this.setCreatedBy(thesis.getCreatedBy());
		this.setIsDeleted(thesis.getIsDeleted());
		this.setCreatedAt(thesis.getCreatedAt());
		this.setUpdatedAt(thesis.getUpdatedAt());
		this.setUserCreated(userMapper.selectByPrimaryKey(thesis.getCreatedBy()));
		List<ThesisUser> thesisUsers = thesisUserCusMapper.search(thesis.getId(), 1);
		this.setStudents(thesisUsers.stream().map(tu -> {
			ThesisUserDTO thesisUserDTO = new ThesisUserDTO();
			thesisUserDTO.load(tu, userMapper);
			thesisUserDTO.setUser(userMapper.selectByPrimaryKey(tu.getUserId()));
			return thesisUserDTO;
		}).toList());
		ThesisUser teacher = thesisUserCusMapper.search(thesis.getId(), 2).get(0);
		if (teacher != null) {
			ThesisUserDTO teacherDTO = new ThesisUserDTO();
			teacherDTO.load(teacher, userMapper);
			teacherDTO.setUser(userMapper.selectByPrimaryKey(teacher.getUserId()));
			this.setTeacher(teacherDTO);
		}
		List<String> outLineUrls = thesisDocumentCusMapper.getFilesByThesisId(thesis.getId(), 1);
		if (outLineUrls.size() > 0) {
			this.setOutlineUrl(outLineUrls.get(0));
		}
		List<String> documentUrls = thesisDocumentCusMapper.getFilesByThesisId(thesis.getId(), 2);
		if (documentUrls.size() > 0) {
			this.setDocumentUrl(documentUrls.get(0));
		}
	}
}
