package web.nl.kltn.model;

public class NotificationSearchCondition {
	private String title;
	private long startAt;
	private long endAt;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public long getStartAt() {
		return startAt;
	}

	public void setStartAt(long startAt) {
		this.startAt = startAt;
	}

	public long getEndAt() {
		return endAt;
	}

	public void setEndAt(long endAt) {
		this.endAt = endAt;
	}
}
