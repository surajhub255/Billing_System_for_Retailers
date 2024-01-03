package ltts.com.jpa;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ltts.com.model.Products;

@Repository
public interface MyJPAProductRepo extends CrudRepository<Products,Integer> {
	@Modifying
	@Query("update Products p set p.quantity=:quantity where p.pid=:pid")
	int updateQuantity(@Param("pid")int pid,@Param("quantity")int quantity);
	
	@Modifying
	@Query("from Products")
	List<Products> findProducts();
	
	@Modifying
	@Query("update Products p set p.sprice=:sprice where p.pid=:pid")
	int updateProduct(@Param("pid")int pid,@Param("sprice")double sprice);
	
	@Modifying
	@Query("from Products p where p.quantity<30")
	List<Products> adminHome();
	
	@Modifying
	List<Products> findByPnameContaining(String pname);
}
