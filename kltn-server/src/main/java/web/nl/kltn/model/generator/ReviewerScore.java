package web.nl.kltn.model.generator;

public class ReviewerScore {

	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column reviewer_score.id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	private String id;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column reviewer_score.reviewer_id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	private String reviewerId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column reviewer_score.student_id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	private String studentId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column reviewer_score.score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	private Double score;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column reviewer_score.is_deleted
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	private Boolean isDeleted;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column reviewer_score.created_at
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	private Long createdAt;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column reviewer_score.updated_at
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	private Long updatedAt;

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column reviewer_score.id
	 * @return  the value of reviewer_score.id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public String getId() {
		return id;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column reviewer_score.id
	 * @param id  the value for reviewer_score.id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column reviewer_score.reviewer_id
	 * @return  the value of reviewer_score.reviewer_id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public String getReviewerId() {
		return reviewerId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column reviewer_score.reviewer_id
	 * @param reviewerId  the value for reviewer_score.reviewer_id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public void setReviewerId(String reviewerId) {
		this.reviewerId = reviewerId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column reviewer_score.student_id
	 * @return  the value of reviewer_score.student_id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public String getStudentId() {
		return studentId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column reviewer_score.student_id
	 * @param studentId  the value for reviewer_score.student_id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column reviewer_score.score
	 * @return  the value of reviewer_score.score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public Double getScore() {
		return score;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column reviewer_score.score
	 * @param score  the value for reviewer_score.score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public void setScore(Double score) {
		this.score = score;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column reviewer_score.is_deleted
	 * @return  the value of reviewer_score.is_deleted
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public Boolean getIsDeleted() {
		return isDeleted;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column reviewer_score.is_deleted
	 * @param isDeleted  the value for reviewer_score.is_deleted
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public void setIsDeleted(Boolean isDeleted) {
		this.isDeleted = isDeleted;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column reviewer_score.created_at
	 * @return  the value of reviewer_score.created_at
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public Long getCreatedAt() {
		return createdAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column reviewer_score.created_at
	 * @param createdAt  the value for reviewer_score.created_at
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public void setCreatedAt(Long createdAt) {
		this.createdAt = createdAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column reviewer_score.updated_at
	 * @return  the value of reviewer_score.updated_at
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public Long getUpdatedAt() {
		return updatedAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column reviewer_score.updated_at
	 * @param updatedAt  the value for reviewer_score.updated_at
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public void setUpdatedAt(Long updatedAt) {
		this.updatedAt = updatedAt;
	}
}