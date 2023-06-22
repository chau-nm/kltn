package web.nl.kltn.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import web.nl.kltn.mapper.NotificationAttachmentCusMapper;
import web.nl.kltn.mapper.NotificationCusMapper;
import web.nl.kltn.mapper.generator.NotificationAttachmentMapper;
import web.nl.kltn.mapper.generator.NotificationMapper;
import web.nl.kltn.model.NotificationCus;
import web.nl.kltn.model.NotificationSearchCondition;
import web.nl.kltn.model.generator.Notification;
import web.nl.kltn.model.generator.NotificationAttachment;
import web.nl.kltn.service.NotificationService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class NotificationServiceImpl implements NotificationService {

	@Autowired
	private NotificationCusMapper notificationCusMapper;

	@Autowired
	private NotificationMapper notificationMapper;

	@Autowired
	private NotificationAttachmentMapper attachmentMapper;

	@Autowired
	private NotificationAttachmentCusMapper attachmentCusMapper;

	@Override
	public List<NotificationCus> search(int page, int pageSize, NotificationSearchCondition searchCondition) {
		return notificationCusMapper.search(page, pageSize, searchCondition);
	}

	@Override
	public NotificationCus insert(NotificationCus notificationCus) {
		try {
			Notification notification = notificationCus.createNotificationEntity();
			if (notificationMapper.insert(notification) <= 0) {
				throw new RuntimeException();
			}
			List<NotificationAttachment> attachments = notificationCus.createAttachments();
			insertAttachments(attachments);
			return notificationCus;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public void update(NotificationCus notificationCus) {
		Notification notification = notificationCus.createNotificationEntity();
		notification.setUpdateAt(new Date().getTime());
		notificationMapper.updateByPrimaryKey(notification);
		attachmentCusMapper.delete(notification.getId());
		insertAttachments(notificationCus.createAttachments());
	}

	@Override
	public void deleted(String notificationId) {
		Notification notification = notificationMapper.selectByPrimaryKey(notificationId);
		notification.setIsDeleted(true);
		notificationMapper.updateByPrimaryKey(notification);
		attachmentCusMapper.deleteWithFlagIsDeleted(notification.getId());
	}

	@Override
	public int getTotal(NotificationSearchCondition searchCondition) {
		return notificationCusMapper.getTotal(searchCondition);
	}

	private void insertAttachments(List<NotificationAttachment> attachments) {
		attachments.forEach(att -> {
			if (attachmentMapper.insert(att) <= 0) {
				throw new RuntimeException();
			}
		});
	}
}
