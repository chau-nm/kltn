package web.nl.kltn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import web.nl.kltn.mapper.ProtectionRatingCusMapper;
import web.nl.kltn.mapper.ProtectionRatingQuestionCusMapper;
import web.nl.kltn.mapper.ProtectionRatingScoreCusMapper;
import web.nl.kltn.mapper.generator.ProtectionRatingMapper;
import web.nl.kltn.mapper.generator.ProtectionRatingQuestionMapper;
import web.nl.kltn.mapper.generator.ProtectionRatingScoreMapper;
import web.nl.kltn.mapper.generator.UserMapper;
import web.nl.kltn.model.dto.ProtectionRatingDTO;
import web.nl.kltn.model.dto.ProtectionRatingScoreDTO;
import web.nl.kltn.model.generator.ProtectionRating;
import web.nl.kltn.model.generator.ProtectionRatingQuestion;
import web.nl.kltn.model.generator.ProtectionRatingScore;
import web.nl.kltn.service.ProtectionRatingService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class ProtectionRatingServiceImpl implements ProtectionRatingService{

	@Autowired
	private UserMapper userMapper;
	
	@Autowired
	private ProtectionRatingMapper protectionRatingMapper;
	
	@Autowired
	private ProtectionRatingCusMapper protectionRatingCusMapper;
	
	@Autowired
	private ProtectionRatingQuestionMapper protectionRatingQuestionMapper;
	
	@Autowired
	private ProtectionRatingQuestionCusMapper protectionRatingQuestionCusMapper;
	
	@Autowired
	private ProtectionRatingScoreMapper protectionRatingScoreMapper;
	
	@Autowired
	private ProtectionRatingScoreCusMapper protectionRatingScoreCusMapper;
	
	private ProtectionRatingDTO mapPrEntityToDTO(ProtectionRating pr) {
		ProtectionRatingDTO protectionRatingDTO = new ProtectionRatingDTO();
		protectionRatingDTO.load(pr);
		protectionRatingDTO.setUserMaker(userMapper.selectByPrimaryKey(pr.getMarker()));
		List<ProtectionRatingScoreDTO> protectionRatingScoreDTOs
			= protectionRatingScoreCusMapper.searchByPrId(pr.getId())
				.stream()
				.map(prs -> {
					ProtectionRatingScoreDTO protectionRatingScoreDTO
						= new ProtectionRatingScoreDTO();
					protectionRatingScoreDTO.load(prs);
					protectionRatingScoreDTO.setStudent(userMapper.selectByPrimaryKey(prs.getStudentId()));
					return new ProtectionRatingScoreDTO();
				})
				.toList();
		return protectionRatingDTO;
	}
	
	private List<ProtectionRatingDTO> mapPrEntitiesToDTOs(List<ProtectionRating> prs) {
		return prs
				.stream()
				.map(pr -> {
					return mapPrEntityToDTO(pr);
				})
				.toList();
	}

	@Override
	public List<ProtectionRatingDTO> searchByThesisId(String thesisId) {
		return mapPrEntitiesToDTOs(protectionRatingCusMapper.searchByThesisId(thesisId));
	}

	@Override
	public ProtectionRatingDTO insert(ProtectionRatingDTO protectionRatingDTO) {
		try {
			ProtectionRating protectionRating = protectionRatingDTO;
			int rowInsertedPr = protectionRatingMapper.insert(protectionRating);
			if (rowInsertedPr <= 0) {
				return null;
			}
//			List<ProtectionRatingQuestion> protectionRatingQuestions = protectionRatingDTO.getQuestions();
//			for (ProtectionRatingQuestion question : protectionRatingQuestions) {
//				if (protectionRatingQuestionMapper.insert(question) <= 0) {
//					throw new RuntimeException();
//				}
//			}
//			List<ProtectionRatingScore> protectionRatingScores
//				= protectionRatingDTO.getScores()
//					.stream()
//					.map(sDTO -> {
//						ProtectionRatingScore protectionRatingScore = sDTO;
//						return protectionRatingScore;
//					})
//					.toList();
//			for (ProtectionRatingScore score: protectionRatingScores) {
//				if (protectionRatingScoreMapper.insert(score) <= 0) {
//					throw new RuntimeException();
//				}
//			}
			return protectionRatingDTO;
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public void update(ProtectionRatingDTO protectionRatingDTO) {
		protectionRatingMapper.updateByPrimaryKey(protectionRatingDTO);
		protectionRatingQuestionCusMapper.deleteByPrId(protectionRatingDTO.getId());
//		List<ProtectionRatingQuestion> protectionRatingQuestions = protectionRatingDTO.getQuestions();
//		for (ProtectionRatingQuestion question : protectionRatingQuestions) {
//			if (protectionRatingQuestionMapper.insert(question) <= 0) {
//				throw new RuntimeException();
//			}
//		}
//		protectionRatingScoreCusMapper.deleteByPrId(protectionRatingDTO.getId());
//		List<ProtectionRatingScore> protectionRatingScores
//			= protectionRatingDTO.getScores()
//				.stream()
//				.map(sDTO -> {
//					ProtectionRatingScore protectionRatingScore = sDTO;
//					return protectionRatingScore;
//				})
//				.toList();
//		for (ProtectionRatingScore score: protectionRatingScores) {
//			if (protectionRatingScoreMapper.insert(score) <= 0) {
//				throw new RuntimeException();
//			}
//		}
	}

	@Override
	public void delete(String id) {
		ProtectionRating protectionRating = protectionRatingMapper.selectByPrimaryKey(id);
		protectionRating.setIsDeleted(true);
		protectionRatingMapper.insert(protectionRating);
	}
}
