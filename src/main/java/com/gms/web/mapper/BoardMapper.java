package com.gms.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.board.Article;
import com.gms.web.command.CommandDTO;
import com.gms.web.command.ResultMap;

@Repository
public interface BoardMapper {
	public String insert(CommandDTO cmd);
	public List<Article> selectList(CommandDTO cmd);
	public Article selectOne(CommandDTO cmd);
	public ResultMap count(CommandDTO cmd);
	public void update(CommandDTO cmd);
	public void delete(CommandDTO cmd);
}
