package web.nl.kltn.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import web.nl.kltn.mapper.DefenseRatingCusMapper;
import web.nl.kltn.mapper.DefenseRatingScoreCusMapper;
import web.nl.kltn.mapper.LecturerCusMapper;
import web.nl.kltn.mapper.StudentCusMapper;
import web.nl.kltn.mapper.generator.DefenseRatingMapper;
import web.nl.kltn.mapper.generator.DefenseRatingScoreMapper;
import web.nl.kltn.mapper.generator.ThesisMapper;
import web.nl.kltn.model.dto.DefenseRatingDTO;
import web.nl.kltn.model.dto.DefenseRatingScoreDTO;
import web.nl.kltn.model.dto.ReviewerScoreDTO;
import web.nl.kltn.model.generator.DefenseRating;
import web.nl.kltn.model.generator.Thesis;
import web.nl.kltn.service.ThesisDefenseService;

@Service
@Transactional(rollbackFor = Throwable.class)
public class ThesisDefenseServiceImpl implements ThesisDefenseService {

	@Autowired
	private DefenseRatingMapper defenseRatingMapper;

	@Autowired
	private DefenseRatingCusMapper defenseRatingCusMapper;

	@Autowired
	private DefenseRatingScoreMapper defenseRatingScoreMapper;

	@Autowired
	private DefenseRatingScoreCusMapper defenseRatingScoreCusMapper;

	@Autowired
	private LecturerCusMapper lecturerCusMapper;

	@Autowired
	private StudentCusMapper studentCusMapper;

	@Autowired
	private ThesisMapper thesisMapper;

	@Override
	public List<DefenseRating> insertDefenseRaters(String thesisId, List<String> userIds) throws Exception {
		try {
			List<DefenseRating> thesisRatings = new ArrayList<>();

			for (String userId : userIds) {
				DefenseRating defenseRating = new DefenseRating();
				defenseRating.setId(UUID.randomUUID().toString());
				defenseRating.setThesisId(thesisId);
				defenseRating.setMarker(userId);
				defenseRating.setCreatedAt(new Date().getTime());
				defenseRating.setUpdatedAt(new Date().getTime());
				defenseRating.setIsDeleted(false);
				if (defenseRatingMapper.insert(defenseRating) <= 0) {
					throw new Exception("Thêm thất bại");
				}
				thesisRatings.add(defenseRating);
			}

			Thesis thesis = thesisMapper.selectByPrimaryKey(thesisId);
			thesis.setStatus(7);
			thesisMapper.updateByPrimaryKey(thesis);
			return thesisRatings;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}

	}

	@Override
	public DefenseRatingDTO update(DefenseRatingDTO defenseRatingDTO) throws Exception {
		try {
			if (defenseRatingMapper.updateByPrimaryKey(defenseRatingDTO) <= 0) {
				throw new Exception("Cập nhật đánh giá bảo vệ thất bại");
			}
			defenseRatingScoreCusMapper.deleteByDrId(defenseRatingDTO.getId());
			for (DefenseRatingScoreDTO defenseRatingScoreDTO : defenseRatingDTO.getScores()) {
				if (defenseRatingScoreMapper.insert(defenseRatingScoreDTO) <= 0) {
					throw new Exception("Cập nhật đánh giá bảo vệ thất bại");
				}
			}

			List<DefenseRatingDTO> defenseRatingDTOs = getByThesisId(defenseRatingDTO.getThesisId());

			List<Double> scoreTotals = new ArrayList<>();
			for (DefenseRatingDTO dr : defenseRatingDTOs) {
				if (dr.getScores().size() <= 0) {
					scoreTotals.removeAll(scoreTotals);
					break;
				} else {
					scoreTotals.add(dr.getScores().get(0).getTotalScore());
				}
			}
			if (scoreTotals.size() > 0) {
				double avgScore = scoreTotals.stream().mapToDouble(Double::doubleValue).average().getAsDouble();
				Thesis thesis = thesisMapper.selectByPrimaryKey(defenseRatingDTO.getThesisId());
				if (avgScore >= 4) {
					thesis.setStatus(8);
				} else {
					thesis.setStatus(-1);
				}
				thesisMapper.insert(thesis);
			}

			return defenseRatingDTO;
		} catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().isRollbackOnly();
			throw e;
		}
	}

	public List<DefenseRatingDTO> getByThesisId(String thesisId) {
		return DefenseRatingDTO.getDTOsFromEntities(defenseRatingCusMapper.findByThesisId(thesisId), lecturerCusMapper,
				defenseRatingScoreCusMapper, studentCusMapper);
	}
}
