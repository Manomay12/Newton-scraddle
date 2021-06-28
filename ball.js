class ball {
constructor(x,y){
this.b=Bodies.circle(x,y,20)
World.add(world,this.b)

}
Display(){
ellipseMode(RADIUS)
ellipse(this.b.position.x,this.b.position.y,20)

}

}