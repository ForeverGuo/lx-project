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
    var a = $('#title'+i).attr('style').slice(24,25);
    $('#list' + i).slideToggle('2000',function(){});
    // console.log(a);
    if(a==2){
        $('#title'+i).attr({'style':'background:url("images/s3.png") no-repeat'});
    }
    else{
        $('#title'+i).attr({'style':'background:url("images/s2.png") no-repeat'});
    }
}
/*下拉菜单--------*/
$(function(){
  $('#sele').click(function(){
      $('#where').show();
      // alert($('#w1').html());
  })

});

function show(y){
    var s = $('#w'+ y).html();
    $('#sele').html(s);
  }
function gg(){
  var e=window.event||arguments.callee.caller.arguments[0];
  var s=e.srcElement||e.target;
  if (s.id!='sele'&&s.id!='s-input1') {
    $('#where').hide();
     $('#s-input1').attr('value','搜索关键词');
  }
}
/*搜索框-------*/
function soso(){
 $('#s-input1').attr('value',' ');
}
/*轮播图-------*/

/*新改写的轮播(let无变量提升)*/

{
var i=1;
}
function lun(){
  i++;
  for(var a=0;a<=8;a++){
    $('#bbbb img').attr('src','images/lun'+ a +'.jpg' ).hide();
    $('#lun'+ a).css({'background':'#fff','color':'#000'});
  }
  if (i==9) {i=1;}
  $('#bbbb img').attr('src','images/lun'+ i +'.jpg' ).fadeIn(3000);
  $('#lun'+ i).css({'background':'blue','color':'#fff'});
}
function stop(y){
  clearInterval(timer);
  timer=null;
  i=y;
  for(var a=0;a<=8;a++){
    $('#bbbb img').attr('src','images/lun'+ a +'.jpg' ).hide();
    $('#lun'+ a).css({'background':'#fff','color':'#000'});
  }
  $('#lun'+ y).css({'background':'blue','color':'#fff'});
  $('#bbbb img').attr('src','images/lun'+ y +'.jpg' ).show();
}
function start(){
  timer=setInterval(lun,5000);
}
/*window.onload的事件---------*/
var timer=null;
window.onload=function(){
  lht();
  gif();
  love();
  timer = setInterval(gif,13000);
  timer = setInterval(lun,6000);
  timer = setInterval(love_bang,5000);
  timer = setInterval(down,5000);
};

function love(){
    $.get("data/love.json",function(data){
      var html = "";
      for(var i = 0;i<data.length;i++){
        html+='<li><span class="s1">'+ data[i].name + "</span>"
        +'<span class="s2">'+ data[i].city + "</span>" +
        '<span class="s3">'+data[i].count+"</span></li>"
      }
      $('.love_g_list').append(html);
      var cloneFirst=$('.love_g_list>li:nth-child(1)').clone();
      $('.love_g_list').append(cloneFirst);
  })
};
var num = 0;
function love_bang(){
  num++;
  $('.love_g_list').animate({'marginTop':'-'+ num*20 +'px'},2000);
  // console.log(num);
  if(num===35){
    num=0;
    $('.love_g_list').animate({'marginTop': 0 +'px'},0);
  }

}

/*动画的停止和开始----------*/
$(function(){
  $('.love_g').mouseover(function(){
      clearInterval(timer);
      timer=null;
  });
  $('.love_g').mouseout(function(){
    timer=setInterval(love,300);
  });
});
/*第二部分的图片内容的动态效果---------*/
function over(i,j){
  $('.content_t_book #b_b'+i).attr('src','img/one'+j+'.png');
  $('.content_t_book #b_bb'+i).attr('src','img/two'+j+'.png');
  $('.content_t_book #b_bbb'+i).attr('src','img/three'+j+'.png');
  $('.content_t_book #b_bbbb'+i).attr('src','img/four'+j+'.jpg');
  $('.content_t_book #b_bbbbb'+i).attr('src','img/five'+j+'.jpg');
  for(var x=1;x<6;x++){
    $('#a'+x).css(
      {'background':'url(images/b5.jpg)no-repeat',
      'color':'#626060','border':'2px solid #98714F'}
      )
  }
  $('.content_t_title #a'+j).css(
    {'background':'url(images/rp2.png)no-repeat 0 center',
    'color':'red'}
    );
}
function over1(i,j){
  $('.content_t_book #c_c'+i).attr('src','img/six'+j+'.png');
  $('.content_t_book #c_cc'+i).attr('src','img/seven'+j+'.png');
  $('.content_t_book #c_ccc'+i).attr('src','img/eight'+j+'.png');
  $('.content_t_book #c_cccc'+i).attr('src','img/nine'+j+'.jpg');
  $('.content_t_book #c_ccccc'+i).attr('src','img/ten'+j+'.jpg');
  for(var x=1;x<6;x++){
    $('#b'+x).css(
      {'background':'url(images/b5.jpg)no-repeat',
      'color':'#626060','border':'2px solid #98714F'}
      )
  }
  $('.content_t_title #b'+j).css(
    {'background':'url(images/rp2.png)no-repeat 0 center',
    'color':'red'}
    );
}
function over2(i,j){
  $('.content_t_book #d_d'+i).attr('src','img/eleven'+j+'.png');
  $('.content_t_book #d_dd'+i).attr('src','img/twelve'+j+'.png');
  $('.content_t_book #d_ddd'+i).attr('src','img/threety'+j+'.png');
  $('.content_t_book #d_dddd'+i).attr('src','img/fourty'+j+'.jpg');
  $('.content_t_book #d_ddddd'+i).attr('src','img/fifty'+j+'.jpg');
  for(var x=1;x<6;x++){
    $('#c'+x).css(
      {'background':'url(images/b5.jpg)no-repeat',
      'color':'#626060','border':'2px solid #98714F'}
      )
  }
  $('.content_t_title #c'+j).css(
    {'background':'url(images/rp2.png)no-repeat 0 center',
    'color':'red'}
    );
}
/*莲花亭的点击事件----------利用克隆实现无缝轮播----------------*/

function lht(){
  $.get('data/question.json',function(data){
      var html = "";
      for(var k =0;k<data.length;k++){
        html += '<li><p><span>提问'+ parseInt(k+1) +'&nbsp;:&nbsp;'+
        '</span>'+data[k].question+'</p>'+
        '<p><span>慢慢回复'+'&nbsp;:&nbsp;'+'</span>'+data[k].answer+'</p><p>'+data[k].reback+
        '</p></li>'
      }
      $('#data').append(html);
      var cloneLi = $('#data>li:nth-child(1)').clone();
      $('#data').append(cloneLi);

    })

}
var count = 0;
function down(){
  count++;
  $('#data').animate({'marginTop':'-'+ count*80 +'px'},3000);
  // console.log(count);
  if(count===15){
    count=0;
    $('#data').animate({'marginTop': 0 +'px'},0);
  }

}
/*莲花厅----动画停止--------*/
$(function(){
  $('.lht-lun').mouseover(function(){
      clearInterval(timer);
      timer=null;
  });
  $('.lht-lun').mouseout(function(){
    timer=setInterval(down,5000);
  });
});
/*-----------fixed事件---------*/
$(function(){
   $('.erWeiMa')
       .mouseenter(function () {
       $('.ewm').show('200');
       $(this).css('background','url(images/zx1.png)no-repeat -236px -183px');
   })
       .mouseleave(function () {
           $('.ewm').hide();
           $(this).css('background','url(images/zx1.png)no-repeat -305px -183px');
   });
    $('.phone')
        .mouseenter(function () {
            $('.tel').animate({'right':'58px'},500);
            $(this).css('background','url(images/zx1.png)no-repeat -236px -246px');
        })
        .mouseleave(function () {
            $('.tel').animate({'right':'-224px'},300);
            $(this).css('background','url(images/zx1.png)no-repeat -305px -246px');
        });

    $('.qq').mouseenter(function () {
        $(this).css('background','url(images/zx1.png)no-repeat -235px -310px');
    })
        .mouseleave(function () {
            $(this).css('background','url(images/zx1.png)no-repeat -304px -310px');
        })
});