package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.ThesisOutlineComment;
import web.nl.kltn.model.generator.ThesisOutlineCommentExample;

public interface ThesisOutlineCommentMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_outline_comment
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	long countByExample(ThesisOutlineCommentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_outline_comment
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	int deleteByExample(ThesisOutlineCommentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_outline_comment
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	int deleteByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_outline_comment
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	int insert(ThesisOutlineComment row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_outline_comment
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	int insertSelective(ThesisOutlineComment row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_outline_comment
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	List<ThesisOutlineComment> selectByExample(ThesisOutlineCommentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_outline_comment
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	ThesisOutlineComment selectByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_outline_comment
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	int updateByExampleSelective(@Param("row") ThesisOutlineComment row,
			@Param("example") ThesisOutlineCommentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_outline_comment
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	int updateByExample(@Param("row") ThesisOutlineComment row, @Param("example") ThesisOutlineCommentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_outline_comment
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	int updateByPrimaryKeySelective(ThesisOutlineComment row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_outline_comment
	 * @mbg.generated  Sun Aug 20 23:01:02 ICT 2023
	 */
	int updateByPrimaryKey(ThesisOutlineComment row);
}