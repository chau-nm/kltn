package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.Thesis;
import web.nl.kltn.model.generator.ThesisExample;

public interface ThesisMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	long countByExample(ThesisExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	int deleteByExample(ThesisExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	int deleteByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	int insert(Thesis row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	int insertSelective(Thesis row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	List<Thesis> selectByExample(ThesisExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	Thesis selectByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	int updateByExampleSelective(@Param("row") Thesis row, @Param("example") ThesisExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	int updateByExample(@Param("row") Thesis row, @Param("example") ThesisExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	int updateByPrimaryKeySelective(Thesis row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis
	 * @mbg.generated  Sun Aug 13 22:33:45 ICT 2023
	 */
	int updateByPrimaryKey(Thesis row);
}