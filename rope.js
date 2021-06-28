class rope{
constructor(b1,b2){

 var op={bodyA:b1,bodyB:b2,length:400,stiffness:0.3}   
this.c=Matter.Constraint.create(op)
World.add(world,this.c)
}
Display(){
line(this.c.bodyA.position.x,this.c.bodyA.position.y,this.c.bodyB.position.x,this.c.bodyB.position.y)



}


}