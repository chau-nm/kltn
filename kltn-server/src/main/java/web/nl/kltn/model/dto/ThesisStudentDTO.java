package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.mapper.StudentCusMapper;
import web.nl.kltn.mapper.UserCusMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.generator.Student;
import web.nl.kltn.model.generator.ThesisStudent;

public class ThesisStudentDTO extends ThesisStudent {

	private StudentDTO student;

	public StudentDTO getStudent() {
		return student;
	}

	public void setStudent(StudentDTO student) {
		this.student = student;
	}
	
	public static List<StudentDTO> getStudentDTOsByListThesisStudent(List<ThesisStudent> thesisStudents, StudentCusMapper studentCusMapper) {
		return thesisStudents
				.stream()
				.map(ts -> {
					ThesisStudentDTO thesisStudentDTO = new ThesisStudentDTO();
					thesisStudentDTO.load(ts, studentCusMapper);
					return thesisStudentDTO.getStudent();
				})
				.toList();
	}
	
	public void load(ThesisStudent thesisStudent, StudentCusMapper studentCusMapper) {
		this.setId(thesisStudent.getId());
		this.setThesisId(thesisStudent.getThesisId());
		this.setStudentId(thesisStudent.getStudentId());
		this.setIsActive(thesisStudent.getIsActive());
		this.setIsDeleted(thesisStudent.getIsDeleted());
		this.setCreatedAt(thesisStudent.getCreatedAt());
		this.setUpdatedAt(thesisStudent.getUpdatedAt());
		if (studentCusMapper != null) {
			System.out.println(thesisStudent.getStudentId());
			this.setStudent(studentCusMapper.getStudentByUserId(thesisStudent.getStudentId()));
		}
 	}
}
