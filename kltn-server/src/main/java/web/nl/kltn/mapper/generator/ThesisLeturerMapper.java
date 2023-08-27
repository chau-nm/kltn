package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.ThesisLeturer;
import web.nl.kltn.model.generator.ThesisLeturerExample;

public interface ThesisLeturerMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_leturer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	long countByExample(ThesisLeturerExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_leturer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int deleteByExample(ThesisLeturerExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_leturer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int deleteByPrimaryKey(Integer id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_leturer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int insert(ThesisLeturer row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_leturer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int insertSelective(ThesisLeturer row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_leturer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	List<ThesisLeturer> selectByExample(ThesisLeturerExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_leturer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	ThesisLeturer selectByPrimaryKey(Integer id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_leturer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int updateByExampleSelective(@Param("row") ThesisLeturer row, @Param("example") ThesisLeturerExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_leturer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int updateByExample(@Param("row") ThesisLeturer row, @Param("example") ThesisLeturerExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_leturer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int updateByPrimaryKeySelective(ThesisLeturer row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_leturer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int updateByPrimaryKey(ThesisLeturer row);
}