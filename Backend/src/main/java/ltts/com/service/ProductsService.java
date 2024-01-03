package ltts.com.service;

import java.util.List;

import ltts.com.model.Products;

public interface ProductsService {
	
	public List<Products> findProducts();
	
	public int updateQuantity(int pid,int quantity);
	
	public boolean addProduct(Products p);
	
	public Products getProduct(int pid);
	
	public int updateProduct(Products product);
	
	public String adminHome();
	
	public List<Products> findProductContaining(String pname);
}
