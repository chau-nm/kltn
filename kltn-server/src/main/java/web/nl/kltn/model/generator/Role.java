package web.nl.kltn.model.generator;

public class Role {

	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column role.role_id
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	private Integer roleId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column role.role_name
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	private String roleName;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column role.create_at
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	private Long createAt;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column role.update_at
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	private Long updateAt;

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column role.role_id
	 * @return  the value of role.role_id
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	public Integer getRoleId() {
		return roleId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column role.role_id
	 * @param roleId  the value for role.role_id
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column role.role_name
	 * @return  the value of role.role_name
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	public String getRoleName() {
		return roleName;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column role.role_name
	 * @param roleName  the value for role.role_name
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column role.create_at
	 * @return  the value of role.create_at
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	public Long getCreateAt() {
		return createAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column role.create_at
	 * @param createAt  the value for role.create_at
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	public void setCreateAt(Long createAt) {
		this.createAt = createAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column role.update_at
	 * @return  the value of role.update_at
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	public Long getUpdateAt() {
		return updateAt;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column role.update_at
	 * @param updateAt  the value for role.update_at
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	public void setUpdateAt(Long updateAt) {
		this.updateAt = updateAt;
	}
}