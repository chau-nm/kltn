package web.nl.kltn.model.dto;

import web.nl.kltn.model.generator.ThesisOutlineComment;
import web.nl.kltn.model.generator.ThesisReviewerComment;

public class ThesisReviewCommentDTO extends ThesisReviewerComment {

	private UserDTO user;

	public void load(ThesisReviewerComment thesisReivewerComment) {
		setId(thesisReivewerComment.getId());
		setThesisId(thesisReivewerComment.getThesisId());
		setUserId(thesisReivewerComment.getUserId());
		setComment(thesisReivewerComment.getComment());
		setCreatedAt(thesisReivewerComment.getCreatedAt());
		setIsDeleted(thesisReivewerComment.getIsDeleted());
		setUpdatedAt(thesisReivewerComment.getUpdatedAt());
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}
}
