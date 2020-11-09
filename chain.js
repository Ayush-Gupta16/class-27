class Chain {
    constructor(objectA,objectB){
        var options= {
            bodyA:objectA,
            bodyB:objectB,
            stiffness:0.04,
            length:10
        }
    
        var chain= Constraint.create(options)
        World.add(world,chain);
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        strokeWeight(10);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
