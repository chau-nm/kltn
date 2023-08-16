package web.nl.kltn.common;

import vn.pipeline.*;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ProcessData {
    // Define a list to store Vietnamese stop words
    private static List<String> VIETNAMESE_STOP_WORDS = new ArrayList<>();

    public void processData() throws IOException {
        // Initialize VnCoreNLP pipeline with only the "wseg" annotator
        String[] annotators = {"wseg"};
        VnCoreNLP pipeline = new VnCoreNLP(annotators);

        // Load Vietnamese stop words from file
        loadVietnameseStopWords(Constant.stopWord);

        // Read Vietnamese text from file
        String filePath = Constant.datasetPre;
        String vietnameseText = readVietnameseTextFromFile(filePath);

        // Clean and remove Vietnamese stop words and numbers from the Vietnamese text using the cleanAndRemoveStopWords method
        String cleanedText = cleanAndRemoveStopWords(vietnameseText);
        System.out.println(cleanedText);
        // Annotate the cleaned Vietnamese text using VnCoreNLP
        Annotation annotation = new Annotation(cleanedText);
        pipeline.annotate(annotation);

        // Get the list of tokens from the annotation
        List<String> tokens = annotation.getWords()
                .stream()
                .map(Word::getForm)  // Extract word forms
                .filter(word -> !word.isEmpty())  // Remove empty words
                .filter(token -> !token.isEmpty())  // Remove empty tokens after cleaning
                .collect(Collectors.toList());

        // Write the new Vietnamese tokens to a new file
        String outputFilePath = Constant.dataset;
        writeTokensToFile(tokens, outputFilePath);
    }

    public String processTitle(String title) throws IOException {
        // Initialize VnCoreNLP pipeline with only the "wseg" annotator
        String[] annotators = {"wseg"};
        VnCoreNLP pipeline = new VnCoreNLP(annotators);

        // Load Vietnamese stop words from file
        loadVietnameseStopWords(Constant.stopWord);

        String vietnameseText = title;

        // Clean and remove Vietnamese stop words and numbers from the Vietnamese text using the cleanAndRemoveStopWords method
        String cleanedText = cleanAndRemoveStopWords(vietnameseText);
//        System.out.println(cleanedText);
        // Annotate the cleaned Vietnamese text using VnCoreNLP
        Annotation annotation = new Annotation(cleanedText);
        pipeline.annotate(annotation);

        // Get the list of tokens from the annotation
        List<String> tokens = annotation.getWords()
                .stream()
                .map(Word::getForm)  // Extract word forms
                .filter(word -> !word.isEmpty())  // Remove empty words
                .filter(token -> !token.isEmpty())  // Remove empty tokens after cleaning
                .collect(Collectors.toList());
        String result = "";
        for (String token : tokens) {
            result += token + " ";
        }
        return result;
    }

    // Helper method to read Vietnamese text from a file
    private static String readVietnameseTextFromFile(String filePath) {
        StringBuilder sb = new StringBuilder();
        try (Stream<String> stream = Files.lines(new File(filePath).toPath(), StandardCharsets.UTF_8)) {
            stream.forEach(line -> sb.append(line).append("\n"));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return sb.toString();
    }

    // Helper method to load Vietnamese stop words from a file
    private static void loadVietnameseStopWords(String filePath) {
        try (Stream<String> stream = Files.lines(new File(filePath).toPath(), StandardCharsets.UTF_8)) {
            VIETNAMESE_STOP_WORDS = stream.collect(Collectors.toList());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Helper method to clean and remove Vietnamese stop words and numbers from a token
    private static String cleanAndRemoveStopWords(String text) {
        // Use regular expression to remove unwanted characters, but keep underscores
        String cleanedText = text.replaceAll("[^\\p{L}\\d\\s_]+", "");

        // Remove Vietnamese stop words and numbers
        return Stream.of(cleanedText.split("\\s+"))
                .filter(word -> !VIETNAMESE_STOP_WORDS.contains(word.toLowerCase()) && !word.matches("\\d+"))
                .collect(Collectors.joining(" "));
    }

    // Helper method to write tokens to a file
    private static void writeTokensToFile(List<String> tokens, String filePath) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filePath))) {
            // Write tokens preserving spaces
            for (String token : tokens) {
                writer.write(token);
                writer.write(" ");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) throws IOException {
        ProcessData pd = new ProcessData();
        pd.processData();
    }

}