package web.nl.kltn.mapper;

import java.util.List;

import web.nl.kltn.model.generator.ThesisLeturer;

public interface ThesisLeturerCusMapper {

	public List<ThesisLeturer> getThesisLeturerByThesisId(String thesisId);
}
