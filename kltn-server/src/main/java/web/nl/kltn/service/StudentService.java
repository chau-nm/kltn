package web.nl.kltn.service;

import web.nl.kltn.model.dto.StudentDTO;

public interface StudentService {

	StudentDTO insert(StudentDTO studentDTO) throws Exception;

	StudentDTO findByUserId(String userId);

	StudentDTO update(StudentDTO studentDTO) throws Exception;

}
