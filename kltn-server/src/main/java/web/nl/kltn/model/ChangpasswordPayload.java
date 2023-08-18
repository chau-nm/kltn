package web.nl.kltn.model;

public class ChangpasswordPayload {
	private String userId;
	
	private String oldPassword;
	
	private String newPassword;
	
	public String getNewPassword() {
		return newPassword;
	}
	
	public String getUserId() {
		return userId;
	}
	
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	
	public String getOldPassword() {
		return oldPassword;
	}
	
	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}
}
