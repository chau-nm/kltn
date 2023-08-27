package web.nl.kltn.model.dto;

import web.nl.kltn.model.generator.ThesisLeturer;

public class ThesisLeturerDTO extends ThesisLeturer {

	private LeturerDTO leturer;

	public LeturerDTO getLeturer() {
		return leturer;
	}

	public void setLeturer(LeturerDTO leturer) {
		this.leturer = leturer;
	}
}
