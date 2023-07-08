package web.nl.kltn.service.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import web.nl.kltn.mapper.UserCusMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.LoginCondition;
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
}
