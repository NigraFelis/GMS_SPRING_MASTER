/**
 * member javaScript
 */
var app=app || {};

app.path=(function(){  //최상위 브라우저 종료시 까지 저장되는곳
   var init=function(ctx){
      app.session.init(ctx);
      app.member.init();
      onCreate();
   };
   var onCreate=function(){
	   alert('js진입');
	   setContentView();
	   location.href=ctx()+"/auth/login_view";
   };
   var setContentView=function(){
	   alert('app init실행 하면서 ctx설정');
   };
  
   var ctx = function(){
      return app.session.getPath('ctx');
   };
   var js = function(){
      return app.session.getPath('js');
   };
   var img = function(){
      return app.session.getPath('img');
   };
   var css = function(){
      return app.session.getPath('css');
   };
   return { //closer
      init : init,
      ctx : ctx,
      js : js,
      img : img,
      css : css
   }
})();


app.session=(function(){ //세선종료까지 저장
   var init=function(ctx){ //생성자(초기화)
      sessionStorage.setItem('ctx',ctx);
      sessionStorage.setItem('js',ctx+'/resource/js');
      sessionStorage.setItem('img',ctx+'/resource/img');
      sessionStorage.setItem('css',ctx+'/resource/css');
   };
   var getPath=function(x){
      return sessionStorage.getItem(x);
   };
   return {
      init : init,
      getPath : getPath
  
   }
})();

app.main=(function(){  //최상위 브라우저 종료시 까지 저장되는곳
   var init=function(ctx){
      onCreate();
   };
   var onCreate=function(){
	   setContentView();
	    $('.list-group a').eq(0).on('click',function(){
		   location.href=app.path.ctx()+"/member/add"
		});
		$('.list-group a').eq(1).on('click',function(){
			location.href=app.path.ctx()+"/member/list"
        });
		$('.list-group a').eq(2).on('click',function(){
			location.href=app.path.ctx()+"/member/detail"
		});
		$('.list-group a').eq(3).on('click',function(){
			location.href=app.path.ctx()+"/member/delete"
		});
		$('.list-group a').eq(4).on('click',function(){
			location.href=app.path.ctx()+"/grade/add"
		});
		$('.list-group a').eq(5).on('click',function(){
			location.href=app.path.ctx()+"/grade/list"
		});
		$('.list-group a').eq(6).on('click',function(){
			location.href=app.path.ctx()+"/grade/detail"
		});
		$('.list-group a').eq(7).on('click',function(){
			location.href=app.path.ctx()+"/grade/delete"
		});
		$('.list-group a').eq(8).on('click',function(){
			location.href=app.path.ctx()+"/board/write"
		});
		$('.list-group a').eq(9).on('click',function(){
			location.href=app.path.ctx()+"/board/list"
		});
		$('.list-group a').eq(10).on('click',function(){
			location.href=app.path.ctx()+"/board/detail"
		});
		$('.list-group a').eq(11).on('click',function(){
			location.href=app.path.ctx()+"/board/delete"
		});
   };
   var setContentView=function(){
	   var $u1=$("#main_ul_stu");
         var $u2=$("#main_ul_grade");
         var $u3=$("#main_ul_board");
         $u1.addClass("list-group");
         $u2.addClass("list-group");
         $u3.addClass("list-group");
         $('.list-group').children().addClass("list-group-item");
         
   };
  
   return { //closer
      init : init
     
   }
})();


app.auth = (function() {
	   var init = function() {
	      $('#loginBtn').on('click', function() {
	         alert('로그인 fx 실행')
	         if ($('#input_id').val() === "") {
	            alert('ID 를 입력해 주세요');
	            return false;
	         }
	         if ($('#input_pass').val() === "") {
	            alert('PASS 를 입력해 주세요');
	            return false;
	         }
	         
	         $('#login_box').attr('action', app.path.ctx() + "/auth/main");
	         $('#login_box').attr('method', 'post');
	         return true;
	    	 
	      });
	   };
	   var mainLoad = function() {

	   };
	   return {
	      init : init
	   };
	})();



app.navbar=(function(){
   var init=function(ctx){
	   onCreate();
   };
   var onCreate=function(){
	    setContentView();
	    $('#main').on('click',function(){
	    	app.controller.moveTo('auth','main');
		});
		$('#logout').on('click',function(){
			app.controller.logout('auth','logout');
		});
		
		
		$('.dropdown-menu a').eq(0).on('click',function(){
			app.controller.moveTo('member','add');
		});
		$('.dropdown-menu a').eq(1).on('click',function(){
			app.controller.moveTo('member','list');
       });
		$('.dropdown-menu a').eq(2).on('click',function(){
			app.controller.moveTo('member','detail');
		});
		$('.dropdown-menu a').eq(3).on('click',function(){
			app.controller.moveTo('member','delete');
		});
		
		
    
		$('.dropdown-menu a').eq(4).on('click',function(){
			app.controller.moveTo('grade','add');
		});
		$('.dropdown-menu a').eq(5).on('click',function(){
			app.controller.moveTo('grade','list');
		});
		$('.dropdown-menu a').eq(6).on('click',function(){
			app.controller.moveTo('grade','detail');
		});
		$('.dropdown-menu a').eq(7).on('click',function(){
			app.controller.moveTo('grade','delete');
		});
		
		
		$('.dropdown-menu a').eq(8).on('click',function(){
			app.controller.moveTo('board','write');
		});
		$('.dropdown-menu a').eq(9).on('click',function(){
			app.controller.moveTo('board','list');
		});
		$('.dropdown-menu a').eq(10).on('click',function(){
			app.controller.moveTo('board','detail');
		});
		$('.dropdown-menu a').eq(11).on('click',function(){
			app.controller.moveTo('board','delete');
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



app.member=(function(){
	var init = function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('#updateBtn').on('click',function(){
		  sessionStorage.setItem('id',$('#detail_id').text());    
		  sessionStorage.setItem('phone',$('#detail_phone').text());    
		  sessionStorage.setItem('email',$('#detail_email').text());
		  sessionStorage.setItem('title',$('#detail_title').text());
		  app.controller.moveTo('member','member_update');
		});
	};
	var setContentView=function(){
		//alert('meberDetail');

	};
	
	return {
		init : init,
		
	};
})();

app.grade=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		
	};
	var setContentView=function(){
		
	};
	return{
		init : init
	};
})();



app.board=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		
	};
	var setContentView=function(){
		
	};
	return{
		init : init
	};
})();


app.controller=(function(){
	var init=function(){
		
	};
	var moveTo=function(dir,page){
		location.href=
		app.path.ctx()+'/'+dir+'/'+page;
	};
	var logout = function(dir,page){
		location.href=
		app.path.ctx()+'/'+dir+'/'+page;
	};

	var deleteTarget = function(target){
		prompt(target+'의 ID?');
	};
	var list = function(dir,page,pageNumber){
		location.href=
        app.path.ctx()+"/"+dir+".do?action=list&page="+page+"&pageNumber="+pageNumber;
    };
	var updateStudent = function (id,email){
		alert('수정할 id'+id);
		location.href=app.path.ctx()+"/member.do?action=update&page=member_update&id="+id+"&email="+email;
	};
	var deleteStudent=function(id){
		alert('삭제할 id'+id);
		location.href=app.path.ctx()+"/member.do?action=delete&page=member_list&id="+id;
	};
	var detailStudent = function(id){
		alert('조회할 id'+id);
		location.href=
			app.path.ctx()+"/member.do?action=detail&page=member_detail&id="+id;
	};
	var searchStudent= function(){
		var search=document.getElementById('search').value;
		location.href=app.path.ctx()+"/member.do?action=search&page=member_list&search="+search;
	};

	 
	var studentInfo = function(){
		  var id='id',
		      id_val='${requestScope.student.id}',
		      name='name',
		      name_val='${requestScope.student.name}',
		      email='email',
		      email_val='${requestScope.student.email}'
		      ;
		  sessionStorage.setItem(id,id_val);    
		  sessionStorage.setItem(name,name_val);    
		  sessionStorage.setItem(email,email_val);    
	 };

	 
	var memberAdd = function(){
		var form=document.getElementById('join_form');
		form.setAttribute('action','${ctx}/member.do');
		form.setAttribute('method','post');
		form.submit();
		return true;
	};

		
	return{
		init:init,
		moveTo:moveTo,
		list : list,
		logout : logout,
		deleteTarget : deleteTarget,
		updateStudent : updateStudent,
		deleteStudent : deleteStudent,
		detailStudent : detailStudent,
		searchStudent : searchStudent,
		studentInfo : studentInfo,
		memberAdd : memberAdd
	}
})();
