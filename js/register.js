//注册验证js
/*function register(){
var yourname=document.getElementById("yourname").value;
var username=document.getElementById("username").value;
var psw=document.getElementById("psw").value;
var repsw=document.getElementById("repsw").value;
var mail=document.getElementById("mail").value;
var username=document.getElementById("username").value;
var matchResult=true; 
	if(yourname==""){
	alert("姓名不能为空");
	matchResult=false;
	}else if(yourname.length<2||yourname.length>4){
	alert("姓名应该3或4字符");
	matchResult=false;
	}else if(username==""){
	alert("登录名不能为空");
	matchResult=false;
	}else if(psw==""){
	alert("密码不能为空");
	matchResult=false;
	}else if(psw.length<6){
	alert("密码应该是大于6字符");
	matchResult=false;
	}else if(repsw!=psw){
	alert("密码要相同");
	matchResult=false;
	}else if(mail==""){
	alert("邮箱不能为空");
	matchResult=false;
	}   
  
	 return matchResult; 
}*/ 
//鼠标触动表单则会有响应jquery
$(function(){
	$("input").eq(0).focus (function(){
	$(this).attr("placeholder","");
	});
	$("input").eq(1).focus (function(){
	$(this).attr("placeholder","");
	});
	$("input").eq(2).focus (function(){
	$(this).attr("placeholder","");
	});
	$("input").eq(3).focus (function(){
	$(this).attr("placeholder","");
	});
	$("input").eq(4).focus (function(){
	$(this).attr("placeholder","");
	});
	$("input").eq(11).focus (function(){
	$(this).attr("placeholder","");
	});
})
$(function(){
$("input").eq(0).blur(function(){
$(this).attr("placeholder","请输入您的姓名");
});
$("input").eq(1).blur(function(){
$(this).attr("placeholder","请输入您的用户名");
});
$("input").eq(2).blur(function(){
$(this).attr("placeholder","请输入您的密码");
});
$("input").eq(3).blur(function(){
$(this).attr("placeholder","请确认您的密码");
});
$("input").eq(4).blur(function(){
$(this).attr("placeholder","请输入您的电子邮箱");
});
$("input").eq(11).blur(function(){
$(this).attr("placeholder","请输入出生年月日");
});

});


//jquery实现注册验证




$(function(){
	//关于姓名的验证
	$('#yourname').blur(function(){
		var reg=/^\d+$/;
		var name=$('#yourname').val();
		if(name==""){
			$(this).css({
				border:"1px solid red"
			});
			$('#usercue1').html("<font color='red'><b>×姓名不能为空</b></font>");
			return false;
		}else if(name.length!=0){
			for(var i=0;i<name.length;i++){
				if(name[i].match(reg)){
					$('#usercue1').html("<font color='red'><b>×姓名不能为数字</b></font>");	
					$('#yourname').css({
						border:"1px solid red"
					});
					return false;
				}else{
					$('#yourname').css({
					border:"1px solid gray"
				});
					$('#usercue1').hide();
				};
			};
		}else{
			$('#yourname').css({
				border:"1px solid gray"
				});
				$('#usercue1').hide();
			};
			return false;
	});


	//关于用户名认证
	$('#username').blur(function(){
		if ($('#username').val() == "") {
			$(this).css({
				border: "1px solid red"		
			});
			$('#usercue2').html("<font color='red'><b>×用户名不能为空</b></font>");
			$(this).css({
				border:"1px solid red"
			});
			return false;
		}
		else{
			$('#username').css({
				border:"1px solid gray"
			});
			$('#usercue2').html("（可包含a-z，0-9和下划线）");
			
		};
		return false;
	});
//关于密码
	$('#psw').blur(function(){
		if($('#psw').val()==""){
			$(this).css({
				border:"1px solid red"
			});
			$('#usercue3').html("<font color='red'><b>×密码不能为空</b><font>");
		
		}else if($('#psw').val().length<6){
			$('#usercue3').html("<font color='red'><b>×密码应该6字符以上</b><font>");
			$(this).css({
				border:"1px solid red"
			});
		}else{
			$('#psw').css({
				border:"1px solid gray"
			});
			$('#usercue3').html("（至少包含6个字符）");
		};
	});

	//重复密码
	$('#repsw').blur(function(){
		if ($('#repsw').val() == ""||$('#repsw').val()!=$('#psw').val()){
			$(this).css({
				border: "1px solid red"		
			});
			$('#usercue4').html("<font color='red'><b>×两次密码不一样</b></font>");
		}
		else{
			$('#repsw').css({
				border:"1px solid gray"
			});
			$('#usercue4').hide();
			
		};
	});
	//邮箱的验证
	$('#mail').blur(function(){
		var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
		if ($('#mail').val() == "") {
			$(this).css({
				border: "1px solid red"		
			});
			$('#usercue5').html("<font color='red'><b>×邮箱不能为空</b></font>");
			$(this).css({
				border:"1px solid red"
			});
		}else if(!pattern.test($('#mail').val())){
			$(this).css({
				border:"1px solid red"
			});
			$('#usercue5').html("<font color='red'><b>×邮箱格式不正确</b></font>");	
			}else{
			$('#mail').css({
				border:"1px solid gray"
			});
			$('#usercue5').hide();
			
		}
		$('#regUser').submit();
	});
});