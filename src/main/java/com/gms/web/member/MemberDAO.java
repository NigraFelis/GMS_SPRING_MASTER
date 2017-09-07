package com.gms.web.member;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.command.CommandDTO;
/*import com.gms.web.domain.MemberBean;
import com.gms.web.domain.StudentBean;*/

@Repository
public interface MemberDAO {
	public String insert(Map<?,?>map);
	public List<?> selectAll(CommandDTO cmd);
	public List<?> selectByName(CommandDTO cmd);
	public StudentDTO selectById(CommandDTO cmd);
	public String count(CommandDTO cmd);
	public String update(MemberDTO bean);
	public String delete(CommandDTO cmd);
	public MemberDTO login(CommandDTO cmd);
}
