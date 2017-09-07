package com.gms.web.common;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth")
public class AuthController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping("/login_view")
	public String goLogin() {
		//logger.info("AuthController Enter");
		return "public:common/login.tiles";
	}
	@RequestMapping("/main")
	public String login() {
		return "public:common/main.tiles";
	}
	@RequestMapping("/logout")
	public String main() {
		return "public:common/login.tiles";
	}
}
