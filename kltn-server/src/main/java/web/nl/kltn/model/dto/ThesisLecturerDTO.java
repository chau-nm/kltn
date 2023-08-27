package web.nl.kltn.model.dto;

import java.util.List;

import web.nl.kltn.mapper.LecturerCusMapper;
import web.nl.kltn.model.generator.ThesisLecturer;

public class ThesisLecturerDTO extends ThesisLecturer {

	private LecturerDTO lecturer;

	public LecturerDTO getLecturer() {
		return lecturer;
	}

	public void setLecturer(LecturerDTO lecturer) {
		this.lecturer = lecturer;
	}
	
	public static List<LecturerDTO> getStudentDTOsByListThesisStudent(List<ThesisLecturer> thesisLecturer, LecturerCusMapper lecturerCusMapper) {
		return thesisLecturer
				.stream()
				.map(l -> {
					ThesisLecturerDTO thesisLecturerDTO = new ThesisLecturerDTO();
					thesisLecturerDTO.load(l, lecturerCusMapper);
					return thesisLecturerDTO.getLecturer();
				})
				.toList();
	}
	
	public void load(ThesisLecturer thesislecturer, LecturerCusMapper lecturerCusMapper) {
		this.setId(thesislecturer.getId());
		this.setThesisId(thesislecturer.getThesisId());
		this.setLecturerId(thesislecturer.getLecturerId());
		this.setIsActive(thesislecturer.getIsActive());
		this.setIsDeleted(thesislecturer.getIsDeleted());
		this.setCreatedAt(thesislecturer.getCreatedAt());
		this.setUpdatedAt(thesislecturer.getUpdatedAt());
		if (lecturerCusMapper != null) {
			this.setLecturer(lecturerCusMapper.getLecturerByUserId(thesislecturer.getLecturerId()));
		}
 	}
}
