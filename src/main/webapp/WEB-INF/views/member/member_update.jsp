<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<header>

</header>
           
		<div class="container" style="width:60%">
			<div class="row main">
				<div class="panel-heading">
	               <div class="panel-title text-center">
	               		<h1 id="i" class="title"></h1>
	               		<hr />
	               	</div>
	            </div> 
				<div class="main-login main-center">
					<form id="update_form" class="form-horizontal">
				<input id="id" name="id" type="hidden" class="form-control" value="${student.id}" readonly  placeholder=""/>
						
						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label">NAME</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input id="name" name="name" type="text" class="form-control" value="${student.name}" readonly  placeholder=""/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="email" class="cols-sm-2 control-label">Email</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input id="email" type="text" class="form-control" name="email" placeholder="" value="${student.email}"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="username" class="cols-sm-2 control-label">PHONE</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
									<input id="phone" name="phone" type="text" class="form-control"  placeholder="" value="${student.phone}"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="password" class="cols-sm-2 control-label">Password</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input id="password" name="password" type="password" class="form-control" data-toggle="popover" placeholder="" />
								</div>
								
								<span id="result"></span>
							</div>
						</div>

						<div class="form-group">
							<label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input id="confirm" name="confirm" type="password" class="form-control" placeholder="Confirm your Password"/>
								</div>
								<span id="confirmPass"></span>
							</div>
						</div>

						<div class="form-group ">
						<!-- onclick="app.controller.updateStudent()" -->
							<button id="confirmBtn" name="confirmBtn" type="submit" class="btn btn-primary btn-lg btn-block login-button" >UPDATE</button>
						</div>
					</form>
				</div>
			</div>
		</div>

<script>
app.member.init();
//alert("넘어온아이디  :"+sessionStorage.getItem('id'));

//$(sessionStorage.getItem('id'));


</script>
