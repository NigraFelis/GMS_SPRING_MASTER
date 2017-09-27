var introUI={
	
	login : i=>{
		return '<div id="container">'
		+'<div id="login_box">'
		+	'<img src="'+i+'/login.jpg" alt="" /><br />'
		+	'<span id="login_id">ID</span>'
		+	'<input id="login_input" type="text"  /> <br />'
		+	'<span id="login_pass">PASSWORD</span> '
		+	'<input type="text"  /> <br />'
		+'</div>'
	+'</div>';
	},
	navbar : ()=>{
		return '<nav class="navbar navbar-inverse">'
		+'  <div class="container-fluid">'
		+'    <div class="navbar-header">'
		+'      <a class="navbar-brand" href="#">GMS</a>'
		+'    </div>'
		+'    <ul class="nav navbar-nav">'
		+'      <li class="active"><a ><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" '
		+'          	aria-haspopup="true" '
		+'          	aria-expanded="false">회원관리 <span class="caret">'
		+'          	</span></a>'
		+'          <ul id="navbar_ul_stu" class="dropdown-menu">'
		+'            <li><a>학생추가</a></li>'
		+'            <li><a>학생목록</a></li>'
		+'            <li><a>학생조회</a></li>'
		+'            <li></li>'
		+'            <li><a>학생삭제</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">성적관리 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_grade" class="dropdown-menu">'
		+'            <li><a>성적추가</a></li>'
		+'            <li><a>성적목록</a></li>'
		+'            <li><a>성적조회</a></li>'
		+'            <li></li>'
		+'            <li><a>성적삭제</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">게시판관리 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'           <li><a>게시글추가</a></li>'
		+'            <li><a>게시글목록</a></li>'
		+'            <li><a>게시글조회</a></li>'
		+'            <li></li>'
		+'            <li><a>게시글삭제</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">수 열 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'           <li><a id="arithBtn">등차수열</a></li>'
		+'            <li><a id="switchBtn">스위치수열</a></li>'
		+'            <li><a id="geoBtn">등비수열</a></li>'
		+'            <li><a id="facBtn">팩토리얼</a></li>'
		+'            <li><a id="fiboBtn">피보나치</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">배 열 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'           <li><a id="selBtn">선택정렬</a></li>'
		+'            <li><a id="bubbleBtn">버블정렬</a></li>'
		+'            <li><a id="insertBtn">삽입정렬</a></li>'
		+'            <li><a id="rankBtn">석차구하기</a></li>'
		+'            <li><a id="kinSerchBtn">이분검색</a></li>'
		+'            <li><a id="mergeBtn">병합</a></li>'
		+'            <li><a id="stackBtn">스택</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">행 렬<span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'           <li><a id="selBtn">기본 5행 5열</a></li>'
		+'            <li><a id="bubbleBtn">직각삼각형</a></li>'
		+'            <li><a id="insertBtn">지그재그</a></li>'
		+'            <li><a id="rankBtn">다이아몬드</a></li>'
		+'            <li><a id="kinSerchBtn">모래시계</a></li>'
		+'            <li><a id="mergeBtn">오른쪽 빈삼각형</a></li>'
		+'            <li><a id="stackBtn">이등변삼각형</a></li>'
		+'            <li><a id="stackBtn">90도회전</a></li>'
		+'            <li><a id="stackBtn">달팽이</a></li>'
		+'            <li><a id="stackBtn">대각선채우기</a></li>'
		+'            <li><a id="stackBtn">마방진</a></li>'
		+'            <li><a id="stackBtn">행렬변환</a></li>'
		+'          </ul>'
		+'        </li>'
		+'    </ul>'
		+'    <span class="float-right">${user.name} &nbsp;'
		+'    	<a id="logout" >로그아웃</a></span>'
		+'  </div>'
		+'</nav>';
	}
};
var compUI={
	//div: ()=>{return $('',{});},//돔리턴 기본형
	br : ()=>{return $('<br/>')},
	div: x=>{return $('<div>',{id:x });},//돔리턴 기본형
	h1 : x => {return $('<h1/>', {id:x});}, 
	span : x => {return $('<span/>', {id:x});},
	iTxt : x=>{return $('<span/>',{id:x, type:'text'});},
	aBtn : x=>{return $('<a>',{href:'#',role:'button',id:x});},
	iBtn : x=>{return $('<input/>',{id:x, type:'button'});},
	image : (x,y)=>{return $('<img/>',{id : x,src : y});},
	input : (x,y)=>{return $('<input/>',{id:x, type : y});},
	
	table : ()=>{return $('<table/>',{class :'table table-striped'});},
	tr : x=>{return $('<tr/>',{id :x});},
	th : ()=>{return $('<th/>')},
	td : ()=>{return $('<td/>')},
	tbody : ()=>{return $('<tbody/>')},
};

var algoUI={
	series : ()=>{
		return '<div id="content">'
			+'<h1>시작값부터 끝값까지 등차수열의 합</h1>'
			+'<span id="start_txt">시작값: &nbsp;&nbsp;</span>'
			+'<br/><span id="end_txt">끝   값:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br/>'
			+'<div id="result"></div>';
	},
	sort : ()=>{
		return '<div id="content">'
		+'<h1></h1>'
		+'<span id="input_label">입력: &nbsp;&nbsp;</span>'
		+'<div id="result"></div>';
	}
};
var bbsUI={
	tbl : ()=>{
		var tbl='<h4 id="total"> 총 게시글수 </h4>'
			+'<table id="tbl"  style = "text-align:center;" class="table table-striped">'
			+'<thead><tr style="height: 25px;">';
		var a=[{width:'5%',txt:'NO'},
			{width:'20%',txt:'제목 '},
			{width:'36%',txt:'내 용'},
			{width:'15%',txt:'글쓴이'},
			{width:'15%',txt:'작성일'},
			{width:'9%',txt:'조회수'}];
		$.each(a,function(i,j){
			tbl+='<th style="width: '+j.width
					+'; text-align: center;">'+j.txt+'</th>'
		});
		tbl+='</tr></thead><tbody id=tbody>'
		tbl+='</tbody></table></div>';
		return tbl;
	},
	pagenation : ()=>{
		return '<nav style="text-align:center;">'
		+'  <ul class="pagination">'
		+'      <li>'
		+'        <a>'
		+'          <span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span>'
		+'        </a>'
		+'      </li>'
		+'    <li>'
		+'      <a href="#" aria-label="Previous">'
		+'        <span aria-hidden="true">&laquo;</span>'
		+'      </a>'
		+'    </li>'
		+'    <li><a href="#">1</a></li>'
		+'    <li><a href="#">2</a></li>'
		+'    <li><a href="#">3</a></li>'
		+'    <li><a href="#">4</a></li>'
		+'    <li><a href="#">5</a></li>'
		+'    <li>'
		+'      <a href="#" aria-label="Next">'
		+'        <span aria-hidden="true">&raquo;</span>'
		+'      </a>'
		+'    </li>'
		+'        <li>  '
		+'          <a>'
		+'            <span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span>'
		+'          </a>'
		+'        </li>'
		+'  </ul>'
		+'</nav>'
	},
	detail : ()=>{
		return '<div class="page-header">'
		+'<h1 style="display:inline; margin-left: 50px;" >게시판</h1>'
		+'<a style="font-size:large;">목록가기</a>'
		+'</div>'
		+'<div class="container">'
		+'<div class="row">'
		+'<div class="col-md-12">'
		+'<div class="well well-sm">'
		+'<form class="form-horizontal" method="post">'
		+'<fieldset>'
		+'   <legend class="text-center header">게시글쓰기</legend>'
		+'   <div class="form-group">'
		+'      <span class="col-md-1 col-md-offset-2 text-center">'
		+'       <i class="fa fa-user bigicon"></i></span>'
		+'          <div class="col-md-12">'
		+'             <input id="title" name="title" type="text" placeholder="제 목" class="form-control"/>'
		+'          </div>'
		+'   </div>'
		+'   <div class="form-group">'
		+'      <span class="col-md-1 col-md-offset-2 text-center">'
		+'       <i class="fa fa-user bigicon"></i></span>'
		+'          <div class="col-md-12">'
		+'             <input id="writer" name="title" type="text" placeholder="글쓴이" class="form-control"/>'
		+'          </div>'
		+'   </div>'
		+'   <div class="form-group">'
		+'      <span class="col-md-1 col-md-offset-2 text-center">'
		+'       <i class="fa fa-user bigicon"></i></span>'
		+'          <div class="col-md-12">'
		+'             <textarea class="form-control" name="message" id="message" rows="15"></textarea>'
		+'          </div>'
		+'   </div>'
		+'   <div class="form-group">'
		+'      <div class="col-md-12 text-center">'
		+'         <button id="confirmBtn" type="submit" style="width:200px" class="btn btn-primary btn-lg">확 인</button>'
		+'         <button id="cancelBtn" type="reset" style="width:200px" class="btn btn-primary btn-lg">취 소</button>'
		+'      </div>'
		+'   </div>   '
		+'</fieldset>'
		+'</form>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		 +'<div class="modal fade alert" id="modal" tabindex="-1"'
	        +'role="dialog" aria-labelledby="modalLabel" aria-hidden="true">'
	        +'<div class="modal-dialog">'
	        +'<div class="modal-content">'
	        +'<div class="modal-header">'
	        +'<button type="button" class="close" data-dismiss="modal">'
	        +'<span aria-hidden="true">x</span>'
	        +'<span class="sr-only">close</span></button>'
	        +'<h3 class="modal-title" id="modalLabel">정말 삭제하시겠습니까?</h3>'
	        +'</div>'
	        +'<div class="modal-body">'
	        +'<form>'
	        +'<div class="form-group">'
	        +'<label for="inputPass">password</label>'
	        +'<input type="password" class="form-control"'
	          +'id="user-email2" placeholder="Enter Password">'
	        +'</div>'
	        +'<button type="submit" style="width:200px"'
	         +'class="btn btn-primary center-block">확인</button>'
	         +'</form>'
	       +'</div>'
	       +'</div>'
	       +'</div>'
	       +'</div>'
	},
	cate : ()=> {
		return '<div id="dd" class="dropdown">'
		+'  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">'
		+'    카테고리 선택'
		+'    <span class="caret"></span>'
		+'  </button>'
		+'  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">'
		+'    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">제목</a></li>'
		+'    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">글쓴이</a></li>'
		+'    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">작성일</a></li>'
		+'    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">조회수</a></li>'
		+'  </ul>'
		+'</div>'
	},
	search : ()=> {
		return '<div class="row">'
		+'  <div class="col-lg-6">'
		+'    <div class="input-group">'
		+'      <div class="input-group-btn">'
		+'        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Action <span class="caret"></span>'
		+'        </button>'
		+'        <ul class="dropdown-menu" role="menu">'
		+'          <li><a href="#">글쓴이</a></li>'
		+'          <li><a href="#">제목</a></li>'
		+'          <li><a href="#">내용</a></li>'
		+'          <li><a href="#">작성일</a></li>'
		+'        </ul>'
		+'      </div><!-- /btn-group -->'
		+'      <input type="text" class="form-control" aria-label="...">'
		+'    </div><!-- /input-group -->'
		+'  </div><!-- /.col-lg-6 -->'
		+'</div><!-- /.row -->'
		+'<input id="writeBtn" class="btn btn-warning" type="button" value="게시글 쓰기" style="float:right;"></input>'
	}
	


};
