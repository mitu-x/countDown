window.setInterval("wTtime()",1000);
function wTtime(){
    var now =new Date();
    var hour = now.getHours(),
        second = now.getSeconds(),
        minute = now.getMinutes();
    var h1 = hour%10,
        h2 =parseInt(hour/10),
        s1 = second%10,
        s2 = parseInt(second/10),
        m1 = minute%10,
        m2 = parseInt(minute/10);
    checkNum("#hour2","#hour4",h1);
    checkNum("#hour1","#hour3",h2);
    checkNum("#second2","#second4",s1);
    checkNum("#second1","#second3",s2);
    checkNum("#minute2","#minute4",m1);
    checkNum("#minute1","#minute3",m2);
}

function checkNum(e1,e2,v){
    $(e1).removeClass();
    $(e2).removeClass();
    $(e1).addClass("one");
    $(e2).addClass("one");
    switch (v){
        case 0:
            $(e1).addClass("left top right");
            $(e2).addClass("left bottom right");
            break;
        case 1:
            $(e1).addClass("right");
            $(e2).addClass("right");
            break;
        case 2:
            $(e1).addClass("top right bottom");
            $(e2).addClass("left bottom");
            break;
        case 3:
            $(e1).addClass("top right bottom");
            $(e2).addClass("right bottom");
            break;
        case 4:
            $(e1).addClass("left bottom right");
            $(e2).addClass("right");
            break;
        case 5:
            $(e1).addClass("left top bottom");
            $(e2).addClass("bottom right");
            break;
        case 6:
            $(e1).addClass("left top bottom");
            $(e2).addClass("left bottom right");
            break;
        case 7:
            $(e1).addClass("top right");
            $(e2).addClass("right");
            break;
        case 8:
            $(e1).addClass("left top bottom right");
            $(e2).addClass("left bottom right");
            break;
        case 9:
            $(e1).addClass("left top bottom right");
            $(e2).addClass("right bottom");
            break;
    }
}