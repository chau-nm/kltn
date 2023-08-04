package web.nl.kltn.service;

import org.deeplearning4j.models.paragraphvectors.ParagraphVectors;
import org.nd4j.linalg.api.ndarray.INDArray;

import java.io.File;
import java.io.IOException;
import java.util.List;

public interface ParagraphVectorsService {
    ParagraphVectors create();
    double similarityTwoRawText(String text1, String text2);
    INDArray meanArrayOf(List<String> tokens);
    void trainNewFile(int docId, File inputTxt, String label) throws IOException;

    void createModel(File inputTxt, String labelsource);
}
