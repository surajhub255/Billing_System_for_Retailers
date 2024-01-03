package ltts.com.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Products {
	
	@Id
	private int pid;
	private String pname;
	private String catg;
	private double cprice;
	private double sprice;
	private int quantity;
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getCatg() {
		return catg;
	}
	public void setCatg(String catg) {
		this.catg = catg;
	}
	public double getCprice() {
		return cprice;
	}
	public void setCprice(double cprice) {
		this.cprice = cprice;
	}
	public double getSprice() {
		return sprice;
	}
	public void setSprice(double sprice) {
		this.sprice = sprice;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public Products(int pid, String pname, String catg, double cprice, double sprice, int quantity) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.catg = catg;
		this.cprice = cprice;
		this.sprice = sprice;
		this.quantity = quantity;
	}
	
	public Products() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Products [pid=" + pid + ", pname=" + pname + ", catg=" + catg + ", cprice=" + cprice + ", sprice="
				+ sprice + ", quantity=" + quantity + "]";
	}
	
}
