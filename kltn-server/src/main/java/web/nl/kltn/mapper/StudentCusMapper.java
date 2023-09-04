package web.nl.kltn.mapper;

import web.nl.kltn.model.dto.StudentDTO;

public interface StudentCusMapper {
	public StudentDTO getStudentByUserId(String userId);
	
	public void deleteByUserId(String userId);
}
