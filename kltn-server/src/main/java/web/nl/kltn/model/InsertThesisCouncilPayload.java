package web.nl.kltn.model;

import java.util.List;

public class InsertThesisCouncilPayload {
	private String thesisId;
	private List<String> councils;
	
	public List<String> getCouncils() {
		return councils;
	}
	
	public void setCouncils(List<String> councils) {
		this.councils = councils;
	}
	
	public String getThesisId() {
		return thesisId;
	}
	
	public void setThesisId(String thesisId) {
		this.thesisId = thesisId;
	}
}
