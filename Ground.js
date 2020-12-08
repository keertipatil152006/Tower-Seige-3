class Ground {
    constructor(x,y,width,height){
        var options ={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
       var pos = this.body.position;
       push();
       rectMode(CENTER);
       translate(pos.x,pos.y);
       fill(11, 234, 52);
       stroke(242, 19, 190);
       strokeWeight(2);
       rect(0,0,this.width,this.height);
       pop();
    }
}