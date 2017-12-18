/**
 * Created by Administrator on 2016/12/10.
 */
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

window.onload =function(){
    var user = getCookie('user');
    console.log(user);
    var id=document.getElementById("user");
    if(user){
        $('#user').html(user);
    }
};