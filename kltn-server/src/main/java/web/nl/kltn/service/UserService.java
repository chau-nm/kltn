package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.LoginCondition;
import web.nl.kltn.model.UserSearchCondition;
import web.nl.kltn.model.dto.UserDTO;
import web.nl.kltn.model.generator.User;


public interface UserService {

	public UserDTO login(LoginCondition loginCondition);
	UserDTO insert(UserDTO userDTO);

	public UserDTO findByUserId(String userId);

	public UserDTO findByUsername(String username);

	UserDTO updateUser(UserDTO newUser);

	List<UserDTO> findByRole(String role);

	int getTotal(UserSearchCondition searchCondition);

	List<UserDTO> search(int page, int pageSize, UserSearchCondition searchCondition);
	UserDTO updatePassword(String userId, String newPassword);

	List<UserDTO> findCouncilByOutlineComent(String thesisId);
}