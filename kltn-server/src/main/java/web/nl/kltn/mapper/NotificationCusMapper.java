package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.NotificationCus;
import web.nl.kltn.model.NotificationSearchCondition;

public interface NotificationCusMapper {
	public List<NotificationCus> search(
			int page, 
			int pageSize, 
			NotificationSearchCondition searchCondition
	);
}
