package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.ProtectionRating;
import web.nl.kltn.model.generator.ProtectionRatingExample;

public interface ProtectionRatingMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating
	 * @mbg.generated  Mon Aug 21 22:45:03 ICT 2023
	 */
	long countByExample(ProtectionRatingExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating
	 * @mbg.generated  Mon Aug 21 22:45:03 ICT 2023
	 */
	int deleteByExample(ProtectionRatingExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating
	 * @mbg.generated  Mon Aug 21 22:45:03 ICT 2023
	 */
	int deleteByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating
	 * @mbg.generated  Mon Aug 21 22:45:03 ICT 2023
	 */
	int insert(ProtectionRating row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating
	 * @mbg.generated  Mon Aug 21 22:45:03 ICT 2023
	 */
	int insertSelective(ProtectionRating row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating
	 * @mbg.generated  Mon Aug 21 22:45:03 ICT 2023
	 */
	List<ProtectionRating> selectByExample(ProtectionRatingExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating
	 * @mbg.generated  Mon Aug 21 22:45:03 ICT 2023
	 */
	ProtectionRating selectByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating
	 * @mbg.generated  Mon Aug 21 22:45:03 ICT 2023
	 */
	int updateByExampleSelective(@Param("row") ProtectionRating row, @Param("example") ProtectionRatingExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating
	 * @mbg.generated  Mon Aug 21 22:45:03 ICT 2023
	 */
	int updateByExample(@Param("row") ProtectionRating row, @Param("example") ProtectionRatingExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating
	 * @mbg.generated  Mon Aug 21 22:45:03 ICT 2023
	 */
	int updateByPrimaryKeySelective(ProtectionRating row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating
	 * @mbg.generated  Mon Aug 21 22:45:03 ICT 2023
	 */
	int updateByPrimaryKey(ProtectionRating row);
}