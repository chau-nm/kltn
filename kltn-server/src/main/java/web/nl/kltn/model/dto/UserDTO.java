package web.nl.kltn.model.dto;

import java.util.Date;
import java.util.List;

import web.nl.kltn.model.generator.User;

public class UserDTO extends User{
	private List<String> roles;
	private String accessToken;
	private String refreshToken;

	public UserDTO() {
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}

	public String getAccessToken() {
		return accessToken;
	}
	
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
	
	public String getRefreshToken() {
		return refreshToken;
	}
	
	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}
}
