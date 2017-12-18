/**
 * Created by Administrator on 2017/1/2.
 */
/*------蜜蜂的动画代码-----*/
function gif(){
    $('.gif-o img').animate({
        marginRight : '-40px',

    },2000).animate({
        marginRight : '-90px',
    },500,function(){
        $('.gif-t img').animate({
            marginTop : '10px',
        },2000).animate({
            marginRight : '30px',
        },2000).fadeOut(3000,function(){
            $('.gif-t img').show().css({'margin-top':'100px','margin-right':'-'+'480'+'px'})
        });

    });
}
/*------mouseover事件的代码-----*/
$(function(){
    /*社会馆的事件*/
    $('#b-li-t').mouseover(function(){
        $('.s-h-g').fadeIn();
    }).mouseout(function(){
        $('.s-h-g').hide();
    });
    $('#shg').mouseover(function(){
        $(this).show();
    }).mouseout(function(){
        $(this).hide();
    });
    /*莲花风采的事件*/
    $('#b-li-r').mouseover(function(){
        $('.l-h-f').fadeIn();
    }).mouseout(function(){
        $('.l-h-f').hide();
    });
    $('#lhf').mouseover(function(){
        $(this).show();
    }).mouseout(function(){
        $(this).hide();
    });
    /*帮助中心的事件*/
    $('#b-li-f').mouseover(function(){
        $('.b-z-z').fadeIn();
    }).mouseout(function(){
        $('.b-z-z').hide();
    });
    $('#bzz').mouseover(function(){
        $(this).show();
    }).mouseout(function(){
        $(this).hide();
    });
});

/*内容的左部分的事件*/

function add(i){
    var a = $('#title'+i).attr('style').slice(27,28);
    // console.log(a);
    $('#list' + i).slideToggle('2000',function(){});
    if(a==2){
        $('#title'+i).attr({'style':'background:url("../images/s3.png") no-repeat'});
    }
    else{
        $('#title'+i).attr({'style':'background:url("../images/s2.png") no-repeat'});
    }
}

/*window.onload的事件---------*/
var timer=null;
window.onload=function(){
    gif();
    timer = setInterval(gif,13000);
};


