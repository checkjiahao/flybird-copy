/**
 * Created by Administrator on 2017/10/10.
 */
function Sky(foin){
    this.image=foin.image;
    this.x = foin.x;
    this.spen=2;
    this.canvas=foin.canvas;
    this.context = foin.context;
}



Sky.prototype={
    constructor: Sky,
    draw: function () {
        this.x -=this.spen;
        if(this.x<=-this.image.width){
            this.x = this.image.width;
        }
        this.context.drawImage(this.image,this.x,0,this.image.width,this.image.height);

    }
}