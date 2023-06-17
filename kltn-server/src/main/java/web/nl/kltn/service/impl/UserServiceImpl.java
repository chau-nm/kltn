package web.nl.kltn.service.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import web.nl.kltn.mapper.UserCusMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.LoginCondition;
import web.nl.kltn.model.UserCus;
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
	public UserCus login(LoginCondition loginCondition) {
		return userCusMapper.login(loginCondition);
	}

	@Override
	public UserCus findByUserId(String userId) {
		return userCusMapper.findByUserId(userId);
	}

	@Override
	public UserCus findByUsername(String username) {
		return userCusMapper.findByUsername(username);
	}
	
	@Override
	public UserCus updateUser(UserCus newUser) {
		User user = userMapper.selectByPrimaryKey(newUser.getUserId());
		user.setFname(newUser.getFname());
		user.setBirthday(newUser.getBirthday());
		user.setFaculty(newUser.getFaculty());
		user.setStudentClass(newUser.getStudentClass());
		user.setUpdateAt(new Date().getTime());
		int updateRow = userMapper.updateByPrimaryKey(user);
		return updateRow > 0 ? newUser : null;
	}
}
