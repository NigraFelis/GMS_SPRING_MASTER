/**
 * member javaScript
 */
var meta = meta || {};

meta.common = (function() {// 최상위 브라우저 종료 저장되는곳
   var init = function(ctx) {
      alert('session 전 ctx ' + ctx);
      onCreate();
      meta.session.init(ctx);
      meta.index.init();
      alert('session 후 ctx ' + $$('x'));
   };
   var onCreate = function() {
      setContentView();
   };
   var setContentView = function() {

   };
   return {
      init : init
   };
})();

meta.index=(function(){
	var $wrapper,$navbar,$container,ctx,img,js,css,
		temp,algo;
	var init=function(){
			js=$$('j');
			temp=js+'/template.js';
			algo=js+'/algo.js';
			onCreate();
		};
	var onCreate=function(){
		$container=$('#container');
		img=$$('i');
		$.getScript(temp,x=>{
			var $image = $('<img/>',
				intro.loading(img)	
			);
			$container.append($image);
			var $btn=$('<input/>',
					{
						id : 'btn',
						type : 'button',
						value : '버튼'
					});
			$('#loading').after($btn);
			$('#btn').click(()=>{
				$container.empty();
				//meta.auth.init();	
				meta.ui.navbar();
				meta.navbar.init();
				meta.ui.arithmetic();
				$('#resultBtn').click(()=>{
					$.getScript(algo,(x1,x2)=>{
						$('#result').text('결과 : '
								+series.arithmetic(
										$('#start').val(),
										$('#end').val()
								));
					});
				});
			});
		});
		};
	return {init:init};
})();


meta.auth = (function() {
   var $wrapper, ctx, img, js, css;
   var init = function() {
      onCreate();
   };
   var onCreate = function() {
      setContentView();
   };
   var setContentView = function() {
      alert('login box');
      img = $$('i');
      $wrapper = $('#wrapper');
      loginView();

   };
   var loginView = function() {
      var ui = '<div id="container">' + '<div id="login_box">' + '<img src="'
            + img + '/login.jpg" alt="" /><br />'
            + '<span id="login_id">ID</span>'
            + '<input type="text"  /> <br />'
            + '<span id="login_pass">PASSWORD</span>'
            + '<input type="text"  /> <br /><br />' + '</div>' + '</div>';
      $wrapper.append(ui);
      $('#login_box').append(meta.comp.input({
         type : 'button',
         id : 'login_button',
         value : '로그인'
      }));
      $('#login_box').append(meta.comp.input({
         type : 'button',
         id : 'cancel',
         value : '취소'
      }));
   };
   return {
      init : init
   };
})();

meta.navbar=(function(){
	var algo,js;
	   var init=function(ctx){
		   onCreate();
		   js=$$('j');
		   algo=js+'/algo.js';
	   };
	   var onCreate=function(){
		    setContentView();
		    $('#main').on('click',function(){
	    	app.controller.moveTo('common','main');
		});
		$('#logout').on('click',function(){
			app.controller.moveTo('common','login');
		});
		
		
		$('.dropdown-menu a').eq(0).on('click',function(){
			app.controller.moveTo('member','member_add');
		});
		$('.dropdown-menu a').eq(1).on('click',function(){
			app.member.list(1);
       });
		$('.dropdown-menu a').eq(2).on('click',function(){
			app.controller.moveTo('member','member_detail');
		});
		$('.dropdown-menu a').eq(3).on('click',function(){
			app.controller.moveTo('member','member_delete');
		});
		
		
    
		$('.dropdown-menu a').eq(4).on('click',function(){
			app.controller.moveTo('grade','grade_add');
		});
		$('.dropdown-menu a').eq(5).on('click',function(){
			app.controller.moveTo('grade','grade_list');
		});
		$('.dropdown-menu a').eq(6).on('click',function(){
			app.controller.moveTo('grade','grade_detail');
		});
		$('.dropdown-menu a').eq(7).on('click',function(){
			app.controller.moveTo('grade','grade_delete');
		});
		
		
		$('.dropdown-menu a').eq(8).on('click',function(){
			app.controller.moveTo('board','board_write');
		});
		$('.dropdown-menu a').eq(9).on('click',function(){
			app.controller.moveTo('board','board_list');
		});
		$('.dropdown-menu a').eq(10).on('click',function(){
			app.controller.moveTo('board','board_detail');
		});
		$('.dropdown-menu a').eq(11).on('click',function(){
			app.controller.moveTo('board','board_delete');
		});
		
		
		$('#arithBtn').click(()=>{
            alert('arithBtn 클릭');
            $('#container').empty();
            meta.ui.arithmetic();
            $('#start').val('1')/*.attr('readonly','true')*/;
            $('#end').val('100')/*.attr('readonly','true')*/;
            $('#resultBtn').click (()=> {
            	$.getScript(algo,(x1,x2)=>{
            		$('#result').text('결과 : ' + series.arithmetic(
                            $('#start').val(),
                            $('#end').val()
                      ));
            	});
            });
         });
		
		$('#switchBtn').click(()=>{
            alert('switchBtn 클릭');
            $('#container').empty();
            meta.ui.arithmetic();
            $('h1').html('스위치수열의 합');
            // $('#start').attr('value','1');
            $('#start').val('1');
            $('#end').val('100');
            $('#resultBtn').click(()=>{
            	$.getScript(algo,()=>{
            		$('#result').text('결과값'+series.switchSeries(
            				$('#start').val(),
                            $('#end').val()		
            		));
            	});
            })
            
         });
         $('#geoBtn').click(()=>{
            alert('geoBtn 클릭');
            $('#container').empty();
            meta.ui.arithmetic();
            $('h1').html('등비수열의 합');
            $('#start').val('1').attr('readonly','true');
            $('#end').val('20').attr('readonly','true');
            $('#resultBtn').click(()=>{
            	$.getScript(algo,()=>{
            		$('#result').text('결과값'+series.diffSeries(
            				$('#start').val(),
                            $('#end').val()			
            		));
            	});
            })
            
         });
         $('#factBtn').click(()=>{
            alert('factBtn 클릭');
            $('#container').empty();
            meta.ui.arithmetic();
            $('h1').html('Factorial');
            $('#start').val('1').attr('readonly','true');
            $('#end').val('10').attr('readonly','true');
            $('#resultBtn').click(()=>{
            	$.getScript(algo,()=>{
            		$('#result').text('결과값'+series.factorial());
            	});
            })
         });
         $('#fiboBtn').click(()=>{
            alert('fiboBtn 클릭');
            $.getScript(algo,()=>{
            	series.fibonacci('헬로우 피보');
            })
            $('#container').empty();
            meta.ui.arithmetic();
            $('h1').html('Fibonacci');
            $('#start').val('1').attr('readonly','true');
            $('#end').val('20').attr('readonly','true');
            $('#resultBtn').click(()=>{
            	$.getScript(algo,()=>{
            		$('#result').text('결과값'+series.fibonacci());
            	});
            })
         });
	
		
		
   };
   var setContentView=function(){
	    var $u1=$("#navbar_ul_stu");
		var $u2=$("#navbar_ul_grade");
		var $u3=$("#navbar_ul_board");
		$u1.addClass("dropdown-menu");
		$u2.addClass("dropdown-menu");
		$u3.addClass("dropdown-menu");
		
   };
  
   return {
      init : init
     
   }
})();

meta.ui = (function() {
   var $wrapper, $navbar,$container,ctx, img, js, css;
   var init = function() {
      $wrapper = $('#wrapper');
      $navbar=$('#navbar');
      $container=$('#container');
      img = $$('i');
   };
   var navbar = function(){
      $('#container');
      $('#navbar').html(
            '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>'
            +'<nav class="navbar navbar-inverse">'
             + '<div class="container-fluid">'
              +  '<div class="navbar-header">'
               +   '<a class="navbar-brand" href="#">GMS</a>'
                +'</div>'
                +'<ul class="nav navbar-nav">'
                 + '<li id="home" class="gohome_active"><a><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>'
                  +'<li class="dropdown">'
                   +   '<a href="#" class="dropdown-toggle"' 
                    +     'data-toggle="dropdown" role="button"'
                     +    'aria-haspopup="true"' 
                      +   'aria-expanded="false">회원관리 <span class="caret">'
                         +'</span></a>'
                      +'<ul id="navbar_ul_stu" class="dropdown-menu">'
                       + '<li><a>학생추가</a></li>'
                        +'<li><a>학생목록</a></li>'
                        +'<li><a>학생조회</a></li>'
                        +'<li></li>'
                        +'<li><a>학생삭제</a></li>'
                      +'</ul>'
                    +'</li>'
                  +'<li class="dropdown">'
                  +    '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">성적관리 <span class="caret"></span></a>'
                   +   '<ul id="navbar_ul_grade"  class="dropdown-menu">'
                    +    '<li><a>성적추가</a></li>'
                     +   '<li><a>성적목록</a></li>'
                      +  '<li><a>성적조회</a></li>'
                       + '<li></li>'
                        +'<li><a>성적삭제</a></li>'
                      +'</ul>'
                    +'</li>'
                  +'<li class="dropdown">'
                   +   '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">게시판관리 <span class="caret"></span></a>'
                    +  '<ul id="navbar_ul_board"  class="dropdown-menu">'
                     +  '<li><a>게시글추가</a></li>'
                      +  '<li><a>게시글목록</a></li>'
                       + '<li><a>게시글조회</a></li>'
                        +'<li></li>'
                        +'<li><a>게시글삭제</a></li>'
                      +'</ul>'
                    +'</li>'
                    +'<li class="dropdown">'
                      +   '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">수  열<span class="caret"></span></a>'
                       +  '<ul id="navbar_ul_board"  class="dropdown-menu">'
                        +  '<li><a id="arithBtn">등차수열</a></li>'
                         +  '<li><a id="switchBtn">스위치수열</a></li>'
                          + '<li><a id="geoBtn">등비수열</a></li>'
                           +'<li><a id="factBtn">팩토리얼</a></li>'
                           +'<li><a id="fiboBtn">피보나치</a></li>'
                         +'</ul>'
                       +'</li>'
                +'</ul>'
                +'<span class="float-right">${user.name} &nbsp;'
               +    '<a id="logout"  style="color: white">로그아웃</a></span>'
              +'</div>'
            +'</nav>'      
      );
      
   };
   var arithmetic = function() {
      var content = '<div id="content">'
            + '<h1>시작값부터 끝값까지 등차수열의 합</h1>'
            + '<span id="start_txt">시작값: &nbsp;&nbsp;</span>'
            + '<br/><span id="end_txt">끝   값:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'
            + '<div id="result"></div>';
      $('#container').append(content);
      $('#start_txt').after(meta.comp.input({
         type : 'text',
         id : 'start',
         placeholder : '시작값'
      }));
      $('#end_txt').after(meta.comp.input({
         type : 'text',
         id : 'end',
         placeholder : '끝값'
      }));
      $('#result').before(meta.comp.input({
         type : 'button',
         id : 'resultBtn',
         value : '결과보기'
      }));
   };
   
   return {
      init : init,
      arithmetic : arithmetic,
      
      navbar : navbar
   };
})();
meta.comp = {
   input : function(json) {
      return $('<input>', json);
   }
};

meta.session = {
   init : function(x) { // 세선종료까지 저장
      sessionStorage.setItem('x', x);
      sessionStorage.setItem('j', x + '/resources/js');
      sessionStorage.setItem('c', x + '/resources/css');
      sessionStorage.setItem('i', x + '/resources/img');
   },
   getPath : function(x) {
      return sessionStorage.getItem(x);
   }
};
var $$ = function(x){
   return meta.session.getPath(x);
};

var $$ = function(x) {
   return meta.session.getPath(x);
};