package com.gms.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.board.Article;
import com.gms.web.command.Command;
import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;

@Repository
public interface GradeMapper {
	public String insert(CommandDTO cmd);
	public List<Article> selectSome(CommandDTO cmd);
	public Article selectOne(CommandDTO cmd);
	public String count(CommandDTO cmd);
	public void update(CommandDTO cmd);
	public void delete(CommandDTO cmd);
	public int insertMajor(List<MajorDTO> Major);
}
