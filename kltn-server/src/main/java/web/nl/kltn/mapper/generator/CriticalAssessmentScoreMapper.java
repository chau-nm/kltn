package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.CriticalAssessmentScore;
import web.nl.kltn.model.generator.CriticalAssessmentScoreExample;

public interface CriticalAssessmentScoreMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_score
	 * @mbg.generated  Tue Aug 08 21:20:48 ICT 2023
	 */
	long countByExample(CriticalAssessmentScoreExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_score
	 * @mbg.generated  Tue Aug 08 21:20:48 ICT 2023
	 */
	int deleteByExample(CriticalAssessmentScoreExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_score
	 * @mbg.generated  Tue Aug 08 21:20:48 ICT 2023
	 */
	int deleteByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_score
	 * @mbg.generated  Tue Aug 08 21:20:48 ICT 2023
	 */
	int insert(CriticalAssessmentScore row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_score
	 * @mbg.generated  Tue Aug 08 21:20:48 ICT 2023
	 */
	int insertSelective(CriticalAssessmentScore row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_score
	 * @mbg.generated  Tue Aug 08 21:20:48 ICT 2023
	 */
	List<CriticalAssessmentScore> selectByExample(CriticalAssessmentScoreExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_score
	 * @mbg.generated  Tue Aug 08 21:20:48 ICT 2023
	 */
	CriticalAssessmentScore selectByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_score
	 * @mbg.generated  Tue Aug 08 21:20:48 ICT 2023
	 */
	int updateByExampleSelective(@Param("row") CriticalAssessmentScore row,
			@Param("example") CriticalAssessmentScoreExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_score
	 * @mbg.generated  Tue Aug 08 21:20:48 ICT 2023
	 */
	int updateByExample(@Param("row") CriticalAssessmentScore row,
			@Param("example") CriticalAssessmentScoreExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_score
	 * @mbg.generated  Tue Aug 08 21:20:48 ICT 2023
	 */
	int updateByPrimaryKeySelective(CriticalAssessmentScore row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_score
	 * @mbg.generated  Tue Aug 08 21:20:48 ICT 2023
	 */
	int updateByPrimaryKey(CriticalAssessmentScore row);
}