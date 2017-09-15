/**
 * 
 */

var meta=meta || {};

meta.common=(function(){
	   var init=function(ctx){
		  alert('session 전 ctx: '+ctx);
	      onCreate();
	      meta.session.init(ctx);
	      alert('session 후 ctx: '+$$());
	      meta.index.init();
	   };
	   var onCreate=function(){
		   setContentView();
		   /*location.href=ctx()+"/auth/login_view";*/
	   };
	   var setContentView=function(){
		   alert('meta init실행 하면서 ctx설정');
	   };
	   return {
		   init : init
	   };
	})();

meta.index=(function(){
	var $wrapper;
	var init=function(ctx){
		  onCreate();
	   };
	   var onCreate=function(){
		   
		   setContentView();
		   $('#btn').on('click',function(){
			   alert('버튼 클릭!!');
			   $wrapper.empty();
		   });
	   };
	   var setContentView=function(){
		   $wrapper = $('#wrapper');
		   var $image = $('<img/>',
				   {
			   			id: 'loading',
			   			src: img()+'/loading.gif'
				   });
		   //image.appendTo($('#wrapper'));
		   $wrapper.append($image);
		   var $btn = $('<input/>',
				   {
			   			id: 'btn',
			   			type: 'button',
			   			value : '버튼'
				   });
		   $wrapper.append($btn);
	   };
	   return {
		   init : init
	   };
})();

var $$=function(){
	return meta.session.getPath('ctx');
	};
var js=function(){
	return meta.session.getPath('js');
	};
var css=function(){
	return meta.session.getPath('css');
	};
var img=function(){
	return meta.session.getPath('img');
	};

meta.session=(function(){ 
   var init=function(ctx){ 
      sessionStorage.setItem('ctx',ctx);
      sessionStorage.setItem('js',ctx+'/resources/js');
      sessionStorage.setItem('img',ctx+'/resources/img');
      sessionStorage.setItem('css',ctx+'/resources/css');
   };
   var getPath=function(x){
      return sessionStorage.getItem(x);
   };
   return {
      init : init,
      getPath : getPath
  
   }
})();

