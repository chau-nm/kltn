package web.nl.kltn.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import web.nl.kltn.service.UserService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class UserServiceImpl implements UserService{
	
}
