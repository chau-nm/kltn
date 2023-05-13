package web.nl.kltn.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import web.nl.kltn.mapper.UserCusMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.LoginCondition;
import web.nl.kltn.model.UserCus;
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
}
