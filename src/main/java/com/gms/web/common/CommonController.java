package com.gms.web.common;



import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/common")
public class CommonController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping("/path/{dir}/{page}")
	public String move(@PathVariable String dir ,@PathVariable String page, HttpSession session) {
		logger.info("CommonController{}","진입");
		String tiles ="";
		if(session!=null) {
			tiles="auth";
		}else {
			tiles="public";
		}
		
		return String.format(tiles+":%s/%s.tiles",dir, page);
	}
}
