package web.nl.kltn.mapper;

import org.apache.ibatis.annotations.Mapper;

import web.nl.kltn.model.LoginCondition;
import web.nl.kltn.model.UserCus;

@Mapper
public interface UserCusMapper {

	public UserCus login(LoginCondition loginCondition);
	
	public UserCus findByUserId(String userId);
	
	public UserCus findByUsername(String username);
}
