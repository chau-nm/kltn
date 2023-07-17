package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.LoginCondition;
import web.nl.kltn.model.dto.UserDTO;

public interface UserService {
	
	public UserDTO login(LoginCondition loginCondition);

	public UserDTO findByUserId(String userId);
	
	public UserDTO findByUsername(String username);

	UserDTO updateUser(UserDTO newUser);

	List<UserDTO> findByRole(String role);
}
