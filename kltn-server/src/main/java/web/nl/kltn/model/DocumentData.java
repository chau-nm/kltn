package web.nl.kltn.model;

import web.nl.kltn.common.Util;

import java.io.IOException;

public class DocumentData {
    private String id;
    private String titleSearch;
    private String title;
    private String url;

    public DocumentData(String id, String title, String url) throws IOException {
        this.id = id;
        this.title = title;
        this.titleSearch = Util.processTitle(title).toLowerCase();
        this.url = url;
    }

    public String getTitleSearch() {
        return titleSearch;
    }

    public void setTitleSearch(String titleSearch) {
        this.titleSearch = titleSearch;
    }



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