package web.nl.kltn.model.dto;

public class LecturerDTO extends UserDTO{
	private String degree;
	private String title;
	
	public String getDegree() {
		return degree;
	}
	
	public void setDegree(String degree) {
		this.degree = degree;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
}
