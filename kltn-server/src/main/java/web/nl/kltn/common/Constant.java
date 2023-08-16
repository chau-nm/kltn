package web.nl.kltn.common;

import java.io.File;

public interface Constant {
    String ACCESS_TOKEN = "access-token";
    String REFRESH_TOKEN = "refresh-token";
    File resourcesDirectory = new File("src/main/resources");
    String resourcePath = resourcesDirectory.getAbsolutePath();
    String modelDocPath = resourcePath + "/Doc2VecModel/docVector";
    String stopWord = resourcePath + "/Doc2VecModel/stop_words.txt";
    String datasetPre = resourcePath + "/Doc2VecModel/file.txt";
    String dataset = resourcePath + "/Doc2VecModel/new_tokens.txt";
    String INDEX_DIR =resourcePath+ "/Doc2VecModel/lucene";
    final double  similarityThreshold=0.8;

    /** Thesis user type*/
    int THESIS_STUDENT = 1;
    int THESIS_TEACHER = 2;

    /** Document type*/
    int THESIS_DOCUMENT_TYPE_OUTLINE = 1;
    int THESIS_DOCUMENT_TYPE_DOCUMENT = 2;

    /** Thesis status*/
    int THESIS_STATUS_CANCEL = -1;
    int THESIS_STATUS_WAIT_ACCEPT = 1;
    int THESIS_STATUS_OUTLINE_EVALUTE = 2;
    int THESIS_STATUS_DOING = 3;
    int THESIS_STATUS_CRITICAL_ASSESSMENT = 4;
    int THESIS_STATUS_PROTECT = 5;
    int THESIS_STATUS_FINISH = 6;

    /** Thesis user status */
    int THESIS_USER_TYPE_WAITING = 0;
    int THESIS_USER_TYPE_ACCEPT = 1;
    int THESIS_USER_TYPE_DECLINE = 2;
}