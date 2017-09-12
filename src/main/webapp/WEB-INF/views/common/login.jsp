<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%-- <jsp:include page="../common/common_head.jsp"/> --%>
<div id="container" style="margin-top:100px">
	<form id="login_box" name="login_box" >
		<div style="height:40px;width:300px; color:red;font-size:20px;center;">${result}</div>
		<img src="<%=application.getContextPath()%>/resources/img/login.jpg" style="width:400px;" alt="" /><br />
		<span id="login_id">ID</span>
		<input type="text" id="input_id" name="id" value="0"/> <br />
		<span id="login_pass">PASSWORD</span> 
		<input type="text" id="input_pass" name="pass" value="0"/> <br /><br />
		<input id="loginBtn" type="submit" value="LOGIN" />
		<!-- <input type="hidden" name="action" value="login" />
		<input type="hidden" name="page" value="main" /> -->
		<input type="reset" value="CANCEL" />
	</form>
</div>

</body>
</html>

<script>
app.auth.init();
</script>