package web.nl.kltn.controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import web.nl.kltn.common.ResponseModel;
import web.nl.kltn.model.DocumentData;
import web.nl.kltn.service.Doc2vecService;

@RestController
@RequestMapping("/api/doc2vec")
public class Doc2vecController {
	@Autowired
	private Doc2vecService doc2VecService;

	@GetMapping("/search")
	public ResponseModel<List<DocumentData>> search(@RequestParam(required = true) String inputTitle)
			throws IOException {
		List<DocumentData> listSimilar = doc2VecService.search(inputTitle);
		ResponseModel<List<DocumentData>> responseModel = new ResponseModel<>();
		responseModel.setData(listSimilar);
		return responseModel;
	}
}
