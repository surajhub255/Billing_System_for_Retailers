package ltts.com.model;

public class Purchase {
	
	private int id;
	private int quantity;
	private double sprice;
	
	public Purchase(int id, int quantity, double sprice) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.sprice = sprice;
	}
	public Purchase() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public double getSprice() {
		return sprice;
	}
	public void setSprice(double sprice) {
		this.sprice = sprice;
	}
	@Override
	public String toString() {
		return "Purchase [id=" + id + ", quantity=" + quantity + ", sprice=" + sprice + "]";
	}
	
}
