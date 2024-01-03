package ltts.com.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;
import ltts.com.jpa.MyJPAProductRepo;
import ltts.com.model.Products;

@Repository
public class ProductsDaoImpl implements ProductsDAO {
	
	@Autowired
	private MyJPAProductRepo myRepo;
	
	public List<Products> findProducts() {
		return myRepo.findProducts();
	}
	
	@Transactional
	public int updateQuantity(int pid,int quantity){
		return myRepo.updateQuantity(pid,quantity);
	}
	
	public boolean addProduct(Products p) {
		if(myRepo.save(p)!=null) {
			return true;
		}
		else {
			return false;
		}
	}
	
	public Products getProduct(int pid) {
		Optional<Products> p=myRepo.findById(pid);
		return p.get();
	}
	
	@Transactional
	public int updateProduct(Products product) {
		return myRepo.updateProduct(product.getPid(),product.getSprice());
	}
	
	public String adminHome() {
		List<Products> al=myRepo.adminHome();
		String result = "";
		for(int i=0;i<al.size();i++) {
			result=result + al.get(i).getPid() + ",";
		}
		
		return "Products with Product Id " + result + " are having quantity less than 30.";
	}
	
	public List<Products> findProductContaining(String pname){
		return myRepo.findByPnameContaining(pname);
	}
	
}
