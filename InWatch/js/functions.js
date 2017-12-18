/**
 * Created by Administrator on 2016/12/9.
 // */

$(function(){
    /*--------大屏--------*/
    // 控制秒针走动
    setInterval( function() {
        var seconds = new Date().getSeconds();
        var sdegree = seconds * 6;
        var srotate = "rotate(" + sdegree + "deg)";
        $("#sec").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});

    }, 1000 );
    // 控制分针走动
    setInterval(function(){
        var mins = new Date().getMinutes();
        var mdegree = mins * 6;
        var mrotate ="rotate("+mdegree+"deg)";
        $("#min").css({
            "-moz-transform" : mrotate,
            "-webkit-transform" : mrotate
        })
    },1000);
    // 控制时针走动
    setInterval(function(){
        var hours = new Date().getHours();
        var mins = new Date().getMinutes();
        var hdegree = hours*30+(mins/2);
        var hrotate ="rotate("+hdegree+"deg)";
        $("#hour").css({
            "-moz-transform" :hrotate,
            "-webkit-transform" :hrotate
        })
    },1000);
/*----------小屏-------------*/
    // 控制秒针走动
    setInterval( function() {
        var seconds = new Date().getSeconds();
        var sdegree = seconds * 6;
        var srotate = "rotate(" + sdegree + "deg)";
        $("#sec1").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});

    }, 1000 );
    // 控制分针走动
    setInterval(function(){
        var mins = new Date().getMinutes();
        var mdegree = mins * 6;
        var mrotate ="rotate("+mdegree+"deg)";
        $("#min1").css({
            "-moz-transform" : mrotate,
            "-webkit-transform" : mrotate
        })
    },1000);
    // 控制时针走动
    setInterval(function(){
        var hours = new Date().getHours();
        var mins = new Date().getMinutes();
        var hdegree = hours*30+(mins/2);
        var hrotate ="rotate("+hdegree+"deg)";
        $("#hour1").css({
            "-moz-transform" :hrotate,
            "-webkit-transform" :hrotate
        })
    },1000);

/*---------控制亮灯---------*/
    var timer1=null;
    var timer2=null;
    var timer3=null;
    var timer4=null;
    var timer5=null;
    var timer6=null;

  $('#btn1').click(function(){
      clearInterval(timer1);
      var i=0;
     timer1 = setInterval(function(){
             i++;
             if(i==1){
                 var b1= document.getElementById("bg01");
                 b1.style.display='block';
             }
             if(i==2){
                 var b2= document.getElementById("bg02");
                 b2.style.display='block';
             }
             if(i==3){
                 var b3= document.getElementById("bg03");
                 b3.style.display='block';
             }
             if(i==6){
                 clearInterval(timer1);
                 $('#bg01').hide();
                 $('#bg02').hide();
                 $('#bg03').hide();

             }
         },500);


  });

    $('#btn2').click(function(){
        clearInterval(timer2);
        var i=0;
        timer2 = setInterval(function(){
            i++;
            if(i==1){
                var b1= document.getElementById("bg01");
                b1.style.display='block';
            }
            if(i==2){
                var b2= document.getElementById("bg02");
                b2.style.display='block';
            }
            if(i==3){
                var b3= document.getElementById("bg03");
                b3.style.display='block';
            }
            if(i==4){
                var b4= document.getElementById("bg04");
                b4.style.display='block';
            }
            if(i==5){
                var b5= document.getElementById("bg05");
                b5.style.display='block';
            }
            if(i==8){
                clearInterval(timer2);
                $('#bg01').hide();
                $('#bg02').hide();
                $('#bg03').hide();
                $('#bg04').hide();
                $('#bg05').hide();
                i=0;
            }
        },500);

    });

    $('#btn3').click(function(){
        clearInterval(timer3);
        var i=0;
        timer3 = setInterval(function(){
            i++;
            if(i==1){
                var b1= document.getElementById("bg01");
                b1.style.display='block';
            }
            if(i==2){
                var b2= document.getElementById("bg02");
                b2.style.display='block';
            }
            if(i==3){
                var b3= document.getElementById("bg03");
                b3.style.display='block';
            }
            if(i==4){
                var b4= document.getElementById("bg04");
                b4.style.display='block';
            }
            if(i==5){
                var b5= document.getElementById("bg05");
                b5.style.display='block';
            }
            if(i==6){
                var b6= document.getElementById("bg06");
                b6.style.display='block';
            }
            if(i==7){
                var b7= document.getElementById("bg07");
                b7.style.display='block';
            }
            if(i==7){
                var b8= document.getElementById("bg08");
                b8.style.display='block';
            }
            if(i==8){
                var b9= document.getElementById("bg09");
                b9.style.display='block';
            }
            if(i==9){
                var b10= document.getElementById("bg10");
                b10.style.display='block';
            }
            if(i==9){
                var b11= document.getElementById("bg11");
                b11.style.display='block';
            }
            if(i==13){
                clearInterval(timer3);
                $('#bg01').hide();
                $('#bg02').hide();
                $('#bg03').hide();
                $('#bg04').hide();
                $('#bg05').hide();
                $('#bg06').hide();
                $('#bg07').hide();
                $('#bg08').hide();
                $('#bg09').hide();
                $('#bg10').hide();
                $('#bg11').hide();
                i=0;
            }
        },500);

    });

    $('#btn4').click(function(){
        clearInterval(timer4);
        var i=0;
        timer4 = setInterval(function(){
            i++;
            if(i==1){
                var b1= document.getElementById("bg001");
                b1.style.display='block';
            }
            if(i==2){
                var b2= document.getElementById("bg002");
                b2.style.display='block';
            }
            if(i==3){
                var b3= document.getElementById("bg003");
                b3.style.display='block';
            }
            if(i==6){
                clearInterval(timer4);
                $('#bg001').hide();
                $('#bg002').hide();
                $('#bg003').hide();
                i=0;
            }
        },500);

    });

    $('#btn5').click(function(){
        clearInterval(timer5);
        var i=0;
        timer5 = setInterval(function(){
            i++;
            if(i==1){
                var b1= document.getElementById("bg001");
                b1.style.display='block';
            }
            if(i==2){
                var b2= document.getElementById("bg002");
                b2.style.display='block';
            }
            if(i==3){
                var b3= document.getElementById("bg003");
                b3.style.display='block';
            }
            if(i==4){
                var b4= document.getElementById("bg004");
                b4.style.display='block';
            }
            if(i==5){
                var b5= document.getElementById("bg005");
                b5.style.display='block';
            }
            if(i==8){
                clearInterval(timer5);
                $('#bg001').hide();
                $('#bg002').hide();
                $('#bg003').hide();
                $('#bg004').hide();
                $('#bg005').hide();
                i=0;
            }
        },500);

    });

    $('#btn6').click(function(){
        clearInterval(timer6);
        var i=0;
        timer6 = setInterval(function(){
            i++;
            if(i==1){
                var b1= document.getElementById("bg001");
                b1.style.display='block';
            }
            if(i==2){
                var b2= document.getElementById("bg002");
                b2.style.display='block';
            }
            if(i==3){
                var b3= document.getElementById("bg003");
                b3.style.display='block';
            }
            if(i==4){
                var b4= document.getElementById("bg004");
                b4.style.display='block';
            }
            if(i==5){
                var b5= document.getElementById("bg005");
                b5.style.display='block';
            }
            if(i==6){
                var b6= document.getElementById("bg006");
                b6.style.display='block';
            }
            if(i==7){
                var b7= document.getElementById("bg007");
                b7.style.display='block';
            }
            if(i==7){
                var b8= document.getElementById("bg008");
                b8.style.display='block';
            }
            if(i==8){
                var b9= document.getElementById("bg009");
                b9.style.display='block';
            }
            if(i==9){
                var b10= document.getElementById("bg010");
                b10.style.display='block';
            }
            if(i==9){
                var b11= document.getElementById("bg011");
                b11.style.display='block';
            }
            if(i==13){
                clearInterval(timer6);
                $('#bg001').hide();
                $('#bg002').hide();
                $('#bg003').hide();
                $('#bg004').hide();
                $('#bg005').hide();
                $('#bg006').hide();
                $('#bg007').hide();
                $('#bg008').hide();
                $('#bg009').hide();
                $('#bg010').hide();
                $('#bg011').hide();
                i=0;
            }
        },500);

    });






});



