package web.nl.kltn.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import web.nl.kltn.mapper.NotificationAttachmentCusMapper;
import web.nl.kltn.mapper.NotificationCusMapper;
import web.nl.kltn.mapper.generator.NotificationAttachmentMapper;
import web.nl.kltn.mapper.generator.NotificationMapper;
import web.nl.kltn.model.NotificationSearchCondition;
import web.nl.kltn.model.dto.NotificationDTO;
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
	private NotificationAttachmentCusMapper attachmentCusMapper;
	
	@Autowired
	private NotificationAttachmentMapper attachmentMapper;

	@Override
	public Notification insert(Notification notification) {
		return notificationMapper.insert(notification) > 0 ? notification : null;
	}
	
	@Override
	public NotificationDTO insert(NotificationDTO notificationDTO) throws Exception {
		try {
			Notification notification = notificationDTO;
			notification.setIsDeleted(false);
			notification.setCreatedAt(new Date().getTime());
			notification.setUpdatedAt(new Date().getTime());
			List<NotificationAttachment> attachments = notificationDTO.createAttachments();
			notificationMapper.insert(notification);
			attachments.forEach(attachment -> {
				attachmentMapper.insert(attachment);
			});
			return notificationDTO;
		}catch(Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}
	
	@Override
	public void delete(String notificationId) {
		Notification notification = notificationMapper.selectByPrimaryKey(notificationId);
		notification.setIsDeleted(true);
		notificationMapper.updateByPrimaryKey(notification);
	}
	
	@Override
	public void update(NotificationDTO notificationDTO) throws Exception {
		try {
			Notification notification = notificationDTO;
			notificationMapper.updateByPrimaryKey(notification);
			attachmentCusMapper.delete(notification.getId());
			List<NotificationAttachment> attachments = notificationDTO.createAttachments();
			for (NotificationAttachment attachment: attachments) {
				if (attachmentMapper.insert(attachment) <= 0) {
					throw new Exception("Cập nhật attachment thất bại");
				}
			}
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
		
	}

	@Override
	public int getTotal(NotificationSearchCondition searchCondition) {
		return notificationCusMapper.getTotal(searchCondition);
	}
	
	@Override
	public List<Notification> search(int page, int pageSize, NotificationSearchCondition searchCondition) {
		return notificationCusMapper.search(page, pageSize, searchCondition);
	}
	
	@Override
	public NotificationDTO getDetail(String notificationId) {
		NotificationDTO notificationDTO = new NotificationDTO();
		Notification detail = notificationMapper.selectByPrimaryKey(notificationId);
		if (detail == null) {
			return null;
		}
		notificationDTO.load(detail);
		notificationDTO.setAttachmentUrls(attachmentCusMapper.getAttachmentByNotificationId(notificationId));
		return notificationDTO;
	}
}
