package web.nl.kltn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import web.nl.kltn.mapper.generator.ThesisDocumentMapper;
import web.nl.kltn.mapper.generator.ThesisMapper;
import web.nl.kltn.model.generator.Thesis;
import web.nl.kltn.model.generator.ThesisDocument;
import web.nl.kltn.service.ThesisDocumentService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class ThesisDocumentServiceImpl implements ThesisDocumentService{

	@Autowired
	private ThesisDocumentMapper thesisDocumentMapper;
	
	@Autowired
	private ThesisMapper thesisMapper;
	
	@Override
	public List<ThesisDocument> insertList(List<ThesisDocument> thesisDocuments) throws Exception {
		try {
			for (ThesisDocument thesisDocument: thesisDocuments) {
				if (thesisDocumentMapper.insert(thesisDocument) <= 0) {
					throw new Exception("Thêm file tài liệu thất bại");
				}
			}
			Thesis thesis = thesisMapper.selectByPrimaryKey(thesisDocuments.get(0).getThesisId());
			thesis.setStatus(9);
			thesisMapper.updateByPrimaryKey(thesis);
			return thesisDocuments;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}
}
