package ltts.com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ltts.com.dao.ProductsDAO;
import ltts.com.model.Products;

@Service
public class ProductsServiceImpl implements ProductsService {
	
	@Autowired
	private ProductsDAO productDao;
	
	public List<Products> findProducts() {
		return productDao.findProducts();
	}
	
	public int updateQuantity(int pid,int quantity) {
		return productDao.updateQuantity(pid,quantity);
	}
	
	public boolean addProduct(Products p) {
		return productDao.addProduct(p);
	}
	
	public Products getProduct(int pid) {
		return productDao.getProduct(pid);
	}
	
	public int updateProduct(Products product) {
		return productDao.updateProduct(product);
	}
	
	public String adminHome() {
		return productDao.adminHome();
	}
	
	public List<Products> findProductContaining(String pname){
		return productDao.findProductContaining(pname);
	}
}
