package web.nl.kltn.model.generator;

public class ReviewerQuestion {

	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column reviewer_question.id
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	private String id;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column reviewer_question.reviewer_id
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	private String reviewerId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column reviewer_question.question
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	private String question;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column reviewer_question.is_deleted
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	private Boolean isDeleted;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column reviewer_question.created_at
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	private Long createdAt;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column reviewer_question.updated_at
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	private Long updatedAt;

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column reviewer_question.id
	 * @return  the value of reviewer_question.id
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	public String getId() {
		return id;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column reviewer_question.id
	 * @param id  the value for reviewer_question.id
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column reviewer_question.reviewer_id
	 * @return  the value of reviewer_question.reviewer_id
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	public String getReviewerId() {
		return reviewerId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column reviewer_question.reviewer_id
	 * @param reviewerId  the value for reviewer_question.reviewer_id
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	public void setReviewerId(String reviewerId) {
		this.reviewerId = reviewerId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column reviewer_question.question
	 * @return  the value of reviewer_question.question
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	public String getQuestion() {
		return question;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column reviewer_question.question
	 * @param question  the value for reviewer_question.question
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	public void setQuestion(String question) {
		this.question = question;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column reviewer_question.is_deleted
	 * @return  the value of reviewer_question.is_deleted
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	public Boolean getIsDeleted() {
		return isDeleted;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column reviewer_question.is_deleted
	 * @param isDeleted  the value for reviewer_question.is_deleted
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	public void setIsDeleted(Boolean isDeleted) {
		this.isDeleted = isDeleted;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column reviewer_question.created_at
	 * @return  the value of reviewer_question.created_at
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	public Long getCreatedAt() {
		return createdAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column reviewer_question.created_at
	 * @param createdAt  the value for reviewer_question.created_at
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	public void setCreatedAt(Long createdAt) {
		this.createdAt = createdAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column reviewer_question.updated_at
	 * @return  the value of reviewer_question.updated_at
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	public Long getUpdatedAt() {
		return updatedAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column reviewer_question.updated_at
	 * @param updatedAt  the value for reviewer_question.updated_at
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	public void setUpdatedAt(Long updatedAt) {
		this.updatedAt = updatedAt;
	}
}