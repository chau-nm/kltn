package web.nl.kltn.service;

import java.util.List;

import web.nl.kltn.model.ThesisSearchCondition;
import web.nl.kltn.model.dto.ThesisDTO;
import web.nl.kltn.model.generator.Thesis;

public interface ThesisService {

	List<Thesis> search(int page, int pageSize, ThesisSearchCondition thesisSearchCondition);

	void delete(String id);

	void update(Thesis thesis);

	Thesis insert(Thesis thesis);

	int getTotal(ThesisSearchCondition searchCondition);

	ThesisDTO findById(String id);

}
