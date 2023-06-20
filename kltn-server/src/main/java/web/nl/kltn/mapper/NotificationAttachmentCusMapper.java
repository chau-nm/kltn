package web.nl.kltn.mapper;

public interface NotificationAttachmentCusMapper {
	public void delete(String notificationId);
	public void deleteWithFlagIsDeleted(String notificationId);
}
