package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.User;
import web.nl.kltn.model.generator.UserExample;
import web.nl.kltn.model.generator.UserWithBLOBs;

public interface UserMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table user
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	long countByExample(UserExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table user
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	int deleteByExample(UserExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table user
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	int deleteByPrimaryKey(String userId);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table user
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	int insert(User row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table user
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	int insertSelective(User row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table user
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	List<User> selectByExample(UserExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table user
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	User selectByPrimaryKey(String userId);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table user
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	int updateByExampleSelective(@Param("row") User row, @Param("example") UserExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table user
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	int updateByExample(@Param("row") User row, @Param("example") UserExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table user
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	int updateByPrimaryKeySelective(User row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table user
	 * @mbg.generated  Thu May 25 21:47:29 ICT 2023
	 */
	int updateByPrimaryKey(User row);
}