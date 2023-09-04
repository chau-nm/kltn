package web.nl.kltn.mapper;

import web.nl.kltn.model.dto.LecturerDTO;

public interface LecturerCusMapper {
	public LecturerDTO getLecturerByUserId(String userId);

	public void deleteLecturerByUserId(String userId);
}
