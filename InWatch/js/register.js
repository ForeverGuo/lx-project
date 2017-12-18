/**
 * Created by Administrator on 2016/12/10.
 */
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

function checkname(){
    var name = document.getElementById("uName").value;
    var border = document.getElementById("uName");
    var ts = document.getElementById("namets");
    var cc = document.getElementById("cc");
    var user = getCookie('user');
    if(!isUserName(name))
    {   ts.style.display='block';
        ts.innerHTML ="用户名格式不正确!";
        ts.style.color="#a94442";
        cc.style.color="#a94442";
        border.style.border="1px solid #a94442";
        return false;
    }else{
        cc.style.color="#000";
        border.style.border="1px solid #000";
    }

    if(user==name){
        ts.style.display='block';
        ts.innerHTML ='用户名已存在!';
        ts.style.color='red';
        return false;
    }
    if(user!=name){
        // alert("aaaa");
        ts.style.display='block';
        ts.innerHTML ='用户名可以使用！';
        ts.style.color='green';
        border.style.border="1px solid #000";
        cc.style.color="#000";
        setCookie('user',name,7,'/');

        return true;
    }

  /*  $.post("checkUserName.action", {" userName": name },function(data){
        var d = $.parseJSON(data);
        if(d.success!=true){
            ts.innerHTML ='用户名已存在!';
            ts.style.color='red';
            return true;
        }
    });
    ts.innerHTML ='用户名可以使用！';
    ts.style.color='green';
    return true;*/
}

function isUserName(uname){
    var reg = /^[0-9a-zA-Z]/;
    return reg.test(uname);
}

function checkemail(){
    var userEmail = $("#uEmail").val();
    var border = document.getElementById("uEmail");
    var ets = document.getElementById("emailts");
    var cc = document.getElementById("cc1");
    if(!isEmail(userEmail)){
        ets.style.display='block';
        ets.innerHTML ="邮箱格式不正确!";
        ets.style.color="#a94442";
        cc.style.color="#a94442";
        border.style.border="1px solid #a94442";
        return false;
    }else{
        cc.style.color="#000";
        border.style.border="1px solid #000";
    }
    ets.innerHTML ="邮箱可以使用!";
    ets.style.color="green";
    return true;
}
function isEmail(str){
    var reg = /[a-z0-9-]{1,30}@[a-z0-9-]{1,65}.[a-z]{3}/;
    return reg.test(str);
}


function checkpass(){
    var userPass = $("#uPass").val();
    var border = document.getElementById("uPass");
    var pts = document.getElementById("passts");
    var cc = document.getElementById("cc2");
    if(userPass.length<6 || userPass.length >15)
    {
        pts.style.display='block';
        pts.innerHTML ="密码长度须在6-15之间!";
        pts.style.color="#a94442";
        cc.style.color="#a94442";
        border.style.border="1px solid #a94442";
        return false;
    }else{
        pts.innerHTML ="密码可以使用!";
        pts.style.color="green";
        cc.style.color="#000";
        border.style.border="1px solid #000";
        return true;
    }

}
function checkrpass(){
    var cc = document.getElementById("cc3");
    var border = document.getElementById("uRPass");
    var userPass = $("#uPass").val();
    var userRPass = $("#uRPass").val();
    var prts =  document.getElementById("passrts");
    if (userPass != userRPass) {
        prts.style.display='block';
        prts.innerHTML="两次密码输入不一致!";
        prts.style.color="#a94442";
        cc.style.color="#a94442";
        border.style.border="1px solid #a94442";
        return false;
    }else{
        prts.innerHTML ="输入一致!";
        prts.style.color="green";
        cc.style.color="#000";
        border.style.border="1px solid #000";
        setCookie('password',userPass);
        return true
    }

}

/*-------------注册-------*/
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
}


function setCookie(name,value,expires,path,domain,secure){
    var cookieText = name + "=" +value;
    if(expires){
        var date = new Date();
        date.setDate(date.getDate()+expires);
        cookieText+=";expires="+date;
    }
    if(path){
        cookieText +=';path='+path;
    }
    if(domain){
        cookieText +=';domain='+domain;
    }
    if(secure){
        cookieText +=';secure';
    }
    document.cookie  = cookieText;
}

/*------------弹框----------*/

function   href() {
    if(checkrpass()&&checkemail()){
        alert("InWatch注册成功!");
        window.location.href="../TPL/land.html";
    }
}

