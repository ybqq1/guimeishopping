$(function(){
	$("input").eq(0).focus(function(){
	$(this).attr("placeholder","");
	});
	$("input").eq(1).focus(function(){
	$(this).attr("placeholder","");
	});
});
$(function(){
	$("input").eq(0).blur(function(){
	$(this).attr("placeholder","请输入您的用户名");
	});
	$("input").eq(1).blur(function(){
	$(this).attr("placeholder","请输入您的登录密码");
	});
});





/*$(document).ready(function(){
  $("#username").blur(function(event) {
    $.ajax({
      type:"GET",
      url:"checkAccount.php?account="+$("#account").val(),
      dataTypes:"text",
      success:function(msg){
        $("#usernameStatus").html(msg);
      },
      error:function(jqXHR) {
        alert("账号发生错误！")
      },
    });
  });
  
  $("#password").blur(function(event) {
    $.ajax({
      type:"GET",
      url:"checkPassword.php?",
      dataTypes:"text",
      data:"account="+$("#account").val()+"&password="+$("#password").val(),
      success:function(msg){
        $("#passwordStatus").html(msg);
      },
      error:function(jqXHR) {
        alert("密码查询发生错误！")
      },
    });
  });
});*/
//js登录验证
function login(){
	var matchResult=true;
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	if(username==""||password==""){
	alert("请确认有木有空");
	matchResult=false;
	}else if (password.length<6){
		alert("请输入6位字符以上");
		matchResult=false;
	};
return matchResult;
}