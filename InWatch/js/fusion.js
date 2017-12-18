/**
 * Created by Administrator on 2016/12/2.
 */

    var windowHeight = $(window).height();
    $(".swiper-containerFusion").height(windowHeight);//给换页区域设置高度
     swiper3= new Swiper('.swiper-containerFusion',{
        effect:true,
        spaceBetween:0,
       direction:'vertical',
       slidePerView:1,
       paginationClickable:true,
       nextButton:'.nextBtn',
       mousewheelControl:true,
       slidesOffsetAfter : 340
   });

    $(".swiper-swiperHid1").height(windowHeight);//给换页区域设置高度
     swiper5= new Swiper('.swiperHid1',{
        effect:true,
        grabCursor:true,
        mousewheelControl : true,
        slidesOffsetAfter : 340,
        direction : 'vertical'
    });



     swiper4= new Swiper('.swiperHid',{
        effect:true,
        pagination: '.swiper-pagination',
        slidesPerView:1,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween:0,
        grabCursor:true,
        autoplay:5000,
        loop:true,
        autoplayDisableOnInteraction:false

    });



    $(function () {
        $('#point').click(function () {
            $('.slide1').css({'background':'url(../img/fusionindexbg2.jpg)no-repeat','background-size':'cover'});
        })
    });