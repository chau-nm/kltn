package web.nl.kltn.controllers;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import web.nl.kltn.common.RequestModel;
import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.dto.ProtectionRatingDTO;
import web.nl.kltn.model.generator.CriticalAssessment;
import web.nl.kltn.model.generator.ProtectionRating;
import web.nl.kltn.service.ProtectionRatingService;

@RestController
@RequestMapping("/api/protection-rating")
public class ProtectionRatingController {

    @Autowired
    private ProtectionRatingService protectionRatingService;

    @GetMapping("/search-by-thesis-id")
    public ResponseModel<List<ProtectionRatingDTO>> searchByThesisId(@RequestParam String thesisId) {
        ResponseModel<List<ProtectionRatingDTO>> responseModel = new ResponseModel<>();
        responseModel.setData(protectionRatingService.searchByThesisId(thesisId));
        return responseModel;
    }

    @PostMapping("/insert")
    public ResponseModel<ProtectionRatingDTO> insert(@RequestBody RequestModel<ProtectionRatingDTO> protectionRatingRequest) {
        ResponseModel<ProtectionRatingDTO> responseModel = new ResponseModel<>();
        ProtectionRatingDTO protectionRatingDTO = protectionRatingRequest.getData();
        responseModel.setData(protectionRatingService.insert(protectionRatingDTO));
        return responseModel;
    }

    @PostMapping("/insert-user/{thesisId}")
    public ResponseModel<List<ProtectionRating>> insertProtectionRateUser(@PathVariable String thesisId,
                                                                          @RequestBody List<String> usersId) {

        ResponseModel<List<ProtectionRating>> responseModel = new ResponseModel<>();
        try {
            responseModel.setData(protectionRatingService.insertUsers(thesisId, usersId));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            responseModel.setMessage(e.getCause().toString());
            responseModel.setStatus(500);
        }
        return responseModel;
    }

    @DeleteMapping("/delete-by-thesisId")
    public ResponseModel<Boolean> deleteByThesisId(@RequestParam String thesisId) {

        ResponseModel<Boolean> responseModel = new ResponseModel<>();
        try {
            responseModel.setData(protectionRatingService.deleteByThesisId(thesisId));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            responseModel.setMessage(e.getCause().toString());
            responseModel.setStatus(500);
        }
        return responseModel;
    }

    @PutMapping("/update")
    public ResponseModel<Boolean> update(@RequestBody RequestModel<ProtectionRatingDTO> protectionRatingRequest) {
        ResponseModel<Boolean> responseModel = new ResponseModel<>();
        ProtectionRatingDTO protectionRatingDTO = protectionRatingRequest.getData();
        protectionRatingService.update(protectionRatingDTO);
        responseModel.setData(true);
        return responseModel;
    }

    @Delete("/delete/{id}")
    public ResponseModel<Boolean> delete(@PathVariable String id) {
        ResponseModel<Boolean> responseModel = new ResponseModel<>();
        protectionRatingService.delete(id);
        responseModel.setData(true);
        return responseModel;
    }
}
