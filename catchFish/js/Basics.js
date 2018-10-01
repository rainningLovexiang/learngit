var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
myCanvas.width = 1280;
myCanvas.height = 720;
/**
 * Object {Basics}图片监听事件
 * param {loadImage:function}图片监听和回调
 * param {ctx:context}浅层复制
 */
var Basics = {
    extend: function (obj1,obj2) {
        for(var key in obj2){
            if(obj2.hasOwnProperty(key)){
                obj1[key] = obj2[key];
            }
        }
    },
    /**
     * param {imgObj:object}按照key、val的形式存储所有要加载的图像地址
     * param{callback:Function}当所有的图片加载完毕之后，就会被调用
     **/
    loadImage: function (imgObj,callback) {
        var transmitImg = {};
        var loaded = 0;
        var imgLength = 0;
        var templateImg;
        for(var key in imgObj){
            imgLength++;
            templateImg = new Image();
            templateImg.addEventListener("load",function () {
                loaded++;
                if(loaded >= imgLength){
                    if(callback){
                        callback(transmitImg);
                    }
                }
            });
            templateImg.src = imgObj[key];
            transmitImg[key] = templateImg;
        }
    }
};

/*
 * 绘制背景--底层海景
 * constructor { Sea } 背景构造函数
 * param { ctx: Context } 绘制环境
 * param { img: Image } 背景图像
 * param { speed: number } 背景速度
 * */
function Sea(ctx,img,speed) {
    this.ctx = ctx;
    this.img = img;
    this.speed = speed;
    this.width = 1280;
    this.height = myCanvas.height;
    this.x = 0;
    this.y = 0;
}
Sea.prototype = {
    constructor: Sea,
    draw: function () {
        this.ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
};
/*
 * 绘制背景---海浪
 * constructor { Beach } 背景构造函数
 * param { ctx: Context } 绘制环境
 * param { img: Image } 背景图像
 * param { speed: number } 背景速度
 * */
function Beach(ctx,img,speed) {
    this.ctx = ctx;
    this.img = img;
    this.speed = speed;
    this.width = myCanvas.width;
    this.height = this.img.height;
    this.x = 0;
    this.y = 117;
    this.currentFrame = 0;
    this.imgFrame = 4;

}
Beach.prototype = {
    constructor: Beach,
    draw: function () {
        this.ctx.drawImage(this.img,0,117,1280,48);
    },
    update: function () {
        // 绘制下一帧
        this.currentFrame = ++this.currentFrame >= this.imgFrame? 0 : this.currentFrame;
        var a = this.getSrc(this.currentFrame);
        console.log(a);
        this.img.src= a;
    },
    getSrc: function (n) {
        var arr = this.img.src.split(".")[0];
        var str = arr.slice(0,arr.length-1);
        return str+n+".png"
    }
};





