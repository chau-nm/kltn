package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.mapper.LeturerCusMapper;
import web.nl.kltn.mapper.StudentCusMapper;
import web.nl.kltn.model.generator.ThesisLeturer;
import web.nl.kltn.model.generator.ThesisStudent;

public class ThesisLeturerDTO extends ThesisLeturer {

	private LeturerDTO leturer;

	public LeturerDTO getLeturer() {
		return leturer;
	}

	public void setLeturer(LeturerDTO leturer) {
		this.leturer = leturer;
	}
	
	public static List<LeturerDTO> getStudentDTOsByListThesisStudent(List<ThesisLeturer> thesisLeturer, LeturerCusMapper leturerCusMapper) {
		return thesisLeturer
				.stream()
				.map(l -> {
					ThesisLeturerDTO thesisLeturerDTO = new ThesisLeturerDTO();
					thesisLeturerDTO.load(l, leturerCusMapper);
					return thesisLeturerDTO.getLeturer();
				})
				.toList();
	}
	
	public void load(ThesisLeturer thesisLeturer, LeturerCusMapper leturerCusMapper) {
		this.setId(thesisLeturer.getId());
		this.setThesisId(thesisLeturer.getThesisId());
		this.setLecturerId(thesisLeturer.getLecturerId());
		this.setIsActive(thesisLeturer.getIsActive());
		this.setIsDeleted(thesisLeturer.getIsDeleted());
		this.setCreatedAt(thesisLeturer.getCreatedAt());
		this.setUpdatedAt(thesisLeturer.getUpdatedAt());
		if (leturerCusMapper != null) {
			this.setLeturer(leturerCusMapper.getLeturerByUserId(thesisLeturer.getLecturerId()));
		}
 	}
}
