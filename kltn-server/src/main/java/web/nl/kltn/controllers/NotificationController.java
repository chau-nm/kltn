package web.nl.kltn.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.NotificationSearchCondition;
import web.nl.kltn.model.SearchResponse;
import web.nl.kltn.model.dto.NotificationDTO;
import web.nl.kltn.model.generator.Notification;
import web.nl.kltn.service.NotificationService;

@RestController
@RequestMapping("/api/notification")
public class NotificationController {
	
	@Autowired
	private NotificationService notificationService;
	
	@GetMapping("/{id}")
	public ResponseModel<NotificationDTO> viewDetail(@PathVariable(required = true) String id){
		NotificationDTO notificationDTO = notificationService.getDetail(id);
		ResponseModel<NotificationDTO> responseModel = new ResponseModel<>();
		responseModel.setData(notificationDTO);
		return responseModel;
	}
	
	@PostMapping("/search/{page}")
	public ResponseModel<SearchResponse<List<Notification>>> search(
			@PathVariable int page, 
			@RequestParam(defaultValue = "1") int pageSize, 
			@RequestBody(required = false) RequestModel<NotificationSearchCondition> searchConditionRequest
	){
		NotificationSearchCondition searchCondition = searchConditionRequest.getData();
		List<Notification> notifications = notificationService.search(page, pageSize, searchCondition);
		ResponseModel<SearchResponse<List<Notification>>> responseModel = new ResponseModel<>();
		SearchResponse<List<Notification>> notificationSearchResponse = new SearchResponse<>();
		notificationSearchResponse.setData(notifications);
		notificationSearchResponse.setTotal(notificationService.getTotal(searchCondition));
		responseModel.setData(notificationSearchResponse);
		return responseModel;
	}
	
	@PostMapping("/insert")
	public ResponseModel<NotificationDTO> insert(
			@RequestBody RequestModel<NotificationDTO> notificationRequest
	){
		ResponseModel<NotificationDTO> responseModel = new ResponseModel<>();
		NotificationDTO notificationDTO = notificationRequest.getData();
		NotificationDTO notificationResponse = notificationService.insert(notificationDTO);
		if (notificationResponse != null) {
			responseModel.setData(notificationResponse);
		}
		return responseModel;
	}
	
	@PutMapping("/update")
	public ResponseModel<Boolean> update(
			@RequestBody RequestModel<NotificationDTO> notificationRequest
	){
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		NotificationDTO notification = notificationRequest.getData();
		notificationService.update(notification);
		responseModel.setData(true);
		return responseModel;
	}
	
	@DeleteMapping("/delete/{notificationId}")
	public ResponseModel<Boolean> delete(@PathVariable(required = true) String notificationId){
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		notificationService.delete(notificationId);
		responseModel.setData(true);
		return responseModel;
	}
}
