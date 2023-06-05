package web.nl.kltn.service;

import web.nl.kltn.model.LoginCondition;
import web.nl.kltn.model.UserCus;

public interface UserService {
	
	public UserCus login(LoginCondition loginCondition);

	public UserCus findByUserId(String userId);
	
	public UserCus findByUsername(String username);
}
