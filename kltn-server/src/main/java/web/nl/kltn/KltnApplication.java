package web.nl.kltn;

import org.mybatis.spring.annotation.MapperScan;
import org.mybatis.spring.annotation.MapperScans;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScans({
	@MapperScan("web.nl.kltn.mapper.generator"), 
	@MapperScan("web.nl.kltn.mapper")
})
public class KltnApplication {

	public static void main(String[] args) {
		SpringApplication.run(KltnApplication.class, args);
	}

}
