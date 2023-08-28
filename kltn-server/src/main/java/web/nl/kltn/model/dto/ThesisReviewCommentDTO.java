package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.mapper.UserCusMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.generator.ThesisReviewerComment;

public class ThesisReviewCommentDTO extends ThesisReviewerComment {

	private UserDTO user;

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}
	
	public static List<ThesisReviewCommentDTO> getThesisReviewCommentDTOsByEntity(List<ThesisReviewerComment> thesisReviewerComments, UserCusMapper userCusMapper) {
		return thesisReviewerComments
				.stream()
				.map(tr -> {
					ThesisReviewCommentDTO thesisReviewCommentDTO = new ThesisReviewCommentDTO();
					thesisReviewCommentDTO.load(tr, userCusMapper);
					return thesisReviewCommentDTO;
				})
				.toList();
	}
	
	public void load(ThesisReviewerComment thesisReivewerComment, UserCusMapper userCusMapper) {
		setId(thesisReivewerComment.getId());
		setThesisId(thesisReivewerComment.getThesisId());
		setUserId(thesisReivewerComment.getUserId());
		setComment(thesisReivewerComment.getComment());
		setResult(thesisReivewerComment.getResult());
		setIsGeneral(thesisReivewerComment.getIsGeneral());
		setCreatedAt(thesisReivewerComment.getCreatedAt());
		setIsDeleted(thesisReivewerComment.getIsDeleted());
		setUpdatedAt(thesisReivewerComment.getUpdatedAt());
		if (userCusMapper != null) {
			setUser(userCusMapper.findByUserId(thesisReivewerComment.getUserId()));
		}
	}
}
