package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.NotificationSearchCondition;
import web.nl.kltn.model.dto.NotificationDTO;
import web.nl.kltn.model.generator.Notification;

public interface NotificationService {
	public List<Notification> search(int page, int pageSize, NotificationSearchCondition searchCondition);

	public Notification insert(Notification notification);

	void update(Notification notification);

	void delete(String notificationId);

	int getTotal(NotificationSearchCondition searchCondition);

	NotificationDTO getDetail(String notificationId);

	NotificationDTO insert(NotificationDTO notificationDTO);
}
