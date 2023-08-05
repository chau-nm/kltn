package web.nl.kltn.model;

public class UserSearchCondition {
    private String username;
    private String name;
    private String role;
    private int id;
    private String studentClass;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getStudentClass() {
        return studentClass;
    }

    public void setStudentClass(String studentClass) {
        this.studentClass = studentClass;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "UserSearchConditionModel{" +
                "name='" + name + '\'' +
                ", role='" + role + '\'' +
                ", id=" + id +
                '}';
    }
}
