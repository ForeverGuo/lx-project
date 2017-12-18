/**
 * Created by Administrator on 2016/12/1.
 */

$(function () {

//	Image2
  var timer1=null;
  var i=0;
  var j=0;

	$("#functionimg2").click(function(){
	    clearInterval(timer1);
	    timer1=setInterval(function(){
	    	i++;
	    	j++;
	    	if(i==1&&j==1){
	    		var b1=document.getElementById("hourt4");
	    		b1.style.display='block';
	    		$("#progress1").val(j);
	    	}
	    	if(i==2&&j==2){
	    		var b2=document.getElementById("hourt5");
	    		b2.style.display='block';
	    		$("#progress1").val(j);
	    	}
	    	if(i==3&&j==3){
	    		var b3=document.getElementById("hourt6");
	    		b3.style.display='block';
	    	}
	    	if(i==4&&j==4){
	    		var b4=document.getElementById("hourt7");
	    		b4.style.display='block';
	    		$("#progress1").val(j);
	    	}
	    	if(i==5&&j==5){
	    		var b5=document.getElementById("hourt8");
	    		b5.style.display='block';
	    		$("#progress1").val(j);
	    	}
	    	if(i==6&&j==6){
	    		var b6=document.getElementById("hourt9");
	    		b6.style.display='block';
	    		$("#progress1").val(j);
	    	}if(i==7&&j==7){
	    		var b7=document.getElementById("hourt10");
	    		b7.style.display='block';
	    		$("#progress1").val(j);
	    	}
	    	if(i==8&&j==8){
	    		var b8=document.getElementById("hourt11");
	    		b8.style.display='block';
	    		$("#progress1").val(j);
	    	}
	    	if(i==9&&j==9){
	    		var b9=document.getElementById("hourt12");
	    		b9.style.display='block';
	    		$("#progress1").val(j);
	    	}
	    	if(i==10&&j==10){
	    		var b10=document.getElementById("hourt1");
	    		b10.style.display='block';
	    		$("#progress1").val(j);
	    	}
	    	if(i==11&&j==11){
	    		var b11=document.getElementById("hourt2");
	    		b11.style.display='block';
	    		$("#progress1").val(j);
	    	}
	    	if(i==12){

	    		$("#hourt1").hide();
//	    		$("#hourt2").hide();
	    		$("#hourt4").hide();
	    		$("#hourt5").hide();
	    		$("#hourt6").hide();
	    		$("#hourt7").hide();
	    		$("#hourt8").hide();
	    		$("#hourt9").hide();
	    		$("#hourt10").hide();
	    		$("#hourt11").hide();
	    		$("#hourt12").hide();
//	    		i=0;

	    	}
	    	if(i==13){
	    		$("#hourt2").addClass("hour2green");
	    		console.log("11111");
	    	}
	    	if(i==14){
	    		$("#hourt2").removeClass("hour2green");
	    		console.log("2222")
	    	}
	    	if(i==15){
	    		$("#hourt2").addClass("hour2blue");
	    	}
	    	if(i==16){
	    		$("#hourt2").removeClass("hour2blue");
	    	}
	    	if(i==17){
	    		$("#hourt2").addClass("hour2purple");
	    	}
	    	if(i==18){
	    		$("#hourt2").removeClass("hour2purple");
	    	}
	    	if(i==19){
	    		clearInterval(timer1);
	    		i=0;
	    		j=0;
	    		$("#progress1").val(j);
	    	}

	    },500);
	})
	//img3

  var timer2=null;
    var i=0;
	$("#functionimg3").click(function(){
    clearInterval(timer2);
		timer2=setInterval(function(){
      i++;
			if(i==1||i==3){
			$("#houra2").addClass("hour2green");
		}
		if(i==2||i==4){
			$("#houra2").removeClass("hour2green");
		}
		if(i==5||i==7){
			$("#houra2").addClass("hour2yellow");
		}
		if(i==6||i==8){
			$("#houra2").removeClass("hour2yellow");
		}
		if(i==9||i==11){
			$("#houra2").addClass("hour2red");
		}
		if(i==10||i==12){
			$("#houra2").removeClass("hour2red");
		}
		if(i==13||i==15){
			$("#houra2").addClass("hour2blue");
		}
		if(i==14||i==16){
			$("#houra2").removeClass("hour2blue");
		}
		if(i==17||i==19){
			$("#houra2").addClass("hour2purple");
		}
		if(i==18||i==20){
			$("#houra2").removeClass("hour2purple");
		}
		if(i==21){
			clearInterval(timer2);
      i=0;
		}
		},500);

	//img4
  var timer4=null;
    var i=0;
	$("#functionimg4").click(function(){
    clearInterval(timer4);
		timer4=setInterval(function(){
      i++;
			if(i==1||i==3||i==5){
			$("#hourb2").addClass("hour2blue");
			}
		if(i==2||i==4||i==6){
			$("#hourb2").removeClass("hour2blue");
		}
		if(i==7){
			clearInterval(timer4);
      i=0;
		}
		},500)
	})


//header
    $('#chanpin').mouseenter(function () {
        $('.block').css({'color':'#808080'});
        $('.navbar').css({'background':'#fff','border':'1px solid transparent'});
        $('.logo').css({'background':'url(img/inwatch_logo2_f.png)'});
        $('.blank').slideDown('300');
        $('.container-watch').show(function () {
            // console.log($target);
                mySwiper = new Swiper('.swiper-container1', {
                    slidesPerView: 4,
                    centeredSlides: true,
                    paginationClickable:true,
                    spaceBetween: 10,
                    grabCursor:true,
                    autoplay:2000,
                    loop:true,
                    prevButton:'.swiper-button-prev',
                    nextButton:'.swiper-button-next',
                    autoplayDisableOnInteraction:false
                });
            }).mouseover(function(){
                $('.blank').show();
                $('.container-watch').show();
                $('.block').css({'color':'#000'});
                $('.navbar').css({'background':'#fff'});
                $('.logo').css({'background':'url(img/inwatch_logo2_f.png)'});

            })
            .mouseleave(function () {
                $('.container-watch').hide();
                $('.navbar').css({'background':'#000'});
                $('.block').css({'color':'#808080'});
                $('.logo').css({'background':'url(img/index.png)'});
            });
    }).mouseleave(function(){
        $('.container-watch').hide();
        $('.navbar').css({'background':'#000'});
        $('.block').css({'color':'#808080'});
        $('.logo').css({'background':'url(img/index.png)'});
        $('.blank').hide();
    });

    $('.blank').mouseenter(function () {
        $('.blank').show();
        $('.container-watch').show();
        $('.block').css({'color':'#000'});
        $('.navbar').css({'background':'#fff'});
        $('.logo').css({'background':'url(img/inwatch_logo2_f.png)'});
    }).mouseleave(function () {
        $('.blank').hide();
        $('.container-watch').hide();
        $('.navbar').css({'background':'#000'});
        $('.block').css({'color':'#808080'});
        $('.logo').css({'background':'url(img/index.png)'});
        $('.blank').hide();
    });

    $('.pLeft').click(function(){
        $('.swiper-button-prve').click();
        console.log('aaaa');
    });
    $('.pRight').click(function(){
        $('.swiper-button-next').click();
        console.log('aaaa');
    });




      setInterval( function() {

      var seconds = new Date().getSeconds();
      var sdegree = seconds * 6;
      var srotate = "rotate(" + sdegree + "deg)";

      $("#sec").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});

      }, 1000 );


//    控制刷新
        setInterval( function() {
		$("#hour11,#hour12,#hour1").css({"display":"none"}).removeClass("blink1");
      }, 3000 );
        $("#hour11,#hour12,#hour1").css({"display":"block"}).addClass("blink1");
});
});

window.onload=function(){

//控制分针
      setInterval( function() {
      var hours = new Date().getHours();
      var mins = new Date().getMinutes();
      var hdegree = hours * 30 + (mins / 2);
      var hrotate = "rotate(" + hdegree + "deg)";

      $(".hand1").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});

      }, 1000 );


//   控制时针
      setInterval( function() {
      var mins = new Date().getMinutes();
      var mdegree = mins * 6;
      var mrotate = "rotate(" + mdegree + "deg)";
      $(".hand2").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});

      }, 1000 );
}



