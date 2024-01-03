package ltts.com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ltts.com.dao.InvoiceDAO;
import ltts.com.model.Invoice;

@Service
public class InvoiceServiceImpl implements InvoiceService {
	
	@Autowired
	private InvoiceDAO invoiceDao;
	
	public boolean addInvoice(Invoice invoice) {
		return invoiceDao.addInvoice(invoice);
	}
}
