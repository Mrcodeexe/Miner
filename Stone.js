class Stone{
    constructor(x,y,width,height){

        var options = {
        restitution:0.5,
        density:9,
        friction:0.9
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height
        World.add(world, this.body)

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        rectMode(CENTER);
        stroke("grey")
        strokeWeight(3);
        fill("grey")
        rect(0, 0, this.width, this.height);
        pop();
    }


}