package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.ProtectionRatingScore;
import web.nl.kltn.model.generator.ProtectionRatingScoreExample;

public interface ProtectionRatingScoreMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating_score
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	long countByExample(ProtectionRatingScoreExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating_score
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	int deleteByExample(ProtectionRatingScoreExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating_score
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	int deleteByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating_score
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	int insert(ProtectionRatingScore row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating_score
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	int insertSelective(ProtectionRatingScore row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating_score
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	List<ProtectionRatingScore> selectByExample(ProtectionRatingScoreExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating_score
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	ProtectionRatingScore selectByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating_score
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	int updateByExampleSelective(@Param("row") ProtectionRatingScore row,
			@Param("example") ProtectionRatingScoreExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating_score
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	int updateByExample(@Param("row") ProtectionRatingScore row,
			@Param("example") ProtectionRatingScoreExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating_score
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	int updateByPrimaryKeySelective(ProtectionRatingScore row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table protection_rating_score
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	int updateByPrimaryKey(ProtectionRatingScore row);
}