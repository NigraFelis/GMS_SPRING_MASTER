package com.gms.web.board;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
@RequestMapping("/board")
public class BoardController {
	@RequestMapping("/write")
	public String write() {
		return"auth:board/board_write.tiles";
	}
	@RequestMapping("/list")
	public String list() {
		return"auth:board/board_list.tiles";
	}
	@RequestMapping("/detail")
	public String detail() {
		return"auth:board/board_detail.tiles";
	}
	@RequestMapping("/delete")
	public String main() {
		return"auth:board/board_delete.tiles";
	}
}
