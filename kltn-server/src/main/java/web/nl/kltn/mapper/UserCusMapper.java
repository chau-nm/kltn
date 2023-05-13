package web.nl.kltn.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import web.nl.kltn.model.generator.User;

@Mapper
public interface UserCusMapper {

    public List<User> findAll();

}
