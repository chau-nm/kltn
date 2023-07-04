package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.ThesisSearchCondition;
import web.nl.kltn.model.generator.Thesis;

public interface ThesisCusMapper {
	public List<Thesis> search(int page, int pageSize, ThesisSearchCondition searchCondition);
}
