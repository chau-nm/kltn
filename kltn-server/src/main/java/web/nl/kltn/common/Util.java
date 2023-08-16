package web.nl.kltn.common;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.security.SecureRandom;
import java.util.List;
import java.util.Random;

public class Util {
    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final Random random = new SecureRandom();

    public static String generateRandomString(int length) {
        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            int randomIndex = random.nextInt(CHARACTERS.length());
            char randomChar = CHARACTERS.charAt(randomIndex);
            sb.append(randomChar);
        }
        return sb.toString();
    }

    public static void readColumnAndWriteToFile(String csvFilePath, int columnIndex, String outputFilePath)
            throws IOException, CsvException {
        CSVReader csvReader = new CSVReader(new FileReader(csvFilePath));
        List<String[]> lines = csvReader.readAll();

        FileWriter writer = new FileWriter(Constant.datasetPre);

        for (String[] line : lines) {
            if (columnIndex < line.length) {
                String columnValue = line[columnIndex];
                writer.write(columnValue + "\n"); // Write the column value to the output file
            }
        }

        writer.close();
        csvReader.close();
    }

    public static String processTitle(String title)
            throws IOException {
        ProcessData pd = new ProcessData();
        return pd.processTitle(title);
    }

    public static void main(String[] args) throws IOException, CsvException {
        String csvPath="C:\\Users\\trana\\OneDrive\\Desktop\\archive\\dataset.csv";
        readColumnAndWriteToFile(csvPath,2,Constant.datasetPre);
        ProcessData pd = new ProcessData();
        pd.processData();
    }

}