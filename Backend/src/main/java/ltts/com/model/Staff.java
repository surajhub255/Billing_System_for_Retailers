 package ltts.com.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Staff {
	
	@Id
	private int id;
	private String name;
	private String email;
	private String pass;
	private String type;
	private String status;
	
	public Staff(int id, String name, String email, String pass, String type, String status) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.pass = pass;
		this.type = type;
		this.status = status;
	}
	
	public Staff() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Staff [id=" + id + ", name=" + name + ", email=" + email + ", pass=" + pass + ", type=" + type
				+ ", status=" + status + "]";
	}
	
	
	
	
}
