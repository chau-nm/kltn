package web.nl.kltn.model.generator;

public class RoleUser {

	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column role_user.id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	private String id;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column role_user.user_id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	private String userId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column role_user.role_id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	private Integer roleId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column role_user.is_deleted
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	private Boolean isDeleted;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column role_user.created_at
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	private Long createdAt;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column role_user.updated_at
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	private Long updatedAt;

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column role_user.id
	 * @return  the value of role_user.id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public String getId() {
		return id;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column role_user.id
	 * @param id  the value for role_user.id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column role_user.user_id
	 * @return  the value of role_user.user_id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public String getUserId() {
		return userId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column role_user.user_id
	 * @param userId  the value for role_user.user_id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public void setUserId(String userId) {
		this.userId = userId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column role_user.role_id
	 * @return  the value of role_user.role_id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public Integer getRoleId() {
		return roleId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column role_user.role_id
	 * @param roleId  the value for role_user.role_id
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column role_user.is_deleted
	 * @return  the value of role_user.is_deleted
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public Boolean getIsDeleted() {
		return isDeleted;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column role_user.is_deleted
	 * @param isDeleted  the value for role_user.is_deleted
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public void setIsDeleted(Boolean isDeleted) {
		this.isDeleted = isDeleted;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column role_user.created_at
	 * @return  the value of role_user.created_at
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public Long getCreatedAt() {
		return createdAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column role_user.created_at
	 * @param createdAt  the value for role_user.created_at
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public void setCreatedAt(Long createdAt) {
		this.createdAt = createdAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column role_user.updated_at
	 * @return  the value of role_user.updated_at
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public Long getUpdatedAt() {
		return updatedAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column role_user.updated_at
	 * @param updatedAt  the value for role_user.updated_at
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public void setUpdatedAt(Long updatedAt) {
		this.updatedAt = updatedAt;
	}
}