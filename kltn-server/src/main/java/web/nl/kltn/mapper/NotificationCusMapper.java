package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.NotificationSearchCondition;
import web.nl.kltn.model.dto.NotificationDTO;
import web.nl.kltn.model.generator.Notification;

public interface NotificationCusMapper {
	public List<Notification> search(
			int page, 
			int pageSize, 
			NotificationSearchCondition searchCondition
	);
	
	public int getTotal(NotificationSearchCondition searchCondition);
}
