package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.ThesisDocument;
import web.nl.kltn.model.generator.ThesisDocumentExample;

public interface ThesisDocumentMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_document
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	long countByExample(ThesisDocumentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_document
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int deleteByExample(ThesisDocumentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_document
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int deleteByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_document
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int insert(ThesisDocument row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_document
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int insertSelective(ThesisDocument row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_document
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	List<ThesisDocument> selectByExample(ThesisDocumentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_document
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	ThesisDocument selectByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_document
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int updateByExampleSelective(@Param("row") ThesisDocument row, @Param("example") ThesisDocumentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_document
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int updateByExample(@Param("row") ThesisDocument row, @Param("example") ThesisDocumentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_document
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int updateByPrimaryKeySelective(ThesisDocument row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table thesis_document
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	int updateByPrimaryKey(ThesisDocument row);
}