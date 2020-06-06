var speed,weight
var bullet, wall
var thickness , Lbullet , Lwall
var bulletRightEdge, bulletLeftEdge

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet = createSprite(50,200,100,25)
  bullet.shapeColor="blue"
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor="black"
  bullet.velocityX = speed
  
}
function hasCollided(Lbullet,Lwall){
  bulletRightedge=Lbullet.x+Lbullet.width/2
  wallLeftEdge=Lwall.x-Lwall.width/2
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }else{
  return false;
}}
function draw() {
  background(255,255,255);  
//  car.collide(wall)
  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0
     var damage=weight*speed*speed/(thickness*thickness*thickness)
    if(damage<10){
      wall.shapecolor="green"
     // bullet.x = wall.x-wall.width/2
    }
    else if(damage>10){
      wall.shapecolor = "red"
     // bullet.x = wall.x-wall.width/2
    }
  drawSprites();
}
}
