package web.nl.kltn.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import web.nl.kltn.model.LoginCondition;
import web.nl.kltn.model.dto.UserDTO;

@Mapper
public interface UserCusMapper {

	public UserDTO login(LoginCondition loginCondition);
	
	public UserDTO findByUserId(String userId);
	
	public UserDTO findByUsername(String username);
	
	public List<UserDTO> findByRole(String role);
}
