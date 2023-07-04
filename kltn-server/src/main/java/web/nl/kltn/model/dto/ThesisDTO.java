package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.model.generator.Thesis;

public class ThesisDTO extends Thesis{
	private List<UserDTO> students;
	private List<UserDTO> teachers;

	public List<UserDTO> getStudents() {
		return students;
	}

	public void setStudents(List<UserDTO> students) {
		this.students = students;
	}

	public List<UserDTO> getTeachers() {
		return teachers;
	}

	public void setTeachers(List<UserDTO> teachers) {
		this.teachers = teachers;
	}
}
