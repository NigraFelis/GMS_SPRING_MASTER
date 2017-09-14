package com.gms.web.member;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.common.HomeController;
import com.gms.web.complex.PathFactory;
import com.gms.web.grade.MajorDTO;
import com.gms.web.proxy.BlockHandler;
import com.gms.web.proxy.PageHandler;
import com.gms.web.proxy.PageProxy;
@Controller
@SessionAttributes("student")
@RequestMapping({"/member","/student"})
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired MemberService service;
	@Autowired CommandDTO cmd;
	@Autowired PageProxy pxy;
	@Autowired MemberDTO member;
	@Autowired MajorDTO major;
	
	
	@RequestMapping(value="add",method=RequestMethod.POST)
	public String addStudent(
			@ModelAttribute MemberDTO member,
			@RequestParam("subject") List<String> list) {
		logger.info("memberJoin :","진입");
		
		logger.info("등록 ID : {}",member.getId());
		logger.info("등록 이름 : {}",member.getName());
		logger.info("등록 비번 : {}",member.getPassword());
		System.out.println("등록과목:"+list);
		logger.info("등록 과목 : {}",list);
		
		Map<String, Object>paramMap=new HashMap<>();
		paramMap.put("member",member);
		List<MajorDTO> paramList = new ArrayList<>();
		MajorDTO mj = null;
		for(String m:list) {
			int random = (int) (Math.random()*9999)+1000;
			mj=new MajorDTO();
			mj.setId(member.getId());
			mj.setMajorId(String.valueOf(random));
			mj.setSubjId(m);
			mj.setTitle(m);
			paramList.add(mj);
		}
		
		paramMap.put("list", paramList);
		service.add(paramMap);
		return"redirect:/member/member_list/1";
	}
	

	@RequestMapping("/member_list/{pno}")
	@SuppressWarnings("unchecked")
	public String memberList(Model model, @PathVariable int pno) {
		logger.info("memberList{}","진입");
		pxy.setPageSize(5);
		pxy.setBlockSize(5);
		pxy.setPageNumber(pno);
		int count=Integer.parseInt(service.count());
		pxy.setTheNumberOfRows(count);
		int[]result=new int[6];
		int theNumberOfPage=0,
			startPage=0,
			endPage=0;
		
		theNumberOfPage = (pxy.getTheNumberOfRows() %pxy.getBlockSize()) == 0 ?pxy.getTheNumberOfRows() / pxy.getBlockSize() : pxy.getTheNumberOfRows() / pxy.getBlockSize() +1;
		startPage = pxy.getPageNumber()-((pxy.getPageNumber() - 1) % pxy.getBlockSize());
		endPage = (startPage + pxy.getBlockSize() -1 <= theNumberOfPage) ?
				startPage + pxy.getBlockSize() -1 : theNumberOfPage;
		result[0] = pxy.getPageNumber();
		result[1] = theNumberOfPage;
		result[2] = startPage;
		result[3] = endPage;
		result[4] = (startPage-(theNumberOfPage/pxy.getBlockSize())>0)?1:0;
		result[5] = startPage+pxy.getBlockSize();
		if(pxy.getPageNumber()<= pxy.getTheNumberOfRows()/ pxy.getPageSize() +1) {
			if(pxy.getPageNumber() == 1) {
				cmd.setStartRow("1");
				cmd.setEndRow(String.valueOf(pxy.getPageSize()));
				
			}else {
				cmd.setStartRow(String.valueOf((pxy.getPageNumber() - 1) * pxy.getPageSize() + 1));
				cmd.setEndRow(String.valueOf(pxy.getPageNumber() * pxy.getPageSize()));
			}
		}
		
		List<StudentDTO> list=(List<StudentDTO>) service.list(cmd);
		pxy.execute(model, result, list);
		System.out.println("리스트 결과"+list);
		model.addAttribute("count", count);
		return"auth:member/member_list.tiles";
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping("/search/{search}")
	public String search(@PathVariable String search, Model model) {
		logger.info("search :","진입");
		cmd.setSearch(search);
		List<StudentDTO> list = (List<StudentDTO>) service.findByName(cmd);
		model.addAttribute("list",list);
		model.addAttribute("count",list.size());
		
		//List<StudentDTO> list=(List<StudentDTO>) service.findById(cmd);
		//pxy.execute(model, result, list);
		return "auth:member/member_list.tiles";
	}
	@RequestMapping("/delete/{id}")
	public String memberDelete(@PathVariable String id) {
		logger.info("memberDelete :","진입");
		System.out.println("삭제할 id: "+id);
		cmd.setSearch(id);
		service.remove(cmd);
		return"redirect:/member/member_list/1";
	}
	@RequestMapping("/detail/{id}")
	public String memberDetail(@PathVariable String id,Model model) {
		logger.info("memberDetail :","진입");
		System.out.println("조회할 id: "+id);
		cmd.setSearch(id);
		model.addAttribute("student" , service.findById(cmd));
		return"auth:member/member_detail.tiles";
	}
	@RequestMapping(value="/update",method=RequestMethod.POST)
	public String updateStudent(@ModelAttribute MemberDTO stu) {
		logger.info("memberUpdate :","진입");
		service.modify(stu);
		System.out.println("id :: " 
				+stu.getId()) ;
		return "redirect:/member/detail/"+stu.getId();
	}
	

}
