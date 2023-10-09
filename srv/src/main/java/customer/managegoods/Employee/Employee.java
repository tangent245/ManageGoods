package customer.managegoods.Employee;
import javax.persistence.*;


@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Username")
    private String username;

    @Column(name = "Password")
    private String password;

    public String getUserName() {
        return username;
      }

      public void setUserName(String username) {
        this.username = username;
      }

        public String getPassword() {
        return password;
      }

      public void setPassword(String password) {
        this.password = password;
      }
      


    
    // Constructors, getters, and setters

   
   
}