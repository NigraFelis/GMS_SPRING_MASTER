package com.gms.web.board;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.command.Command;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.service.IListService;


@RestController
public class BoardController {
   private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
   @Autowired BoardMapper boardMapper;
   @Autowired GradeMapper gradeMapper;
   @Autowired Command cmd;
   @RequestMapping("/get/{cate}/list")
   public @ResponseBody Map<?, ?> deleteboard(@PathVariable String cate) {
      logger.info("board ContList{} ","진입");
      Map<String, Object>map = new HashMap<>();
      IListService listService=null;
      System.out.println("board/list 에 들어옴 !!");
      switch (cate) {
		case "board":
			cmd=null;
			
			listService=(x)-> {
				return boardMapper.selectSome(cmd);
			};
			
			System.out.println(listService);
			map.put("result", "success!");
			map.put("list",listService.execute(cmd));
			break;
		case "grade":
			cmd=null;
			listService=(x)-> {
				return gradeMapper.selectSome(cmd);
			};
			map.put("list",listService.execute(cmd));
			break;
	
		default:
			break;
	}
      return map;
   }
   public @ResponseBody Map<?,?> get(){
	   return null;
   }
   public @ResponseBody Map<?,?> put(){
	   return null;
   }
   public @ResponseBody Map<?,?> delete(){
	   return null;
   }
}