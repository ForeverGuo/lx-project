/**
 * Created by Administrator on 2016/12/10.
 */



$(function(){
    // 二维数组, 用于生成随机验证码
    randomCode();
    $("#ma1-img").click(function () {
        console.log("code");
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

/*--------正则-------*/

function checkname() {
    var name = document.getElementById("uName").value;
    var border = document.getElementById("uName");
    var ts = document.getElementById("namets");
    var cc = document.getElementById("cc");
    var user = getCookie('user');
    if (user == name) {
        ts.style.display = 'none';
        cc.style.color = "#000";
        border.style.border = "1px solid #000";
        return true;
    } else {
        ts.style.display = 'block';
        ts.innerHTML = "用户名不存在!";
        ts.style.color = "#a94442";
        cc.style.color = "#a94442";
        border.style.border = "1px solid #a94442";
        return false;
    }

}


function checkpass(){
    var userPass = $("#uPass").val();
    var border = document.getElementById("uPass");
    var pts = document.getElementById("passts");
    var cc = document.getElementById("cc2");
    var password = getCookie('password');
    if(userPass==password){
        pts.style.display='none';
        pts.style.color="#000";
        cc.style.color="#000";
        border.style.border="1px solid #000";
        return true;
    }else{
        pts.style.display='block';
        pts.innerHTML ="密码不正确，请重新输入！";
        pts.style.color="#a94442";
        cc.style.color="#a94442";
        border.style.border="1px solid #a94442";
        return false;
    }

}

function checkWord() {
    var ma = document.getElementById("ma");
    var word = $('#ma').val();
    var maTip=$('#ma1-img').html();
    // console.log(maTip);
    if(word==maTip){
        ma.style.border="1px solid green";
    }else {
        ma.style.border = "1px solid red";
        randomCode ();
    }
}

function land() {
    if(checkpass()&&checkname()){
        var val = document.getElementById("uName");
        var user = val.value;
        location.href="../home.html?"+"action=" + encodeURI(user);
    }
};
function getCookie(name){
    var cookieName = name;
    var cookieStart = document.cookie.indexOf(cookieName);
    var cookieValue = null;
    if(cookieStart > -1){
        var cookieEnd = document.cookie.indexOf(';',cookieStart);
        if(cookieEnd==-1){
            cookieEnd =document.cookie.length;
        }
        cookieValue=document.cookie.substring((cookieStart+cookieName.length+1),cookieEnd);
    }
    return cookieValue;
};