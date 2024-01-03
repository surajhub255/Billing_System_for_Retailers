package ltts.com.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import ltts.com.jpa.MyJPAInvoiceRepository;
import ltts.com.model.Invoice;

@Repository
public class InvoiceDaoImpl implements InvoiceDAO {
	
	@Autowired
	private MyJPAInvoiceRepository myRepo;
	
	public boolean addInvoice(Invoice invoice) {
		
		if(myRepo.save(invoice)!=null) {
			return true;
		}
		else {
			return false;
		}
	}
}
