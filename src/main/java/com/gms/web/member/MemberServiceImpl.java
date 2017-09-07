package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.gms.web.command.CommandDTO;
/*import com.gms.web.dao.MemberDAO;
import com.gms.web.dao.MemberDAOImpl;
import com.gms.web.domain.MajorBean;
import com.gms.web.domain.MemberBean;
import com.gms.web.domain.StudentBean;*/
import com.gms.web.grade.MajorDTO;

@Service
public class MemberServiceImpl implements MemberService{
	public static MemberServiceImpl getInstance() {
		return new MemberServiceImpl();
	}
	private MemberServiceImpl(){}
	@Override
	public String add(Map<String,Object> map) {
		System.out.println("member service 진입");
		MemberDTO m=(MemberDTO)map.get("member");
		System.out.println("넘어온 회원 정보:"+m.toString());
		@SuppressWarnings("unchecked")
		List<MajorDTO>list=(List<MajorDTO>)map.get("major");
		System.out.println("넘어온 수강과목:"+list);
		String rs=null;
		System.out.println("서비스 RS :"+rs);
		return rs;
	}
	@Override
	public List<?> list(CommandDTO cmd) {
		return null;
	}
	@Override
	public List<?> findByName(CommandDTO cmd) {
		System.out.println("findByName("+cmd.getSearch()+")");
		return null;
	}

	@Override
	public StudentDTO findById(CommandDTO cmd) {
		return null;
	}

	@Override
	public String count(CommandDTO cmd) {
		
		return null;
	}

	@Override
	public String modify(MemberDTO bean) {		
		String msg="";
		return msg;
	}

	@Override
	public String remove(CommandDTO cmd) {
		String msg="";
		
		return msg;
	}
	@Override
	public Map<String,Object> login(MemberDTO bean) {
		Map<String,Object> map=new HashMap<>();
		CommandDTO cmd=new CommandDTO();
		cmd.setSearch(bean.getId());
		MemberDTO m=null;
		String page=
		 (m!=null)?
				(bean.getPassword().equals(m.getPassword()))?
						"main":"login_fail":"join";
		map.put("page", page);
		map.put("user", m);
		return map;
		
	}
}











