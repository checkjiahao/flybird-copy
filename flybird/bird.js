/**
 * Created by Administrator on 2017/10/11.
 */
function Birds(info){
    this.image = info.image;
    this.x = 200;
    this.y = info.y;
    this.w = info.w;
    this.h = info.h;
    this.s = info.s;
    this.a = 0.0009;
    this.v = info.v;
    this.stratime= new Date();
    this.maxv =0.5;
    this.macrota = 45/180 *Math.PI;
    this.index = 0;
    this.canvas = info.canvas;
    this.context = info.context;
    this.x=info.x;
}

Birds.prototype= {
    draw: function () {
        var nowtime = new Date();
        var t = nowtime-this.stratime;
        var conx = 0;
        this.s = this.v*t +this.a*t*t/2;
        this.v = this.v + this.a*t;
        this.y+=this.s;
        this.index++;
        conx = this.index%3;
        var persent =this.v/this.maxv;
        this.context.save();
        this.context.translate(this.x,this.y);
        this.context.rotate(persent*this.macrota);

       this.context.drawImage(this.image,conx*this.w,0,this.w,this.h,-this.w/2,-this.h/2,this.w,this.h);
        console.log(-this.w / 2);
        this.stratime = nowtime;
        this.context.restore();
    }
}