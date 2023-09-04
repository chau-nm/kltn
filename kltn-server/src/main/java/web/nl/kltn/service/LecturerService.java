package web.nl.kltn.service;

import web.nl.kltn.model.dto.LecturerDTO;

public interface LecturerService {

	LecturerDTO insert(LecturerDTO lecturerDTO) throws Exception;

	LecturerDTO findByUserId(String userId);

	LecturerDTO update(LecturerDTO lecturerDTO) throws Exception;

}
