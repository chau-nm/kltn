package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.DefenseRatingScore;
import web.nl.kltn.model.generator.DefenseRatingScoreExample;

public interface DefenseRatingScoreMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating_score
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    long countByExample(DefenseRatingScoreExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating_score
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int deleteByExample(DefenseRatingScoreExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating_score
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int deleteByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating_score
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int insert(DefenseRatingScore row);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating_score
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int insertSelective(DefenseRatingScore row);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating_score
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    List<DefenseRatingScore> selectByExample(DefenseRatingScoreExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating_score
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    DefenseRatingScore selectByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating_score
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int updateByExampleSelective(@Param("row") DefenseRatingScore row, @Param("example") DefenseRatingScoreExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating_score
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int updateByExample(@Param("row") DefenseRatingScore row, @Param("example") DefenseRatingScoreExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating_score
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int updateByPrimaryKeySelective(DefenseRatingScore row);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table defense_rating_score
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int updateByPrimaryKey(DefenseRatingScore row);
}