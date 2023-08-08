package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.ThesisSearchCondition;
import web.nl.kltn.model.dto.ThesisDTO;
import web.nl.kltn.model.generator.Thesis;

public interface ThesisCusMapper {
	public List<ThesisDTO> search(
			int page, 
			int pageSize, 
			ThesisSearchCondition searchCondition);
	public int getTotal(ThesisSearchCondition searchCondition);
}
