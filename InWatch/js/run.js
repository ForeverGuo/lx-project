/**
 * Created by Administrator on 2016/12/2.
 */

    var windowHeight = $(window).height();
    $(".swiper-containerRun").height(windowHeight);//给换页区域设置高度
     swiper2= new Swiper('.swiper-containerRun',{
        effect:true,
        spaceBetween:0,
       direction:'vertical',
       slidePerView:1,
       paginationClickable:true,
       grabCursor:true,
       nextButton:'.nextBtn',
       mousewheelControl:true,
       slidesOffsetAfter : 340,
       onInit:function(swiper2){
           swiperAnimateCache(swiper2);
           swiperAnimate(swiper2);
       },
       onSlideChangeEnd:function(swiper2){
           swiperAnimate(swiper2);
       }
   });



