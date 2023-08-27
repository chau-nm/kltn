package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.ThesisStudent;

public interface ThesisStudentCusMapper {

	public List<ThesisStudent> getThesisStudentByThesisId(String thesisId);
}
