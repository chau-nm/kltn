package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.CriticalAssessment;
import web.nl.kltn.model.generator.CriticalAssessmentExample;

public interface CriticalAssessmentMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Sat Jul 08 20:39:31 ICT 2023
	 */
	long countByExample(CriticalAssessmentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Sat Jul 08 20:39:31 ICT 2023
	 */
	int deleteByExample(CriticalAssessmentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Sat Jul 08 20:39:31 ICT 2023
	 */
	int deleteByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Sat Jul 08 20:39:31 ICT 2023
	 */
	int insert(CriticalAssessment row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Sat Jul 08 20:39:31 ICT 2023
	 */
	int insertSelective(CriticalAssessment row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Sat Jul 08 20:39:31 ICT 2023
	 */
	List<CriticalAssessment> selectByExample(CriticalAssessmentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Sat Jul 08 20:39:31 ICT 2023
	 */
	CriticalAssessment selectByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Sat Jul 08 20:39:31 ICT 2023
	 */
	int updateByExampleSelective(@Param("row") CriticalAssessment row,
			@Param("example") CriticalAssessmentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Sat Jul 08 20:39:31 ICT 2023
	 */
	int updateByExample(@Param("row") CriticalAssessment row, @Param("example") CriticalAssessmentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Sat Jul 08 20:39:31 ICT 2023
	 */
	int updateByPrimaryKeySelective(CriticalAssessment row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Sat Jul 08 20:39:31 ICT 2023
	 */
	int updateByPrimaryKey(CriticalAssessment row);
}