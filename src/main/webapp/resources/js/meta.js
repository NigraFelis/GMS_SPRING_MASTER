var meta=meta || {};
meta.common=(function(){
	var init=function(ctx){
		onCreate();
		meta.session.init(ctx);
		meta.index.init();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){};
	return { init:init };
})();
meta.index=(function(){
	var $wrapper,$navbar,$container,ctx,img,js,css,
		temp,algo;
	var init=function(){
			ctx=$$('x');
			js=$$('j');
			temp=js+'/template.js';
			algo=js+'/algo.js';
			$navbar=$('#navbar');
			$container=$('#container');
			img=$$('i');
			onCreate();
		};
	var onCreate=function(){
		$.getScript(temp,()=>{
			compUI.div('content').css({'width':'100%','text-align':'center'}).appendTo($container);
			$content=$('#content');
			compUI.image('loading',img+'/loading.gif').css({'width':'40%','margin':'0 auto'}).appendTo($content);
			compUI.h1('hBtn').attr('display','inline').appendTo($content);
			$hBtn=$('#hBtn');
			
			compUI.span('bbsBtn').html('게시판관리').addClass('label label-danger').css({'margin-left':'10px'}).appendTo($hBtn).click(()=>{
				alert('게시판 가기');
				var url=ctx+'/get/board/list';
				$.getJSON(ctx+'/list/board',data=>{
					alert('총게시글수'+data.total.count);
					//alert('x msg is  '+x.msg);
					//여기서 부터 보드 게시판 동적 UI코딩
					$('#navbar').html(introUI.navbar());//네비 바 넣고
					$container.empty();//컨테이너 비우고
					$container.append(compUI.div('content')).css({'width':'100%'});//컨텐츠 컨테이너 넣고
					$('#content').css({'width':'80%','margin':'0 auto'});//컨텐츠 정렬
					$('#content').html(bbsUI.tbl()); //스트링값으로 헤더 받아오는 경우
					$('#content').append(bbsUI.pagenation());
					//$('#content').prepend(bbsUI.cate());
					$('#content').prepend(bbsUI.search());
					$('#total').text('총게시글 수:'+data.total.count);
					$('#writeBtn').click(e=>{
						meta.board.write();
					});
					
					var tr='';
					alert('결과 : '+data.result)
					$.each(data.list,(i,j)=>{
						tr+= '<tr style="height: 25px;">'
							+'<td>'+j.articleSeq+'</td>'
							+'<td><a onclick="meta.board.detail('+j.articleSeq+')">'+j.title+'</a></td>'
							+'<td>'+j.content+'</td>'
							+'<td>'+j.id+'</td>'
							+'<td>'+j.regdate+'</td>'
							+'<td>'+j.hitcount+'</td>'
							+'</tr>';
					});
					console.log('tr : '+tr);
					//$content.html(bbsUI.tbl());
					$('#tbody').html(tr);

				});
			});

			
			$('#hBtn').append(compUI.span('btn1')).attr('display','inline');
			$('#btn1').html('알고리즘').addClass('label label-default').css({'margin-left':'10px'});
			$('#hBtn').append(compUI.span('btn2')).attr('display','inline');
			$('#btn2').html('회원관리').addClass('label label-primary').css({'margin-left':'10px'});
			$('#btn1').click(()=>{
				$container.empty();
				//meta.auth.init();	
				meta.navbar.init();
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('#resultBtn').click(()=>{
					$.getScript(algo,(x,y)=>{
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

meta.board=(()=>{
	var ctx,js,temp;
	var init=function(){
		js=$$('j');
		temp=js+'/template.js';
		ctx=$$('x');
	};
/*	var list=x=>{
		$.getScript(temp,()=>{
			
		});
	}*/
	var detail= x=>{
		init();
		alert('선택한 seq: '+x);
		$.getJSON(ctx+"/get/detail/"+x,data=>{
			$.getScript(temp,()=>{
				var $content=$('#content');
				$('#content').empty();
				$('#content').append(bbsUI.detail());
				$('#title').attr('placeholder',data.detail.title).attr('readonly','true');
				$('#writer').attr('placeholder',data.detail.id).attr('readonly','true');
				$('#message').attr('placeholder',data.detail.content);
				$('#date').text(data.detail.regdate);
				$('legend').text('게시글 보기');
				$('#confirmBtn').text('수정').click(e=>{
					e.preventDefault();// 폼테그 서브밋 테그를 무력화 시킴
					alert('수정클릭');
					$('#title').removeAttr('readonly','true');
					$('#title').val(data.detail.title);
					$('#writer').val(data.detail.id);
					$('legend').text('게시글 수정하기');
					$('#confirmBtn').text('수정하기').attr('id','updateBtn')
					.click(e=>{
						var _seq=data.detail.articleSeq;
						var _title=$('#title').val();
						var _writer=$('#writer').val();
						var _message=$('#message').val();
						e.preventDefault();
						$.ajax({
							url : ctx+'/put/articles/',
							method : 'post',
							dataType: 'json',
							data : JSON.stringify({
								'articleSeq' : _seq,
								'title' : _title,
								'id' : _writer,
								'content' : _message
								//자바 프로퍼티와 일치 시켜줘야함
							}),
							contentType : 'application/json',
							success : d=>{
								alert('ajax 통신 성공'+d.msg);
								detail(d.seq);
							},
							error : (x,s,m)=>{
								alert('글 수정시 에러 발생'+m);
							}
						});
					});
					$('#cancelBtn').html('취  소')
					.attr('id','resetBtn').attr('type','reset')
					.removeAttr('data-toggle')
					.removeAttr('data-target');
					
				});
				$('#cancelBtn').html('삭 제').click(e=>{
					e.preventDefault();
					//$('#container').empty();
					//$('#navbar').empty();
					//meta.index.init();
				});
			});
		});
		
		
	};
	var update=x=>{
		init();
		
		//.click(e=>{
			//e.preventDefault();
			//deleteArticle(x+","+pass);
			//$('#container').empty();
			//$('#navbar').empty();
			//meta.index.init();
		//});
	};
	var deleteArticle=x=>{
		alert('삭제클릭');
		//$('#container').empty();
		//$('#navbar').empty();
		//meta.index.init();
	};
	var write= ()=>{
		init();
		alert('글쓰기 클릭');
		$.getScript(temp,()=>{
			$('#content').empty();
			$('#content').html(bbsUI.detail());
			$('#confirmBtn').click(e=>{
				e.preventDefault();
				meta.board.deleteArticle(x);
			});
			$('#cancelBtn').click(e=>{
				e.preventDefault();
				meta.board.deleteArticle(x);
				
			});
		});
	};
	return {detail : detail, write : write};
})();
meta.auth=(function(){
	var $wrapper,ctx,img,js,css,temp;
	var init=function(){
		$wrapper=$('#wrapper');
		img=$$('i');
		js=$$('j');
		temp=js+'/template.js';
		onCreate();
	};
	var onCreate=function(){setContentView();};
	var setContentView=function(){
		$.getScript(temp,(i)=>{
			$wrapper.append(introUI.login(img));
			$('#login_input').after(meta.comp.input(
					{
						type : 'button',
						id : 'login_btn',
						value : '로그인'
					}
				));
				$('#login_box').append(meta.comp.input(
					{
						type : 'button',
						id : 'cancel_btn',
						value : '취소'
					}
				));
		});
		
	};
	var joinView=function(){};
	return {
		init : init
	};
})();
meta.navbar=(function(){
	var algo,js,temp,$container;
	var init=function(){
		js=$$('j');
		$container=$('#container');
		algo=js+'/algo.js';
		temp=js+'/template.js';
		onCreate();
	};
	var onCreate=function(){
		$.getScript(temp,() =>{
			$('#navbar').html(introUI.navbar());
			$('#container').html(algoUI.series());
			$('#start_txt').after(compUI.input('start','text'));
			$('#start').attr('placeholder','시작값');
			$('#end_txt').after(compUI.input('end','text'));
			$('#end').attr('placeholder','끝값');
			$('#result').before(compUI.input('resultBtn','button'));
			$('#resultBtn').val('결과보기');
			$('#resultBtn').click(()=>{
				$.getScript(algo,(x1,x2)=>{
					$('#result').text('결과 : '+
							series.arithmetic(
									$('#start').val(),
									$('#end').val()
							));
				});
			});
			$('.dropdown-menu a').eq(0).on('click',function(){
				//app.controller.moveTo('member','member_add');
			});
			$('.dropdown-menu a').eq(1).on('click',function(){
				//app.member.list(1);
			});
			$('.dropdown-menu a').eq(2).on('click',function(){
				//app.controller.moveTo('member','member_detail');
			});
			$('.dropdown-menu a').eq(3).on('click',function(){
				//app.controller.deleteTarget('hong','member','member_delete');
			});
			$('.dropdown-menu a').eq(4).on('click',function(){
				//app.controller.moveTo('grade','grade_add');
			});
			$('.dropdown-menu a').eq(5).on('click',function(){
				//app.controller.moveTo('hong','grade','grade_list');
			});
			$('.dropdown-menu a').eq(6).on('click',function(){
				//app.controller.moveTo('grade','grade_detail');
			});
			$('.dropdown-menu a').eq(7).on('click',function(){
				//app.controller.deleteTarget('hong','grade','grade_delete');
			});
			$('.dropdown-menu a').eq(8).on('click',function(){
				//app.controller.moveTo('board','board_write');
			});
			$('.dropdown-menu a').eq(9).on('click',function(){
				//app.controller.moveTo('board','board_list');
			});
			$('.dropdown-menu a').eq(10).on('click',function(){
				//app.controller.moveTo('board','board_detail');
			});
			$('.dropdown-menu a').eq(11).on('click',function(){
				//app.controller.deleteTarget('hong','board','board_delete');
			});
			$('#arithBtn').on('click',function(){
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('등차수열의 합');
				$('#resultBtn').click(()=>{
					$.getScript(algo,(x1,x2)=>{
						$('#result').text('결과 : '+
								series.arithmetic(
										$('#start').val(),
										$('#end').val()
								));
					});
				});
			});
			$('#switchBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('스위치수열의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.switchSeries());
					});
				})
			});
			
			
			
			$('#switchBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('스위치수열의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.switchSeries());
					});
				})
			});
			
			$('#geoBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('등비수열의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.diffSeries());
					});
				})
			});
			$('#facBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('팩토리얼 수열의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.factorial());
					});
				})
			});
			$('#fiboBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('피보나치 수열의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.fibonacci());
					});
				})
			});
			//배열 부분
			$('#selBtn').click(()=>{
				var i=0; 
				var sortList=new Array();
				$container.append(compUI.div('content')).css({'width':'100%'});
				$('#content').css({'width':'50%','margin':'0 auto'});
				$('#content').html(algoUI.sort());
				$('#input_label').after(compUI.input('input_box','text'));
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('다음');
				$('h1').html('선택정렬');
				$('#resultBtn').click(()=>{
					sortList[i]=$('#input_box').val();
					$('#input_box').val('');
					i++
					if(i==5){
						alert(sortList+'   5개!!');
						$('#input_box').remove();
						$('#input_label').remove();
						$('#resultBtn').val('결과보기');
						$('#resultBtn').click(()=>{
							console.log('선택정렬');
							$.getScript(algo,()=>{
	                            $('#resultBtn').remove();
								$('#result').html('<h3>결과값 : '+sort.selection(sortList)+'</h3>');
							});
						});
					}
				});
			});
			$('#bubbleBtn').click(()=>{
				var i=0; 
				var sortList=new Array();
				$container.append(compUI.div('content')).css({'width':'100%'});
				$('#content').css({'width':'50%','margin':'0 auto'});
				$('#content').html(algoUI.sort());
				$('#input_label').after(compUI.input('input_box','text'));
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('다음');
				$('h1').html('버블 정렬');
				$('#resultBtn').click(()=>{
					sortList[i]=$('#input_box').val();
					$('#input_box').val('');
					i++
					if(i==5){
						alert(sortList+'   5개!!');
						$('#input_box').remove();
						$('#input_label').remove();
						$('#resultBtn').val('결과보기');
						$('#resultBtn').click(()=>{
							console.log('선택정렬');
							$.getScript(algo,()=>{
	                            $('#resultBtn').remove();
								$('#result').html('<h3>결과값 : '+sort.bubble(sortList)+'</h3>');
							});
						});
					}
				});
			});
	         
			$('#insertBtn').click(()=>{
				var i=0; 
				var sortList=new Array();
				$container.append(compUI.div('content')).css({'width':'100%'});
				$('#content').css({'width':'50%','margin':'0 auto'});
				$('#content').html(algoUI.sort());
				$('#input_label').after(compUI.input('input_box','text'));
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('다음');
				$('h1').html('삽입 정렬');
				$('#resultBtn').click(()=>{
					sortList[i]=$('#input_box').val();
					$('#input_box').val('');
					i++
					if(i==5){
						alert(sortList+'   5개!!');
						$('#input_box').remove();
						$('#input_label').remove();
						$('#resultBtn').val('결과보기');
						$('#resultBtn').click(()=>{
							console.log('삽입정렬');
							$.getScript(algo,()=>{
	                            $('#resultBtn').remove();
								$('#result').html('<h3>결과값 : '+sort.insertion(sortList)+'</h3>');
							});
						});
					}
				});
			});
			$('#rankBtn').click(()=>{
				var i=0; 
				var sortList=new Array();
				$container.append(compUI.div('content')).css({'width':'100%'});
				$('#content').css({'width':'50%','margin':'0 auto'});
				$('#content').html(algoUI.sort());
				$('#input_label').after(compUI.input('input_box','text'));
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('다음');
				$('h1').html('석차구하기');
				$('#resultBtn').click(()=>{
					sortList[i]=$('#input_box').val();
					$('#input_box').val('');
					i++
					if(i==5){
						alert(sortList+'   5개!!');
						$('#input_box').remove();
						$('#input_label').remove();
						$('#resultBtn').val('결과보기');
						$('#resultBtn').click(()=>{
							console.log('삽입정렬');
							$.getScript(algo,()=>{
	                            $('#resultBtn').remove();
								$('#result').html('<h3>결과값 : '+sort.ranking(sortList)+'</h3>');
							});
						});
					}
				});
			});
			
			
			
			
		});
	};

	return {init:init};
})();


meta.session=
	{
	   init : (x)=>{
				sessionStorage.setItem('x',x);
				sessionStorage.setItem('j',x+'/resources/js');
				sessionStorage.setItem('c',x+'/resources/css');
				sessionStorage.setItem('i',x+'/resources/img');
	   		  },
	   getPath : (x)=>{
				return sessionStorage.getItem(x);
	   		  }
	};
var $$= function(x){return meta.session.getPath(x);};