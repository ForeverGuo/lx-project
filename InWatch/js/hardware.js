/**
 * Created by Administrator on 2016/12/2.
 */

     windowHeight = $(window).height();
    $(".swiper-containerWare").height(windowHeight);
     swiper3= new Swiper('.swiper-containerWare',{
        effect:true,
        spaceBetween:0,
       direction:'vertical',
       slidePerView:1,
       paginationClickable:true,
       nextButton:'.nextBtn',
       mousewheelControl:true,
       slidesOffsetAfter : 340
   });

    var windowHeight = $(window).height();
    $(".swiper-containerWare2").height(windowHeight);
     swiper4= new Swiper('.swiper-containerWare2',{
        effect:true,
        spaceBetween:0,
        direction:'vertical',
        slidePerView:1,
        paginationClickable:true,
        nextButton:'.nextBtn',
        mousewheelControl:true,
        slidesOffsetAfter : 340
    });











$(function(){


    $('#circle1').click(function(){
        $('.detail2').animate({'right':'-'+'1075px'},500);
        $('.detail3').animate({'right':'-'+'1075px'},500);
        $('.detail4').animate({'right':'-'+'1075px'},500);
        $('.detail5').animate({'right':'-'+'1075px'},500);
        $('.opa').css({'opacity':'0.8'});
        $('#running').hide();
        $('.detail1').animate({'right':'0px'},1000);

    });
    $('#circle2').click(function(){
        $('.detail1').animate({'right':'-'+'1075px'},500);
        $('.detail3').animate({'right':'-'+'1075px'},500);
        $('.detail4').animate({'right':'-'+'1075px'},500);
        $('.detail5').animate({'right':'-'+'1075px'},500);
        $('.opa').css({'opacity':'0.8'});
        $('#running').hide();
        $('.detail2').animate({'right':'0px'},1000);

    });
    $('#circle3').click(function(){
        $('.detail1').animate({'right':'-'+'1075px'},500);
        $('.detail2').animate({'right':'-'+'1075px'},500);
        $('.detail4').animate({'right':'-'+'1075px'},500);
        $('.detail5').animate({'right':'-'+'1075px'},500);
        $('.opa').css({'opacity':'0.8'});
        $('#running').hide();
        $('.detail3').animate({'right':'0px'},1000);

    });
    $('#circle4').click(function(){
        $('.detail1').animate({'right':'-'+'1075px'},500);
        $('.detail2').animate({'right':'-'+'1075px'},500);
        $('.detail3').animate({'right':'-'+'1075px'},500);
        $('.detail5').animate({'right':'-'+'1075px'},500);
        $('.opa').css({'opacity':'0.8'});
        $('#running').hide();
        $('.detail4').animate({'right':'0px'},1000);

    });
    $('#circle5').click(function(){
        $('.detail1').animate({'right':'-'+'1075px'},500);
        $('.detail2').animate({'right':'-'+'1075px'},500);
        $('.detail3').animate({'right':'-'+'1075px'},500);
        $('.detail4').animate({'right':'-'+'1075px'},500);
        $('.opa').css({'opacity':'0.8'});
        $('#running').hide();
        $('.detail5').animate({'right':'0px'},1000);

    });

});





