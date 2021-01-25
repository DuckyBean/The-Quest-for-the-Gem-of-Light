class boulder {
    constructor(x,y,r){ 
       //constructor function is invoked everytime we create an object from 'this' class! 
       var options= { isStatic: false, restitution:0.3, friction:0.5, density:1.2 } 
       this.body = Bodies.circle(x,y,r/2-11,options); 
       World.add(world, this.body); 
       this.image = loadImage("boulder.png"); 
       this.r = r; 
   } 
   display(){ 
       var angle = this.body.angle; 
       var pos = this.body.position; 
       push(); 
       rotate(angle); 
       translate(pos.x,pos.y); 
       imageMode(CENTER); image(this.image,0, 0,this.r,this.r);  
       pop(); 
   } 
}