
window.onload = function () {

    var btnRefreshDom = document.querySelector("#btnRefresh");
    var iconRefreshDom = btnRefreshDom.querySelector(".icon-refresh");

    var img3DDOM = document.querySelectorAll("#iconWall .img-3d")
//zonglieshu
    var colCount=6;
    //延迟时间
    var delayTime = 0;
    // 单击的次数
    var clickTimes = 1;
/*    var colNum=0;
    var rowNum=0;*/
    btnRefreshDom.onclick = function () {

        iconRefreshDom.style.transition = ".3s";
        iconRefreshDom.style.transform = "rotate(" + 360*clickTimes + "deg)";

        for(var i=0,len=img3DDOM.length;i<len;i++){
            colNum = i%colCount;
            rowNum = parseInt(i/colCount);
            delayTime=(colNum + rowNum)*100;

            img3DDOM[i].style.transition = ".3s "+delayTime+"ms";
            img3DDOM[i].style.transform = "rotateY("+180*clickTimes+"deg)";
        }


        clickTimes++;

    }

    
}