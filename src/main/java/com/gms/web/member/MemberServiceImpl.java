package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.GradeDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.grade.SubjectDTO;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;

@Service

public class MemberServiceImpl implements MemberService{
	@Autowired MemberMapper mapper;
	@Autowired MemberService service;
	@Autowired MajorDTO major;
	@Autowired GradeMapper gMaper;
	@Autowired CommandDTO cdm;
	@Autowired MemberDTO member;
	
	/*@Override
	public int add(Map<String,Object> map) {
		System.out.println("member service 진입");
		MemberDTO m=(MemberDTO)map.get("member");
		System.out.println("넘어온 회원 정보:"+m.toString());
		@SuppressWarnings("unchecked")
		List<MajorDTO>list=(List<MajorDTO>)map.get("major");
		System.out.println("넘어온 수강과목:"+list);
		int rs=0;
		System.out.println("서비스 RS :"+rs);
		return rs;
	}*/
	@Override @Transactional
	public int add(Map<?,?>map) {
		System.out.println("member service 진입");
		member=(MemberDTO) map.get("member");
		@SuppressWarnings("unchecked")
		List<MajorDTO> list=(List<MajorDTO>)map.get("list");
		System.out.println("ID #####"+member.getId());
		System.out.println("LIST ######"+list);
		mapper.insert(member);
		gMaper.insertMajor(list);
		int rs = 0;
		
		
		return rs;
	}
	@Override
	public List<?> list(CommandDTO cmd) {
		
		return mapper.selectAll(cmd);
	}
	@Override
	public List<?> findByName(CommandDTO cmd) {
		System.out.println("findByName("+cmd.getSearch()+")");
		return mapper.selectByName(cmd);
	}

	@Override
	public StudentDTO findById(CommandDTO cmd) {
		return mapper.selectById(cmd);
	}
	
	@Override
	public String count() {
		/*Logger.info("count is {}","entered");*/
		String count = mapper.count();
		/*Logger.info("count is {}".count)*/
		return count;
	}

	@Override
	public int modify(MemberDTO bean) {		
		return mapper.update(bean);
	}

	@Override
	public int remove(CommandDTO cmd) {
		return mapper.delete(cmd);
	}
	@Override
	public Map<String,Object> login(CommandDTO cmd) {
		Map<String,Object> map=new HashMap<>();
		member=mapper.login(cmd);
		String result ="";
		String page="";
		
		if(member!=null){
			if(cmd.getColumn().equals(member.getPassword())) {
				result="success";
				page="auth:common/main.tiles";
			}else {
				result="비밀번호가 틀렸습니다";
				page="public:common/login.tiles";
			}
		}else {
			result="아이디가 없습니다";
			page="public:common/join.tiles";
		}
		
		map.put("result", result);
		map.put("page", page);
		map.put("user", member);
		return map;
		
	}
}











