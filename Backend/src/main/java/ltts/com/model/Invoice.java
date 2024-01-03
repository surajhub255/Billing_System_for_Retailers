package ltts.com.model;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@SequenceGenerator(name = "id", sequenceName="id", initialValue = 1)
public class Invoice {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "id")
	private int id;
	@Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "dop")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date dop;
	@Column(name="Number")
	private String email;
	private String itemList;
	private double amount;
	
	public Invoice(int id, Date dop, String email, String itemList, double amount) {
		super();
		this.id = id;
		this.dop = dop;
		this.email = email;
		this.itemList = itemList;
		this.amount = amount;
	}
	
	public Invoice() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getDop() {
		return dop;
	}
	public void setDop(Date dop) {
		this.dop = dop;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getItemList() {
		return itemList;
	}
	public void setItemList(String itemList) {
		this.itemList = itemList;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	@Override
	public String toString() {
		return "Invoice [id=" + id + ", dop=" + dop + ", email=" + email + ", itemList=" + itemList + ", amount="
				+ amount + "]";
	}
	
	
	
}
