package web.nl.kltn.model;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import web.nl.kltn.model.generator.Notification;
import web.nl.kltn.model.generator.NotificationAttachment;

public class NotificationCus {
	private String id;
	private String title;
	private String content;
	private List<String> attachmentUrls;
	private Long createAt;
	private Long updateAt;
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Long getCreateAt() {
		return createAt;
	}

	public void setCreateAt(Long createAt) {
		this.createAt = createAt;
	}

	public Long getUpdateAt() {
		return updateAt;
	}

	public void setUpdateAt(Long updateAt) {
		this.updateAt = updateAt;
	}

	public List<String> getAttachmentUrls() {
		return attachmentUrls;
	}
	
	public void setAttachmentUrls(List<String> attachmentUrls) {
		this.attachmentUrls = attachmentUrls;
	}
	
	public List<NotificationAttachment> createAttachments(){
		List<NotificationAttachment> attachments 
			= this.attachmentUrls.stream().map(url -> {
				NotificationAttachment attachment = new NotificationAttachment();
				attachment.setId(String.valueOf(UUID.randomUUID()));
				attachment.setAttachmentUrl(url);
				attachment.setNotificationId(this.id);
				attachment.setCreateAt(new Date().getTime());
				attachment.setIsDeleted(false);
				return attachment;
			}).toList();
		return attachments;
	}
	
	public Notification createNotificationEntity() {
		Notification notification = new Notification();
		notification.setId(this.id);
		notification.setContent(this.content);
		notification.setCreateAt(this.createAt);
		notification.setUpdateAt(this.updateAt);
		notification.setTitle(this.title);
		notification.setIsDeleted(false);
		return notification;
	}
}
