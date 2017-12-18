$(function(){
	// 先隐藏小火箭
	$(".backtop").hide();
	//当滚动条滚动到500时出现
	$(function () {
		$(window).scroll(function(){
		if ($(window).scrollTop()>(500)){
		    $(".backtop").show();
		}
		if ($(window).scrollTop()<300){
		    $(".backtop").hide();
		     // 使得回到顶部后再次切换为原来的背景图片
		     $(".backtop").css({'background':'url(../img/top_normal.png)'},1000);
		}
      });
    });
	//当点击小火箭后，回到页面顶部位置,并更换小火箭的图片
		$(".backtop").click(function(){
		    $('body,html').animate({scrollTop:0},1000);
		    $(".backtop").css({'background':'url(../img/top_side.png)'},1000);
		return false;
     });
        // 显示遮罩层部分内容
        $('#anynore').click(function(){
        	$('.anymoreshow').show()
        });
        $('.close').click(function(){
        	$('.anymoreshow').hide()
        })

})
	// 轮播
     function showinner(sh,sec){
       	for(var i=1;i<=6;i++){
       		$("#luninner"+i).hide();
       	}
       	$(sec).show();
       	for(var j=1;j<=7;j++){
       		$('.lunbtn'+j).removeClass('lunbtn-active');
       	}
       	$(sh).addClass('lunbtn-active');
       }

     function showpanl(sh,sec){
       	for(var i=1;i<=4;i++){
       		$("#panlchange"+i).hide();
       	}
       	$(sec).show();
       	for(var j=1;j<=5;j++){
       		$('.panl'+j).removeClass('panlactive');
       	}
       	$(sh).addClass('panlactive');
       }


