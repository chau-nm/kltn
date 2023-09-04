package web.nl.kltn.service.impl;

import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import web.nl.kltn.mapper.LecturerCusMapper;
import web.nl.kltn.mapper.RoleUserCusMapper;
import web.nl.kltn.mapper.generator.LecturerMapper;
import web.nl.kltn.mapper.generator.RoleUserMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.dto.LecturerDTO;
import web.nl.kltn.model.generator.Lecturer;
import web.nl.kltn.model.generator.RoleUser;
import web.nl.kltn.model.generator.Student;
import web.nl.kltn.service.LecturerService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class LecturerServiceImpl implements LecturerService {
	@Autowired
	private LecturerMapper lecturerMapper;
	@Autowired
	private LecturerCusMapper lecturerCusMapper;
	@Autowired
	private UserMapper userMapper;
	@Autowired
	private RoleUserCusMapper roleUserCusMapper;
	@Autowired
	private RoleUserMapper roleUserMapper;

	@Override
	public LecturerDTO insert(LecturerDTO lecturerDTO) throws Exception {
		try {
			PasswordEncoder encoder = new BCryptPasswordEncoder();
			String newPasswordEncode = encoder.encode(lecturerDTO.getPassword());
			lecturerDTO.setIsDeleted(false);
			lecturerDTO.setCreatedAt(new Date().getTime());
			lecturerDTO.setUpdatedAt(new Date().getTime());
			lecturerDTO.setPassword(newPasswordEncode);
			int updateRow = userMapper.insert(lecturerDTO);
			if (updateRow <= 0) {
				throw new Exception("Thêm user thất bại");
			}
			// insert role User
			RoleUser roleUser;
			for (int i = 0; i < lecturerDTO.getRoles().size(); i++) {
				roleUser = new RoleUser();
				roleUser.setId(String.valueOf(UUID.randomUUID()));
				roleUser.setRoleId(roleUserCusMapper.findIdRoleByName(lecturerDTO.getRoles().get(i)));
				roleUser.setUserId(lecturerDTO.getUserId());
				roleUser.setIsDeleted(false);
				roleUser.setCreatedAt(new Date().getTime());
				roleUser.setUpdatedAt(new Date().getTime());
				if (roleUserMapper.insert(roleUser) <= 0) {
					throw new Exception("Thêm user thất bại");
				}
			}
			Lecturer lecturer = new Lecturer();
			lecturer.setId(UUID.randomUUID().toString());
			lecturer.setUserId(lecturerDTO.getUserId());
			lecturer.setDegree(lecturerDTO.getDegree());
			lecturer.setTitle(lecturerDTO.getTitle());

			if (lecturerMapper.insert(lecturer) <= 0) {
				throw new Exception("Thêm user thất bại");
			}
			return lecturerDTO;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
			throw e;
		}
	}

	@Override
	public LecturerDTO update(LecturerDTO lecturerDTO) throws Exception {
		try {
			userMapper.updateByPrimaryKey(lecturerDTO);
			roleUserCusMapper.deleteByIdUser(lecturerDTO.getUserId());
			RoleUser roleUser;
			for (int i = 0; i < lecturerDTO.getRoles().size(); i++) {
				roleUser = new RoleUser();
				roleUser.setId(String.valueOf(UUID.randomUUID()));
				roleUser.setRoleId(roleUserCusMapper.findIdRoleByName(lecturerDTO.getRoles().get(i)));
				roleUser.setUserId(lecturerDTO.getUserId());
				roleUser.setIsDeleted(false);
				roleUser.setCreatedAt(new Date().getTime());
				roleUser.setUpdatedAt(new Date().getTime());
				;
				if (roleUserMapper.insert(roleUser) <= 0) {
					throw new Exception("Cập nhật thất bại");
				}
			}
			lecturerCusMapper.deleteLecturerByUserId(lecturerDTO.getUserId());
			Lecturer lecturer = new Lecturer();
			lecturer.setId(UUID.randomUUID().toString());
			lecturer.setUserId(lecturerDTO.getUserId());
			lecturer.setDegree(lecturerDTO.getDegree());
			lecturer.setTitle(lecturerDTO.getTitle());

			if (lecturerMapper.insert(lecturer) <= 0) {
				throw new Exception("Thêm user thất bại");
			}
			
			return lecturerDTO;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
			throw e;
		}
	}

	@Override
	public LecturerDTO findByUserId(String userId) {
		return lecturerCusMapper.getLecturerByUserId(userId);
	}
}
