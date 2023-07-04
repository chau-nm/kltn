package web.nl.kltn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import web.nl.kltn.mapper.NotificationAttachmentCusMapper;
import web.nl.kltn.mapper.generator.NotificationAttachmentMapper;
import web.nl.kltn.model.generator.NotificationAttachment;
import web.nl.kltn.service.NotificationAttachmentService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class NotificationAttachmentServiceImpl implements NotificationAttachmentService {

	@Autowired
	private NotificationAttachmentMapper notificationAttachmentMapper;

	@Autowired
	private NotificationAttachmentCusMapper notificationAttachmentCusMapper;

	@Override
	public NotificationAttachment insert(NotificationAttachment notificationAttachment) {
		return notificationAttachmentMapper.insert(notificationAttachment) > 0 ? notificationAttachment : null;
	}

	@Override
	public List<NotificationAttachment> insertList(List<NotificationAttachment> notificationAttachments) {
		try {
			for (NotificationAttachment attachment : notificationAttachments) {
				if (notificationAttachmentMapper.insert(attachment) <= 0) {
					throw new RuntimeException();
				}
			}
			return notificationAttachments;
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public void update(NotificationAttachment notificationAttachment) {
		notificationAttachmentMapper.updateByPrimaryKey(notificationAttachment);
	}

	@Override
	public void delete(String id) {
		notificationAttachmentMapper.deleteByPrimaryKey(id);
	}

	@Override
	public void deleteByNotificationId(String notificationId) {
		notificationAttachmentCusMapper.delete(notificationId);
	}

	@Override
	public void deleteWithFlagByNotificationId(String notificationId) {
		notificationAttachmentCusMapper.deleteWithFlagIsDeleted(notificationId);
	}
}
