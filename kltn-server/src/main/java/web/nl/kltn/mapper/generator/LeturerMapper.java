package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.Leturer;
import web.nl.kltn.model.generator.LeturerExample;

public interface LeturerMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table leturer
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	long countByExample(LeturerExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table leturer
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	int deleteByExample(LeturerExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table leturer
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	int deleteByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table leturer
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	int insert(Leturer row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table leturer
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	int insertSelective(Leturer row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table leturer
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	List<Leturer> selectByExample(LeturerExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table leturer
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	Leturer selectByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table leturer
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	int updateByExampleSelective(@Param("row") Leturer row, @Param("example") LeturerExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table leturer
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	int updateByExample(@Param("row") Leturer row, @Param("example") LeturerExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table leturer
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	int updateByPrimaryKeySelective(Leturer row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table leturer
	 * @mbg.generated  Sun Aug 27 07:37:56 ICT 2023
	 */
	int updateByPrimaryKey(Leturer row);
}