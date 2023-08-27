package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.ReviewerScore;
import web.nl.kltn.model.generator.ReviewerScoreExample;

public interface ReviewerScoreMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	long countByExample(ReviewerScoreExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int deleteByExample(ReviewerScoreExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int deleteByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int insert(ReviewerScore row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int insertSelective(ReviewerScore row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	List<ReviewerScore> selectByExample(ReviewerScoreExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	ReviewerScore selectByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int updateByExampleSelective(@Param("row") ReviewerScore row, @Param("example") ReviewerScoreExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int updateByExample(@Param("row") ReviewerScore row, @Param("example") ReviewerScoreExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int updateByPrimaryKeySelective(ReviewerScore row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int updateByPrimaryKey(ReviewerScore row);
}