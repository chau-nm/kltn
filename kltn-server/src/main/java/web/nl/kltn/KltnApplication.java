package web.nl.kltn;

import org.mybatis.spring.annotation.MapperScan;
import org.mybatis.spring.annotation.MapperScans;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.context.annotation.SessionScope;

@SpringBootApplication
@MapperScans({
	@MapperScan("web.nl.kltn.mapper.generator"), 
	@MapperScan("web.nl.kltn.mapper")
})
@CrossOrigin(origins = "http://localhost:5173")
public class KltnApplication {

	public static void main(String[] args) {
		SpringApplication.run(KltnApplication.class, args);
	}

}
