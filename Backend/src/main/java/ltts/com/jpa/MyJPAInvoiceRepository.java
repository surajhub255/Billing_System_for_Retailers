package ltts.com.jpa;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ltts.com.model.Invoice;

@Repository
public interface MyJPAInvoiceRepository extends CrudRepository<Invoice,Integer> {
	
}
