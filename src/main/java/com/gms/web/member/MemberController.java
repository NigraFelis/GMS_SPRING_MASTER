package com.gms.web.member;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
@RequestMapping("/member")
public class MemberController {
	@RequestMapping("/add")
	public String add() {
		return"auth:member/member_add.tiles";
	}
	@RequestMapping("/list")
	public String list() {
		return"auth:member/member_list.tiles";
	}
	@RequestMapping("/detail")
	public String detail() {
		return"auth:member/member_detail.tiles";
	}
	@RequestMapping("/delete")
	public String delete() {
		return"auth:member/member_delete.tiles";
	}

}
