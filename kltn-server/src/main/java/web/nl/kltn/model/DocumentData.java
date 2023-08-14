package web.nl.kltn.model;

public class DocumentData {
    private String id;
    private String title;
    private String url;


    public DocumentData(String id, String title, String url) {
        this.id = id;
        this.title = title;
        this.url = url;

    }

    // Getters and setters for the fields


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }


}
