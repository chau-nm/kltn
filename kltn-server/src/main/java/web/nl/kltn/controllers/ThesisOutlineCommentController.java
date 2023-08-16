package web.nl.kltn.controllers;

import java.util.Date;
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
import web.nl.kltn.model.dto.ThesisOutlineCommentDTO;
import web.nl.kltn.model.generator.ThesisOutlineComment;
import web.nl.kltn.service.ThesisOutlineCommentService;

@RestController
@RequestMapping("/api/thesis-outline-comment")
public class ThesisOutlineCommentController {

    @Autowired
    private ThesisOutlineCommentService thesisOutlineCommentService;

    @GetMapping("/search-by-thesisId")
    public ResponseModel<List<ThesisOutlineComment>> searchByThesisId(@RequestParam String thesisId) {
        ResponseModel<List<ThesisOutlineComment>> responseModel = new ResponseModel<>();
        responseModel.setData(thesisOutlineCommentService.searchByThesisId(thesisId));
        return responseModel;
    }

    @GetMapping("/search-comment-by-thesisId")
    public ResponseModel<List<ThesisOutlineCommentDTO>> searchCommentByThesisId(@RequestParam String thesisId) {
        ResponseModel<List<ThesisOutlineCommentDTO>> responseModel = new ResponseModel<>();
        responseModel.setData(thesisOutlineCommentService.searchCommentByThesisId(thesisId));
        return responseModel;
    }

    @GetMapping("/search-by-userId")
    public ResponseModel<ThesisOutlineComment> searchByUserId(@RequestParam String userId) {
        ResponseModel<ThesisOutlineComment> responseModel = new ResponseModel<>();
        responseModel.setData(thesisOutlineCommentService.searchByUserId(userId));
        return responseModel;
    }

    @PutMapping("/update-comment")
    public ResponseModel<Boolean> updateComment(@RequestBody RequestModel<ThesisOutlineComment> thesisOutlineCommentRequest) {
        ResponseModel<Boolean> responseModel = new ResponseModel<>();
        ThesisOutlineComment thesisOutlineComment = thesisOutlineCommentRequest.getData();
        ThesisOutlineComment result = thesisOutlineCommentService.searchByThesisIdAndCouncilId(thesisOutlineComment.getThesisId(), thesisOutlineComment.getUserId());
        thesisOutlineComment.setId(result.getId());
        thesisOutlineComment.setOrder(1);
        thesisOutlineComment.setCreatedAt(result.getCreatedAt());
        thesisOutlineComment.setIsDeleted(false);
        thesisOutlineComment.setUpdatedAt(new Date().getTime());
        thesisOutlineCommentService.update(thesisOutlineComment);
        responseModel.setData(true);

        return responseModel;
    }

    @PostMapping("/insert/{thesisId}")
    public ResponseModel<List<ThesisOutlineComment>> insertListThesisCouncil(@PathVariable String thesisId,@RequestBody List<String> usersId) throws Exception {
        ResponseModel<List<ThesisOutlineComment>> responseModel = new ResponseModel<>();
        responseModel.setData(thesisOutlineCommentService.insertListThesisCouncil(thesisId,usersId));
        return responseModel;
    }

    @PutMapping("/update")
    public ResponseModel<Boolean> update(@RequestBody RequestModel<ThesisOutlineComment> thesisOutlineCommentRequest) {
        ResponseModel<Boolean> responseModel = new ResponseModel<>();
        try {
            ThesisOutlineComment thesisOutlineComment = thesisOutlineCommentRequest.getData();
            thesisOutlineCommentService.update(thesisOutlineComment);
            responseModel.setData(true);
        } catch (Exception exception) {
            responseModel.setData(false);
        }
        return responseModel;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseModel<Boolean> delete(@PathVariable String id) {
        ResponseModel<Boolean> responseModel = new ResponseModel<>();
        try {
            thesisOutlineCommentService.deleted(id);
            responseModel.setData(true);
        } catch (Exception exception) {
            responseModel.setData(false);
        }
        return responseModel;
    }

    @DeleteMapping("/delete-by-thesis/{id}")
    public ResponseModel<Boolean> deleteByThesis(@PathVariable String id) {
        ResponseModel<Boolean> responseModel = new ResponseModel<>();
        try {
            thesisOutlineCommentService.deletedByThesis(id);
            responseModel.setData(true);
        } catch (Exception exception) {
            responseModel.setData(false);
        }
        return responseModel;
    }
}
