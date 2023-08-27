package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.DefenseRating;
import web.nl.kltn.model.generator.DefenseRatingExample;

public interface DefenseRatingMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    long countByExample(DefenseRatingExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int deleteByExample(DefenseRatingExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int deleteByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int insert(DefenseRating row);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int insertSelective(DefenseRating row);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    List<DefenseRating> selectByExample(DefenseRatingExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    DefenseRating selectByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int updateByExampleSelective(@Param("row") DefenseRating row, @Param("example") DefenseRatingExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int updateByExample(@Param("row") DefenseRating row, @Param("example") DefenseRatingExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int updateByPrimaryKeySelective(DefenseRating row);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int updateByPrimaryKey(DefenseRating row);
}