class Paper
{
	constructor(x,y)
	{
		var options={
            restitution:0.3,
			isStatic:false,
            friction:0,
            density:1.2			
			}
		this.x=x;
		this.y=y;
		this.r=40;
		this.body=Bodies.circle(x, y, 40, options);
 		World.add(world, this.body);
        this.image=loadImage("paper.png");
	}
	display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.r, this.r);
			pop()
			
	}

}		