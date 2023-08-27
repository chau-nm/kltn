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
import web.nl.kltn.mapper.generator.RoleUserMapper;
import web.nl.kltn.mapper.generator.StudentMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.dto.StudentDTO;
import web.nl.kltn.model.generator.RoleUser;
import web.nl.kltn.model.generator.Student;
import web.nl.kltn.service.StudentService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentMapper studentMapper;
	@Autowired
	private UserMapper userMapper;
	@Autowired
	private RoleUserCusMapper roleUserCusMapper;
	@Autowired
	private RoleUserMapper roleUserMapper;
	
	@Override
	public StudentDTO insert(StudentDTO studentDTO) throws Exception {
		try {
			PasswordEncoder encoder = new BCryptPasswordEncoder();
			String newPasswordEncode = encoder.encode(studentDTO.getPassword());
			studentDTO.setIsDeleted(false);
			studentDTO.setCreatedAt(new Date().getTime());
			studentDTO.setUpdatedAt(new Date().getTime());
			studentDTO.setPassword(newPasswordEncode);
			int updateRow = userMapper.insert(studentDTO);
			if (updateRow <= 0) {
				throw new Exception("Thêm user thất bại");
			}
			// insert student
			Student student = new Student();
			student.setId(UUID.randomUUID().toString());
			student.setUserId(studentDTO.getUserId());
			student.setStudentClass(studentDTO.getStudentClass());
			
			if (studentMapper.insert(student) <= 0) {
				throw new Exception("Thêm user thất bại");
			}
			// insert role User
			RoleUser roleUser;
			for (int i = 0; i < studentDTO.getRoles().size(); i++) {
				roleUser = new RoleUser();
				roleUser.setId(String.valueOf(UUID.randomUUID()));
				roleUser.setRoleId(roleUserCusMapper.findIdRoleByName(studentDTO.getRoles().get(i)));
				roleUser.setUserId(studentDTO.getUserId());
				roleUser.setIsDeleted(false);
				roleUser.setCreatedAt(new Date().getTime());
				roleUser.setUpdatedAt(new Date().getTime());
				if (roleUserMapper.insert(roleUser) <= 0) {
					throw new Exception("Thêm user thất bại");
				}
			}
			
			return studentDTO;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
			throw e;
		}
	}

}
