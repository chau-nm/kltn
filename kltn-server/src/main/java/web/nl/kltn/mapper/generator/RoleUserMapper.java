package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.RoleUser;
import web.nl.kltn.model.generator.RoleUserExample;

public interface RoleUserMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role_user
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	long countByExample(RoleUserExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role_user
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	int deleteByExample(RoleUserExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role_user
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	int deleteByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role_user
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	int insert(RoleUser row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role_user
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	int insertSelective(RoleUser row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role_user
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	List<RoleUser> selectByExample(RoleUserExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role_user
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	RoleUser selectByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role_user
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	int updateByExampleSelective(@Param("row") RoleUser row, @Param("example") RoleUserExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role_user
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	int updateByExample(@Param("row") RoleUser row, @Param("example") RoleUserExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role_user
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	int updateByPrimaryKeySelective(RoleUser row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role_user
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	int updateByPrimaryKey(RoleUser row);
}