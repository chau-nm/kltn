package web.nl.kltn.model;

import java.util.Date;

public class RefreshToken {
	private String refreshToken;
	private Date expirationDate;
	
	public RefreshToken() {}

	public String getRefreshToken() {
		return refreshToken;
	}

	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}

	public Date getExpirationDate() {
		return expirationDate;
	}

	public void setExpirationDate(Date expirationDate) {
		this.expirationDate = expirationDate;
	}
}
