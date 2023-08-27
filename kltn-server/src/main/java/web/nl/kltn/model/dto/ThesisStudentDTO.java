package web.nl.kltn.model.dto;

import web.nl.kltn.model.generator.ThesisStudent;

public class ThesisStudentDTO extends ThesisStudent {

	private StudentDTO student;

	public StudentDTO getStudent() {
		return student;
	}

	public void setStudent(StudentDTO student) {
		this.student = student;
	}

}
