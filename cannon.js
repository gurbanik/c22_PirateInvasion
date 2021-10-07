class Cannon{

constructor(x,y,w,h,ang)
{
    this.x= x
    this.y = y
    this.w = w
    this.h = h
    this.ang = ang

    this.cannonimage = loadImage("./assets/canon.png")
    this.cannonbaseimage = loadImage("./assets/cannonBase.png")
}

display(){
    push ()
    rectMode(CENTER)
    image(this.cannonimage,this.x,this.y,this.w,this.h)
    pop ()

    image(this.cannonbaseimage,70,20,200,200)
    
}

}

