package web.nl.kltn.mapper;

import web.nl.kltn.model.dto.LeturerDTO;

public interface LeturerCusMapper {
	public LeturerDTO getLeturerByUserId(String userId);
}
