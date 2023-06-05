package web.nl.kltn.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.annotation.SessionScope;

import web.nl.kltn.common.JWTTokenUtil;
import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.AccessTokenRequest;
import web.nl.kltn.model.LoginCondition;
import web.nl.kltn.model.RefreshTokenRequest;
import web.nl.kltn.model.UserCus;
import web.nl.kltn.model.generator.RefreshToken;
import web.nl.kltn.service.RefreshTokenService;
import web.nl.kltn.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private JWTTokenUtil jwtTokenUtil;

	@Autowired
	private RefreshTokenService refreshTokenService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping("/login")
	public ResponseModel<UserCus> login(@RequestBody RequestModel<LoginCondition> loginCoditionRequest) {

		LoginCondition loginCondition = loginCoditionRequest.getData();

		ResponseModel<UserCus> responseModel = new ResponseModel<>();

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginCondition.getUsername(), loginCondition.getPassword()));

		if (!authentication.isAuthenticated()) {
			return responseModel;
		} else {
			UserCus userCus = userService.findByUsername(loginCondition.getUsername());
			String accessToken = jwtTokenUtil.generateToken(userCus.getUsername());
			RefreshToken refreshToken = refreshTokenService.generateRefreshToken();
			refreshToken.setUserId(userCus.getUserId());
			userCus.setAccessToken(accessToken);
			userCus.setRefreshToken(refreshToken.getToken());
			refreshTokenService.saveRefreshToken(refreshToken);

			responseModel.setData(userCus);
		}

		return responseModel;
	}

	@PostMapping("/get-user-with-token")
	public ResponseModel<UserCus> getUserWithToken(@RequestBody RequestModel<AccessTokenRequest> accessTokenRequest){
		String accessToken = accessTokenRequest.getData().getAccessToken();
		ResponseModel<UserCus> responseModel = new ResponseModel<>();
		String username = jwtTokenUtil.getUserIdFromToken(accessToken);
		if (username != null) {
			UserCus userCus = userService.findByUsername(username);
			responseModel.setData(userCus);
		}
		return responseModel;
	}

	@PostMapping("/refresh-token")
	public ResponseModel<UserCus> refresToken(@RequestBody RequestModel<RefreshTokenRequest> refreshTokenRequest) {
		String refreshTokenClient = refreshTokenRequest.getData().getRefreshToken();
		RefreshToken refreshTokenDb = refreshTokenService.findRefreshToken(refreshTokenClient);
		
		ResponseModel<UserCus> responseModel = new ResponseModel<>();
		if (refreshTokenDb == null) {
			return responseModel;
		}
		UserCus userCus = userService.findByUserId(refreshTokenDb.getUserId());
		if (userCus != null) {
			String newAccessToken = jwtTokenUtil.generateToken(userCus.getUsername());
			userCus.setAccessToken(newAccessToken);
			userCus.setRefreshToken(refreshTokenDb.getToken());
			responseModel.setData(userCus);
		}

		return responseModel;
	}
}
