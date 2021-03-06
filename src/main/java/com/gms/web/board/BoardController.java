package com.gms.web.board;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.aspectj.weaver.MemberUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.command.Command;
import com.gms.web.command.CommandDTO;
import com.gms.web.command.ResultMap;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;
import com.gms.web.service.IDeleteService;
import com.gms.web.service.IGetService;
import com.gms.web.service.IListService;
import com.gms.web.service.IPutService;


@RestController
public class BoardController {
   private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
   @Autowired BoardMapper boardMapper;
   @Autowired GradeMapper gradeMapper;
   @Autowired MemberMapper memberMapper;
   @Autowired CommandDTO cmd;
   @RequestMapping("/list/{cate}")
   public @ResponseBody Map<?, ?> deleteboard(@PathVariable String cate) {
      logger.info("board ContList{} ","진입");
      Map<String, Object>map = new HashMap<>();
      IListService listService=null;
      IGetService countService=null;
      System.out.println("board/list 에 들어옴 !!");
      switch (cate) {
		case "board":
			//cmd=null;
			
			listService=(x)-> {
				return boardMapper.selectList(cmd);
			};
			System.out.println(listService.toString());
			countService=(x)->{
				return boardMapper.count(cmd);
			};
			System.out.println(countService.toString());
			ResultMap r=  (ResultMap) countService.execute(cmd);
			map.put("result", "success!");
			map.put("total",r);
			map.put("list",listService.execute(cmd));
			break;
		case "grade":
			//cmd=null;
			listService=(x)-> {
				return gradeMapper.selectSome(cmd);
			};
			countService=(x)-> {
				return gradeMapper.count(cmd);
			};
			
			map.put("result", "Sussess!!");
			map.put("total", "");
			map.put("list",listService.execute(cmd));
			
			break;
	
		default:
			break;
	}
      return map;
   }
   @RequestMapping("/get/{cate}/{seq}")
   public @ResponseBody Map<?,?> get(@PathVariable String cate,@PathVariable String seq){
	   logger.info("detail get{} ","진입");
	   System.out.println("넘어온 Seq"+seq);
	   /*IGetService detailService=new IGetService(){
	    * @Override
	    * public object excute(Object o){
	    * 	return 
	    * }
	    * };
	    * cmd.setAction(seq)
	    * */
	   IGetService detailService=null;
	   //cmd=new Command();
	   Map<String,Object>map =new HashMap<>();
	   Article bean=null;
	   switch (cate) {
		   case "detail":
			cmd.setSearch(seq);
			detailService=(x)-> {
				return boardMapper.selectOne(cmd);
			};
			bean = (Article) detailService.execute(cmd);
			System.out.println("####"+bean.getContent());
			break;
	
		default:
			break;
	}
	   map.put("detail", bean);
	   return map;
   }
   @RequestMapping(value="/put/articles/",method=RequestMethod.POST, consumes="application/json")
   public @ResponseBody Map<?,?> put(@RequestBody Article art){
	   IPutService updateService=null;
	   Map<String, Object>map = new HashMap<>();
	   System.out.println("들어온 컨텐츠: "+art.getContent());
	   cmd.setView(art.getTitle());
	   cmd.setColumn(art.getContent());
	   cmd.setSearch(String.valueOf(art.getArticleSeq()));
	   updateService=(x)->{
		   boardMapper.update(cmd);
	   };
	   updateService.execute(cmd);
	   map.put("msg", art.getArticleSeq());
	   map.put("seq", art.getArticleSeq());
	   return map;
   }
@RequestMapping(value="/delete/articles/",method=RequestMethod.POST, consumes="application/json")
   public @ResponseBody Map<?,?> delete(@RequestBody Article art){
	   System.out.println("딜리트 진입");
	   IDeleteService deleteService=null;
	   IGetService memberInfo=null;
	   StudentDTO stu=null;
	   Map<String, Object>map = new HashMap<>();
	   
	   
	   cmd.setSearch(art.getId());
	   memberInfo=x->{
		 return memberMapper.selectById(cmd);
	   };
	   stu=(StudentDTO) memberInfo.execute(cmd);
	   
	   
	   cmd.setSearch(String.valueOf(art.getArticleSeq()));
	   System.out.println("뷰에서 넘어온 비번: "+art.getRegdate());
	   System.out.println("디비에서 가져온 멤버 비번 : "+stu.getPassword());
	   if(art.getRegdate().equals(stu.getPassword())) {
		   deleteService=x->{
			   boardMapper.delete(cmd);
			   map.put("result", "success");
		   };
		   deleteService.execute(cmd);
	   }
	   
	   return map;
   }
}