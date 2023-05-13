package web.nl.kltn.common;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import web.nl.kltn.model.RefreshToken;

@Component
public class RefreshTokenUtil {
	
	private static final String REFRESH_TOKEN_KEY = "refresh-token";

	@Autowired
	private RedisTemplate<String, Object> redisTemplate;
	
	public RefreshToken generateRefreshToken() {
		LocalDate localDate = LocalDate.now();
		localDate.plusDays(15);
		LocalDateTime localDateTime = localDate.atStartOfDay();
		ZonedDateTime zonedDateTime = localDateTime.atZone(ZoneId.systemDefault());
		Date expirationDate = Date.from(zonedDateTime.toInstant());
		RefreshToken refreshToken = new RefreshToken();
		refreshToken.setRefreshToken(UUID.randomUUID().toString());
		refreshToken.setExpirationDate(expirationDate);
		return refreshToken;
	}
	
	public void saveRefreshToken(String userId, RefreshToken refreshToken) {
		Map<String, RefreshToken> refreshTokensMap = (Map<String, RefreshToken>) redisTemplate.opsForValue().get(REFRESH_TOKEN_KEY);
		if (refreshTokensMap == null) {
			refreshTokensMap = new HashMap<>();
		}
		refreshTokensMap.put(userId, refreshToken);
		redisTemplate.opsForValue().set(REFRESH_TOKEN_KEY, refreshTokensMap);
	}
	
	public RefreshToken findRefreshTokenByUserId(String userId) {
		Map<String, RefreshToken> refreshTokensMap = (Map<String, RefreshToken>) redisTemplate.opsForValue().get(REFRESH_TOKEN_KEY);
		if (refreshTokensMap == null) {
			return null;
		}
		return refreshTokensMap.get(userId);
	}
	
	public void removeRefreshTokenByUserId(String userId) {
		Map<String, RefreshToken> refreshTokensMap = (Map<String, RefreshToken>) redisTemplate.opsForValue().get(REFRESH_TOKEN_KEY);
		if (refreshTokensMap == null) {
			return;
		}
		if (refreshTokensMap.containsKey(userId)) {
			refreshTokensMap.remove(userId); 
		}
	}
}
