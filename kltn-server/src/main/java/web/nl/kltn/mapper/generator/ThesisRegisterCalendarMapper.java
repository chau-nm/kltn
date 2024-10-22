package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.ThesisRegisterCalendar;
import web.nl.kltn.model.generator.ThesisRegisterCalendarExample;

public interface ThesisRegisterCalendarMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table thesis_register_calendar
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    long countByExample(ThesisRegisterCalendarExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table thesis_register_calendar
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int deleteByExample(ThesisRegisterCalendarExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table thesis_register_calendar
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table thesis_register_calendar
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int insert(ThesisRegisterCalendar row);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table thesis_register_calendar
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int insertSelective(ThesisRegisterCalendar row);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table thesis_register_calendar
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    List<ThesisRegisterCalendar> selectByExample(ThesisRegisterCalendarExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table thesis_register_calendar
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    ThesisRegisterCalendar selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table thesis_register_calendar
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int updateByExampleSelective(@Param("row") ThesisRegisterCalendar row, @Param("example") ThesisRegisterCalendarExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table thesis_register_calendar
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int updateByExample(@Param("row") ThesisRegisterCalendar row, @Param("example") ThesisRegisterCalendarExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table thesis_register_calendar
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int updateByPrimaryKeySelective(ThesisRegisterCalendar row);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table thesis_register_calendar
     *
     * @mbg.generated Sun Aug 27 18:00:43 ICT 2023
     */
    int updateByPrimaryKey(ThesisRegisterCalendar row);
}