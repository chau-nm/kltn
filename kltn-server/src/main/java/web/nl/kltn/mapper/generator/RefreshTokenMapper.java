package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.RefreshToken;
import web.nl.kltn.model.generator.RefreshTokenExample;

public interface RefreshTokenMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table refresh_token
	 * @mbg.generated  Sat May 13 11:33:41 ICT 2023
	 */
	long countByExample(RefreshTokenExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table refresh_token
	 * @mbg.generated  Sat May 13 11:33:41 ICT 2023
	 */
	int deleteByExample(RefreshTokenExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table refresh_token
	 * @mbg.generated  Sat May 13 11:33:41 ICT 2023
	 */
	int deleteByPrimaryKey(String token);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table refresh_token
	 * @mbg.generated  Sat May 13 11:33:41 ICT 2023
	 */
	int insert(RefreshToken row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table refresh_token
	 * @mbg.generated  Sat May 13 11:33:41 ICT 2023
	 */
	int insertSelective(RefreshToken row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table refresh_token
	 * @mbg.generated  Sat May 13 11:33:41 ICT 2023
	 */
	List<RefreshToken> selectByExample(RefreshTokenExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table refresh_token
	 * @mbg.generated  Sat May 13 11:33:41 ICT 2023
	 */
	RefreshToken selectByPrimaryKey(String token);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table refresh_token
	 * @mbg.generated  Sat May 13 11:33:41 ICT 2023
	 */
	int updateByExampleSelective(@Param("row") RefreshToken row, @Param("example") RefreshTokenExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table refresh_token
	 * @mbg.generated  Sat May 13 11:33:41 ICT 2023
	 */
	int updateByExample(@Param("row") RefreshToken row, @Param("example") RefreshTokenExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table refresh_token
	 * @mbg.generated  Sat May 13 11:33:41 ICT 2023
	 */
	int updateByPrimaryKeySelective(RefreshToken row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table refresh_token
	 * @mbg.generated  Sat May 13 11:33:41 ICT 2023
	 */
	int updateByPrimaryKey(RefreshToken row);
}