package web.nl.kltn.model.generator;

public class Notification {

	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column notification.id
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	private String id;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column notification.title
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	private String title;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column notification.content
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	private String content;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column notification.is_deleted
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	private Boolean isDeleted;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column notification.created_at
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	private Long createdAt;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column notification.updated_at
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	private Long updatedAt;

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column notification.id
	 * @return  the value of notification.id
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	public String getId() {
		return id;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column notification.id
	 * @param id  the value for notification.id
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column notification.title
	 * @return  the value of notification.title
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	public String getTitle() {
		return title;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column notification.title
	 * @param title  the value for notification.title
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column notification.content
	 * @return  the value of notification.content
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	public String getContent() {
		return content;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column notification.content
	 * @param content  the value for notification.content
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	public void setContent(String content) {
		this.content = content;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column notification.is_deleted
	 * @return  the value of notification.is_deleted
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	public Boolean getIsDeleted() {
		return isDeleted;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column notification.is_deleted
	 * @param isDeleted  the value for notification.is_deleted
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	public void setIsDeleted(Boolean isDeleted) {
		this.isDeleted = isDeleted;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column notification.created_at
	 * @return  the value of notification.created_at
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	public Long getCreatedAt() {
		return createdAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column notification.created_at
	 * @param createdAt  the value for notification.created_at
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	public void setCreatedAt(Long createdAt) {
		this.createdAt = createdAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column notification.updated_at
	 * @return  the value of notification.updated_at
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	public Long getUpdatedAt() {
		return updatedAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column notification.updated_at
	 * @param updatedAt  the value for notification.updated_at
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	public void setUpdatedAt(Long updatedAt) {
		this.updatedAt = updatedAt;
	}
}