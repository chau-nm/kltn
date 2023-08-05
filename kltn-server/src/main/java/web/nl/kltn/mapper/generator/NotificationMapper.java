package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.Notification;
import web.nl.kltn.model.generator.NotificationExample;

public interface NotificationMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	long countByExample(NotificationExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	int deleteByExample(NotificationExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	int deleteByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	int insert(Notification row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	int insertSelective(Notification row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	List<Notification> selectByExample(NotificationExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	Notification selectByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	int updateByExampleSelective(@Param("row") Notification row, @Param("example") NotificationExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	int updateByExample(@Param("row") Notification row, @Param("example") NotificationExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	int updateByPrimaryKeySelective(Notification row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	int updateByPrimaryKey(Notification row);
}