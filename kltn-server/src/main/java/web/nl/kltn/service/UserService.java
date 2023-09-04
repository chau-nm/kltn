package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.ChangpasswordPayload;
import web.nl.kltn.model.LoginCondition;
import web.nl.kltn.model.UserSearchCondition;
import web.nl.kltn.model.dto.UserDTO;
import web.nl.kltn.model.generator.User;

public interface UserService {

	UserDTO login(LoginCondition loginCondition);

	UserDTO insert(UserDTO userDTO) throws Exception;

	UserDTO findByUserId(String userId);

	UserDTO findByUsername(String username);

	UserDTO updateUser(UserDTO newUser) throws Exception;

	List<UserDTO> findByRole(String role);

	int getTotal(UserSearchCondition searchCondition);

	List<UserDTO> search(int page, int pageSize, UserSearchCondition searchCondition);

	UserDTO updatePassword(String userId, String newPassword);

	User changpassword(ChangpasswordPayload changpasswordPayload) throws Exception;

	boolean delete(String userId) throws Exception;
}