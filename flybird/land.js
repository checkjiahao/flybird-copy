/**
 * Created by Administrator on 2017/10/10.
 */
function Land(ofin){
    this.image=ofin.image;
    this. x= ofin.x;
    this.spen=2;
    this.context=ofin.context;
    this.canvas=ofin.canvas;

}
Land.prototype={
    constructor: Land,
    draw: function () {
        this.x-=this.spen;
        if(this.x<= -this.image.width ){
            this.x = this.image.width*3;
        }
        this.context.drawImage(this.image,this.x,this.canvas.height-this.image.height,this.image.width,this.image.height);
    }
}