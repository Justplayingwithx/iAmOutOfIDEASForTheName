class Chain{
    constructor(bodyAC,bodyBC){
        var properties = {
            bodyA:bodyAC,
            bodyB:bodyBC,
            stiffness:0.04,
            length:10
        }

        this.chain = Constraint.create(properties)
        World.add(world,this.chain)
    }

    display(){
        strokeWeight(3)
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }
}