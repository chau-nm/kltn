package web.nl.kltn.common;

public class RequestModel<T> {
	private T data;
	
	public RequestModel() {}
	
	public T getData() {
		return data;
	}
	
	public void setData(T data) {
		this.data = data;
	}
}
