package web.nl.kltn.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;
import web.nl.kltn.common.JWTTokenUtil;
import web.nl.kltn.common.RefreshTokenUtil;
import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.LoginCondition;
import web.nl.kltn.model.RefreshToken;
import web.nl.kltn.model.UserCus;
import web.nl.kltn.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private JWTTokenUtil jwtTokenUtil;
	
	@Autowired
	private RefreshTokenUtil refreshTokenUtil;

	@PostMapping("/login")
	public ResponseModel<UserCus> login(@RequestBody RequestModel<LoginCondition> loginCoditionRequest, HttpSession session) {
		LoginCondition loginCondition = loginCoditionRequest.getData();
		
		UserCus userCus = userService.login(loginCondition);
		
		if (userCus == null ) {
			return null;
		}else {
			String token = jwtTokenUtil.generateToken(userCus.getUserId());
			RefreshToken refreshToken = refreshTokenUtil.generateRefreshToken();
			refreshTokenUtil.saveRefreshToken(userCus.getUserId(), refreshToken);
			session.setAttribute("access-token", token);
			session.setAttribute("refresh-token", refreshToken.getRefreshToken());
			
			ResponseModel<UserCus> responseModel = new ResponseModel<>();
			
			responseModel.setData(userCus);
			return responseModel;
		}
	}
	
	@PostMapping("/checkLogin")
	public ResponseModel<UserCus> checkLogin(){
		return null;
	}
}
