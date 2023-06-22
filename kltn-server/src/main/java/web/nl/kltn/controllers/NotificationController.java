package web.nl.kltn.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.NotificationCus;
import web.nl.kltn.model.NotificationSearchCondition;
import web.nl.kltn.model.SearchResponse;
import web.nl.kltn.service.NotificationService;

@RestController
@RequestMapping("/api/notification")
public class NotificationController {
	
	@Autowired
	private NotificationService notificationService;
	
	@PostMapping("/search/{page}")
	public ResponseModel<SearchResponse<List<NotificationCus>>> search(
			@PathVariable int page, 
			@RequestParam(defaultValue = "1") int pageSize, 
			@RequestBody(required = false) RequestModel<NotificationSearchCondition> searchConditionRequest
	){
		NotificationSearchCondition searchCondition = searchConditionRequest.getData();
		List<NotificationCus> notifications = notificationService.search(page, pageSize, searchCondition);
		ResponseModel<SearchResponse<List<NotificationCus>>> responseModel = new ResponseModel<>();
		SearchResponse<List<NotificationCus>> notificationSearchResponse = new SearchResponse<>();
		notificationSearchResponse.setData(notifications);
		notificationSearchResponse.setTotal(notificationService.getTotal(searchCondition));
		responseModel.setData(notificationSearchResponse);
		return responseModel;
	}
	
	@PostMapping("/insert")
	public ResponseModel<NotificationCus> insert(
			@RequestBody RequestModel<NotificationCus> notificationRequest
	){
		NotificationCus notificationCus = notificationRequest.getData();
		ResponseModel<NotificationCus> responseModel = new ResponseModel<>();
		NotificationCus notificationCusResponse = notificationService.insert(notificationCus);
		if (notificationCusResponse != null) {
			responseModel.setData(notificationCusResponse);
		}
		return responseModel;
	}
	
	@PutMapping("/update")
	public ResponseModel<Boolean> update(
			@RequestBody RequestModel<NotificationCus> notificationRequest
	){
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		NotificationCus notificationCus = notificationRequest.getData();
		notificationService.update(notificationCus);
		responseModel.setData(true);
		return responseModel;
	}
	
	@DeleteMapping("/delete/{notificationId}")
	public ResponseModel<Boolean> delete(@PathVariable(required = true) String notificationId){
		ResponseModel<Boolean> responseModel = new ResponseModel<>();
		notificationService.deleted(notificationId);
		responseModel.setData(true);
		return responseModel;
	}
}
