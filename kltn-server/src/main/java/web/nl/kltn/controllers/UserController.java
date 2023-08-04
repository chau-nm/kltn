package web.nl.kltn.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.annotation.SessionScope;

import web.nl.kltn.common.JWTTokenUtil;
import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.AccessTokenRequest;
import web.nl.kltn.model.LoginCondition;
import web.nl.kltn.model.RefreshTokenRequest;
import web.nl.kltn.model.dto.UserDTO;
import web.nl.kltn.model.generator.RefreshToken;
import web.nl.kltn.model.generator.User;
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
	public ResponseModel<UserDTO> login(@RequestBody RequestModel<LoginCondition> loginCoditionRequest) {

		LoginCondition loginCondition = loginCoditionRequest.getData();

		ResponseModel<UserDTO> responseModel = new ResponseModel<>();

		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					loginCondition.getUsername(), loginCondition.getPassword()));
			UserDTO userCus = userService.findByUsername(loginCondition.getUsername());
			String accessToken = jwtTokenUtil.generateToken(userCus.getUsername());
			RefreshToken refreshToken = refreshTokenService.findAvailabilityByUserId(userCus.getUserId());
			if (refreshToken == null) {
				refreshToken = refreshTokenService.generateRefreshToken();
				refreshToken.setUserId(userCus.getUserId());
				refreshTokenService.saveRefreshToken(refreshToken);
			}
			userCus.setAccessToken(accessToken);
			userCus.setRefreshToken(refreshToken.getToken());

			responseModel.setData(userCus);
			return responseModel;
		} catch (AuthenticationException e) {
			return responseModel;
		}
	}

	@GetMapping("/get-user-with-role")
	public ResponseModel<List<UserDTO>> getUserWithRole(@RequestParam String role) {
		ResponseModel<List<UserDTO>> responseModel = new ResponseModel<>();
		if (role == null) {
			return responseModel;
		}
		List<UserDTO> userDTOs = userService.findByRole(role);
		responseModel.setData(userDTOs);
		return responseModel;
	}

	@PostMapping("/get-user-with-token")
	public ResponseModel<UserDTO> getUserWithToken(@RequestBody RequestModel<AccessTokenRequest> accessTokenRequest) {
		String accessToken = accessTokenRequest.getData().getAccessToken();
		ResponseModel<UserDTO> responseModel = new ResponseModel<>();
		String username = jwtTokenUtil.getUserIdFromToken(accessToken);
		if (username != null) {
			UserDTO userCus = userService.findByUsername(username);
			responseModel.setData(userCus);
		}
		return responseModel;
	}

	@GetMapping("/refresh-token")
	public ResponseModel<UserDTO> refresToken(@RequestParam(required = true) String refreshToken) {
		RefreshToken refreshTokenDb = refreshTokenService.findRefreshToken(refreshToken);
		ResponseModel<UserDTO> responseModel = new ResponseModel<>();
		if (refreshTokenDb == null) {
			return responseModel;
		}
		UserDTO userCus = userService.findByUserId(refreshTokenDb.getUserId());
		if (userCus != null) {
			String newAccessToken = jwtTokenUtil.generateToken(userCus.getUsername());
			userCus.setAccessToken(newAccessToken);
			userCus.setRefreshToken(refreshTokenDb.getToken());
			responseModel.setData(userCus);
		}

		return responseModel;
	}

	@GetMapping("/{id}")
	public ResponseModel<UserDTO> findUserById(@PathVariable String id) {
		ResponseModel<UserDTO> responseModel = new ResponseModel<>();
		responseModel.setData(userService.findByUserId(id));
		return responseModel;
	}

	@PutMapping("/update")
	public ResponseModel<UserDTO> refeshToken(@RequestBody RequestModel<UserDTO> userUpdateRequest) {
		UserDTO newUser = userUpdateRequest.getData();
		ResponseModel<UserDTO> responseModel = new ResponseModel<>();
		responseModel.setData(userService.updateUser(newUser));
		return responseModel;
	}
}
