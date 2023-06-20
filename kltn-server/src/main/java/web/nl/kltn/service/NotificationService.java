package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.NotificationCus;
import web.nl.kltn.model.NotificationSearchCondition;

public interface NotificationService {
	public List<NotificationCus> search(int page, int pageSize, NotificationSearchCondition searchCondition);

	public NotificationCus insert(NotificationCus notificationCus);

	void update(NotificationCus notificationCus);

	void deleted(String notificationId);
}
