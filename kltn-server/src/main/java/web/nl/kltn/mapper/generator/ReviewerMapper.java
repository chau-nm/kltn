package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.Reviewer;
import web.nl.kltn.model.generator.ReviewerExample;

public interface ReviewerMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	long countByExample(ReviewerExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int deleteByExample(ReviewerExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int deleteByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int insert(Reviewer row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int insertSelective(Reviewer row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	List<Reviewer> selectByExample(ReviewerExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	Reviewer selectByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int updateByExampleSelective(@Param("row") Reviewer row, @Param("example") ReviewerExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int updateByExample(@Param("row") Reviewer row, @Param("example") ReviewerExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int updateByPrimaryKeySelective(Reviewer row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int updateByPrimaryKey(Reviewer row);
}