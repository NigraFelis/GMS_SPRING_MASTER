package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Service;



@Service
public class BoardServiceImpl implements BoardService {
/*private BoardDAO dao =ArticleDAOImpl.getInstance();*/ 
public static BoardServiceImpl getInstance(){
	return new BoardServiceImpl();
}
private BoardServiceImpl() {
	// TODO Auto-generated constructor stub
}	
@Override
	public String write(ArticleDTO bean) {
		String result=null;
		System.out.println("**"+result);
		return result.equals("1")?"성공":"실패";
	}

	@Override
	public List<ArticleDTO> list() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ArticleDTO> findById(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ArticleDTO findBySeq(String seq) {
		ArticleDTO result = null;
		System.out.println(result.toString());
		return result;
	}

	@Override
	public String count() {
		return "";
	}

	@Override
	public String modify(ArticleDTO bean) {
		return null;
	}

	@Override
	public String remove(String seq) {
		// TODO Auto-generated method stub
		return "";
	}

}
