package ltts.com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ltts.com.dao.StaffDAO;
import ltts.com.model.Staff;

@Service
public class StaffServiceImpl implements StaffService {
	
	@Autowired
	private StaffDAO staffDao;
	
	public String login(Staff staff) {
		return staffDao.login(staff);
	}
	
	public boolean addStaff(Staff staff) {
		return staffDao.addStaff(staff);
	}
}
