class Log
{
constructor(a,b,c,d,angle)
    {
var options = {
    isStatic : true
    
}
this.x = a
this.y = b
this.w = c
this.h = d 
this.body = Bodies.rectangle(a, b, c, d, options)
Matter.Body.setAngle(this.body,angle)
World.add(world,this.body)
    }










display()
    {
        //Pos is used to store the position of the body
        var Groundpos = this.body.position
        var angle = this.body.angle
        push()
        rotate(angle)
        translate(Groundpos.x, Groundpos.y)
        rectMode(CENTER)
        fill ("yellow")
        rect(0,0, this.w, this.h)
        pop()
    }
}