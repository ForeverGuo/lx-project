$(window).on('scroll',function(){
	getHeight();
});
function getHeight(){
	var scrollHeight=parseInt($(document).scrollTop());
	if(scrollHeight>=160){
		$('.fix').css('display','block');
	}else{
		$('.fix').css('display','none');
		$('.fix img').attr('src','../img/../img/top_normal.png')
	}
}
$(function(){
	$('.fix').click(function(){
		$('.fix img').attr('src','../img/top_side.png');
		$('body,html').animate({scrollTop:0},1000);
	})
});
