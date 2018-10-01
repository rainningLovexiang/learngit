/*
* 主要用来实现逻辑
*
* */

//实现底层的海底
Basics.loadImage({
    "sea":"./img/BG_game.jpg",
    // "beach":"./img/beach/beach.png"
    "beach":"./img/beach/beach0.png"
},function (imgObj) {
    var beach= new Beach(ctx,imgObj.beach);
    var sea = new Sea(ctx,imgObj.sea);
    sea.draw();
    beach.draw();
    var timer = setInterval(function () {
        beach.update();
        beach.draw();
    },500);
});

function setTime() {
    clearInterval(timer);

}