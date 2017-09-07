package com.gms.web.grade;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/grade")
public class GradeController {
	@RequestMapping("/add")
	public String add() {
		return"public:grade/grade_add.tiles";
	}
	@RequestMapping("/list")
	public String list() {
		return"public:grade/grade_list.tiles";
	}
	@RequestMapping("/detail")
	public String detail() {
		return"public:grade/grade_detail.tiles";
	}
	@RequestMapping("/delete")
	public String delete() {
		return"public:grade/grade_delete.tiles";
	}
}
