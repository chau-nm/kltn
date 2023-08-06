package web.nl.kltn.model.dto;

import web.nl.kltn.model.generator.RoleUser;

public class RoleUserDTO extends RoleUser {
    private String roleName;

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }
}
