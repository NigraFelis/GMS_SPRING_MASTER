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

meta.index = (function() {
   var $wrapper,$navbar,$container,ctx,img,js,css;
   var init = function() {
      onCreate();
      meta.ui.init();
   };
   var onCreate = function() {
      setContentView();
      $('#btn').on('click', function() {
         $container.empty();
         // meta.auth.init();
         meta.ui.navbar();
         meta.ui.arithmetic();
         $('#resultBtn').on('click', function() {
            $('#result').text('결과 : ' + meta.algo.arithmetic(
                  $('#start').val(),
                  $('#end').val()
            ));
         });
         $('#arithBtn').click(()=>{
            alert('arithBtn 클릭');
            $('#container').empty();
            meta.ui.arithmetic();
            $('#resultBtn').on('click', function() {
               $('#result').text('결과 : ' + meta.algo.arithmetic(
                     $('#start').val(),
                     $('#end').val()
               ));
            });
         });
         $('#switchBtn').click(()=>{
            alert('switchBtn 클릭');
            $('#container').empty();
            meta.ui.arithmetic();
            $('h1').html('스위치수열의 합');
            $('#start').val('1').attr('readonly','true');
            // $('#start').attr('value','1');
            $('#end').val('100').attr('readonly','true');
            $('#resultBtn').click(()=>{
               alert('스위치수열');
               $('#result').text('결과값'+meta.algo.switchSeries());
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
               alert('등비수열');
               $('#result').text('결과값'+meta.algo.geoMetrix());
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
               alert('factorial');
               $('#result').text('결과값'+meta.algo.factorial());
            })
         });
         $('#fiboBtn').click(()=>{
            alert('fiboBtn 클릭');
            $('#container').empty();
            meta.ui.arithmetic();
            $('h1').html('Fibonacci');
            $('#start').val('1').attr('readonly','true');
            $('#end').val('20').attr('readonly','true');
            $('#resultBtn').click(()=>{
               alert('fibonacciBtn');
               $('#result').text('결과값'+meta.algo.fibonacci());
            })
         });
                  
      
      });
   };
   var setContentView = function() {
      $container = $('#container');
      ctx = $$('x');
      img = $$('i');
      var $image = $('<img/>', {
         id : 'loading',
         src : img + '/loading.gif'
      });
      /* image.appendTo($('#wrapper')); */
      $container.append($image);
      // $('#wrapper').empty();
      var $btn = $('<input/>', {
         id : 'btn',
         type : 'button',
         value : '버튼2'
      });
      $container.append($btn);
   };
   return {
      init : init
   };
})();
meta.algo = {
   arithmetic : (s,e) =>{
      var sum = 0;
      var start = s * 1;
      var end = e * 1;
      for (var i = start; i <= end; i++) {
         sum += i;
      }
      return sum;
   },
   switchSeries : ()=>{
      var sum = 0;
      var i=0;
      var sw = 0;
      do{
         i++;
         if(sw==0){
            sum+=i;
            sw=1;
         }else{
            sum-=i;
            sw=0;
         }
      }while(i<100);
      return sum;   
   },
   geoMetrix : () =>{
		var i=0; 
		var j=1;
		var k=1;
		do {
			i++;
			j+=i;
			k+=j;
		}while(i<19);
		return k;
   },
   factorial : () =>{
		var i=1;
		var j=1;
		var r=1;
		do {
			i++;
			j*=i;
			r+=j;
		}while(i<10);
		return r;
  },
   fibonacci : () =>{
		var a = 1; 
		var b = 1;
		var y = 2;
		var n = 20;
		
		for(var k=3; k<=n; k++) {
			c = a + b;
			y += c;
			a = b;
			b = c;
		}
		return y;
 }
   
};
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
      $wrapper.html(
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