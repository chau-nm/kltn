package web.nl.kltn.mapper;

import org.apache.ibatis.annotations.Mapper;
import web.nl.kltn.model.dto.RoleUserDTO;
import web.nl.kltn.model.generator.RoleUser;

import java.util.List;

@Mapper
public interface RoleUserCusMapper {
    public List<String> findRolesByUserId(String idUser);
    public Integer findIdRoleByName(String roleName);
    public void deleteByIdUser(String roleName);
}
