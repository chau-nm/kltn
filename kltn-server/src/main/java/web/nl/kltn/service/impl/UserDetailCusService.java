package web.nl.kltn.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import web.nl.kltn.mapper.UserCusMapper;
import web.nl.kltn.model.dto.UserDTO;

@Service
public class UserDetailCusService implements UserDetailsService{
	
	@Autowired
	private UserCusMapper userCusMapper;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserDTO userCus = userCusMapper.findByUsername(username);
		List<GrantedAuthority> authorities = userCus.getRoles()
												.stream().map(r -> new SimpleGrantedAuthority(r))
												.collect(Collectors.toList());
		return new User(userCus.getUsername(), userCus.getPassword(), authorities);
	}

}
