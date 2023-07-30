package web.nl.kltn.service.impl;

import org.deeplearning4j.models.embeddings.learning.impl.sequence.DM;
import org.deeplearning4j.models.embeddings.loader.WordVectorSerializer;
import org.deeplearning4j.models.paragraphvectors.ParagraphVectors;
import org.deeplearning4j.models.word2vec.VocabWord;
import org.deeplearning4j.models.word2vec.wordstore.inmemory.AbstractCache;
import org.deeplearning4j.text.documentiterator.LabelsSource;
import org.deeplearning4j.text.sentenceiterator.LineSentenceIterator;
import org.deeplearning4j.text.sentenceiterator.SentenceIterator;
import org.deeplearning4j.text.tokenization.tokenizer.preprocessor.CommonPreprocessor;
import org.deeplearning4j.text.tokenization.tokenizerfactory.DefaultTokenizerFactory;
import org.deeplearning4j.text.tokenization.tokenizerfactory.TokenizerFactory;
import org.nd4j.linalg.api.ndarray.INDArray;
import org.nd4j.linalg.factory.Nd4j;
import org.nd4j.linalg.ops.transforms.Transforms;
import org.springframework.stereotype.Service;
import web.nl.kltn.common.Constant;
import web.nl.kltn.service.ParagraphVectorsService;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ParagraphVectorsServiceImpl implements ParagraphVectorsService {
    private ParagraphVectors p2v;

    public ParagraphVectorsServiceImpl() {
        this.p2v = create();
    }

    @Override
    public ParagraphVectors create() {
        p2v = new ParagraphVectors();
        String modelDocPath = Constant.modelDocPath;
        try {
            p2v = WordVectorSerializer.readParagraphVectors(modelDocPath);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        TokenizerFactory token = new DefaultTokenizerFactory();
        p2v.setTokenizerFactory(token);
        return p2v;
    }

    @Override
    public void trainNewFile(int docId, File inputTxt, String label) throws  IOException {
        SentenceIterator iter = new LineSentenceIterator(inputTxt);

        TokenizerFactory token = new DefaultTokenizerFactory();
        token.setTokenPreProcessor(String::toLowerCase);
        token.setTokenPreProcessor(new CommonPreprocessor());
        ParagraphVectors existVec = WordVectorSerializer.readParagraphVectors(Constant.modelDocPath);
        AbstractCache<VocabWord> cache = new AbstractCache<VocabWord>();

        LabelsSource source = new LabelsSource(label);
        System.out.println(label);
        ParagraphVectors vec = new ParagraphVectors.Builder()
                // .useExistingWordVectors(existVec)
                .minWordFrequency(1).iterations(100).epochs(20).layerSize(300).learningRate(0.025).labelsSource(source)
                .windowSize(5).iterate(iter).trainWordVectors(false).vocabCache(existVec.getVocab()).sequenceLearningAlgorithm(DM.class.getCanonicalName())
                .tokenizerFactory(token).vocabCache(cache).sampling(0).build();
        try {
            vec.fit();
        } catch (Exception e) {
            return;
        }
        WordVectorSerializer.writeParagraphVectors(vec, new File(Constant.modelDocPath));
    }

    @Override
    public void createModel(File inputTxt, String labelsource) {

        SentenceIterator iter = new LineSentenceIterator(inputTxt);

        TokenizerFactory token = new DefaultTokenizerFactory();
        token.setTokenPreProcessor(String::toLowerCase);
        token.setTokenPreProcessor(new CommonPreprocessor());
        AbstractCache<VocabWord> cache = new AbstractCache<VocabWord>();

        LabelsSource source = new LabelsSource(labelsource);

        ParagraphVectors vec = new ParagraphVectors.Builder().minWordFrequency(3).iterations(5).epochs(50)
                .layerSize(300).learningRate(0.025).labelsSource(source).windowSize(5).iterate(iter).sequenceLearningAlgorithm(DM.class.getCanonicalName())
                .trainWordVectors(false).vocabCache(cache).tokenizerFactory(token).sampling(0).build();

        vec.fit();

        WordVectorSerializer.writeParagraphVectors(vec, new File(Constant.modelDocPath));
    }


    @Override
    public double similarityTwoRawText(String text1, String text2) {
        if (text1.equals(text2)) {
            return 1.0;
        }
        List<String> tokens1 = p2v.getTokenizerFactory().create(text1).getTokens();
        List<String> tokens2 = p2v.getTokenizerFactory().create(text2).getTokens();
        INDArray docmean1 = meanArrayOf(tokens1);
        INDArray docmean2 = meanArrayOf(tokens2);

        double consineSimi = cosine(docmean1, docmean2);
        double lengthInf = (tokens1.size() < tokens2.size()) ? ((double) tokens1.size() / tokens2.size()) : ((double) tokens2.size() / tokens1.size());

        return (consineSimi * 2 + lengthInf) / 3;
    }

    public double cosine(INDArray arr1, INDArray arr2) {
        double cosineSim = Transforms.cosineSim(arr1, arr2);
        if (cosineSim <= 1) {
            return cosineSim;
        } else {
            return 1 - (cosineSim - 1);
        }
    }
    @Override
    public INDArray meanArrayOf(List<String> tokens) {
        List<VocabWord> document = new ArrayList<VocabWord>();
        for (String token : tokens) {
            if (p2v.getVocab().containsWord(token)) {
                document.add(p2v.getVocab().wordFor(token));
            } else {
                document.add(VocabWord.none());
            }
        }
        INDArray arr1 = Nd4j.create(document.size(), 300);
        for (int i = 0; i < document.size(); i++) {
            INDArray wordfor = p2v.getWordVectorMatrixNormalized(document.get(i).getWord());

            arr1.putRow(i, wordfor);
        }

        INDArray docMean = arr1.mean(0);
        return docMean.div(tokens.size());
    }



    public static void main(String[] args) throws IOException {
        ParagraphVectorsService p2v = new ParagraphVectorsServiceImpl();
//        p2v.createModel(new File(Constant.dataset),"new model");
    }
}
