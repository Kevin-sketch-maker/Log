class Pig
{


    
        //to store and define the properties of the object
        constructor(b, c,w, r)
        {
            //physical properties
            var options = {
                isStatic:true,
                restitution: 0.3,
                density : 0.1,
                friction : 0.2,

            }

            //natural properties

            this.x = b; //coordinate is undefined
            this.y = c;
            this.width = w;
            this.height = r;
//Objects in the world of physics are called "body"
//creating a body
this.body = Bodies.rectangle(b,c,w,r,options);
//Adding the body inside the world
World.add(world,this.body)

        }



display()
{
    var pos = this.body.position;
    rectMode(CENTER);
    //the code represents the order in which the values of x, y, width, and height should be placed
    fill ("green");
    //stroke ("red");
    //strokeWeight(7);
    rect(pos.x,pos.y,this.width,this.height);
}




}

