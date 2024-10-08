package web.nl.kltn.model.generator;

public class NotificationAttachment {

	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column notification_attachment.id
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	private String id;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column notification_attachment.notification_id
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	private String notificationId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column notification_attachment.attachment_url
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	private String attachmentUrl;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column notification_attachment.is_deleted
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	private Boolean isDeleted;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column notification_attachment.created_at
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	private Long createdAt;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column notification_attachment.updated_at
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	private Long updatedAt;

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column notification_attachment.id
	 * @return  the value of notification_attachment.id
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public String getId() {
		return id;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column notification_attachment.id
	 * @param id  the value for notification_attachment.id
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column notification_attachment.notification_id
	 * @return  the value of notification_attachment.notification_id
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public String getNotificationId() {
		return notificationId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column notification_attachment.notification_id
	 * @param notificationId  the value for notification_attachment.notification_id
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public void setNotificationId(String notificationId) {
		this.notificationId = notificationId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column notification_attachment.attachment_url
	 * @return  the value of notification_attachment.attachment_url
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public String getAttachmentUrl() {
		return attachmentUrl;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column notification_attachment.attachment_url
	 * @param attachmentUrl  the value for notification_attachment.attachment_url
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public void setAttachmentUrl(String attachmentUrl) {
		this.attachmentUrl = attachmentUrl;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column notification_attachment.is_deleted
	 * @return  the value of notification_attachment.is_deleted
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public Boolean getIsDeleted() {
		return isDeleted;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column notification_attachment.is_deleted
	 * @param isDeleted  the value for notification_attachment.is_deleted
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public void setIsDeleted(Boolean isDeleted) {
		this.isDeleted = isDeleted;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column notification_attachment.created_at
	 * @return  the value of notification_attachment.created_at
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public Long getCreatedAt() {
		return createdAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column notification_attachment.created_at
	 * @param createdAt  the value for notification_attachment.created_at
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public void setCreatedAt(Long createdAt) {
		this.createdAt = createdAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column notification_attachment.updated_at
	 * @return  the value of notification_attachment.updated_at
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public Long getUpdatedAt() {
		return updatedAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column notification_attachment.updated_at
	 * @param updatedAt  the value for notification_attachment.updated_at
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public void setUpdatedAt(Long updatedAt) {
		this.updatedAt = updatedAt;
	}
}