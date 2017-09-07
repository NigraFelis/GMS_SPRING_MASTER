package com.gms.web.board;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
@RequestMapping("/board")
public class BoardController {
	@RequestMapping("/write")
	public String write() {
		return"public:board/board_write.tiles";
	}
	@RequestMapping("/list")
	public String list() {
		return"public:board/board_list.tiles";
	}
	@RequestMapping("/detail")
	public String detail() {
		return"public:board/board_detail.tiles";
	}
	@RequestMapping("/delete")
	public String main() {
		return"public:board/board_delete.tiles";
	}
}
