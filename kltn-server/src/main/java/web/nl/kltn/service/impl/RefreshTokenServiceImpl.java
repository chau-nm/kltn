package web.nl.kltn.service.impl;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import web.nl.kltn.mapper.RefreshTokenCusMapper;
import web.nl.kltn.mapper.generator.RefreshTokenMapper;
import web.nl.kltn.model.generator.RefreshToken;
import web.nl.kltn.service.RefreshTokenService;

@Service
public class RefreshTokenServiceImpl implements RefreshTokenService {
	
	@Autowired
	private RefreshTokenMapper refreshTokenMapper;
	
	@Autowired
	private RefreshTokenCusMapper refreshTokenCusMapper;

	@Override
	public RefreshToken generateRefreshToken() {
		LocalDate localDate = LocalDate.now().plusDays(15);
		LocalDateTime localDateTime = localDate.atStartOfDay();
		ZonedDateTime zonedDateTime = localDateTime.atZone(ZoneId.systemDefault());
		Date expirationDate = Date.from(zonedDateTime.toInstant());
		RefreshToken refreshToken = new RefreshToken();
		refreshToken.setToken(UUID.randomUUID().toString());
		refreshToken.setExpirationDate(expirationDate);
		refreshToken.setCreatedAt(new Date().getTime());
		refreshToken.setUpdatedAt(new Date().getTime());
		return refreshToken;
	}

	@Override
	public RefreshToken findAvailabilityByUserId(String userId) {
		return refreshTokenCusMapper.findAvailabilityByUserId(userId);
	}
	
	@Override
	public RefreshToken findRefreshToken(String refreshToken) {
		return refreshTokenCusMapper.findRefreshToken(refreshToken);
	}

	@Override
	public RefreshToken saveRefreshToken(RefreshToken refreshToken) {
		refreshTokenMapper.insert(refreshToken);
		return refreshToken;
	}

}
