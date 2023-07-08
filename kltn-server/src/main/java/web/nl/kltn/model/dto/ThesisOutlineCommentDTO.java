package web.nl.kltn.model.dto;

import web.nl.kltn.model.generator.ThesisOutlineComment;

public class ThesisOutlineCommentDTO extends ThesisOutlineComment{

	private UserDTO user;

	public UserDTO getUser() {
		return user;
	}
	
	public void setUser(UserDTO user) {
		this.user = user;
	}
}
