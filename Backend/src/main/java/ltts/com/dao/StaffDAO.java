package ltts.com.dao;

import ltts.com.model.Staff;

public interface StaffDAO {
	
	public String login(Staff staff);
	
	public boolean addStaff(Staff staff);
	
	public String hashPassword(String plainTextPassword);
	
	public boolean checkPass(String plainPassword, String hashedPassword);
}
