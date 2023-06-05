package web.nl.kltn.service;

import web.nl.kltn.model.generator.RefreshToken;

public interface RefreshTokenService {

	public RefreshToken generateRefreshToken();
	
	public RefreshToken findAvailabilityByUserId(String userId);
	
	public RefreshToken saveRefreshToken(RefreshToken refreshToken);

	public RefreshToken findRefreshToken(String refreshToken);
}
