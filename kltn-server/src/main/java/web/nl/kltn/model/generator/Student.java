package web.nl.kltn.model.generator;

public class Student {

	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column student.id
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	private String id;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column student.user_id
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	private String userId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column student.student_class
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	private String studentClass;

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column student.id
	 * @return  the value of student.id
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public String getId() {
		return id;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column student.id
	 * @param id  the value for student.id
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column student.user_id
	 * @return  the value of student.user_id
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public String getUserId() {
		return userId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column student.user_id
	 * @param userId  the value for student.user_id
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public void setUserId(String userId) {
		this.userId = userId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column student.student_class
	 * @return  the value of student.student_class
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public String getStudentClass() {
		return studentClass;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column student.student_class
	 * @param studentClass  the value for student.student_class
	 * @mbg.generated  Sun Aug 27 18:00:43 ICT 2023
	 */
	public void setStudentClass(String studentClass) {
		this.studentClass = studentClass;
	}
}