/**
 * Created by Administrator on 2017/10/10.
 */
function Pipe(info){
    this.image=info.image;
    this.topImage=info.topImage;
    this.x = info.x;
    this.context = info.context;
    this.canvas = info.canvas;
    this.y = info.y;
    this.gip = info.gip;
    this.space=100;
    this.spen=2;
    this.topHeight=0;
    this.bottomHeight=0;
    this.setheight();

}


Pipe.prototype={
    constructor: Pipe,
    draw: function () {
        this.x-=this.spen;
        if(this.x <= -this.image.width){
            this.x = this.image.width*5+this.gip*6;
            this.setheight()
        }
        this.context.drawImage(this.image,this.x,this.canvas.height-this.y-this.bottomHeight,this.image.width,this.bottomHeight);
        this.context.drawImage(this.topImage,this.x,0,this.image.width,this.topHeight);
        this.context.rect(this.x,this.canvas.height-this.y-this.bottomHeight,this.image.width,this.bottomHeight);
        this.context.rect(this.x,0,this.image.width,this.topHeight);

    },


    setheight: function () {
        this.topHeight =100+Math.floor(150*Math.random());
        this.bottomHeight =this.canvas.height-this.y-this.topHeight-this.space;

    }
}