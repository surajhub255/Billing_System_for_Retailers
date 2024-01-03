package ltts.com.dao;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import ltts.com.jpa.MyJPAStaffRepository;
import ltts.com.model.Staff;

@Repository
public class StaffDaoImpl implements StaffDAO {
	
	@Autowired
	private MyJPAStaffRepository myRepo;
	
	public String login(Staff staff) {
		Optional<Staff> a=myRepo.findById(staff.getId());
		if(a.isPresent()) {
			Staff b=(Staff)a.get();
			
			if(checkPass(staff.getPass(),b.getPass()) ) {
				
				return b.getType();
			}
			else {
				return "No";
			}
		}
		else {
			return "No";
		}
	}
	
	public boolean addStaff(Staff staff) {
		String encrptedPassword=hashPassword(staff.getPass());
		staff.setPass(encrptedPassword);
		if(myRepo.save(staff)!=null) {
			return true;
		}
		else {
			return false;
		}
	}
	
	@Override
	public String hashPassword(String plainTextPassword){
		return BCrypt.hashpw(plainTextPassword, BCrypt.gensalt());
	}
	

	@Override
	public boolean checkPass(String plainPassword, String hashedPassword) {
		return BCrypt.checkpw(plainPassword, hashedPassword);
			
	}
}
