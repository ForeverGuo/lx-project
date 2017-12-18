/**
 * Created by Administrator on 2016/12/8.
 */
swiper = new Swiper('.swiper-container2', {
    pagination: '.swiper-pagination',
    slidesPerView:1,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween:0,
    grabCursor:false,
    autoplay:5000,
    loop:true,
    autoplayDisableOnInteraction:false
});

/*跳转获取另一个页面的节点/
/*window.onload=function(){
    var loc = location.href;
    console.log(loc);
    setCookie('address',loc);
    var cookie = getCookie('address');
    //var user = getCookie('user');
    var n1= cookie.length;
    var n2= cookie.indexOf("=");
    var id =decodeURI(cookie.substr(n2+1,n1-n2));
    if(n2==-1){}
    else{
        console.log(n2);
        var user = document.getElementById("home");
        user.innerHTML=id;
    }
};*/

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
