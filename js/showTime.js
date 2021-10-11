setInterval("fun(show_time)",1);

function fun(timeID){
    var date = new Date();  //创建对象
    var y = date.getFullYear();     //获取年份
    var m =date.getMonth()+1;   //获取月份  返回0-11
    var d = date.getDate(); // 获取日
    var h = date.getHours();  //时
    var minute = date.getMinutes()  //分
    var s = date.getSeconds(); //秒
        if(m<10){
            m = "0"+m;
        }
        if(d<10){
            d = "0"+d;
        }
        if(h<10){
            h = "0"+h;
        }
        if(minute<10){
            minute = "0"+minute;
        }
        if(s<10){
            s = "0"+s;
        }
        document.getElementById(timeID.id).innerHTML =
        y+"-"+m+"-"+d+"   "+h+":"+minute+":"+s;
    }
