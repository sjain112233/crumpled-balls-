class Ball{
    constructor(x,y,radius){
    var ball_options = {
        isStatic:true,
        restitution:0.3,
        density:1.2,
        friction:0.5
}
    this.x=x;
    this.y=y;
    this.r=radius;
    this.body = Bodies.circle(this.x,this.y,this.r,ball_options);
    World.add(world,this.body);
}
display(){
    var position = this.body.position;
    push();
    translate(position.x,position.y);
    ellipseMode(RADIUS);
    strokeWeight(3);
    fill(255,0,255);
    ellipse(0,0,this.r);
    pop();
}
	
}