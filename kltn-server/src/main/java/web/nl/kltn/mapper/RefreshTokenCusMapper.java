package web.nl.kltn.mapper;

import org.apache.ibatis.annotations.Mapper;

import web.nl.kltn.model.generator.RefreshToken;

@Mapper
public interface RefreshTokenCusMapper {
	
	public RefreshToken findAvailabilityByUserId(String userId);
	
	public RefreshToken findRefreshToken(String refreshToken);
}
