package web.nl.kltn.model.dto;

import web.nl.kltn.model.generator.ThesisUser;
import web.nl.kltn.model.generator.User;

public class ThesisUserDTO extends ThesisUser {
	private User user;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	public void load(ThesisUser thesisUser) {
		this.setId(thesisUser.getId());
		this.setThesisId(thesisUser.getThesisId());
		this.setUserId(thesisUser.getUserId());
		this.setType(thesisUser.getType());
		this.setStatus(thesisUser.getStatus());
		this.setIsDeleted(thesisUser.getIsDeleted());
		this.setCreatedAt(thesisUser.getCreatedAt());
		this.setUpdatedAt(thesisUser.getUpdatedAt());
	}
}
