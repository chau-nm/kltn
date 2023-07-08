package web.nl.kltn.model.dto;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import web.nl.kltn.model.generator.Notification;
import web.nl.kltn.model.generator.NotificationAttachment;

public class NotificationDTO extends Notification{
	
	private List<String> attachmentUrls;
	
	public List<String> getAttachmentUrls() {
		return attachmentUrls;
	}
	
	public void setAttachmentUrls(List<String> attachmentUrls) {
		this.attachmentUrls = attachmentUrls;
	}
	
	public List<NotificationAttachment> createAttachments(){
		if (this.attachmentUrls == null) return null;
		List<NotificationAttachment> attachments 
			= this.attachmentUrls.stream().map(url -> {
				NotificationAttachment attachment = new NotificationAttachment();
				attachment.setId(String.valueOf(UUID.randomUUID()));
				attachment.setAttachmentUrl(url);
				attachment.setNotificationId(this.getId());
				attachment.setCreatedAt(new Date().getTime());
				attachment.setIsDeleted(false);
				return attachment;
			}).toList();
		return attachments;
	}
	
	public void load(Notification notification) {
		setId(notification.getId());
		setContent(notification.getContent());
		setTitle(notification.getTitle());
		setIsDeleted(notification.getIsDeleted());
		setCreatedAt(notification.getCreatedAt());
		setUpdatedAt(notification.getUpdatedAt());
	}
}
