package ltts.com.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ltts.com.exception.ResourceNotFoundException;
import ltts.com.model.Invoice;
import ltts.com.model.Products;
import ltts.com.model.Staff;
import ltts.com.service.InvoiceService;
import ltts.com.service.ProductsService;
import ltts.com.service.StaffService;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/")
public class AppController {
	
	@Autowired
	private StaffService staffService;
	
	@Autowired
	private InvoiceService invoiceService;
	
	@Autowired
	private ProductsService productsService;
	
	@PostMapping("/login")
	public String login(@RequestBody Staff staff) {
		return staffService.login(staff);
	}
	
	@PostMapping("/bill")
	public ResponseEntity<Object> createBill(@RequestBody Invoice invoice) {
		double amount=0.0;
		Date date;
		if(invoice.getDop()==null) {
		 date=new Date();
		invoice.setDop(date.from(date.toInstant()));
	    }
		String list=invoice.getItemList();
		String[] p =list.split(";");
		for(int i=0;i<p.length;i++) {
			String temp=p[i];
			String[] a=temp.split(":");
			
				int pid=Integer.parseInt(a[0]);
				int quantity = Integer.parseInt(a[1]);
				double sprice=Double.parseDouble(a[2]);
				Products product=productsService.getProduct(pid);
				amount=amount+product.getSprice()*quantity;
				if(product.getQuantity()<quantity) {
					return new ResponseEntity<Object>("No",HttpStatus.NOT_FOUND);
				}
				else {
					productsService.updateQuantity(pid,product.getQuantity()-quantity);
				}
		}
		if(invoiceService.addInvoice(invoice)) {
			return new ResponseEntity<Object>("Yes",HttpStatus.OK);
		}
		else {
			return  new ResponseEntity<Object>("No",HttpStatus.NOT_FOUND);
		}
		
	}
	
	@GetMapping("/createbill")
	public List<Products> findProduct(){
		return productsService.findProducts();
	}
	
	@PostMapping("/addstaff")
	public boolean addStaff(@RequestBody Staff staff) {
		if(staffService.addStaff(staff)) {
			return true;
		}
		else {
			return false;
		}
	}
	
	@PostMapping("/addproduct")
	public boolean addProduct(@RequestBody Products p) {
		if(productsService.addProduct(p)) {
			return true;
		}
		else {
			return false;
		}
	}
	
	@PutMapping("/updateproduct")
	public int updateProduct(@RequestBody Products product) throws ResourceNotFoundException {
		int nor=productsService.updateProduct(product);
		if(nor>=0) {
			return nor;
		}
		throw new ResourceNotFoundException("There no product");
	}
	
	@GetMapping("/adminhome")
	public String adminHome() {
		return productsService.adminHome();
	}
	
	@GetMapping("/getproduct/{pid}")
	public Products findProduct(@PathVariable("pid")int pid){
		return productsService.getProduct(pid);
	}
	
	@PutMapping("/updatequantity")
	public boolean updateStocks(@RequestBody Products p) {
		Products product =productsService.getProduct(p.getPid());
		int nor = productsService.updateQuantity(p.getPid(),product.getQuantity()+p.getQuantity());
		if(nor>0) {
			return true;
		}
		else {
			return false;
		}
	}
	
	@GetMapping("/find/{pname}")
	public List<Products> find(@PathVariable("pname")String pname){
		return productsService.findProductContaining(pname);
	}
	
	
	
	
	
}
