package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.CriticalAssessmentQuestion;
import web.nl.kltn.model.generator.CriticalAssessmentQuestionExample;

public interface CriticalAssessmentQuestionMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_question
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	long countByExample(CriticalAssessmentQuestionExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_question
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	int deleteByExample(CriticalAssessmentQuestionExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_question
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	int deleteByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_question
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	int insert(CriticalAssessmentQuestion row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_question
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	int insertSelective(CriticalAssessmentQuestion row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_question
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	List<CriticalAssessmentQuestion> selectByExample(CriticalAssessmentQuestionExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_question
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	CriticalAssessmentQuestion selectByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_question
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	int updateByExampleSelective(@Param("row") CriticalAssessmentQuestion row,
			@Param("example") CriticalAssessmentQuestionExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_question
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	int updateByExample(@Param("row") CriticalAssessmentQuestion row,
			@Param("example") CriticalAssessmentQuestionExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_question
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	int updateByPrimaryKeySelective(CriticalAssessmentQuestion row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment_question
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	int updateByPrimaryKey(CriticalAssessmentQuestion row);
}