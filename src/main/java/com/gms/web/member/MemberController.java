package com.gms.web.member;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
@RequestMapping("/member")
public class MemberController {
	@RequestMapping("/add")
	public String add() {
		return"public:member/member_add.tiles";
	}
	@RequestMapping("/list")
	public String list() {
		return"public:member/member_list.tiles";
	}
	@RequestMapping("/detail")
	public String detail() {
		return"public:member/member_detail.tiles";
	}
	@RequestMapping("/delete")
	public String delete() {
		return"public:member/member_delete.tiles";
	}

}
