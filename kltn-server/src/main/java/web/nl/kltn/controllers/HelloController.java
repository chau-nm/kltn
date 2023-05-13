package web.nl.kltn.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import web.nl.kltn.mapper.UserCusMapper;
import web.nl.kltn.model.generator.User;

@RestController
public class HelloController {
	
	@Autowired
	private UserCusMapper userCusMapper;
    
    @GetMapping("hello")
    public String sayHello(){
        return "Hello";
    }

    @GetMapping("all")
    public List<User> getAll(){
    	return userCusMapper.findAll();
    }
    
}
