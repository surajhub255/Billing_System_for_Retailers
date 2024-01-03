package ltts.com.jpa;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ltts.com.model.Staff;

@Repository
public interface MyJPAStaffRepository extends CrudRepository<Staff,Integer> {
	
}
