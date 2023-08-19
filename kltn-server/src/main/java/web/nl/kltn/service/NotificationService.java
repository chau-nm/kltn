package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.NotificationSearchCondition;
import web.nl.kltn.model.dto.NotificationDTO;
import web.nl.kltn.model.generator.Notification;

public interface NotificationService {
	List<Notification> search(int page, int pageSize, NotificationSearchCondition searchCondition);

	Notification insert(Notification notification) throws Exception;

	void update(NotificationDTO notificationDTO) throws Exception;

	void delete(String notificationId);

	int getTotal(NotificationSearchCondition searchCondition);

	NotificationDTO getDetail(String notificationId);

	NotificationDTO insert(NotificationDTO notificationDTO) throws Exception;
}
