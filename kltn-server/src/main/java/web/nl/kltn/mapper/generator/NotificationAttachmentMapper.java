package web.nl.kltn.mapper.generator;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import web.nl.kltn.model.generator.NotificationAttachment;
import web.nl.kltn.model.generator.NotificationAttachmentExample;

public interface NotificationAttachmentMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification_attachment
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	long countByExample(NotificationAttachmentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification_attachment
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	int deleteByExample(NotificationAttachmentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification_attachment
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	int deleteByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification_attachment
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	int insert(NotificationAttachment row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification_attachment
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	int insertSelective(NotificationAttachment row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification_attachment
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	List<NotificationAttachment> selectByExample(NotificationAttachmentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification_attachment
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	NotificationAttachment selectByPrimaryKey(String id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification_attachment
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	int updateByExampleSelective(@Param("row") NotificationAttachment row,
			@Param("example") NotificationAttachmentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification_attachment
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	int updateByExample(@Param("row") NotificationAttachment row,
			@Param("example") NotificationAttachmentExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification_attachment
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	int updateByPrimaryKeySelective(NotificationAttachment row);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table notification_attachment
	 * @mbg.generated  Sun Jul 09 20:18:49 ICT 2023
	 */
	int updateByPrimaryKey(NotificationAttachment row);
}