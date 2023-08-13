package web.nl.kltn.model.dto;

import web.nl.kltn.model.generator.ThesisOutlineComment;

public class ThesisOutlineCommentDTO extends ThesisOutlineComment{

	private UserDTO user;
	
	public void load(ThesisOutlineComment thesisOutlineComment){
		setId(thesisOutlineComment.getId());
		setThesisId(thesisOutlineComment.getThesisId());
		setUserId(thesisOutlineComment.getUserId());
		setComment(thesisOutlineComment.getComment());
		setOrder(thesisOutlineComment.getOrder());
		setCreatedAt(thesisOutlineComment.getCreatedAt());
		setIsDeleted(thesisOutlineComment.getIsDeleted());
		setUpdatedAt(thesisOutlineComment.getUpdatedAt());
	}

	public UserDTO getUser() {
		return user;
	}
	
	public void setUser(UserDTO user) {
		this.user = user;
	}
}
