package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.ThesisSearchCondition;
import web.nl.kltn.model.dto.ThesisDTO;

public interface ThesisService {

	List<ThesisDTO> search(int page, int pageSize, ThesisSearchCondition thesisSearchCondition);

	void delete(String id);

	void update(ThesisDTO thesisDTO) throws Exception;

	ThesisDTO insert(ThesisDTO thesis) throws Exception;

	int getTotal(ThesisSearchCondition searchCondition);

	ThesisDTO findById(String id);

	ThesisDTO findDetailById(String id);

	List<ThesisDTO> findByUser(String userId);

	List<ThesisDTO> findByCouncil(int page, int pageSize, ThesisSearchCondition thesisSearchCondition);

	int getTotalByCouncilId(ThesisSearchCondition searchCondition);

	boolean updateStatus(String id, int status);

	List<ThesisDTO> searchThesisCAByUserId(String userId);
}
