package web.nl.kltn.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import web.nl.kltn.mapper.UserCusMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.LoginCondition;
import web.nl.kltn.model.UserSearchCondition;
import web.nl.kltn.model.dto.UserDTO;
import web.nl.kltn.model.generator.User;
import web.nl.kltn.service.UserService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class UserServiceImpl implements UserService{

	@Autowired
	private UserMapper userMapper;

	@Autowired
	private UserCusMapper userCusMapper;

	@Override
	public UserDTO login(LoginCondition loginCondition) {
		return userCusMapper.login(loginCondition);
	}

	@Override
	public UserDTO findByUserId(String userId) {
		return userCusMapper.findByUserId(userId);
	}

	@Override
	public UserDTO findByUsername(String username) {
		return userCusMapper.findByUsername(username);
	}

	@Override
	public List<UserDTO> findByRole(String role) {
		return userCusMapper.findByRole(role);
	}

	@Override
	public List<UserDTO> search(int page, int pageSize, UserSearchCondition searchCondition) {
		return userCusMapper.search(page, pageSize, searchCondition);
	}



	@Override
	public int getTotal(UserSearchCondition searchCondition) {
		return userCusMapper.getTotal(searchCondition);
	}

	@Override
	public UserDTO updateUser(UserDTO newUser) {
		User user = userMapper.selectByPrimaryKey(newUser.getUserId());
		user.setFname(newUser.getFname());
		user.setBirthday(newUser.getBirthday());
		user.setFaculty(newUser.getFaculty());
		user.setStudentClass(newUser.getStudentClass());
		user.setUpdatedAt(new Date().getTime());
		int updateRow = userMapper.updateByPrimaryKey(user);
		return updateRow > 0 ? newUser : null;
	}

	@Override
	public UserDTO updatePassword(String userId, String newPassword) {
		User user = userMapper.selectByPrimaryKey(userId);
		user.setPassword(newPassword);
		user.setUpdatedAt(new Date().getTime());

		UserDTO userDTO = new UserDTO();
		userDTO.setUserId(user.getUserId());
		userDTO.setUsername(user.getUsername());
		userDTO.setPassword(user.getPassword());
		userDTO.setBirthday(user.getBirthday());
		userDTO.setUpdatedAt(user.getUpdatedAt());
		userDTO.setCreatedAt(user.getCreatedAt());
		userDTO.setFaculty(user.getFaculty());
		userDTO.setFname(user.getFname());

		int updateRow = userMapper.updateByPrimaryKey(user);
		return updateRow > 0 ? userDTO : null;
	}

	@Override
	public UserDTO insert(UserDTO userDTO) {
		try {
			UserDTO user = userDTO;
			user.setIsDeleted(false);
			user.setCreatedAt(new Date().getTime());
			user.setUpdatedAt(new Date().getTime());
			user.setFname(userDTO.getFname());
			user.setBirthday(userDTO.getBirthday());
			user.setFaculty(userDTO.getFaculty());
			user.setStudentClass(userDTO.getStudentClass());
			int updateRow = userMapper.insert(user);
			return updateRow > 0 ? userDTO : null;
		}catch(RuntimeException e) {
			return null;
		}
	}

}
