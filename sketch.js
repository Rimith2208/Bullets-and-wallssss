var bullet,wall,thickness,speed,weight
function setup(){
    createCanvas(1600,400)
    thickness=random(22,83)
    wall=createSprite(1200,200,thickness,height/2)
    speed=random(223,321)
    weight=random(30,52)
    bullet=createSprite(200,300,50,200)
}
function draw(){
    background(0);
    
}