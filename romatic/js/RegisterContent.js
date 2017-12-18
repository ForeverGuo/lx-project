/**
 * Created by Administrator on 2016/12/29.
 */
$(function(){
    // 二维数组, 用于生成随机验证码
    randomCode();
    $("#ma1-img").click(function () {
        // console.log("code");
        randomCode();
    });
});
var array = [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], ["0", "1", "2", "3", "4", "6", "7", "8", "9"]];
var str = "";
function randomCode () {
    str = "";
    for(var i = 0; i < 4; i++) {
        //随机生成坐标
        var temp = Math.random();
        temp = temp < 0.5 ? Math.floor(temp) : Math.ceil(temp);//floor是向下取整，ceil是向上取整，所以temp = 0或者1
        var length = array[temp].length;
        //从任意值开始至任意值
        var index = parseInt(Math.random()*length);
        console.log(str);
        str += array[temp][index];

    }
    $("#ma1-img").html(str);
}

/*--------正则验证------*/

function register() {
    if(!checkname()){
        return false;
    }else if (!checkpass()) {
        return false;
    } else if(!checkemail()){
        return false;
    }
    return true;
}

function checkname()
{
    var name = document.getElementById("uName").value;
    var ts = document.getElementById("namets");
    if(!isUserName(name))
    {
        ts.innerHTML ="用户名格式不正确!";
        ts.style.color="red";
        return false;
    }
    $.post("checkUserName.action", {" userName": name },function(data){
        var d = $.parseJSON(data);
        //console.log(d.success);
        if(d.success!=true){
            ts.innerHTML ='用户名已经被注册!';
            ts.style.color='red';
            return true;
        }
    });
    ts.innerHTML ='用户名可以使用！';
    ts.style.color='green';
    return true;
}

function isUserName(uname){
    var reg = /^[0-9a-zA-Z]/;
    return reg.test(uname);
}

function checkpass(){
    var userPass = $("#uPass").val();

    var pts = document.getElementById("passts");

    if(userPass.length<6 || userPass.length >15)
    {
        pts.innerHTML ="6-16位字符,可由中文,英文,数字及'_'组成";
        pts.style.color="red";
        return false;
    }
    pts.innerHTML ="密码可以使用!";
    pts.style.color="green";
    return true;
}
function checkrpass(){
    var userPass = $("#uPass").val();
    var userRPass = $("#uRPass").val();
    var prts =  document.getElementById("passrts");
    if (userPass != userRPass) {
        prts.innerHTML="两次密码输入不一致!";
        prts.style.color="red";
        return false;
    }
    prts.innerHTML ="";
    prts.style.color="green";
    return true;
}
function checkemail(){
    var userEmail = $("#uEmail").val();
    var ets = document.getElementById("emailts");
    if(!isEmail(userEmail)){
        ets.innerHTML ="请输入正确的邮箱格式!";
        ets.style.color="red";
        return false;
    }
    ets.innerHTML ="邮箱可以使用!";
    ets.style.color="green";
    return true;
}
function isEmail(str){
    var reg = /[a-z0-9-]{1,30}@[a-z0-9-]{1,65}.[a-z]{3}/;
    return reg.test(str);
}