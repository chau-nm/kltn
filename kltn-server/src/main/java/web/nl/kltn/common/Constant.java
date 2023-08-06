package web.nl.kltn.common;

import java.io.File;

public interface Constant {
    String ACCESS_TOKEN = "access-token";
    String REFRESH_TOKEN = "refresh-token";
    File resourcesDirectory = new File("src/main/resources");
    String resourcePath = resourcesDirectory.getAbsolutePath();
    String modelDocPath = resourcePath + "/Doc2VecModel/docVector";
    String dataset = resourcePath + "/Doc2VecModel/merge.txt";
    String INDEX_DIR =resourcePath+ "/Doc2VecModel/lucene";
    final double  similarityThreshold=0.6;
    int THESIS_STUDENT = 1;
    int THESIS_TEACHER = 2;
    int THESIS_DOCUMENT_TYPE_OUTLINE = 1;
    int THESIS_DOCUMENT_TYPE_DOCUMENT = 1;
}
