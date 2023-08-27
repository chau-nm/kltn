package web.nl.kltn.model.dto;

public class StudentDTO extends UserDTO{
	
	private String studentClass;
	
	public String getStudentClass() {
		return studentClass;
	}
	
	public void setStudentClass(String studentClass) {
		this.studentClass = studentClass;
	}
}
