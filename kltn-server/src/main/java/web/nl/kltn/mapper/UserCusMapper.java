package web.nl.kltn.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import web.nl.kltn.model.LoginCondition;
import web.nl.kltn.model.UserCus;
import web.nl.kltn.model.generator.User;

@Mapper
public interface UserCusMapper {

	public UserCus login(LoginCondition loginCondition);
	
}
