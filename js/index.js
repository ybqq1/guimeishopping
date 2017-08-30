//轮播图
var i=0;
var timer;
$(function(){
	$('.ig').eq(0).show().siblings().hide();
	showTime();
	$('.tab').hover(function(){
		i=$(this).index();
		Show();
		clearInterval(timer);//清除轮播
	},function(){
		showTime();
	});
	$('.btn1').click(function(){
	clearInterval(timer);
	if(i==0){
	i=4;
	}
	i--;
	Show();
	showTime();
	});
	$('.btn2').click(function(){
	clearInterval(timer);
	if(i==3){
	i=-1;
	}
	i++;
	Show();
	showTime();
	});
});


function Show(){
	$('.ig').eq(i).show().siblings().hide();
	$('.tab').eq(i).addClass('bg').siblings().removeClass('bg');
};

function showTime(){
timer=setInterval(function(){
	i++;
	if(i==4){
		i=0;
		}
		Show();
	},2000);
};

//选项卡
$(function(){
$('.li1').mouseover(function(){
	$('.content-left').show();
	$('.li1').css('background','white');
	$('.content-right').hide();
	});
$('.li2').mouseover(function(){
	$('.content-right').show();
	$('.content-left').hide();
	$('.li2').css('background','white');
	});
$('.li1').mouseout(function(){
	$('.li1').css('background','#F7E3A8');

});
$('.li2').mouseout(function(){
	$('.li2').css('background','#F7E3A8');

});

});







