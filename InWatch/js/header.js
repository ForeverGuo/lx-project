/**
 * Created by Administrator on 2016/12/1.
 */

$(function () {
    $('#chanpin').mouseenter(function () {
        $('.block').css({'color':'#808080'});
        $('.navbar').css({'background':'#fff','border':'1px solid transparent'});
        $('.logo').css({'background':'url(img/inwatch_logo2_f.png)'});
        $('.blank').slideDown('300');
        $('.container-watch').show(function () {
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

    });

    $('.pLeft').click(function(){
        $('.swiper-button-prve').click();
        console.log('aaaa');
    });
    $('.pRight').click(function(){
        $('.swiper-button-next').click();
        console.log('aaaa');
    });
});



