$(function(){
  $("li").eq(0).mouseover(function(){
    $("#p1").show();
  });

  $("#l1,a").mouseover(function(){
    $(this).css("color","red");
  });
  $("#l1,a").mouseout(function(){
    $(this).css("color","#551A8B");
  });
  $("li").eq(1).mouseover(function(){
    $("#p2").css('display','block');
  });
  $("li").eq(2).mouseover(function(){
    $("#p3").css('display','block');
  });
});

$(function(){
  $("li").eq(0).mouseout(function(){
    $("#p1").hide();
  });
  $("li").eq(1).mouseout(function(){
    $("#p2").css('display','none');
  });
  $("li").eq(2).mouseout(function(){
    $("#p3").css('display','none');
  });
});
//更换网页

$(function(){
  $("#l1,p").click(function(){
    $("#reg").show().siblings().hide();
  });
});
$(function(){
  $("#l2,p").click(function(){
    $("#buy").show().siblings().hide();
  });
});
$(function(){
  $("#l3,p").click(function(){
    $("#sale").show().siblings().hide();
  });
});




/*function bian(){
	document.getElementById('content-1').style.display="block";
	
}*/