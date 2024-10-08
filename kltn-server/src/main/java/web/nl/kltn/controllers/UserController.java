package web.nl.kltn.controllers;

import static web.nl.kltn.common.Util.generateRandomString;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import web.nl.kltn.common.JWTTokenUtil;
import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.AccessTokenRequest;
import web.nl.kltn.model.ChangpasswordPayload;
import web.nl.kltn.model.LoginCondition;
import web.nl.kltn.model.RefreshTokenRequest;
import web.nl.kltn.model.SearchResponse;
import web.nl.kltn.model.UserSearchCondition;
import web.nl.kltn.model.dto.LecturerDTO;
import web.nl.kltn.model.dto.StudentDTO;
import web.nl.kltn.model.dto.UserDTO;
import web.nl.kltn.model.generator.RefreshToken;
import web.nl.kltn.model.generator.User;
import web.nl.kltn.service.LecturerService;
import web.nl.kltn.service.RefreshTokenService;
import web.nl.kltn.service.StudentService;
import web.nl.kltn.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private StudentService studentService;
	
	@Autowired
	private LecturerService lecturerService;

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
			Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					loginCondition.getUsername(), loginCondition.getPassword()));
			if (!authentication.isAuthenticated()) {
				return responseModel;
			} else {
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
			}
		} catch (AuthenticationException e) {
			System.err.println(e);
			responseModel.setMessage("Tài khoản hoặc mật khẩu không đúng");
			responseModel.setStatus(1);
		}
		return responseModel;
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

	@PostMapping("/refresh-token")
	public ResponseModel<UserDTO> refresToken(@RequestBody RequestModel<RefreshTokenRequest> refreshTokenRequest) {
		String refreshTokenClient = refreshTokenRequest.getData().getRefreshToken();
		RefreshToken refreshTokenDb = refreshTokenService.findRefreshToken(refreshTokenClient);
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
		UserDTO userDTO = userService.findByUserId(id);
		if (userDTO.getIsStudent()) {
			StudentDTO studentDTO = studentService.findByUserId(id);
			studentDTO.setRoles(userDTO.getRoles());
			responseModel.setData(studentDTO);
		} else if (userDTO.getIsTeacher()) {
			LecturerDTO lecturerDTO = lecturerService.findByUserId(id);
			lecturerDTO.setRoles(userDTO.getRoles());
			responseModel.setData(lecturerDTO);
		}else {
			responseModel.setData(userDTO);
		}
		return responseModel;
	}

	@PostMapping("/search/{page}")
	public ResponseModel<SearchResponse<List<UserDTO>>> search(@PathVariable int page,
			@RequestParam(defaultValue = "1") int pageSize,
			@RequestBody(required = false) RequestModel<UserSearchCondition> searchConditionRequest) {
		UserSearchCondition searchCondition = searchConditionRequest.getData();
		List<UserDTO> users = userService.search(page, pageSize, searchCondition);
		ResponseModel<SearchResponse<List<UserDTO>>> responseModel = new ResponseModel<>();
		SearchResponse<List<UserDTO>> userSearchResponse = new SearchResponse<>();
		userSearchResponse.setData(users);
		userSearchResponse.setTotal(userService.getTotal(searchCondition));
		responseModel.setData(userSearchResponse);
		return responseModel;
	}

	@PostMapping("/reset/{idUserRequest}")
	public ResponseModel<String> resetPassword(@PathVariable(required = true) String idUserRequest) {
		String idUser = idUserRequest;
		String newPasswordGenerate = generateRandomString(10);
		PasswordEncoder encoder = new BCryptPasswordEncoder();
		String newPasswordEncode = encoder.encode(newPasswordGenerate);
		UserDTO userDto = userService.updatePassword(idUser, newPasswordEncode);

		ResponseModel<String> responseModel = new ResponseModel<>();
//        responseModel.setData(userDto);
		responseModel.setData(newPasswordGenerate);
		return responseModel;
	}

	@PutMapping("/update")
	public ResponseModel<UserDTO> refeshToken(@RequestBody RequestModel<UserDTO> userUpdateRequest) {
		UserDTO newUser = userUpdateRequest.getData();
		ResponseModel<UserDTO> responseModel = new ResponseModel<>();
		try {
			responseModel.setData(userService.updateUser(newUser));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}

	@PostMapping("/insert")
	public ResponseModel<UserDTO> insert(@RequestBody RequestModel<UserDTO> userRequest) {
		ResponseModel<UserDTO> responseModel = new ResponseModel<>();
		UserDTO userDTO = userRequest.getData();
		UserDTO userResponse;
		try {
			userResponse = userService.insert(userDTO);
			responseModel.setData(userResponse);
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}

	@PutMapping("/change-password")
	public ResponseModel<User> changpassword(@RequestBody RequestModel<ChangpasswordPayload> changePasswordPayload) {
		ChangpasswordPayload payload = changePasswordPayload.getData();
		ResponseModel<User> responseModel = new ResponseModel<>();
		try {
			User user = userService.changpassword(payload);
			responseModel.setData(user);
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseModel<Boolean> detete(@PathVariable String id) {
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		try {
			responseModel.setData(userService.delete(id));
		} catch (Exception e) {
			responseModel.setMessage(e.getMessage());
			responseModel.setStatus(1);
		}
		return responseModel;
	}
}
