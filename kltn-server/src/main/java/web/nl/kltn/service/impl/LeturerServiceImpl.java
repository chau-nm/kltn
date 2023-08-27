package web.nl.kltn.service.impl;

import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import web.nl.kltn.mapper.RoleUserCusMapper;
import web.nl.kltn.mapper.generator.LeturerMapper;
import web.nl.kltn.mapper.generator.RoleUserMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.dto.LeturerDTO;
import web.nl.kltn.model.generator.Leturer;
import web.nl.kltn.model.generator.RoleUser;
import web.nl.kltn.service.LeturerService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class LeturerServiceImpl implements LeturerService                                                                             {
	@Autowired
	private LeturerMapper leturerMapper;
	@Autowired
	private UserMapper userMapper;
	@Autowired
	private RoleUserCusMapper roleUserCusMapper;
	@Autowired
	private RoleUserMapper roleUserMapper;
	
	@Override
	public LeturerDTO insert(LeturerDTO leturerDTO) throws Exception {
		try {
			PasswordEncoder encoder = new BCryptPasswordEncoder();
			String newPasswordEncode = encoder.encode(leturerDTO.getPassword());
			leturerDTO.setIsDeleted(false);
			leturerDTO.setCreatedAt(new Date().getTime());
			leturerDTO.setUpdatedAt(new Date().getTime());
			leturerDTO.setPassword(newPasswordEncode);
			int updateRow = userMapper.insert(leturerDTO);
			if (updateRow <= 0) {
				throw new Exception("Thêm user thất bại");
			}
			// insert role User
			RoleUser roleUser;
			for (int i = 0; i < leturerDTO.getRoles().size(); i++) {
				roleUser = new RoleUser();
				roleUser.setId(String.valueOf(UUID.randomUUID()));
				roleUser.setRoleId(roleUserCusMapper.findIdRoleByName(leturerDTO.getRoles().get(i)));
				roleUser.setUserId(leturerDTO.getUserId());
				roleUser.setIsDeleted(false);
				roleUser.setCreatedAt(new Date().getTime());
				roleUser.setUpdatedAt(new Date().getTime());
				if (roleUserMapper.insert(roleUser) <= 0) {
					throw new Exception("Thêm user thất bại");
				}
			}
			Leturer leturer = new Leturer();
			leturer.setId(UUID.randomUUID().toString());
			leturer.setUserId(leturerDTO.getUserId());
			leturer.setDegree(leturerDTO.getDegree());
			leturer.setTitle(leturerDTO.getTitle());
			
			if (leturerMapper.insert(leturer) <= 0) {
				throw new Exception("Thêm user thất bại");
			}
			return leturerDTO;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
			throw e;
		}
	}
	
}
