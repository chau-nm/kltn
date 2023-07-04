package web.nl.kltn.mapper;

import java.util.List;

public interface NotificationAttachmentCusMapper {
	public void delete(String notificationId);
	public void deleteWithFlagIsDeleted(String notificationId);
	public List<String> getAttachmentByNotificationId(String notificationId);
}
