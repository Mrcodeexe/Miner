class Rubber{
    constructor(x,y,r){

        var options = {

        restitution:1,
        density:1,
        friction:5
        }

        this.body = Bodies.circle(x,y,r,options);
        this.r=r
        World.add(world, this.body)

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(RADIUS);
        stroke("blue")
        strokeWeight(3);
        fill("blue")
        ellipse(0,0, this.r, this.r);
        pop();
    }
}
