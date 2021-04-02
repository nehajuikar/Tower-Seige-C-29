class SlingShot{
    constructor(bodyA,pointB){
        var option = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.03,
            length:10
        }
        this,pointB = pointB
        this,sling = Constraint.create(option);
        World.add(world,this.sling);

    }
    fly(){
        this.sling.bodyA = null;
    }
    display
}