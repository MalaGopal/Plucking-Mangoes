class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.body);
    }
    display()
    {
var gPos = this.body.position;

push();
translate(gPos.x,gPos.y);
rectMode(CENTER);
fill(128,128,128);
rect(0,0,this.w,this.h);
pop()

    }
}