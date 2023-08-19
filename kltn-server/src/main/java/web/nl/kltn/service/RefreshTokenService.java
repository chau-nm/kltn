package web.nl.kltn.service;

import web.nl.kltn.model.generator.RefreshToken;

public interface RefreshTokenService {

	RefreshToken generateRefreshToken();
	
	RefreshToken findAvailabilityByUserId(String userId);
	
	RefreshToken saveRefreshToken(RefreshToken refreshToken);

	RefreshToken findRefreshToken(String refreshToken);
}
