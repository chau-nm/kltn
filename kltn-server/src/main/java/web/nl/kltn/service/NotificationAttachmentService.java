package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.generator.NotificationAttachment;

public interface NotificationAttachmentService {

	void deleteWithFlagByNotificationId(String notificationId);

	void deleteByNotificationId(String notificationId);

	void delete(String id);

	void update(NotificationAttachment notificationAttachment);

	List<NotificationAttachment> insertList(List<NotificationAttachment> notificationAttachments);

	NotificationAttachment insert(NotificationAttachment notificationAttachment);

}
