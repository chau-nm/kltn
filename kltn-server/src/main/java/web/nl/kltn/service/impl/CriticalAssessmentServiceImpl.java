package web.nl.kltn.service.impl;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import web.nl.kltn.mapper.CriticalAssessmentCusMapper;
import web.nl.kltn.mapper.CriticalAssessmentScoreCusMapper;
import web.nl.kltn.mapper.generator.CriticalAssessmentMapper;
import web.nl.kltn.mapper.generator.CriticalAssessmentScoreMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.dto.CriticalAssessmentDTO;
import web.nl.kltn.model.dto.CriticalAssessmentScoreDTO;
import web.nl.kltn.model.generator.CriticalAssessment;
import web.nl.kltn.service.CriticalAssessmentService;

@Service
@Transactional(rollbackFor = {Exception.class, Throwable.class})
public class CriticalAssessmentServiceImpl implements CriticalAssessmentService{

	@Autowired
	private CriticalAssessmentMapper criticalAssessmentMapper;

	@Autowired
	private CriticalAssessmentCusMapper criticalAssessmentCusMapper;

	@Autowired
	private CriticalAssessmentScoreMapper criticalAssessmentScoreMapper;

	@Autowired
	private CriticalAssessmentScoreCusMapper criticalAssessmentScoreCusMapper;
	
	@Autowired
	private UserMapper userMapper;
	
	/**
	 * Map CriticalAssessment -> DTO
	 * 
	 * @param ca
	 * @return
	 */
	private CriticalAssessmentDTO mapCAEntityToDTO(CriticalAssessment ca) {
		CriticalAssessmentDTO criticalAssessmentDTO = new CriticalAssessmentDTO();
		criticalAssessmentDTO.load(ca);
		List<CriticalAssessmentScoreDTO> assessmentScoreDTOs 
			= criticalAssessmentScoreCusMapper.searchByCAId(ca.getId())
			.stream()
			.map(caScore -> {
				CriticalAssessmentScoreDTO criticalAssessmentScoreDTO = new CriticalAssessmentScoreDTO();
				criticalAssessmentScoreDTO.load(caScore);
				criticalAssessmentScoreDTO.setStudent(userMapper.selectByPrimaryKey(caScore.getId()));
				return new CriticalAssessmentScoreDTO();
			})
			.toList();
		criticalAssessmentDTO.setCritialAssessmentScores(assessmentScoreDTOs);
		criticalAssessmentDTO.setUserMaker(userMapper.selectByPrimaryKey(ca.getMarker()));
		return criticalAssessmentDTO;
	}

	/**
	 * Insert user for critical assessment
	 */
	@Override
	public CriticalAssessment insertUser(String thesisId, String userId) throws Exception {
		try {
			CriticalAssessment criticalAssessment = new CriticalAssessment();
			criticalAssessment.setId(String.valueOf(UUID.randomUUID()));
			criticalAssessment.setThesisId(thesisId);
			criticalAssessment.setMarker(userId);
			criticalAssessment.setCreatedAt(new Date().getTime());
			criticalAssessment.setUpdatedAt(new Date().getTime());
			criticalAssessment.setIsDeleted(false);
			if (criticalAssessmentMapper.insert(criticalAssessment) <= 0) {
				throw new Exception("Thêm phản biện thất bại");
			}
			return criticalAssessment;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}
	
	/**
	 * search critical assessment by thesis id
	 * 
	 * @param thesisId
	 * @return 
	 */
	@Override
	public List<CriticalAssessmentDTO> searchByThesisId(String thesisId) {
		List<CriticalAssessmentDTO> criticalAssessments 
			= criticalAssessmentCusMapper.searchByThesisId(thesisId)
			.stream()
			.map(ca -> {
				return mapCAEntityToDTO(ca);
			})
			.toList();
		
		return criticalAssessments;
	}

	/**
	 * search critical assessment by marker
	 * 
	 * @param marker
	 * @return
	 */
	@Override
	public CriticalAssessmentDTO searchByMarker(String marker) {
		return mapCAEntityToDTO(criticalAssessmentCusMapper.searchByMarker(marker));
	}

	@Override
	public CriticalAssessmentDTO insert(CriticalAssessmentDTO criticalAssessmentDTO) throws Exception {
		try {
			int rowInsertCA = criticalAssessmentMapper.insert(criticalAssessmentDTO);
			if (rowInsertCA <= 0) {
				return null;
			}
			for (CriticalAssessmentScoreDTO criticalAssessmentScoreDTO : 
				criticalAssessmentDTO.getCritialAssessmentScores()) {
				int rowInsertCAScore = criticalAssessmentScoreMapper.insert(criticalAssessmentScoreDTO);
				if (rowInsertCAScore <= 0) {
					throw new RuntimeException();
				}
			}
			return criticalAssessmentDTO;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}

	@Override
	public void update(CriticalAssessmentDTO criticalAssessmentDTO) throws Exception {
		try {
			criticalAssessmentMapper.updateByPrimaryKey(criticalAssessmentDTO);
			criticalAssessmentScoreCusMapper.deleteByCAId(criticalAssessmentDTO.getId());
			for (CriticalAssessmentScoreDTO criticalAssessmentScoreDTO : 
				criticalAssessmentDTO.getCritialAssessmentScores()) {
				int rowInsertCAScore = criticalAssessmentScoreMapper.insert(criticalAssessmentScoreDTO);
				if (rowInsertCAScore <= 0) {
					throw new RuntimeException();
				}
			}
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}

	@Override
	public void delete(String id) {
		CriticalAssessment criticalAssessment = criticalAssessmentMapper.selectByPrimaryKey(id);
		criticalAssessment.setIsDeleted(true);
		criticalAssessmentMapper.updateByPrimaryKey(criticalAssessment);
	}
}
