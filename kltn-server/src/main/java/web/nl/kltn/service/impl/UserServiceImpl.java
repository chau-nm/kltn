package web.nl.kltn.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import web.nl.kltn.mapper.RoleUserCusMapper;
import web.nl.kltn.mapper.UserCusMapper;
import web.nl.kltn.mapper.generator.RoleUserMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.ChangpasswordPayload;
import web.nl.kltn.model.LoginCondition;
import web.nl.kltn.model.UserSearchCondition;
import web.nl.kltn.model.dto.UserDTO;
import web.nl.kltn.model.generator.RoleUser;
import web.nl.kltn.model.generator.User;
import web.nl.kltn.service.UserService;

@Service
@Transactional(rollbackFor = { Exception.class, Throwable.class })
public class UserServiceImpl implements UserService {

	@Autowired
	private UserMapper userMapper;

	@Autowired
	private UserCusMapper userCusMapper;

	@Autowired
	private RoleUserMapper roleUserMapper;

	@Autowired
	private RoleUserCusMapper roleUserCusMapper;

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
		List<User> users = userCusMapper.search(page, pageSize, searchCondition);
		List<UserDTO> userDTOs = new ArrayList<>();
		UserDTO userDTO;
		for (int i = 0; i < users.size(); i++) {
			User user = users.get(i);

			userDTO = new UserDTO();
			userDTO.setUserId(user.getUserId());
			userDTO.setUsername(user.getUsername());
			userDTO.setPassword(user.getPassword());
			userDTO.setEmail(user.getEmail());
			userDTO.setFname(user.getFname());
			userDTO.setGender(user.getGender());
			userDTO.setBirthday(user.getBirthday());
			userDTO.setFaculty(user.getFaculty());
			userDTO.setRoles(roleUserCusMapper.findRolesByUserId(user.getUserId()));
			userDTO.setCreatedAt(user.getCreatedAt());
			userDTO.setUpdatedAt(user.getUpdatedAt());
			userDTO.setIsDeleted(user.getIsDeleted());

			userDTOs.add(userDTO);
		}
		return userDTOs;
	}

	@Override
	public int getTotal(UserSearchCondition searchCondition) {
		return userCusMapper.getTotal(searchCondition);
	}

	@Override
	public UserDTO updateUser(UserDTO newUser) throws Exception {
		try {
			User user = null;
			user.setEmail(newUser.getEmail());
			user.setFname(newUser.getFname());
			user.setBirthday(newUser.getBirthday());
			user.setFaculty(newUser.getFaculty());
			user.setUpdatedAt(new Date().getTime());
			roleUserCusMapper.deleteByIdUser(newUser.getUserId());
			RoleUser roleUser;
			for (int i = 0; i < newUser.getRoles().size(); i++) {
				roleUser = new RoleUser();
				roleUser.setId(String.valueOf(UUID.randomUUID()));
				roleUser.setRoleId(roleUserCusMapper.findIdRoleByName(newUser.getRoles().get(i)));
				roleUser.setUserId(newUser.getUserId());
				roleUser.setIsDeleted(false);
				roleUser.setCreatedAt(new Date().getTime());
				roleUser.setUpdatedAt(new Date().getTime());
				;
				if (roleUserMapper.insert(roleUser) <= 0) {
					throw new Exception("Cập nhật thất bại");
				}
			}
			userMapper.updateByPrimaryKey(user);
			return newUser;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
			throw e;
		}
	}

	@Override
	public UserDTO updatePassword(String userId, String newPassword) {
//		User user = userMapper.selectByPrimaryKey(userId);
//		user.setPassword(newPassword);
//		user.setUpdatedAt(new Date().getTime());
//
//		UserDTO userDTO = new UserDTO();
//		userDTO.setUserId(user.getUserId());
//		userDTO.setUsername(user.getUsername());
//		userDTO.setPassword(user.getPassword());
//		userDTO.setBirthday(user.getBirthday());
//		userDTO.setUpdatedAt(user.getUpdatedAt());
//		userDTO.setCreatedAt(user.getCreatedAt());
//		userDTO.setFaculty(user.getFaculty());
//		userDTO.setFname(user.getFname());
//
//		int updateRow = userMapper.updateByPrimaryKey(user);
		return null;
	}

	@Override
	public UserDTO insert(UserDTO userDTO) throws Exception {
		// insert User
		try {
			PasswordEncoder encoder = new BCryptPasswordEncoder();
			String newPasswordEncode = encoder.encode(userDTO.getPassword());
			userDTO.setIsDeleted(false);
			userDTO.setCreatedAt(new Date().getTime());
			userDTO.setUpdatedAt(new Date().getTime());
			userDTO.setPassword(newPasswordEncode);
			int updateRow = userMapper.insert(userDTO);
			if (updateRow <= 0) {
				throw new Exception("Thêm user thất bại");
			}
			// insert role User
			RoleUser roleUser;
			for (int i = 0; i < userDTO.getRoles().size(); i++) {
				roleUser = new RoleUser();
				roleUser.setId(String.valueOf(UUID.randomUUID()));
				roleUser.setRoleId(roleUserCusMapper.findIdRoleByName(userDTO.getRoles().get(i)));
				roleUser.setUserId(userDTO.getUserId());
				roleUser.setIsDeleted(false);
				roleUser.setCreatedAt(new Date().getTime());
				roleUser.setUpdatedAt(new Date().getTime());
				if (roleUserMapper.insert(roleUser) <= 0) {
					throw new Exception("Thêm user thất bại");
				}
			}
			return userDTO;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
			throw e;
		}
	}

	@Override
	public User changpassword(ChangpasswordPayload changpasswordPayload) throws Exception {
		User user = null;
		PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		if (passwordEncoder.matches(changpasswordPayload.getOldPassword(), user.getPassword())) {
			user.setPassword(passwordEncoder.encode(changpasswordPayload.getNewPassword()));
			userMapper.updateByPrimaryKey(user);
			return user;
		} else {
			throw new Exception("Mật khẩu cũ không đúng");
		}
	}

}
